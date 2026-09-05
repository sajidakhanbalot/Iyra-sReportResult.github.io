/* ==========================================================================
   IYRA BAHAL — LEARNING JOURNEY
   All content below is editable data. Add new projects/certificates by
   pushing new objects into the arrays, following the existing shape.
   ========================================================================== */

/* ---------------------------------------------------------------
   1. SKILLS DATA
--------------------------------------------------------------- */
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "<>", year: "2024", status: "Learned", description: "Foundation of web development." },
      { name: "CSS", icon: "{ }", year: "2024", status: "Learned", description: "Styling and layout for the web." },
      { name: "JavaScript", icon: "JS", year: "2024", status: "Learned", description: "Bringing interactivity to web pages." },
      { name: "React.js", icon: "⚛", year: "2025", status: "Completed", description: "Component-based frontend development." }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "( )", year: "2025", status: "Explored", description: "Server-side JavaScript runtime." }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "DB", year: "2025", status: "Explored", description: "Document-based database fundamentals." }
    ]
  },
  {
    category: "Artificial Intelligence",
    items: [
      { name: "AI Fundamentals", icon: "AI", year: "2025", status: "Introduced", description: "Core concepts behind artificial intelligence." }
    ]
  }
];

/* ---------------------------------------------------------------
   2. PROJECTS DATA — add new projects by pushing into this array
--------------------------------------------------------------- */
const projects = [
  {
    title: "Project 01",
    description: "Add project description here.",
    year: "2024",
    category: "HTML/CSS",
    technologies: ["HTML", "CSS"],
    image: "assets/projects/project-01.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 02",
    description: "Add project description here.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project-02.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 03",
    description: "Add project description here.",
    year: "2024",
    category: "JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project-03.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 04",
    description: "Add project description here.",
    year: "2025",
    category: "React",
    technologies: ["React", "JavaScript", "CSS"],
    image: "assets/projects/project-04.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 05",
    description: "Add project description here.",
    year: "2025",
    category: "React",
    technologies: ["React", "JavaScript"],
    image: "assets/projects/project-05.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 06",
    description: "Add project description here.",
    year: "2025",
    category: "Node.js",
    technologies: ["Node.js", "JavaScript"],
    image: "assets/projects/project-06.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 07",
    description: "Add project description here.",
    year: "2025",
    category: "MongoDB",
    technologies: ["Node.js", "MongoDB"],
    image: "assets/projects/project-07.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 08",
    description: "Add project description here.",
    year: "2025",
    category: "AI",
    technologies: ["JavaScript", "AI Basics"],
    image: "assets/projects/project-08.jpg",
    objective: "Add the learning objective for this project here.",
    learned: "Add what was learned from building this project here.",
    github: "#",
    demo: "#"
  }
];

/* ---------------------------------------------------------------
   3. CERTIFICATES DATA — add new certificates by pushing into this array
--------------------------------------------------------------- */
const certificates = [
  {
    title: "Web Development Fundamentals",
    issuer: "Organization Name",
    date: "2024",
    skills: ["HTML", "CSS", "JavaScript"],
    instructor: "Instructor Name",
    id: "IYRA-2024-001"
  },
  {
    title: "JavaScript Essentials",
    issuer: "Organization Name",
    date: "2024",
    skills: ["JavaScript", "DOM", "Logic Building"],
    instructor: "Instructor Name",
    id: "IYRA-2024-002"
  },
  {
    title: "React.js Development",
    issuer: "Organization Name",
    date: "2025",
    skills: ["React.js", "Components", "State Management"],
    instructor: "Instructor Name",
    id: "IYRA-2025-001"
  },
  {
    title: "Node.js & Backend Basics",
    issuer: "Organization Name",
    date: "2025",
    skills: ["Node.js", "Servers", "APIs"],
    instructor: "Instructor Name",
    id: "IYRA-2025-002"
  },
  {
    title: "MongoDB & Databases",
    issuer: "Organization Name",
    date: "2025",
    skills: ["MongoDB", "Data Modeling"],
    instructor: "Instructor Name",
    id: "IYRA-2025-003"
  },
  {
    title: "Artificial Intelligence Basics",
    issuer: "Organization Name",
    date: "2025",
    skills: ["AI Fundamentals", "Problem Solving"],
    instructor: "Instructor Name",
    id: "IYRA-2025-004"
  }
];

