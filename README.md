# MyTFSA

One-page website for the **MyTFSA** app (TFSA contribution room tracker) —
currently in TestFlight. Built with Vue 3 + Vite; the production build is
committed to `docs/` and served by GitHub Pages:

**https://mytfsa.app/**

## Develop

```bash
npm install
npm run dev
```

## Publish

```bash
npm run build   # writes the static site to docs/
git add docs && git commit -m "Rebuild site" && git push
```

GitHub Pages is configured as: Settings → Pages → Deploy from a branch →
`main` / `docs`.

## Custom domain (later)

1. Point the domain's DNS at GitHub Pages.
2. Change `base` in `vite.config.js` back to `'/'`, add `docs/CNAME`
   containing the domain, rebuild, and push.
3. Set the custom domain in Settings → Pages and enable HTTPS.
