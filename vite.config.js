import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// GitHub Pages serves this repo at https://ericlesl.github.io/mytfsa/,
// so all asset URLs need the /mytfsa/ base. When a custom domain is
// added later, change base to '/' and add docs/CNAME.
export default defineConfig({
  plugins: [vue()],
  base: '/mytfsa/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