/* ---------------------------------------------------------------
   4. ACHIEVEMENTS DATA
--------------------------------------------------------------- */
const achievements = [
  { year: "2024", title: "Started the Computer Science Journey", icon: "✦" },
  { year: "2024", title: "Built the First Web Projects", icon: "◆" },
  { year: "2025", title: "Achieved A+ Performance", icon: "★" },
  { year: "2025", title: "Expanded Into Full-Stack Technologies", icon: "⬡" },
  { year: "2025", title: "Completed React.js", icon: "⚛" },
  { year: "2025", title: "Explored Artificial Intelligence", icon: "◈" },
  { year: "2025", title: "Built Multiple Practical Projects", icon: "▲" },
  { year: "2026", title: "Continued the Technology Journey", icon: "↻" }
];

/* ---------------------------------------------------------------
   5. MILESTONES DATA
--------------------------------------------------------------- */
const milestones = [
  { year: "2024", title: "Computer Fundamentals", description: "Iyra began understanding how computers, the web and programming logic work." },
  { year: "2024", title: "HTML", description: "Learned to structure web pages using semantic HTML." },
  { year: "2024", title: "CSS", description: "Learned to style and lay out web pages visually." },
  { year: "2024", title: "JavaScript", description: "Started adding interactivity and logic to web pages." },
  { year: "2025", title: "React.js", description: "Learned to build interfaces using reusable components." },
  { year: "2025", title: "Node.js", description: "Explored running JavaScript on the server side." },
  { year: "2025", title: "MongoDB", description: "Learned the basics of storing and structuring data." },
  { year: "2025", title: "AI Basics", description: "Explored foundational concepts in artificial intelligence." },
  { year: "2025", title: "Multiple Projects", description: "Applied new skills by building several practical projects." },
  { year: "2026", title: "Continued Practice", description: "Kept practicing and revisiting earlier technologies." },
  { year: "2026", title: "Consolidation", description: "Focused on strengthening existing knowledge rather than adding new topics." },
  { year: "2026", title: "Future Development", description: "Laying groundwork for whatever comes next in the journey." }
];

/* ---------------------------------------------------------------
   6. PERFORMANCE DATA
--------------------------------------------------------------- */
const performance = [
  { year: "2024", grade: "A", value: 88, label: "Foundation & Exploration" },
  { year: "2025", grade: "A+", value: 96, label: "Strongest Learning Phase" },
  { year: "2026", grade: "Average", value: 62, label: "Developing & Rebuilding Momentum" }
];

/* ---------------------------------------------------------------
   7. TECH GROWTH MAP DATA
--------------------------------------------------------------- */
const growthMapData = [
  { year: "2024", nodes: [
      { label: "HTML", info: "Learned how web pages are structured." },
      { label: "CSS", info: "Learned how web pages are styled." },
      { label: "JavaScript", info: "Started adding logic and interactivity." }
    ]},
  { year: "2025", nodes: [
      { label: "React.js", info: "Built component-based interfaces." },
      { label: "Node.js", info: "Explored server-side JavaScript." },
      { label: "MongoDB", info: "Learned to store and manage data." },
      { label: "AI Basics", info: "Explored the fundamentals of AI." }
    ]},
  { year: "2026", nodes: [
      { label: "Practice", info: "Revisiting and reinforcing earlier concepts." },
      { label: "Consolidation", info: "Strengthening the existing foundation." },
      { label: "Further Development", info: "Preparing for the next stage of learning." }
    ]}
];

/* ---------------------------------------------------------------
   8. WHAT'S NEXT DATA
--------------------------------------------------------------- */
const nextSteps = [
  "Advanced JavaScript", "Advanced React", "Backend Development", "APIs",
  "Advanced Databases", "Artificial Intelligence", "Machine Learning",
  "Real-world Projects", "Git & GitHub", "Deployment", "Full-Stack Development"
];

