/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_LOGIN_URL?: string;
  readonly PUBLIC_API_MEMBERS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
