<script setup>
import { computed, ref, watchEffect } from 'vue';
import glyphUrl from './assets/mt-glyph.png';

const STRINGS = {
  en: {
    tagline: 'Your TFSA room, figured out.',
    description:
      'MyTFSA tracks every contribution and withdrawal across your accounts and tells you exactly how much TFSA room you have left — so you never over-contribute, and never pay the CRA’s 1%-per-month penalty by accident.',
    comingSoon: 'Coming soon to iOS and Android',
    appStoreTop: 'Download on the',
    appStoreName: 'App Store',
    googlePlayTop: 'Get it on',
    googlePlayName: 'Google Play',
    features: [
      {
        title: 'Real-time contribution room',
        body: 'Deposits count the moment they happen. Withdrawals come back every January 1 — exactly how the CRA rules work.',
      },
      {
        title: 'Over-contribution warnings',
        body: 'Get flagged before you go over your limit, with the CRA’s 1%-per-month excess tax estimated for you.',
      },
      {
        title: 'Automatic bank sync',
        body: 'Connect your bank and let contributions and withdrawals import themselves. No spreadsheets, no guessing.',
      },
    ],
    rulesTitle: 'Know the TFSA rules. Skip the penalties.',
    navCalculator: 'Room calculator',
    navRules: 'TFSA rules',
    rulesBody:
      'TFSA rules are simple once someone keeps them straight for you: new room arrives every January 1, withdrawals are only added back the following January 1, and anything contributed over your limit is taxed 1% for every month it stays in. MyTFSA applies those rules to your actual accounts, so you understand exactly where you stand — and never pay an over-contribution penalty by accident.',
    disclaimer:
      'MyTFSA is a tracking aid, not an official CRA statement. Always confirm your contribution room in CRA My Account.',
    rights: 'All rights reserved.',
  },
  fr: {
    tagline: 'Votre plafond CELI, calculé pour vous.',
    description:
      'MyTFSA suit chaque cotisation et chaque retrait dans vos comptes et vous indique exactement le plafond CELI qu’il vous reste — pour ne jamais dépasser votre limite, ni payer la pénalité de 1 % par mois de l’ARC par accident.',
    comingSoon: 'Bientôt sur iOS et Android',
    appStoreTop: 'Télécharger dans',
    appStoreName: 'l’App Store',
    googlePlayTop: 'Disponible sur',
    googlePlayName: 'Google Play',
    features: [
      {
        title: 'Plafond en temps réel',
        body: 'Les dépôts comptent dès qu’ils ont lieu. Les retraits reviennent chaque 1er janvier — exactement comme l’exige l’ARC.',
      },
      {
        title: 'Alertes de surcotisation',
        body: 'Soyez averti avant de dépasser votre limite, avec une estimation de la taxe de 1 % par mois sur l’excédent.',
      },
      {
        title: 'Synchro bancaire automatique',
        body: 'Connectez votre banque et laissez vos cotisations et retraits s’importer tout seuls. Aucun tableur, aucune devinette.',
      },
    ],
    rulesTitle: 'Connaissez les règles du CELI. Évitez les pénalités.',
    navCalculator: 'Calculateur de plafond',
    navRules: 'Règles du CELI',
    rulesBody:
      'Les règles du CELI sont simples quand quelqu’un les suit pour vous : un nouveau plafond arrive chaque 1er janvier, les retraits ne sont rajoutés que le 1er janvier suivant, et toute cotisation au-delà de votre plafond est imposée à 1 % pour chaque mois où elle demeure dans le compte. MyTFSA applique ces règles à vos comptes réels, pour que vous sachiez exactement où vous en êtes — sans jamais payer de pénalité de surcotisation par accident.',
    disclaimer:
      'MyTFSA est un outil de suivi, pas un relevé officiel de l’ARC. Confirmez toujours votre plafond dans Mon dossier de l’ARC.',
    rights: 'Tous droits réservés.',
  },
};

// Each language has its own URL (/ and /fr/) so search engines and shared
// links land on the right language. The entry HTML sets
// <html data-default-lang="en|fr">; localStorage is only a fallback.
const pageDefault = document.documentElement.dataset.defaultLang;
const stored =
  typeof localStorage !== 'undefined' ? localStorage.getItem('mytfsa.lang') : null;
