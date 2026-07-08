# COOPCASA Web

Sitio web institucional de COOPCASA (cooperativa de ahorro y crédito), migrado desde el
prototipo HTML aprobado por el cliente a un proyecto de producción con **Astro**,
**TypeScript** y **Tailwind CSS**. El objetivo de esta migración fue mantener el diseño
aprobado **exactamente igual** mientras se reestructuraba el código en una arquitectura
profesional, escalable y lista para que el cliente edite contenido y el equipo de backend
conecte sus APIs sin tocar componentes.

## Stack

- [Astro](https://astro.build) 7 (TypeScript en modo `strict`)
- [Tailwind CSS](https://tailwindcss.com) 4 (vía `@tailwindcss/vite`, configuración basada en CSS)
- `@astrojs/sitemap`
- ESLint 9 (flat config) + Prettier (con `prettier-plugin-astro`)
- Sin framework de UI (React/Vue/Svelte): toda la interactividad (dropdowns, acordeón FAQ,
  contador animado de estadísticas, modales, formularios) se implementa con `<script>` de
  Astro en TypeScript vainilla. No hay estado de cliente que justifique el costo de un
  framework adicional; esto mantiene el sitio prácticamente estático y muy liviano.

## Comandos

| Comando               | Acción                                           |
| --------------------- | ------------------------------------------------ |
| `npm install`         | Instala las dependencias                         |
| `npm run dev`         | Inicia el servidor de desarrollo                 |
| `npm run build`       | Genera el sitio de producción en `./dist/`       |
| `npm run preview`     | Previsualiza el build de producción localmente   |
| `npm run astro check` | Verifica tipos de TypeScript en todo el proyecto |
| `npm run lint`        | Corre ESLint                                     |
| `npm run format`      | Formatea el proyecto con Prettier                |

## Arquitectura (Feature-Based)

```
src/
  features/            # un folder por dominio de negocio
    auth/               # login (Oficina Virtual)
    members/            # "Hazte Socio": formulario, panel lateral, secciones de la página
    mobile-app/          # página "App Móvil"
    memories/            # "Memorias Anuales"
    about/               # "Historia" y "Misión, Visión y Valores"
    home/                # secciones exclusivas de la landing
      components/
      constants.ts       # ids de modales propios del feature (ej. modal de servicio)
    <feature>/
      components/         # componentes .astro del feature
      types/               # interfaces TypeScript (solo en features con formularios)
      validation/           # reglas de validación de formularios
      services/             # clientes fetch hacia la futura API

  shared/               # todo lo transversal a features
    ui/                  # primitivas de formulario/interacción: Button, Input, Select,
                          # Checkbox, Textarea, Label, Modal, Dropdown, Icon
    components/           # Navbar, Footer, WhatsAppButton, FaqAccordion (reusado por
                          # home y mobile-app)
    layouts/               # MainLayout.astro (SEO, fuentes, favicons, Navbar/Footer)
    config/                 # registro de íconos (shared/config/icons.ts)
    types/                   # tipos compartidos (NavLink, IconCard, FaqItem, StatItem...)
    utils/                    # countUp (animación de contadores), modal (apertura/cierre
                              # genérica), formFieldState (errores de formulario), etc.

  data/                 # TODO el contenido editable del sitio (ver más abajo)
  pages/                # rutas de Astro
  styles/global.css     # tokens de diseño (colores, keyframes, tipografías)
  assets/images/        # imágenes propias del proyecto (logo, etc.)
```

### Por qué no hay un framework de componentes (React/Vue/Svelte)

Toda la interactividad del prototipo (dropdowns del navbar, acordeón de FAQ, contador de
estadísticas, modales/paneles, validación de formularios) es perfectamente resoluble con
DOM/`<script>` nativo y CSS (`group-hover`, `data-*` + clases). Astro permite mezclar
frameworks de UI ("islands"), pero agregar uno aquí habría significado enviar más
JavaScript al cliente sin ganar nada: no hay estado complejo ni componentes que se
beneficien de un virtual DOM. Cada pieza interactiva vive en su propio `<script>` de Astro
(que Astro deduplica automáticamente aunque el componente se use muchas veces en la misma
página), manteniendo el sitio mayormente estático.

## Contenido editable (`src/data/`)

**Ningún texto, precio, estadística o dato de contacto está escrito directamente dentro de
un componente `.astro`.** Todo vive en `src/data/*.ts`, con comentarios `// Reemplazar...`
indicando qué debe actualizar el cliente:

| Archivo                                  | Contenido                                                             |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `siteConfig.ts`                          | Nombre, dominio, teléfono, email, dirección, WhatsApp, redes sociales |
| `menu.ts`                                | Enlaces y desplegables del navbar                                     |
| `hero.ts`                                | Hero de la home + tira de beneficios rápidos                          |
| `stats.ts`                               | Estadísticas institucionales (socios, años, sucursales, activos)      |
| `services.ts`                            | Los 6 productos/servicios y su detalle en el modal                    |
| `benefits.ts`                            | Contenido de la página "Hazte Socio" (pasos, beneficios, requisitos)  |
| `faq.ts`                                 | Preguntas frecuentes de la home                                       |
| `footer.ts`                              | Enlaces del footer y textos legales                                   |
| `mobileApp.ts`                           | Contenido completo de la página "App Móvil"                           |
| `memories.ts`                            | Memorias anuales (agregar una entrada nueva cada año)                 |
| `about.ts`                               | Historia (timeline) y Misión/Visión/Valores                           |
| `members.ts`                             | Opciones de sucursal y "cómo nos conociste" del formulario            |
| `membersPage.ts` / `auth.ts` / `home.ts` | Copys específicos de cada página                                      |

Los **colores, iconos y animaciones** no son contenido editable por el cliente: viven en
`src/styles/global.css` (tokens) y `src/shared/config/icons.ts` (registro de íconos SVG) y
representan el diseño aprobado.

## Formularios (listos para backend, sin backend implementado)

Este proyecto es **solo frontend**. Los dos formularios (Login y Hazte Socio) están
completos en UI, validación y estados de carga, pero **no** implementan autenticación real
ni persistencia de datos. (El prototipo aprobado no incluía una página de Contacto
dedicada — sus datos viven en el footer — por lo que no se agregó un tercer formulario;
la arquitectura de `shared/ui` ya deja `Textarea.astro` listo si se decide sumarlo más
adelante.)

- `features/auth/` — login con validación, mostrar/ocultar contraseña, "recordarme",
  estado de carga y **flujo DEMO**: al enviarse, redirige a `/oficina-virtual/dashboard`
  (una página placeholder) para dejar demostrada la navegación. **El backend debe
  reemplazar la lógica de `features/auth/services/loginService.ts` por una verificación
  real antes de producción** — está señalizado con comentarios `TODO(backend)`.
- `features/members/` — formulario "Hazte Socio" (`MemberForm.astro`, dentro del panel
  lateral `JoinPanel.astro`), con validación de cédula/teléfono/email/términos.

### Conectar las APIs reales

1. Copiar `.env.example` a `.env`.
2. Completar `PUBLIC_API_LOGIN_URL` y `PUBLIC_API_MEMBERS_URL` con los endpoints reales.
3. Los archivos en `features/*/services/` ya están armados para hacer `fetch` a esas
   variables — no hace falta tocar ningún componente ni la validación.

Mientras esas variables no estén configuradas, ambos formularios **simulan un envío
exitoso** (con un `console.warn` de aviso) para no bloquear la demo de frontend.

## Responsive (importante)

El prototipo aprobado es un diseño **fijo de escritorio** (no tiene un solo `@media
query`, ni menú hamburguesa). Se preservó el diseño desktop **pixel a pixel**, y se
añadió una capa responsive no-destructiva (grillas que colapsan en móvil/tablet, tipografía
fluida, y un menú de navegación con hamburguesa/drawer para pantallas pequeñas) siguiendo
el mismo lenguaje visual. En resoluciones de escritorio el resultado es indistinguible del
prototipo aprobado.

## Normalizaciones menores (refactor sin cambio visual perceptible)

Al convertir estilos inline del prototipo a un sistema de componentes reutilizable, se
unificaron un puñado de valores que variaban en 1-2px o en la intensidad de una sombra
entre instancias del mismo patrón (por ejemplo, el radio de borde o el blur de sombra de
distintos botones "primary"). Estas diferencias no eran perceptibles ni parte deliberada
del diseño; unificarlas es lo que permite tener un `Button.astro` reutilizable en vez de
un botón distinto por sección. Todo color, gradiente, tipografía, espaciado estructural y
animación se mantuvo exacto.

## SEO

- Meta tags, Open Graph y Twitter Card configurables por página vía props de
  `MainLayout.astro`.
- `sitemap-index.xml` generado automáticamente por `@astrojs/sitemap`.
- `robots.txt` generado dinámicamente (`src/pages/robots.txt.ts`) a partir de
  `siteConfig.url`.
- JSON-LD (`FinancialService`) con los datos de contacto de `siteConfig.ts`.
- Favicons generados a partir del logo aprobado (`public/favicon-*.png`,
  `apple-touch-icon.png`).

## Antes de salir a producción

- [ ] Reemplazar `siteConfig.url` y `site` en `astro.config.mjs` por el dominio real.
- [ ] Completar `.env` con los endpoints reales del backend.
- [ ] Reemplazar las fotos de Unsplash en `src/data/*.ts` por fotografía real de la
      cooperativa.
- [ ] Reemplazar `dashboardPlaceholder` (`src/data/auth.ts`) por la Oficina Virtual real,
      protegida con su propio guard de sesión.
- [ ] Revisar todos los comentarios `// Reemplazar...` en `src/data/`.
