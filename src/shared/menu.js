// Mobile header: hamburger button toggles the nav panel.
// Shared by the static content pages (calculators, rules guides).
export function initMenu() {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-btn');
  if (!header || !button) return;

  const setOpen = (open) => {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => {
    setOpen(!header.classList.contains('menu-open'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}