/* ==========================================================================
   RENDERING
   ========================================================================== */

function renderOverviewCounts(){
  const techTotal = skills.reduce((sum, cat) => sum + cat.items.length, 0);
  document.getElementById("techCount").textContent = techTotal + "+";
  document.getElementById("projectCount").textContent = projects.length + " Projects";
}

function renderSkills(){
  const wrap = document.getElementById("skillsCategories");
  wrap.innerHTML = skills.map(cat => `
    <div>
      <p class="skill-category-title">${cat.category}</p>
      <div class="skill-cards">
        ${cat.items.map(item => `
          <div class="skill-card">
            <div class="skill-icon">${item.icon}</div>
            <h3 class="skill-name">${item.name}</h3>
            <p class="skill-desc">${item.description}</p>
            <div class="skill-meta">
              <span class="skill-status">${item.status}</span>
              <span>${item.year}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderGrowthMap(){
  const wrap = document.getElementById("growthMap");
  wrap.innerHTML = growthMapData.map((row, i) => `
    <div class="growth-year-row">
      <span class="growth-year-tag">${row.year}</span>
      <div class="growth-nodes">
        ${row.nodes.map((node, j) => `
          ${j > 0 ? '<span class="growth-arrow">→</span>' : ''}
          <div class="growth-node">${node.label}<div class="growth-tip">${node.info}</div></div>
        `).join("")}
      </div>
    </div>
    ${i < growthMapData.length - 1 ? '<div class="growth-connector"></div>' : ''}
  `).join("");
}

function renderProjects(list){
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = list.map((p) => {
    const realIndex = projects.indexOf(p);
    return `
    <article class="project-card" data-index="${realIndex}" tabindex="0" role="button" aria-label="View details for ${p.title}">
      <div class="project-media">
        <img src="${p.image}" alt="${p.title} preview" loading="lazy"
             onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${placeholderSVG(p.title)}'">
        <span class="project-num">#${String(realIndex + 1).padStart(2,"0")}</span>
      </div>
      <div class="project-body">
        <div class="project-meta"><span>${p.year}</span><span>${p.category}</span></div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <ul class="project-tags">${p.technologies.map(t => `<li>${t}</li>`).join("")}</ul>
        <span class="project-view">View Project →</span>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProjectModal(parseInt(card.dataset.index, 10)));
    card.addEventListener("keypress", (e) => { if(e.key === "Enter") openProjectModal(parseInt(card.dataset.index, 10)); });
  });
}

function placeholderSVG(title){
  const safe = title.replace(/[<>&]/g, "");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='250'><rect width='100%' height='100%' fill='%23161f36'/><text x='50%' y='50%' font-family='monospace' font-size='16' fill='%235b82ff' text-anchor='middle' dominant-baseline='middle'>${safe}</text></svg>`;
  return encodeURIComponent(svg).replace(/'/g, "%27");
}

function renderCertificates(){
  const grid = document.getElementById("certificateGrid");
  grid.innerHTML = certificates.map((c, i) => `
    <article class="certificate-card" data-index="${i}">
      <div class="certificate-thumb">
        <div class="certificate-thumb-inner">
          Certificate<span>${c.id}</span>
        </div>
      </div>
      <div class="certificate-body">
        <h3>${c.title}</h3>
        <div class="cert-meta-row"><span>${c.issuer}</span><span>${c.date}</span></div>
        <span class="cert-id">${c.id}</span>
        <div class="certificate-actions">
          <button class="cert-view-btn" data-index="${i}">View Certificate</button>
          <button class="cert-download-btn" data-index="${i}">Download</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".cert-view-btn").forEach(btn => {
    btn.addEventListener("click", () => openCertModal(parseInt(btn.dataset.index, 10)));
  });
  grid.querySelectorAll(".cert-download-btn").forEach(btn => {
    btn.addEventListener("click", () => { openCertModal(parseInt(btn.dataset.index, 10)); setTimeout(downloadCertificate, 200); });
  });
  grid.querySelectorAll(".certificate-thumb").forEach((thumb, i) => {
    thumb.addEventListener("click", () => openCertModal(i));
  });
}

function renderAchievements(){
  const grid = document.getElementById("achievementGrid");
  grid.innerHTML = achievements.map(a => `
    <div class="achievement-card reveal">
      <div class="achievement-icon">${a.icon}</div>
      <span class="achievement-year">${a.year}</span>
      <p class="achievement-title">${a.title}</p>
    </div>
  `).join("");
  observeReveals();
}

function renderMilestones(){
  const years = ["2024", "2025", "2026"];
  const wrap = document.getElementById("milestoneColumns");
  wrap.innerHTML = years.map(year => `
    <div>
      <p class="milestone-col-year">${year}</p>
      ${milestones.filter(m => m.year === year).map(m => `
        <div class="milestone-item" data-year="${m.year}" data-title="${m.title}" data-desc="${m.description}">${m.title}</div>
      `).join("")}
    </div>
  `).join("");

  wrap.querySelectorAll(".milestone-item").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("mpYear").textContent = item.dataset.year;
      document.getElementById("mpTitle").textContent = item.dataset.title;
      document.getElementById("mpDesc").textContent = item.dataset.desc;
      document.getElementById("milestonePopup").classList.add("open");
    });
  });
}

function renderNextSteps(){
  const grid = document.getElementById("nextGrid");
  grid.innerHTML = nextSteps.map(step => `<div class="next-item">${step}</div>`).join("");
}

function renderPerformanceGraph(){
  const svgNS = "http://www.w3.org/2000/svg";
  const path = document.getElementById("pgPath");
  const pointsG = document.getElementById("pgPoints");
  const labelsG = document.getElementById("pgLabels");

  const xStart = 40, xEnd = 570, yTop = 30, yBottom = 180;
  const xs = performance.map((_, i) => xStart + (i * (xEnd - xStart) / (performance.length - 1)));
  const ys = performance.map(p => yBottom - (p.value / 100) * (yBottom - yTop));

  let d = `M${xs[0]},${ys[0]}`;
  for(let i = 1; i < xs.length; i++){
    const midX = (xs[i-1] + xs[i]) / 2;
    d += ` C${midX},${ys[i-1]} ${midX},${ys[i]} ${xs[i]},${ys[i]}`;
  }
  path.setAttribute("d", d);

  performance.forEach((p, i) => {
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", xs[i]);
    circle.setAttribute("cy", ys[i]);
    circle.setAttribute("r", 6);
    circle.setAttribute("class", "pg-point" + (p.label.toLowerCase().includes("developing") ? " pg-point-avg" : ""));
    pointsG.appendChild(circle);

    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", xs[i]);
    label.setAttribute("y", yBottom + 24);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "pg-label");
    label.textContent = `${p.year} · ${p.grade}`;
    labelsG.appendChild(label);
  });
}

/* ==========================================================================
   PROJECT MODAL
   ========================================================================== */
const projectModal = document.getElementById("projectModal");

function openProjectModal(index){
  const p = projects[index];
  document.getElementById("pmImage").src = p.image;
  document.getElementById("pmImage").onerror = function(){ this.onerror=null; this.src = "data:image/svg+xml;utf8," + placeholderSVG(p.title); };
  document.getElementById("pmImage").alt = p.title;
  document.getElementById("pmNumber").textContent = "#" + String(index + 1).padStart(2, "0");
  document.getElementById("pmYear").textContent = p.year + " · " + p.category;
  document.getElementById("pmTitle").textContent = p.title;
  document.getElementById("pmDescription").textContent = p.description;
  document.getElementById("pmTech").innerHTML = p.technologies.map(t => `<li>${t}</li>`).join("");
  document.getElementById("pmObjective").textContent = p.objective;
  document.getElementById("pmLearned").textContent = p.learned;
  document.getElementById("pmGithub").href = p.github;
  document.getElementById("pmDemo").href = p.demo;
  openModal(projectModal);
}

document.getElementById("projectModalClose").addEventListener("click", () => closeModal(projectModal));
projectModal.addEventListener("click", (e) => { if(e.target === projectModal) closeModal(projectModal); });

/* ==========================================================================
   CERTIFICATE MODAL
   ========================================================================== */
const certModal = document.getElementById("certModal");

function openCertModal(index){
  const c = certificates[index];
  document.getElementById("certCourse").textContent = c.title;
  document.getElementById("certSkills").textContent = c.skills.join(" · ");
  document.getElementById("certInstructor").textContent = c.instructor;
  document.getElementById("certDate").textContent = c.date;
  document.getElementById("certId").textContent = c.id;
  openModal(certModal);
}

document.getElementById("certModalClose").addEventListener("click", () => closeModal(certModal));
certModal.addEventListener("click", (e) => { if(e.target === certModal) closeModal(certModal); });
document.getElementById("certPrintBtn").addEventListener("click", () => window.print());
document.getElementById("certDownloadBtn").addEventListener("click", downloadCertificate);

function downloadCertificate(){
  window.print();
}

/* shared modal helpers */
function openModal(modal){
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(modal){
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeModal(projectModal);
    closeModal(certModal);
    document.getElementById("milestonePopup").classList.remove("open");
  }
});

/* milestone popup close */
document.getElementById("milestonePopupClose").addEventListener("click", () => {
  document.getElementById("milestonePopup").classList.remove("open");
});

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if(!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.filter;
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  renderProjects(filtered);
  observeReveals();
});

/* ==========================================================================
   NAVIGATION: smooth scroll, active link, hamburger
   ========================================================================== */
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const navLinksWrap = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinksWrap.classList.toggle("mobile-open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinksWrap.classList.remove("mobile-open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

const sectionsForNav = ["home","journey","skills","projects","certificates","performance","achievements"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

function updateActiveNav(){
  let current = sectionsForNav[0];
  const scrollPos = window.scrollY + 140;
  sectionsForNav.forEach(sec => { if(sec.offsetTop <= scrollPos) current = sec; });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.section === current.id);
  });
}

/* ==========================================================================
   THEME TOGGLE (persisted via localStorage)
   ========================================================================== */
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme){
  if(theme === "light"){ document.documentElement.setAttribute("data-theme","light"); }
  else{ document.documentElement.removeAttribute("data-theme"); }
}
const savedTheme = localStorage.getItem("iyra-theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("iyra-theme", next);
});

/* ==========================================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
let revealObserver;
function observeReveals(){
  if(!revealObserver){
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   TIMELINE TRACK FILL + BACK TO TOP + NAVBAR SCROLL STATE
   ========================================================================== */
const timelineEl = document.getElementById("timeline");
const trackFill = document.getElementById("trackFill");
const backToTop = document.getElementById("backToTop");
const navbar = document.getElementById("navbar");

function updateOnScroll(){
  updateActiveNav();

  if(timelineEl && trackFill){
    const rect = timelineEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const visible = Math.min(Math.max(vh * 0.7 - rect.top, 0), total);
    const pct = total > 0 ? (visible / total) * 100 : 0;
    trackFill.style.height = pct + "%";
  }

  if(window.scrollY > 400) backToTop.classList.add("show");
  else backToTop.classList.remove("show");

  navbar.style.borderBottomColor = window.scrollY > 20 ? "var(--line-strong)" : "var(--line)";
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* also trigger momentum bar fill when 2026 card enters view */
function initMomentumFill(){
  const momentumFill = document.querySelector(".momentum-fill");
  if(!momentumFill) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        momentumFill.style.width = "48%";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  obs.observe(momentumFill);
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderOverviewCounts();
  renderSkills();
  renderGrowthMap();
  renderProjects(projects);
  renderCertificates();
  renderAchievements();
  renderMilestones();
  renderNextSteps();
  renderPerformanceGraph();
  observeReveals();
  initMomentumFill();
  updateOnScroll();
});
