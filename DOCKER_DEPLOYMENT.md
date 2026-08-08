# Guía de Deployment con Docker (Coolify + Gitea)

## Descripción General

La Landing es un sitio **100% estático**: `astro.config.mjs` no declara adapter, así que
`astro build` genera HTML/CSS/JS en `dist/` y no hay servidor Node en runtime. La imagen
final es un **Nginx** sirviendo esos archivos en el puerto `3000` (mismo puerto que usa el
Facturador, para no cambiar la convención de los despliegues).

## Estructura de Multi-Stage Build

El `Dockerfile` usa dos etapas:

1. **Build (`node:22-alpine`)**: `npm ci` + `npm run build`. Node 22 porque
   `package.json` declara `engines.node >= 22.12.0`. El `package-lock.json` ya trae los
   binarios nativos musl (`@tailwindcss/oxide-linux-x64-musl`, `lightningcss-*-musl`,
   `@rolldown/binding-linux-x64-musl`, `@astrojs/compiler-binding-*-musl`, `sharp`), por
   eso Alpine funciona sin trucos.
2. **Runtime (`nginx:stable-alpine`)**: copia `dist/` a `/usr/share/nginx/html` y la
   config de `nginx.conf`. Se instala `curl` únicamente para el `HEALTHCHECK`.

Archivos que participan:

| Archivo              | Rol                                                            |
| -------------------- | -------------------------------------------------------------- |
| `Dockerfile`         | Build de la imagen (las 2 etapas).                              |
| `nginx.conf`         | Config del servidor; se copia a `conf.d/default.conf`.          |
| `.dockerignore`      | Excluye `node_modules`, `dist`, `.env`, `.git`, docs.           |
| `docker-compose.yml` | Solo para build/prueba local. Coolify no lo necesita.           |

## Variables de entorno: son de BUILD, no de runtime

Este es el punto que más se presta a confusión y **se comporta distinto al Facturador**.

Las variables `PUBLIC_*` de Astro se resuelven cuando se compila y quedan **embebidas** en
el HTML y el JS que descarga el navegador. Pasarlas con `docker run -e ...` no tiene ningún
efecto: hay que **reconstruir la imagen** para cambiarlas.

| Variable                    | Dónde se usa                                                  | Default en el Dockerfile                              |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| `PUBLIC_API_MEMBERS_URL`    | `submitMemberApplication.ts` — POST del form "Hazte Socio".    | `https://api.coopcasa.do/api/public/membership-leads`  |
| `PUBLIC_TURNSTILE_SITE_KEY` | `MemberForm.astro` — widget de Cloudflare Turnstile.           | vacío (sin valor, el widget no se renderiza)           |
| `PUBLIC_PORTAL_URL`         | Raíz del Portal; se le agrega `/login`.                        | `http://localhost:5173`                                |
| `PUBLIC_PORTAL_LOGIN_URL`   | Dirección **completa** del login real. Gana sobre la anterior. | vacío (se deriva de `PUBLIC_PORTAL_URL`)               |

### Las dos variables del login

Los botones "Iniciar Sesión" (`Navbar`, `Footer`, `CtaBanner`) resuelven su destino en
`src/shared/config/portal.ts`, con esta prioridad:

1. `PUBLIC_PORTAL_LOGIN_URL` si tiene valor → se usa **tal cual**, sin agregarle nada.
   Es para cuando el login no cuelga de `/login`: un dominio propio de identidad, un SSO
   externo, otra ruta, o una URL con query (`?returnUrl=...`).
2. Si no, `PUBLIC_PORTAL_URL` + `/login` (se le recorta la barra final, así que
   `https://portal.coopcasa.do/` no produce `//login`).
3. Si tampoco, `http://localhost:5173/login` — el Portal en local.

Alcanza con configurar **una** de las dos. Una cadena vacía cuenta como "sin configurar",
así que dejar `PUBLIC_PORTAL_LOGIN_URL=` en Coolify no rompe nada: simplemente manda
`PUBLIC_PORTAL_URL`.

