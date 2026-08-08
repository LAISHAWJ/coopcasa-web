# =========================================================================================
# --- Etapa 1: Construcción del sitio (Astro) ---
# =========================================================================================
FROM node:22-alpine AS build

# Astro exige Node >= 22.12 (ver "engines" en package.json).

WORKDIR /app

# Capa de dependencias aparte: solo se invalida cuando cambian package.json / lockfile.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# ---------------------------------------------------------------------------------------
# Variables PUBLIC_* de Astro.
# OJO: se resuelven en TIEMPO DE BUILD y quedan EMBEBIDAS en el HTML/JS que descarga el
# navegador. No sirve pasarlas con `docker run -e ...`: si cambian, hay que reconstruir la
# imagen. En Coolify van en Environment Variables marcadas como "Build Variable".
# Ningún secreto vive acá: el endpoint de afiliación es anónimo y la site key de Turnstile
# es pública por diseño (el secreto queda en el backend).
#
# Van DESPUÉS del `npm ci`: un ARG invalida la caché de todo lo que viene abajo, así que
# arriba obligarían a reinstalar dependencias cada vez que cambia una URL.
# ---------------------------------------------------------------------------------------
ARG PUBLIC_API_MEMBERS_URL=https://api.coopcasa.do/api/public/membership-leads
ARG PUBLIC_TURNSTILE_SITE_KEY=
ARG PUBLIC_PORTAL_URL=http://localhost:5173
# Dirección completa del login real. Si se pasa, gana sobre PUBLIC_PORTAL_URL (que solo se
# usa para armar `${PUBLIC_PORTAL_URL}/login`). Vacía = se deriva del Portal.
ARG PUBLIC_PORTAL_LOGIN_URL=

ENV PUBLIC_API_MEMBERS_URL=$PUBLIC_API_MEMBERS_URL \
    PUBLIC_TURNSTILE_SITE_KEY=$PUBLIC_TURNSTILE_SITE_KEY \
    PUBLIC_PORTAL_URL=$PUBLIC_PORTAL_URL \
    PUBLIC_PORTAL_LOGIN_URL=$PUBLIC_PORTAL_LOGIN_URL

# `astro build` genera el sitio estático en /app/dist (sin adapter = output estático).
RUN npm run build && ls -la dist | head -20

# =========================================================================================
# --- Etapa 2: Imagen Final de Runtime (Nginx) ---
# =========================================================================================
FROM nginx:stable-alpine AS runtime

# curl para el HEALTHCHECK.
RUN apk add --no-cache curl

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

# Health check (127.0.0.1 y no "localhost": nginx solo escucha en IPv4).
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD curl -f http://127.0.0.1:3000/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
