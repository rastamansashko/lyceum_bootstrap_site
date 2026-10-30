document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("formMessage").textContent =
    "Дякуємо! Це демонстраційна форма — для надсилання повідомлень підключіть серверну обробку.";
  form.reset();
});
