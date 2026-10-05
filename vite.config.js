import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// GitHub Pages serves this repo at https://ericlesl.github.io/mytfsa/,
// so all asset URLs need the /mytfsa/ base. When a custom domain is
// added later, change base to '/' and add docs/CNAME.
//
// Multi-page build: every page below is a real HTML file (not a client
// route) so search engines get finished pages. Keep this list in sync
// with public/sitemap.xml.
export default defineConfig({
  plugins: [vue()],
  base: '/mytfsa/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        frHome: resolve(root, 'fr/index.html'),
        roomCalculator: resolve(root, 'tfsa-room-calculator/index.html'),
        overContributionPenalty: resolve(root, 'tfsa-over-contribution-penalty/index.html'),
        tfsaRules: resolve(root, 'tfsa-rules/index.html'),
        frRoomCalculator: resolve(root, 'fr/calculateur-plafond-celi/index.html'),
        frPenalty: resolve(root, 'fr/penalite-exces-celi/index.html'),
        frRules: resolve(root, 'fr/regles-celi/index.html'),
      },
    },
  },
});
