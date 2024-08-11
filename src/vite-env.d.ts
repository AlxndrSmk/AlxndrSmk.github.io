/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string;
    readonly VITE_PRODUCTION: string;
    readonly VITE_TELEGRAM_URL: string;
    readonly NODE_ENV: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }