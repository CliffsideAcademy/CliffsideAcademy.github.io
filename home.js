document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-card");
  const cards = document.querySelectorAll(".info-card");

  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(10px)";
    hero.style.transition = "all 0.5s ease";

    setTimeout(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 100);
  }

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";
    card.style.transition = "all 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200 + i * 120);
  });
});
