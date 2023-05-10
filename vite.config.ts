import { defineConfig } from 'vite';
import million from 'million/compiler';

const SHOULD_OPTIMIZE = true;

export default defineConfig(
  SHOULD_OPTIMIZE
    ? {
        esbuild: {
          jsxFactory: 'h',
          jsxInject: `import { h } from 'million/jsx-runtime'`,
        },
      }
    : {
        plugins: [million.vite({ mode: 'optimize' })],
      }
);
