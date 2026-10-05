import '../shared/seo.css';

const lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
const $ = (id) => document.getElementById(id);

function formatMoney2(value) {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function num(id) {
  const v = parseFloat(String($(id).value).replace(/[^0-9.]/g, ''));
  return Number.isFinite(v) ? v : 0;
}

function update() {
  const tax = num('excess') * 0.01 * Math.max(num('months'), 0);
  $('taxValue').textContent = formatMoney2(tax);
}

for (const id of ['excess', 'months']) {
  $(id).addEventListener('input', update);
}
update();
