document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, index) => {
    panel.classList.add("enhanced-panel");

    panel.style.opacity = "0";
    panel.style.transform = "translateY(10px)";
    panel.style.transition = "all 0.4s ease";

    setTimeout(() => {
      panel.style.opacity = "1";
      panel.style.transform = "translateY(0px)";
    }, index * 120);
  });

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.classList.add("enroll-link");
  });
});