const lang = ref(pageDefault === 'fr' || stored === 'fr' ? 'fr' : 'en');
const t = computed(() => STRINGS[lang.value]);

const LINKS = {
  en: { home: '/mytfsa/', other: '/mytfsa/fr/', calculator: '/mytfsa/tfsa-room-calculator/', rules: '/mytfsa/tfsa-rules/' },
  fr: { home: '/mytfsa/fr/', other: '/mytfsa/', calculator: '/mytfsa/fr/calculateur-plafond-celi/', rules: '/mytfsa/fr/regles-celi/' },
};
const links = computed(() => LINKS[lang.value]);

watchEffect(() => {
  document.documentElement.lang = lang.value;
  try {
    localStorage.setItem('mytfsa.lang', lang.value);
  } catch {
    /* private mode — ignore */
  }
});
</script>

<template>
  <div class="page">
    <header class="site-header">
      <a class="brand" :href="links.home">
        <span class="brand-tile"><img :src="glyphUrl" alt="MyTFSA logo" /></span>
        <span class="brand-name">MyTFSA</span>
      </a>
      <nav class="site-nav">
        <a class="nav-link" :href="links.calculator">{{ t.navCalculator }}</a>
        <a class="nav-link" :href="links.rules">{{ t.navRules }}</a>
        <span class="lang-toggle" role="group" aria-label="Language / Langue">
          <a :href="lang === 'en' ? links.home : links.other" :class="{ active: lang === 'en' }">EN</a>
          <a :href="lang === 'fr' ? links.home : links.other" :class="{ active: lang === 'fr' }">FR</a>
        </span>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-tile"><img :src="glyphUrl" alt="MyTFSA app icon" /></div>
        <h1 class="hero-name">MyTFSA</h1>
        <p class="hero-tagline">{{ t.tagline }}</p>
        <p class="hero-description">{{ t.description }}</p>

        <div class="store-row">
          <!-- Store buttons are intentionally inert until the listings are live. -->
          <button type="button" class="store-btn" aria-disabled="true">
            <svg viewBox="0 0 384 512" class="store-glyph" aria-hidden="true">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <span class="store-text">
              <small>{{ t.appStoreTop }}</small>
              <strong>{{ t.appStoreName }}</strong>
            </span>
          </button>
          <button type="button" class="store-btn" aria-disabled="true">
            <svg viewBox="0 0 512 512" class="store-glyph" aria-hidden="true">
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>
            <span class="store-text">
              <small>{{ t.googlePlayTop }}</small>
              <strong>{{ t.googlePlayName }}</strong>
            </span>
          </button>
        </div>
        <p class="coming-soon">{{ t.comingSoon }}</p>
      </section>

      <section class="rules">
        <span class="rules-bar"></span>
        <h2>{{ t.rulesTitle }}</h2>
        <p>{{ t.rulesBody }}</p>
      </section>

      <section class="features">
        <article v-for="feature in t.features" :key="feature.title" class="feature-card">
          <span class="feature-bar"></span>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.body }}</p>
        </article>
      </section>
    </main>

    <footer class="site-footer">
      <nav class="footer-links">
        <a :href="links.calculator">{{ t.navCalculator }}</a>
        <a :href="links.rules">{{ t.navRules }}</a>
      </nav>
      <p class="disclaimer">{{ t.disclaimer }}</p>
      <p class="copyright">© 2026 MyTFSA · {{ t.rights }}</p>
    </footer>
  </div>
</template>

<style>
:root {
  --ink: #0b0b0f;
  --secondary: #55555e;
  --tertiary: #9a9aa3;
  --separator: #e6e6ec;
  --bg-soft: #f5f5f8;
  --brand-green: #0b6e4f;
  --soft-green: #eaf3ef;
  --deep-green: #083626;
  --gold: #c9a44c;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color: var(--ink);
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(900px 480px at 85% -80px, rgba(201, 242, 120, 0.18), transparent 60%),
    radial-gradient(760px 520px at -120px 30%, rgba(11, 110, 79, 0.08), transparent 55%),
    #ffffff;
}

/* Header */
.site-header {
  width: min(1120px, 100% - 40px);
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}

.brand-tile {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #faf3d9;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(8, 54, 38, 0.18);
}

.brand-tile img {
  width: 78%;
  display: block;
}

.brand-name {
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.02em;
}

