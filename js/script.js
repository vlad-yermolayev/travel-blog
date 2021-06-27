document.addEventListener("DOMContentLoaded", () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const YEAR_ELEMENT = document.querySelector('.footer__year');
  YEAR_ELEMENT.textContent = CURRENT_YEAR.getFullYear();
});