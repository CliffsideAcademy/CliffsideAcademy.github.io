document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".business-hero");
  const sections = document.querySelectorAll(".business-section");

  function animate(el, delay) {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
  }

  if (hero) animate(hero, 100);

  sections.forEach((section, i) => {
    animate(section, 200 + i * 140);
  });

  const cards = document.querySelectorAll(".business-section");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-3px)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  const title = document.querySelector(".business-hero h2");

  if (title) {
    title.style.letterSpacing = "0.3px";
    title.style.transition = "letter-spacing 0.4s ease";

    setTimeout(() => {
      title.style.letterSpacing = "1px";
    }, 300);
  }
});
