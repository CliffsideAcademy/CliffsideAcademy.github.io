const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.classList.add("enhanced-panel");

  const titles = panel.querySelectorAll("h2");
  titles.forEach(t => {
    t.classList.add("panel-title");
  });
});
