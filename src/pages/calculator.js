import '../shared/seo.css';
import { initMenu } from '../shared/menu.js';
import { computeRoom, formatMoney, LAST_KNOWN_LIMIT_YEAR } from '../shared/tfsa-math.js';
import { CALC_STRINGS } from '../shared/calc-strings.js';

initMenu();

const lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
const s = CALC_STRINGS[lang];
const $ = (id) => document.getElementById(id);

const currentYear = Math.min(new Date().getFullYear(), LAST_KNOWN_LIMIT_YEAR);

function num(id) {
  const v = parseFloat(String($(id).value).replace(/[^0-9.]/g, ''));
  return Number.isFinite(v) ? v : 0;
}

function update() {
  const birthYear = parseInt($('birthYear').value, 10);
  const results = $('results');
  if (!Number.isFinite(birthYear) || birthYear < 1930 || birthYear > currentYear) {
    results.style.opacity = '0.45';
    return;
  }
  results.style.opacity = '1';

  const residentRaw = parseInt($('residentSince').value, 10);
  const r = computeRoom({
    birthYear,
    residentSinceYear: Number.isFinite(residentRaw) ? residentRaw : undefined,
    contributed: num('contributed'),
    withdrawnBeforeThisYear: num('withdrawnBefore'),
    withdrawnThisYear: num('withdrawnThis'),
    currentYear,
  });

  $('earnedStart').textContent = r.startYear;
  $('earnedValue').textContent = formatMoney(r.earned, lang);
  $('roomValue').textContent = formatMoney(Math.max(r.room, 0), lang);

  const roomEl = $('roomValue');
  roomEl.classList.toggle('bad', r.excess > 0);
  roomEl.classList.toggle('good', r.excess === 0);

  const comingRow = $('comingRow');
  const comingNote = $('comingNote');
  if (r.comingBackJan1 > 0) {
    comingRow.style.display = '';
    if (comingNote) comingNote.style.display = '';
    $('comingValue').textContent = formatMoney(r.comingBackJan1, lang);
  } else {
    comingRow.style.display = 'none';
    if (comingNote) comingNote.style.display = 'none';
  }

  const over = $('overBox');
  const verdict = $('verdict');
  if (r.excess > 0) {
    over.style.display = '';
    verdict.style.display = 'none';
    $('overValue').textContent = formatMoney(r.excess, lang);
    $('penaltyValue').textContent = `${formatMoney(r.monthlyPenalty, lang)} ${s.perMonth}`;
  } else {
    over.style.display = 'none';
    verdict.style.display = '';
    roomEl.textContent = formatMoney(r.room, lang);
  }
}

for (const id of ['birthYear', 'residentSince', 'contributed', 'withdrawnBefore', 'withdrawnThis']) {
  $(id).addEventListener('input', update);
}
update();
