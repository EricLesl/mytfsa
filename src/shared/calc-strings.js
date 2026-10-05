// UI strings for the two calculators. Each calculator page embeds its own
// language in <html lang="...">; these tables provide the matching copy.

export const CALC_STRINGS = {
  en: {
    birthYear: 'Year you were born',
    resident: 'First year you were a Canadian tax resident (leave blank if always)',
    contributed: 'Total contributed to all your TFSAs, ever (CAD)',
    withdrawnBefore: 'Total withdrawn before this year (CAD)',
    withdrawnThis: 'Total withdrawn this year (CAD)',
    hint: 'Add up every TFSA you own - bank, brokerage, all of them. CRA counts them together.',
    roomEarned: 'Room earned since',
    roomLeft: 'Contribution room left today',
    overBy: 'You are over your limit by',
    penaltyPerMonth: 'Estimated CRA tax while the excess stays in',
    perMonth: '/month',
    comingBack: 'Coming back on January 1',
    comingBackNote: 'from this year’s withdrawals - plus next year’s new annual room once CRA announces it.',
    onTrack: 'You are within your limit.',
    overNote:
      'The CRA taxes the highest excess amount in your TFSA at 1% for every month it stays in, until the excess is withdrawn or absorbed by new room on January 1. Withdraw the excess as soon as you can and file form RC243.',
    disclaimer:
      'Estimate only, based on CRA’s published annual limits to 2026. This is a tracking aid, not an official CRA statement - confirm your room in CRA My Account.',
  },
  fr: {
    birthYear: 'Année de naissance',
    resident: 'Première année comme résident fiscal canadien (laissez vide si toujours)',
    contributed: 'Total cotisé à tous vos CELI, à vie (CAD)',
    withdrawnBefore: 'Total retiré avant cette année (CAD)',
    withdrawnThis: 'Total retiré cette année (CAD)',
    hint: 'Additionnez tous vos CELI - banque, courtage, tous. L’ARC les compte ensemble.',
    roomEarned: 'Plafond accumulé depuis',
    roomLeft: 'Plafond de cotisation restant aujourd’hui',
    overBy: 'Vous dépassez votre plafond de',
    penaltyPerMonth: 'Taxe estimée de l’ARC tant que l’excédent demeure',
    perMonth: '/mois',
    comingBack: 'De retour le 1er janvier',
    comingBackNote: 'provenant des retraits de cette année - plus le nouveau plafond annuel dès que l’ARC l’annoncera.',
    onTrack: 'Vous respectez votre plafond.',
    overNote:
      'L’ARC impose le montant d’excédent le plus élevé dans votre CELI à 1 % pour chaque mois où il y demeure, jusqu’à ce que l’excédent soit retiré ou absorbé par le nouveau plafond du 1er janvier. Retirez l’excédent dès que possible et produisez le formulaire RC243.',
    disclaimer:
      'Estimation seulement, fondée sur les plafonds annuels publiés par l’ARC jusqu’en 2026. Outil de suivi, pas un relevé officiel de l’ARC - confirmez votre plafond dans Mon dossier de l’ARC.',
  },
};

export const PENALTY_STRINGS = {
  en: {
    excess: 'Highest excess amount in your TFSA (CAD)',
    months: 'Months the excess stays in (a partial month counts as a full month)',
    taxLabel: 'Estimated CRA tax',
    howTitle: 'How the CRA calculates it',
    howBody:
      'The tax is 1% of the highest excess amount in your account for each month the excess is there - not 1% of your balance, and not an annual rate. It keeps running every month until the excess is withdrawn or new January 1 room absorbs it. You report it on form RC243, and the CRA can add interest and penalties on top if you file late.',
    actTitle: 'What to do now',
    actBody:
      'Withdraw the excess amount (not the whole account) as soon as you discover it - that stops the clock at the end of the current month. Then file RC243 for each year the excess existed. If your excess is smaller than next year’s new room, January 1 may absorb it without a withdrawal, but the tax still applies to every month before that.',
    disclaimer:
      'Simplified estimate assuming the same highest excess all month. Real CRA assessments use your exact monthly excess amounts. This is a tracking aid, not tax advice.',
  },
  fr: {
    excess: 'Montant d’excédent le plus élevé dans votre CELI (CAD)',
    months: 'Mois où l’excédent demeure (un mois partiel compte comme un mois complet)',
    taxLabel: 'Taxe estimée de l’ARC',
    howTitle: 'Comment l’ARC la calcule',
    howBody:
      'La taxe est de 1 % du montant d’excédent le plus élevé dans votre compte pour chaque mois où l’excédent s’y trouve - pas 1 % de votre solde, ni un taux annuel. Elle court chaque mois jusqu’à ce que l’excédent soit retiré ou absorbé par le nouveau plafond du 1er janvier. Vous la déclarez sur le formulaire RC243, et l’ARC peut ajouter intérêts et pénalités en cas de retard.',
    actTitle: 'Quoi faire maintenant',
    actBody:
      'Retirez le montant excédentaire (pas tout le compte) dès que vous le découvrez - cela arrête le compteur à la fin du mois courant. Produisez ensuite le RC243 pour chaque année où l’excédent a existé. Si l’excédent est moindre que le nouveau plafond de l’an prochain, le 1er janvier peut l’absorber sans retrait, mais la taxe s’applique quand même à tous les mois précédents.',
    disclaimer:
      'Estimation simplifiée supposant le même excédent maximal tout le mois. Les cotisations réelles de l’ARC utilisent vos montants mensuels exacts. Outil de suivi, pas un avis fiscal.',
  },
};
