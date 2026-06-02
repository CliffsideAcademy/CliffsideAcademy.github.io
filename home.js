document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".business-hero");
  const sections = document.querySelectorAll(".business-section");

  const fadeIn = (el, delay) => {
    el.classList.add("fade-init");

    setTimeout(() => {
      el.classList.add("fade-in");
    }, delay);
  };

  if (hero) fadeIn(hero, 100);

  sections.forEach((el, i) => {
    fadeIn(el, 180 + i * 120);
  });
});
