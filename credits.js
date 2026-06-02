const credits = [
  { username: "DjDanization", rank: "Owner", team: "Ownership" },
  { username: "08Flux", rank: "Co-Owner", team: "Ownership" },
  { username: "CSOM_AccountHolder", rank: "Advisory Board", team: "Head of Security Team" },
  { username: "Wyldd_Playz", rank: "Advisory Board", team: "Head of Approvals Team" },
  { username: "Emmerichvonoperator", rank: "Developer", team: "Development Team" },
  { username: "NinthTails", rank: "Developer", team: "Development Team" },
  { username: "Q6m6y5l6l7g2o2", rank: "Administrator", team: "Events Team" },
  { username: "Knifeweather", rank: "Administrator", team: "Approvals Team Co-head" },
  { username: "Shadydornan", rank: "Administrator", team: "Approvals Team" },
  { username: "vpxc", rank: "Moderator", team: "Security Team" },
  { username: "QTKylar", rank: "Helper", team: "Wiki Team" },
  { username: "Gyroflare", rank: "Helper", team: "Story Team" },
  { username: "Luvelykas", rank: "Helper", team: "Story/Events Team" },
  { username: "jjiggy1", rank: "Helper", team: "Story Team" }
];

const container = document.getElementById("credits-container");

credits.forEach(c => {
  const card = document.createElement("div");
  card.className = "credit-card";

  card.innerHTML = `
    <h3>${c.username}</h3>
    <p><strong>Rank:</strong> ${c.rank}</p>
    <p><strong>Team:</strong> ${c.team}</p>
  `;

  container.appendChild(card);
});
