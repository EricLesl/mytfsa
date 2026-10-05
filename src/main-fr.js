import { createApp } from 'vue';
import App from './App.vue';

// French home page entry (/fr/). App.vue reads data-default-lang="fr"
// from fr/index.html, so this mounts the same component in French at a
// French URL (real URLs per language are what search engines index).
createApp(App).mount('#app');
