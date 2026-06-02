document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".business-hero");
  const sections = document.querySelectorAll(".business-section");

  const fadeIn = (el, delay) => {
    el.classList.add("js-animate");
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
  };

  if (hero) fadeIn(hero, 100);

  sections.forEach((el, i) => {
    fadeIn(el, 180 + i * 120);
  });
});
