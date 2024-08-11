// vite.config.ts
import react from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import million from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/million/dist/packages/compiler.mjs";
import { visualizer } from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig } from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/vite/dist/node/index.js";
import checker from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/vite-plugin-checker/dist/esm/main.js";
import { VitePWA } from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/vite-plugin-pwa/dist/index.js";
import tsconfigPaths from "file:///Users/nemirovalexandr/Documents/projects/telegram-apps/crypto-landing/client/node_modules/vite-tsconfig-paths/dist/index.mjs";
var pwaOptions = {
  registerType: "autoUpdate",
  manifest: {
    short_name: "hash-cats",
    name: "Yupalka",
    lang: "en",
    start_url: "/",
    background_color: "#181928",
    theme_color: "#181928",
    dir: "ltr",
    display: "standalone",
    prefer_related_applications: false,
    icons: [
      {
        src: "/assets/favicon.svg",
        purpose: "any",
        sizes: "48x48 72x72 96x96 128x128 256x256"
      }
    ]
  }
};
var vite_config_default = defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' }
    }),
    tsconfigPaths(),
    visualizer({ template: "sunburst" }),
    VitePWA(pwaOptions)
  ],
  server: {
    open: true
  },
  build: {
    // Генерировать уникальные имена файлов
    manifest: true,
    rollupOptions: {
      output: {
        // Использовать хешированные имена файлов
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmVtaXJvdmFsZXhhbmRyL0RvY3VtZW50cy9wcm9qZWN0cy90ZWxlZ3JhbS1hcHBzL2NyeXB0by1sYW5kaW5nL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL25lbWlyb3ZhbGV4YW5kci9Eb2N1bWVudHMvcHJvamVjdHMvdGVsZWdyYW0tYXBwcy9jcnlwdG8tbGFuZGluZy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL25lbWlyb3ZhbGV4YW5kci9Eb2N1bWVudHMvcHJvamVjdHMvdGVsZWdyYW0tYXBwcy9jcnlwdG8tbGFuZGluZy9jbGllbnQvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgbWlsbGlvbiBmcm9tICdtaWxsaW9uL2NvbXBpbGVyJztcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XG5pbXBvcnQgdHlwZSB7IFZpdGVQV0FPcHRpb25zIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmNvbnN0IHB3YU9wdGlvbnM6IFBhcnRpYWw8Vml0ZVBXQU9wdGlvbnM+ID0ge1xuICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgbWFuaWZlc3Q6IHtcbiAgICBzaG9ydF9uYW1lOiAnY2l0eS1ob2xkZXItZ2FtZScsXG4gICAgbmFtZTogJ0NJVFkgSG9sZGVyIEdhbWUnLFxuICAgIGxhbmc6ICdlbicsXG4gICAgc3RhcnRfdXJsOiAnLycsXG4gICAgYmFja2dyb3VuZF9jb2xvcjogJyMxODE5MjgnLFxuICAgIHRoZW1lX2NvbG9yOiAnIzE4MTkyOCcsXG4gICAgZGlyOiAnbHRyJyxcbiAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBmYWxzZSxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICcvYXNzZXRzL2Zhdmljb24uc3ZnJyxcbiAgICAgICAgcHVycG9zZTogJ2FueScsXG4gICAgICAgIHNpemVzOiAnNDh4NDggNzJ4NzIgOTZ4OTYgMTI4eDEyOCAyNTZ4MjU2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbWlsbGlvbi52aXRlKHsgYXV0bzogdHJ1ZSB9KSxcbiAgICByZWFjdCgpLFxuICAgIGNoZWNrZXIoe1xuICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICAgIGVzbGludDogeyBsaW50Q29tbWFuZDogJ2VzbGludCBcIi4vc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9XCInIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIHZpc3VhbGl6ZXIoeyB0ZW1wbGF0ZTogJ3N1bmJ1cnN0JyB9KSBhcyB1bmtub3duIGFzIFBsdWdpbk9wdGlvbixcbiAgICBWaXRlUFdBKHB3YU9wdGlvbnMpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIFx1MDQxM1x1MDQzNVx1MDQzRFx1MDQzNVx1MDQ0MFx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0NDNcdTA0M0RcdTA0MzhcdTA0M0FcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0NEJcdTA0MzUgXHUwNDM4XHUwNDNDXHUwNDM1XHUwNDNEXHUwNDMwIFx1MDQ0NFx1MDQzMFx1MDQzOVx1MDQzQlx1MDQzRVx1MDQzMlxuICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTA0MThcdTA0NDFcdTA0M0ZcdTA0M0VcdTA0M0JcdTA0NENcdTA0MzdcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDQ1XHUwNDM1XHUwNDQ4XHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDNEXHUwNDNEXHUwNDRCXHUwNDM1IFx1MDQzOFx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzMCBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0M0VcdTA0MzJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdbbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdbbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsU0FBUyxrQkFBa0I7QUFFM0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxhQUFhO0FBRXBCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG1CQUFtQjtBQUUxQixJQUFNLGFBQXNDO0FBQUEsRUFDMUMsY0FBYztBQUFBLEVBQ2QsVUFBVTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsa0JBQWtCO0FBQUEsSUFDbEIsYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsNkJBQTZCO0FBQUEsSUFDN0IsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFDM0IsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUSxFQUFFLGFBQWEsc0NBQXNDO0FBQUEsSUFDL0QsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsV0FBVyxFQUFFLFVBQVUsV0FBVyxDQUFDO0FBQUEsSUFDbkMsUUFBUSxVQUFVO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
