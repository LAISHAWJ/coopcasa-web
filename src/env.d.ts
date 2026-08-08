/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_MEMBERS_URL?: string;
  readonly PUBLIC_PORTAL_URL?: string;
  /** Site key de Cloudflare Turnstile. Es pública por diseño; el secreto vive en el backend. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * API global que inyecta el script de Cloudflare Turnstile. El token es de un solo uso, así que
 * el formulario llama a `reset()` tras un envío exitoso.
 */
interface Window {
  turnstile?: {
    reset: (container?: string | HTMLElement) => void;
  };
}
