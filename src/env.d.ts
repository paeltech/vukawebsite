/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MEDIUM_USERNAME?: string;
  readonly MEDIUM_RSS_URL?: string;
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
