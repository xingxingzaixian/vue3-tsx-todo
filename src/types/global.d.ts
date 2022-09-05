declare type Nullable<T> = T | null;
declare type Optional<T> = T | undefined;

// 在vue中使用import.meta.env引入环境变量时增加的提示
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
