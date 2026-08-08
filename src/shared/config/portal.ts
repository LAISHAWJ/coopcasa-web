/**
 * Resolución de la URL de login del Portal de la Oficina Virtual
 * (proyecto neocoop_member-portail, React). El login de ejemplo en Astro ya no se usa.
 *
 * Dos formas de configurarlo, en este orden de prioridad:
 *
 * 1. `PUBLIC_PORTAL_LOGIN_URL` — dirección COMPLETA y real del login. Es la que gana, y
 *    sirve cuando el login no cuelga de `/login` (un dominio propio de identidad, un SSO
 *    externo, una ruta distinta, un `?returnUrl=`, etc.).
 * 2. `PUBLIC_PORTAL_URL` — raíz del Portal; se le agrega `/login`.
 *
 * Si no hay ninguna, cae en el Portal levantado en local (Vite, puerto 5173).
 *
 * OJO: son variables `PUBLIC_*`, o sea que se resuelven al compilar y quedan embebidas en
 * el HTML. Cambiarlas exige reconstruir el sitio (ver DOCKER_DEPLOYMENT.md).
 */

const DEFAULT_PORTAL_URL = 'http://localhost:5173';

/** Descarta `undefined` y también la cadena vacía, que es lo que llega desde un build-arg sin valor. */
function readEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

const portalBaseUrl = readEnv(import.meta.env.PUBLIC_PORTAL_URL) ?? DEFAULT_PORTAL_URL;

/** URL a la que apuntan los botones/enlaces "Iniciar Sesión" de la Landing. */
export const portalLoginUrl =
  readEnv(import.meta.env.PUBLIC_PORTAL_LOGIN_URL) ??
  // Sin la barra final de la raíz, para no terminar en "https://portal.coopcasa.do//login".
  `${portalBaseUrl.replace(/\/+$/, '')}/login`;