Ninguna es secreta: el endpoint de afiliación es anónimo (protegido con captcha y rate
limit del lado del servidor) y la site key de Turnstile es pública por diseño — el secreto
vive solo en el backend, en `Captcha:SecretKey`.

> El `.env` local está en `.dockerignore`, así que dentro de la imagen **solo** mandan los
> build-args. Si no se pasa ninguno, la imagen queda con los defaults de la tabla — y el
> botón "Iniciar Sesión" apuntaría a `localhost:5173`, que en producción está mal.

## Deployment en Coolify (desde Gitea)

1. **New Resource → Application → Private Repository (con GitHub/Gitea App o Deploy Key)**
   y seleccionar este repo, branch `main`.
2. **Build Pack**: `Dockerfile`. Dejar `Dockerfile Location` en `/Dockerfile` y
   `Base Directory` en `/`.
3. **Port**: `3000` (el `EXPOSE` de la imagen). Asignar el dominio en *Domains*, ej.
   `https://www.coopcasa.do` — Coolify se encarga del TLS con su proxy.
4. **Environment Variables**: ver la sección siguiente. Las tres `PUBLIC_*` tienen que
   quedar marcadas como **Build Variable**.
5. **Health Check** (opcional, la imagen ya trae `HEALTHCHECK`): path `/health`, puerto
   `3000`.
6. **Deploy**. Para despliegue automático en cada push, activar el webhook de Gitea que
   Coolify genera en *Webhooks*.

## Cómo cargar las variables en Coolify

En la aplicación → pestaña **Environment Variables**. Hay dos vistas:

- **Developer view**: un textarea en formato `.env` (`CLAVE=valor`). Sirve para pegar las
  tres de un tirón.
- **Normal view**: una tarjeta por variable, con los checkboxes **Build Variable**,
  **Multiline** y **Literal**.

Procedimiento:

1. Entrar a **Developer view** y pegar:

   ```
   PUBLIC_API_MEMBERS_URL=https://api.coopcasa.do/api/public/membership-leads
   PUBLIC_TURNSTILE_SITE_KEY=<site key real de Turnstile>
   PUBLIC_PORTAL_URL=https://portal.coopcasa.do
   PUBLIC_PORTAL_LOGIN_URL=
   ```

   `PUBLIC_PORTAL_LOGIN_URL` se deja vacía si el login es `${PUBLIC_PORTAL_URL}/login`. Si
   la dirección real es otra, se pone completa acá y esta gana:

   ```
   PUBLIC_PORTAL_LOGIN_URL=https://portal.coopcasa.do/auth/iniciar-sesion
   ```

   Guardar (**Save**).

2. Volver a **Normal view** y confirmar que todas tengan **Build Variable** tildado.
   Es el paso que no se puede saltar: Coolify solo convierte en `--build-arg` las
   variables marcadas como build. Las que quedan solo en runtime se escriben en un `.env`
   que el contenedor carga al arrancar — y a un Nginx sirviendo HTML estático eso no le
   hace absolutamente nada. Según la versión de Coolify el checkbox puede venir tildado
   por defecto; igual conviene revisarlo.

3. **Redeploy** (no "Restart"): el valor se hornea durante el build.

4. Verificar sobre el sitio ya publicado que el valor viajó de verdad:

   ```bash
   curl -s https://www.coopcasa.do/ | grep -o 'https://portal[^"]*'
   # -> https://portal.coopcasa.do/login   (si sale localhost:5173, faltó el flag de build)
   ```

Notas:

- No hace falta activar **Use Docker Build Secrets**: ninguna de estas tres variables es
  secreta, y de hecho las tres terminan a la vista en el HTML servido.
- Si un mismo valor se comparte con otros recursos (por ejemplo la URL del Portal), se
  puede definir como *shared variable* y referenciarla con `{{project.PUBLIC_PORTAL_URL}}`
  o `{{environment.PUBLIC_PORTAL_URL}}`.
- **Preview Deployments** tiene su propia lista de variables: si se usan, hay que cargarlas
  también ahí.
