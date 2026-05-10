// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      host: process.env.HOST || '0.0.0.0',
      port: parseInt(process.env.PORT || '3000'),
      strictPort: false,
      hmr: {
        clientPort: 3000,
        host: 'localhost',
      },
      watch: {
        usePolling: process.env.DOCKER === 'true',
        interval: 1000,
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@tanstack/react-router',
        '@tanstack/react-query',
      ],
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    build: {
      sourcemap: false,
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('@tanstack/react-router')) {
                return 'vendor-router';
              }
              if (id.includes('@radix-ui')) {
                return 'vendor-ui';
              }
              return 'vendor';
            }
          },
        },
      },
    },
  },
});
