// TFSA math shared by the site's calculators.
// The annual limits table mirrors TFSA_ANNUAL_LIMITS in the app
// (src/lib/tfsa.ts) and CRA's published dollar limits. Keep them in sync:
// when CRA announces a new year's limit, add a row here and re-publish.

export const TFSA_ANNUAL_LIMITS = {
  2009: 5000,
  2010: 5000,
  2011: 5000,
  2012: 5000,
  2013: 5500,
  2014: 5500,
  2015: 10000,
  2016: 5500,
  2017: 5500,
  2018: 5500,
  2019: 6000,
  2020: 6000,
  2021: 6000,
  2022: 6000,
  2023: 6500,
  2024: 7000,
  2025: 7000,
  2026: 7000,
};

export const FIRST_TFSA_YEAR = 2009;
export const LAST_KNOWN_LIMIT_YEAR = 2026;

/** First year room accrues: max(2009, year turned 18, first resident year). */
export function roomStartYear(birthYear, residentSinceYear) {
  const eighteenthYear = birthYear + 18;
  return Math.max(FIRST_TFSA_YEAR, eighteenthYear, residentSinceYear || eighteenthYear);
}

/** Total annual-limit room earned from startYear through `throughYear`. */
export function roomEarnedThrough(startYear, throughYear) {
  let sum = 0;
  for (let y = startYear; y <= throughYear; y += 1) {
    sum += TFSA_ANNUAL_LIMITS[y] ?? 0;
  }
  return sum;
}

/**
 * Room snapshot, mirroring the app's computeTfsaStats rules:
 * - contributions reduce room immediately;
 * - withdrawals add back only on the next January 1, so only withdrawals
 *   from before the current year count toward today's room;
 * - excess = contributions - room earned - prior-year withdrawals.
 */
export function computeRoom({ birthYear, residentSinceYear, contributed, withdrawnBeforeThisYear, withdrawnThisYear, currentYear }) {
  const startYear = roomStartYear(birthYear, residentSinceYear);
  const earned = roomEarnedThrough(startYear, currentYear);
  const room = earned - contributed + withdrawnBeforeThisYear;
  const excess = Math.max(0, contributed - earned - withdrawnBeforeThisYear);
  return {
    startYear,
    earned,
    room,
    excess,
    comingBackJan1: withdrawnThisYear, // re-contribution room returns next Jan 1
    monthlyPenalty: excess > 0 ? excess * 0.01 : 0,
  };
}

export function formatMoney(value, lang) {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(value);
}
