// vite.config.ts
import react from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/@vitejs/plugin-react/dist/index.mjs';
import million from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/million/dist/packages/compiler.mjs';
import { visualizer } from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/rollup-plugin-visualizer/dist/plugin/index.js';
import { defineConfig } from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/vite/dist/node/index.js';
import checker from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/vite-plugin-checker/dist/esm/main.js';
import { VitePWA } from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/vite-plugin-pwa/dist/index.js';
import tsconfigPaths from 'file:///Users/nemirovalexandr/Documents/projects/react-native/AICupsChat/space-farm-democracy/client/node_modules/vite-tsconfig-paths/dist/index.mjs';
var pwaOptions = {
  registerType: 'autoUpdate',
  manifest: {
    short_name: 'hash-cats',
    name: 'Yupalka',
    lang: 'en',
    start_url: '/',
    background_color: '#181928',
    theme_color: '#181928',
    dir: 'ltr',
    display: 'standalone',
    prefer_related_applications: false,
    icons: [
      {
        src: '/assets/favicon.svg',
        purpose: 'any',
        sizes: '48x48 72x72 96x96 128x128 256x256',
      },
    ],
  },
};
var vite_config_default = defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' },
    }),
    tsconfigPaths(),
    visualizer({ template: 'sunburst' }),
    VitePWA(pwaOptions),
  ],
  server: {
    open: true,
  },
  build: {
    // Генерировать уникальные имена файлов
    manifest: true,
    rollupOptions: {
      output: {
        // Использовать хешированные имена файлов
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
      },
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmVtaXJvdmFsZXhhbmRyL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1uYXRpdmUvQUlDdXBzQ2hhdC9zcGFjZS1mYXJtLWRlbW9jcmFjeS9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9uZW1pcm92YWxleGFuZHIvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LW5hdGl2ZS9BSUN1cHNDaGF0L3NwYWNlLWZhcm0tZGVtb2NyYWN5L2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbmVtaXJvdmFsZXhhbmRyL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1uYXRpdmUvQUlDdXBzQ2hhdC9zcGFjZS1mYXJtLWRlbW9jcmFjeS9jbGllbnQvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBtaWxsaW9uIGZyb20gXCJtaWxsaW9uL2NvbXBpbGVyXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBjaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XG5pbXBvcnQgdHlwZSB7IFZpdGVQV0FPcHRpb25zIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmNvbnN0IHB3YU9wdGlvbnM6IFBhcnRpYWw8Vml0ZVBXQU9wdGlvbnM+ID0ge1xuICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICBtYW5pZmVzdDoge1xuICAgIHNob3J0X25hbWU6IFwic3BhY2UtZmFybS1kZXBvY3JhY3lcIixcbiAgICBuYW1lOiBcIlNwYWNlIEZhcm0gRGVtb2NyYWN5XCIsXG4gICAgbGFuZzogXCJlblwiLFxuICAgIHN0YXJ0X3VybDogXCIvXCIsXG4gICAgYmFja2dyb3VuZF9jb2xvcjogXCIjMTgxOTI4XCIsXG4gICAgdGhlbWVfY29sb3I6IFwiIzE4MTkyOFwiLFxuICAgIGRpcjogXCJsdHJcIixcbiAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGZhbHNlLFxuICAgIGljb25zOiBbXG4gICAgICB7XG4gICAgICAgIHNyYzogXCIvYXNzZXRzL2Zhdmljb24uc3ZnXCIsXG4gICAgICAgIHB1cnBvc2U6IFwiYW55XCIsXG4gICAgICAgIHNpemVzOiBcIjQ4eDQ4IDcyeDcyIDk2eDk2IDEyOHgxMjggMjU2eDI1NlwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBtaWxsaW9uLnZpdGUoeyBhdXRvOiB0cnVlIH0pLFxuICAgIHJlYWN0KCksXG4gICAgY2hlY2tlcih7XG4gICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgZXNsaW50OiB7IGxpbnRDb21tYW5kOiAnZXNsaW50IFwiLi9zcmMvKiovKi57anMsanN4LHRzLHRzeH1cIicgfSxcbiAgICB9KSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgdmlzdWFsaXplcih7IHRlbXBsYXRlOiBcInN1bmJ1cnN0XCIgfSkgYXMgdW5rbm93biBhcyBQbHVnaW5PcHRpb24sXG4gICAgVml0ZVBXQShwd2FPcHRpb25zKSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBcdTA0MTNcdTA0MzVcdTA0M0RcdTA0MzVcdTA0NDBcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDQzXHUwNDNEXHUwNDM4XHUwNDNBXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM1IFx1MDQzOFx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzMCBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0M0VcdTA0MzJcbiAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gXHUwNDE4XHUwNDQxXHUwNDNGXHUwNDNFXHUwNDNCXHUwNDRDXHUwNDM3XHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQ0NVx1MDQzNVx1MDQ0OFx1MDQzOFx1MDQ0MFx1MDQzRVx1MDQzMlx1MDQzMFx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzNSBcdTA0MzhcdTA0M0NcdTA0MzVcdTA0M0RcdTA0MzAgXHUwNDQ0XHUwNDMwXHUwNDM5XHUwNDNCXHUwNDNFXHUwNDMyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJbbmFtZV0tW2hhc2hdLltleHRdXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCO0FBRTNCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUVwQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTSxhQUFzQztBQUFBLEVBQzFDLGNBQWM7QUFBQSxFQUNkLFVBQVU7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLGtCQUFrQjtBQUFBLElBQ2xCLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULDZCQUE2QjtBQUFBLElBQzdCLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxRQUFRLEtBQUssRUFBRSxNQUFNLEtBQUssQ0FBQztBQUFBLElBQzNCLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLFFBQVEsRUFBRSxhQUFhLHNDQUFzQztBQUFBLElBQy9ELENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkLFdBQVcsRUFBRSxVQUFVLFdBQVcsQ0FBQztBQUFBLElBQ25DLFFBQVEsVUFBVTtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxVQUFVO0FBQUEsSUFDVixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQSxRQUVOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