.lang-toggle {
  display: inline-flex;
  background: var(--bg-soft);
  border: 1px solid var(--separator);
  border-radius: 999px;
  padding: 3px;
  gap: 2px;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.site-nav .nav-link {
  color: var(--secondary);
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 600;
}

.site-nav .nav-link:hover {
  color: var(--deep-green);
}

.lang-toggle a {
  font-size: 13px;
  font-weight: 600;
  color: var(--secondary);
  padding: 6px 14px;
  border-radius: 999px;
  text-decoration: none;
}

.lang-toggle a.active {
  background: var(--deep-green);
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(8, 54, 38, 0.3);
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.footer-links a {
  color: var(--secondary);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
}

/* Hero */
.hero {
  width: min(760px, 100% - 40px);
  margin: 0 auto;
  padding: 56px 0 24px;
  text-align: center;
}

.hero-tile {
  width: 132px;
  height: 132px;
  margin: 0 auto;
  border-radius: 30px;
  background: linear-gradient(160deg, #fbf5de, #f1e8cb);
  display: grid;
  place-items: center;
  box-shadow:
    0 18px 40px rgba(8, 54, 38, 0.22),
    0 3px 10px rgba(8, 54, 38, 0.14);
}

.hero-tile img {
  width: 74%;
  display: block;
}

.hero-name {
  margin-top: 30px;
  font-size: clamp(44px, 8vw, 72px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.02;
}

.hero-name::after {
  content: '';
  display: block;
  width: 64px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--gold), #e7cf8f);
  margin: 22px auto 0;
}

.hero-tagline {
  margin-top: 20px;
  font-size: clamp(20px, 3.4vw, 27px);
  font-weight: 600;
  color: var(--brand-green);
  letter-spacing: -0.01em;
}

.hero-description {
  margin: 18px auto 0;
  max-width: 620px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--secondary);
}

/* Store buttons */
.store-row {
  margin-top: 36px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--ink);
  color: #ffffff;
  border: 0;
  border-radius: 14px;
  padding: 10px 22px 12px;
  font: inherit;
  text-align: left;
  cursor: default;
  box-shadow: 0 10px 24px rgba(11, 11, 15, 0.18);
}

.store-glyph {
  width: 26px;
  height: 26px;
  flex: none;
}

.store-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.store-text small {
  font-size: 11px;
  font-weight: 500;
  opacity: 0.75;
  letter-spacing: 0.01em;
}

.store-text strong {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.coming-soon {
  margin-top: 16px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--tertiary);
}

/* Rules */
.rules {
  width: min(760px, 100% - 40px);
  margin: 48px auto 0;
  text-align: center;
  background: var(--soft-green);
  border: 1px solid var(--separator);
  border-radius: 20px;
  padding: 30px 30px 32px;
}

.rules-bar {
  display: block;
  width: 34px;
  height: 4px;
  border-radius: 2px;
  background: var(--gold);
  margin: 0 auto 16px;
}

.rules h2 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--deep-green);
}

.rules p {
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.65;
  color: var(--secondary);
}

/* Features */
.features {
  width: min(1040px, 100% - 40px);
  margin: 56px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.feature-card {
  background: #ffffff;
  border: 1px solid var(--separator);
  border-radius: 20px;
  padding: 26px 24px 28px;
  box-shadow: 0 6px 18px rgba(11, 11, 15, 0.04);
}

.feature-bar {
  display: block;
  width: 34px;
  height: 4px;
  border-radius: 2px;
  background: var(--brand-green);
  margin-bottom: 16px;
}

.feature-card:nth-child(2) .feature-bar {
  background: var(--gold);
}

.feature-card h2 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.feature-card p {
  margin-top: 8px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--secondary);
}

/* Footer */
.site-footer {
  margin-top: auto;
  padding: 64px 20px 34px;
  text-align: center;
}

.disclaimer {
  max-width: 560px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 1.6;
  color: var(--tertiary);
}

.copyright {
  margin-top: 10px;
  font-size: 13px;
  color: var(--tertiary);
}

@media (max-width: 560px) {
  .hero {
    padding-top: 36px;
  }

  .hero-tile {
    width: 108px;
    height: 108px;
    border-radius: 25px;
  }

  .store-btn {
    width: min(300px, 100%);
    justify-content: center;
  }
}
</style>
