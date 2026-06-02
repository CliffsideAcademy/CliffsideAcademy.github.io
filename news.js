const news = [
  {
    title: "BREAKING: Lake Brunswick Party Ends in Disorder",
    content: [
      "Local authorities responded late Saturday night to reports of a large unsanctioned gathering at Lake Brunswick. Witnesses describe the event as a student-heavy lake party that escalated rapidly.",
      "Reports include property damage, noise complaints, and multiple disturbances along the shoreline. Emergency services were dispatched due to safety concerns.",
      "Residents nearby criticized the lack of supervision, calling the situation ‘predictable and poorly managed from the start.’"
    ]
  },

  {
    title: "Cliffside Academy Administration Responds to Public Concerns",
    content: [
      "In an official statement, Cliffside Academy administrators praised their continued excellence in maintaining discipline and structure within the institution.",
      "The statement highlighted successful behavioral correction initiatives and strong student engagement outcomes despite growing public concerns.",
      "However, Brunswick residents have questioned these claims, citing ongoing reports of disorder and inconsistent supervision."
    ]
  },

  {
    title: "City Officials Monitoring Ongoing Situation",
    content: [
      "Brunswick city officials confirm they are monitoring activity connected to Cliffside Academy students but have not announced formal action at this time."
    ]
  }
];

const container = document.getElementById("news-container");

news.forEach(article => {
  const card = document.createElement("div");
  card.className = "news-card enhanced-news";

  const title = document.createElement("h2");
  title.textContent = article.title;

  card.appendChild(title);

  article.content.forEach(p => {
    const para = document.createElement("p");
    para.textContent = p;
    card.appendChild(para);
  });

  container.appendChild(card);
});
