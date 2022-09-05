import type { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_APP_PORT } = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: resolve(__dirname, 'src') + '/'
        }
      ],
      extensions: ['.ts', '.js', '.jsx', '.tsx'],
    },
    server: {
      https: false,
      host: true,
      port: Number(VITE_APP_PORT)
    }
  }
}
