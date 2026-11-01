// Update project details here when you add or publish work.
const projects = [
  {
    number: "01",
    title: "AdventureWorks SQL Analysis",
    status: "SQL practice project",
    description: "A SQL-based analysis project using the AdventureWorks 2022 database to practise querying and build a strong foundation for data analytics.",
    highlights: ["Filtering, sorting and aggregations", "Joins, set operators and CASE statements", "Subqueries and common table expressions (CTEs)"],
    technologies: ["SQL", "SQL Server", "SSMS", "AdventureWorks 2022"],
    url: "https://github.com/abdulparvez2004/AdventureWorks_SQL_Queries",
    linkLabel: "View GitHub repository"
  },
  {
    number: "02",
    title: "MarketSphere Analytics – Customer Data Generator",
    status: "Python project",
    description: "A Python project using Faker to create a synthetic customer dataset for data analysis and practice.",
    highlights: ["Generated 500 customer records", "Includes names, emails, cities and membership categories", "Includes purchase amounts for analysis practice"],
    technologies: ["Python", "Faker", "Pandas", "CSV"],
    url: "https://github.com/abdulparvez2004/MarketSphere-Analytics-customer_generator",
    linkLabel: "View GitHub repository"
  },
  {
    number: "03",
    title: "Healthcare Exploratory Data Analysis",
    status: "Status to confirm",
    description: "A Python-based healthcare data analysis project using an approximately 500,000-record synthetic dataset.",
    highlights: ["Data cleaning and missing-value handling", "Exploratory analysis of healthcare data", "Searching for meaningful patterns in the dataset"],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    url: "",
    linkLabel: "Repository link to be added"
  },
  {
    number: "04",
    title: "Hotel Booking Cancellation & Revenue Risk Analysis",
    status: "Status to confirm",
    description: "A data analysis project exploring hotel booking cancellations, lead time and potential revenue risk.",
    highlights: ["Explore booking and cancellation patterns", "Analyze lead time and cancellation status", "Develop business observations and recommendations"],
    technologies: ["Data Analysis", "Python / tools to confirm", "Business Insights"],
    url: "",
    linkLabel: "Repository link to be added"
  },
  {
    number: "05",
    title: "CafePreorder – Web Application",
    status: "Hackathon team project",
    description: "A cafe preorder application developed during a 36-hour hackathon, designed to help students place orders ahead of time.",
    highlights: ["Student login, menu browsing and order confirmation", "Order history for students", "Admin dashboard to view and manage orders"],
    technologies: ["Flask", "HTML", "CSS", "JavaScript", "JSON / SQLite"],
    url: "",
    linkLabel: "Repository link to be added"
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const projectCount = document.getElementById("projectCount");

projectsGrid.innerHTML = projects.map(project => `
  <article class="project-card">
    <div class="project-top">
      <span class="project-number">PROJECT / ${project.number}</span>
      <span class="project-status">${project.status}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <ul class="project-highlights">
      ${project.highlights.map(item => `<li>${item}</li>`).join("")}
    </ul>
    <div class="tech-list">${project.technologies.map(tech => `<span>${tech}</span>`).join("")}</div>
    ${project.url
      ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.linkLabel} ↗</a>`
      : `<span class="project-link disabled">${project.linkLabel}</span>`}
  </article>
`).join("");

projectCount.textContent = `${String(projects.length).padStart(2, "0")} PROJECTS`;

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");

function updateThemeControl() {
  const isLight = document.body.classList.contains("light-theme");
  themeIcon.textContent = isLight ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}
updateThemeControl();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  updateThemeControl();
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(anchor => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));