- Los defaults del `Dockerfile` son la red de seguridad para que el build no reviente, no
  valores de producción: `PUBLIC_PORTAL_URL` cae en `http://localhost:5173`.

## Compilación y prueba local

```bash
docker build -t coopcasa-landing:latest \
  --build-arg PUBLIC_API_MEMBERS_URL=https://api.coopcasa.do/api/public/membership-leads \
  --build-arg PUBLIC_TURNSTILE_SITE_KEY=<site-key> \
  --build-arg PUBLIC_PORTAL_URL=https://portal.coopcasa.do \
  .

# Con una dirección de login que no es `${PUBLIC_PORTAL_URL}/login`:
docker build -t coopcasa-landing:latest \
  --build-arg PUBLIC_PORTAL_LOGIN_URL=https://portal.coopcasa.do/auth/iniciar-sesion \
  .

docker run -d --name coopcasa-landing -p 3000:3000 coopcasa-landing:latest
# http://localhost:3000  y  http://localhost:3000/health
```

Con compose (lee los valores del `.env` del repo o del shell):

```bash
docker compose up --build -d
docker compose logs -f
docker compose down
```

Verificar que las variables quedaron bien horneadas:

```bash
docker run --rm coopcasa-landing:latest grep -o 'https://portal[^"]*' /usr/share/nginx/html/index.html
```

## Detalles de la config de Nginx

- **Rutas**: Astro usa `build.format: 'directory'`, o sea `/historia` →
  `/historia/index.html`. Lo resuelve `try_files $uri $uri/ $uri/index.html =404`.
  Una URL sin barra final (`/historia`) devuelve un `301` **relativo** a `/historia/`
  (`Location: /historia/`), así que el dominio y el `https` del proxy se conservan.
  No hay fallback a `index.html` estilo SPA a propósito: una URL inexistente debe dar 404,
  no la home.
- **Caché**: `/_astro/*` (nombres con hash) va con `immutable` a 1 año; imágenes y fuentes
  a 30 días; el HTML con `no-cache, must-revalidate` para que cada deploy se vea de una.
  La política se arma con un `map` y **un solo** `add_header` en el `server`, porque nginx
  no hereda los `add_header` del padre cuando el hijo declara los suyos — repartirlos por
  `location` borraría las cabeceras de seguridad.
- **Proxy**: `absolute_redirect off` y `port_in_redirect off` evitan que un redirect de
  nginx filtre el puerto interno (`https://www.coopcasa.do:3000/...`) detrás de Coolify.
- **IPv4 solamente**: sin `listen [::]:3000`, porque en contenedores sin IPv6 nginx no
  arranca ("Address family not supported by protocol").
- **Sin CSP**: el sitio carga el widget de Turnstile y GSAP; una CSP mal armada rompería el
  formulario de afiliación. Si se agrega, probar antes el envío del form.

## Troubleshooting

| Síntoma                                                | Causa probable                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| "Iniciar Sesión" lleva a `localhost:5173`               | `PUBLIC_PORTAL_URL` no se marcó como *Build Variable* en Coolify.                |
| "Iniciar Sesión" da 404 en el Portal                    | El login no está en `/login`: poner la dirección real en `PUBLIC_PORTAL_LOGIN_URL`. |
| El captcha no aparece y el backend rechaza el envío     | `PUBLIC_TURNSTILE_SITE_KEY` vacío en el build.                                   |
| El form "simula envío exitoso" (aviso en consola)       | `PUBLIC_API_MEMBERS_URL` vacío: el service cae en el modo sin backend.           |
| Se ve la versión vieja tras un deploy                   | Caché del navegador/CDN sobre el HTML; el HTML sale con `no-cache`, revisar CDN. |
| El contenedor queda `unhealthy`                         | `/health` no responde: revisar que `nginx.conf` se haya copiado a `conf.d`.      |
| `npm ci` falla por lockfile desfasado                   | Correr `npm install` local y commitear el `package-lock.json`.                   |
