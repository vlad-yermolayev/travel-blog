document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date(),
        footerYear = document.querySelector('.footer__year');
  footerYear.textContent = currentDate.getFullYear();
});