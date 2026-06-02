const credits = [
  { username: "DjDanization", rank: "Owner", team: "Ownership" },
  { username: "08Flux", rank: "Co-Owner", team: "Ownership" },

  { username: "CSOM_AccountHolder", rank: "Advisory Board", team: "Security Team (Head)" },
  { username: "vpxc", rank: "Moderator", team: "Security Team" },

  { username: "Wyldd_Playz", rank: "Advisory Board", team: "Approvals Team (Head)" },
  { username: "Knifeweather", rank: "Administrator", team: "Approvals Team (Co-Head)" },
  { username: "Shadydornan", rank: "Administrator", team: "Approvals Team" },

  { username: "Emmerichvonoperator", rank: "Developer", team: "Development Team" },
  { username: "NinthTails", rank: "Developer", team: "Development Team" },

  { username: "Q6m6y5l6l7g2o2", rank: "Administrator", team: "Events Team" },

  { username: "QTKylar", rank: "Helper", team: "Wiki Team" },
  { username: "Gyroflare", rank: "Helper", team: "Story Team" },
  { username: "Luvelykas", rank: "Helper", team: "Story/Events Team" },
  { username: "jjiggy1", rank: "Helper", team: "Story Team" }
];

const container = document.getElementById("credits-container");

const rankOrder = {
  "Owner": 1,
  "Co-Owner": 2,
  "Advisory Board": 3,
  "Administrator": 4,
  "Moderator": 5,
  "Developer": 6,
  "Helper": 7
};

const grouped = {};

// group teams
credits.forEach(c => {
  if (!grouped[c.team]) grouped[c.team] = [];
  grouped[c.team].push(c);
});

// sort by rank inside each team
Object.keys(grouped).forEach(team => {
  grouped[team].sort((a, b) => {
    return (rankOrder[a.rank] || 99) - (rankOrder[b.rank] || 99);
  });
});

// render collapsible sections
Object.keys(grouped).forEach(team => {
  const section = document.createElement("div");

  const header = document.createElement("div");
  header.className = "team-header";
  header.textContent = team;

  const content = document.createElement("div");
  content.className = "team-content";

  grouped[team].forEach(member => {
    const card = document.createElement("div");
    card.className = "credit-card";

    card.innerHTML = `
      <h3>${member.username}</h3>
      <p><strong>Rank:</strong> ${member.rank}</p>
    `;

    content.appendChild(card);
  });

  header.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });

  section.appendChild(header);
  section.appendChild(content);

  container.appendChild(section);
});
