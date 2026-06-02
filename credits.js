const credits = [
  { username: "DjDanization", rank: "Owner", team: "Ownership" },
  { username: "08Flux", rank: "Co-Owner", team: "Ownership" },

  { username: "CSOM_AccountHolder", rank: "Advisory Board", team: "Security Team", role: "Head" },
  { username: "vpxc", rank: "Moderator", team: "Security Team" },

  { username: "Wyldd_Playz", rank: "Advisory Board", team: "Approvals Team", role: "Head" },
  { username: "Knifeweather", rank: "Administrator", team: "Approvals Team", role: "Co-Head" },
  { username: "Shadydornan", rank: "Administrator", team: "Approvals Team" },

  { username: "Emmerichvonoperator", rank: "Developer", team: "Development Team" },
  { username: "NinthTails", rank: "Developer", team: "Development Team" },

  { username: "Q6m6y5l6l7g2o2", rank: "Administrator", team: "Events Team" },

  { username: "QTKylar", rank: "Helper", team: "Wiki Team" },

  { username: "Gyroflare", rank: "Helper", team: "Story Team" },
  { username: "Luvelykas", rank: "Helper", team: "Story Team" },
  { username: "jjiggy1", rank: "Helper", team: "Story Team" }
];

const container = document.getElementById("credits-container");

const intro = document.createElement("h2");
intro.className = "credits-intro";
intro.textContent = "And to you, the player. We appreciate you playing our game.";
container.appendChild(intro);

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

credits.forEach(c => {
  if (!grouped[c.team]) grouped[c.team] = [];
  grouped[c.team].push(c);
});

Object.keys(grouped).forEach(team => {
  grouped[team].sort((a, b) => {
    const rankDiff = (rankOrder[a.rank] || 99) - (rankOrder[b.rank] || 99);
    if (rankDiff !== 0) return rankDiff;

    const roleValue = r => (r.role === "Head" ? 1 : r.role === "Co-Head" ? 2 : 3);
    return roleValue(a) - roleValue(b);
  });
});

Object.keys(grouped).forEach(team => {
  const section = document.createElement("div");
  section.className = "team-section";

  const header = document.createElement("div");
  header.className = "team-header";
  header.textContent = team;

  const content = document.createElement("div");
  content.className = "team-content";

  grouped[team].forEach(member => {
    const card = document.createElement("div");
    card.className = "credit-card";

    const roleText = member.role ? ` • ${member.role}` : "";

    card.innerHTML = `
      <div class="card-inner">
        <h3>${member.username}</h3>
        <p>${member.rank}${roleText}</p>
      </div>
    `;

    content.appendChild(card);
  });

  section.appendChild(header);
  section.appendChild(content);
  container.appendChild(section);
});
