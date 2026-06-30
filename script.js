"use strict";

/* ===== Translations ===== */
const STR = {
  en: {
    navAbout: "about", navStack: "stack", navProjects: "projects", navEdu: "education", navContact: "contact",
    heroKicker: "> software & data engineer", heroRole: "Software & Data Engineer",
    heroTagline: "I build reliable data pipelines and scalable backend systems that turn raw data into products people can trust.",
    heroCta1: "View projects", heroCta2: "Get in touch", heroStatus: "available for new projects",
    whoamiOut: "Alpha Oumar Diallo - Software & Data Engineer",
    aboutLabel: "about", aboutHeading: "whoami",
    aboutP1: "Software & Data Engineering student looking for an apprenticeship to design end-to-end solutions, from the data pipeline all the way to the web interface.",
    aboutP2: "On the data/AI side: ETL pipelines, relational and NoSQL databases, distributed processing with Spark, machine learning models and containerised deployment (Docker). On the development side: performant frontend and full-stack web apps. Schedule: 3 weeks company / 1 week school. Available immediately.",
    factLocation: "Paris, France", factFocus: "Data Eng · Backend", factLangs: "FR / EN",
    stackLabel: "stack", stackHeading: "tech I work with",
    projectsLabel: "projects", projectsHeading: "selected work",
    linkCode: "code", linkLive: "live",
    eduLabel: "education", eduHeading: "background",
    contactLabel: "contact", contactHeading: "Let's build something",
    contactP: "Open to data engineering and backend roles, freelance work and interesting collaborations. The fastest way to reach me is email.",
    contactCta: "Send a message",
    footer: "Built with care · © " + new Date().getFullYear() + " Alpha Oumar Diallo"
  },
  fr: {
    navAbout: "à propos", navStack: "stack", navProjects: "projets", navEdu: "formation", navContact: "contact",
    heroKicker: "> ingénieur logiciel & data", heroRole: "Ingénieur Logiciel & Data",
    heroTagline: "Je conçois des pipelines de données fiables et des systèmes backend scalables qui transforment la donnée brute en produits de confiance.",
    heroCta1: "Voir les projets", heroCta2: "Me contacter", heroStatus: "disponible pour de nouveaux projets",
    whoamiOut: "Alpha Oumar Diallo - Ingénieur Logiciel & Data",
    aboutLabel: "à propos", aboutHeading: "whoami",
    aboutP1: "Étudiant en cycle Ingénieur Logiciel & Data Engineering, je recherche une alternance pour concevoir des solutions de bout en bout, du pipeline de données jusqu'à l'interface web.",
    aboutP2: "Côté data/IA : pipelines ETL, bases relationnelles et NoSQL, traitement distribué avec Spark, modèles de machine learning et déploiement conteneurisé (Docker). Côté développement : applications web frontend et full stack performantes. Rythme : 3 semaines entreprise / 1 semaine école. Disponible immédiatement.",
    factLocation: "Paris, France", factFocus: "Data Eng · Backend", factLangs: "FR / EN",
    stackLabel: "stack", stackHeading: "technologies que j'utilise",
    projectsLabel: "projets", projectsHeading: "projets sélectionnés",
    linkCode: "code", linkLive: "démo",
    eduLabel: "formation", eduHeading: "parcours",
    contactLabel: "contact", contactHeading: "Construisons ensemble",
    contactP: "Ouvert aux postes en data engineering et backend, au freelance et aux collaborations intéressantes. Le plus simple pour me joindre reste l'email.",
    contactCta: "Envoyer un message",
    footer: "Conçu avec soin · © " + new Date().getFullYear() + " Alpha Oumar Diallo"
  }
};

/* ===== Data ===== */
function buildStack(fr) {
  return [
    { n: "01", title: fr ? "Langages" : "Languages", items: ["HTML", "CSS", "JavaScript", "Python", "SQL"] },
    { n: "02", title: "Frontend", items: ["React.js", "Vue.js", "Angular", "Tailwind CSS"] },
    { n: "03", title: "Backend / API", items: ["Node.js", "FastAPI", "Flask"] },
    { n: "04", title: "Data & Machine Learning", items: ["ETL", "pandas", "NumPy", "scikit-learn", "PySpark", "TensorFlow/Keras", "PyTorch", "Matplotlib", "Streamlit"] },
    { n: "05", title: fr ? "Bases de données" : "Databases", items: ["PostgreSQL", "MySQL", "Apache Cassandra", "Parquet", "Access"] },
    { n: "06", title: "DevOps & Cloud", items: ["Docker", "Docker Compose", "Git", "GitHub", "GitLab", "CI/CD", "AWS", "Vercel", "Netlify"] },
    { n: "07", title: fr ? "Outils" : "Tools", items: ["Jupyter", "Anaconda", "Power BI", "Excel", "Postman"] }
  ];
}

function buildProjects(fr) {
  return [
    {
      n: "01", name: "Feedback Widget",
      blurb: fr
        ? "SaaS multi-tenant pour collecter les retours visiteurs : un simple script à intégrer sur n'importe quel site, isolation stricte par projet, clés API et API publique validée par Zod."
        : "Multi-tenant SaaS for collecting visitor feedback: embed a single script tag on any site, strict per-project isolation, opaque API keys and a Zod-validated public API.",
      metric: "multi-tenant", metricLabel: "SaaS",
      tags: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "Auth.js"],
      repo: "https://github.com/Oumarjalloh/feedback-widget", demo: "https://feedback-widget-mu-gray.vercel.app"
    },
    {
      n: "02", name: "Meta Eraser",
      blurb: fr
        ? "Application web qui supprime les métadonnées sensibles des images et PDF, entièrement dans le navigateur — aucun serveur, aucune donnée envoyée, tout reste en local."
        : "Web app that strips sensitive metadata from images and PDFs entirely in the browser — no server, no upload, everything stays on the user's machine.",
      metric: "100%", metricLabel: fr ? "côté client" : "client-side",
      tags: ["React", "pdf-lib", "Canvas API", "privacy"],
      repo: "https://github.com/Oumarjalloh/Suppression-m-ta-donn-e", demo: "https://suppression-m-ta-donn-e.vercel.app/"
    },
    {
      n: "03", name: fr ? "Analyse du Churn Client" : "Customer Churn Analysis",
      blurb: fr
        ? "Projet data complet de prédiction du churn télécom : nettoyage, EDA, modèle Random Forest et recommandations business actionnables."
        : "End-to-end churn prediction for a telecom: data cleaning, EDA, a Random Forest model and actionable business recommendations.",
      metric: "0.84", metricLabel: "AUC-ROC",
      tags: ["Python", "Pandas", "Scikit-learn", "Power BI"],
      repo: "https://github.com/Oumarjalloh/projet-churn-Data-Analyst-", demo: ""
    },
    {
      n: "04", name: fr ? "Forecast Retail & Stock" : "Retail Forecast & Stock",
      blurb: fr
        ? "Projet data science end-to-end pour le retail : forecast multi-produits (SARIMAX, LightGBM), backtesting sMAPE/WAPE, reco de stock par service level, API FastAPI et dashboard Streamlit."
        : "End-to-end retail data science: multi-product forecasting (SARIMAX, LightGBM), sMAPE/WAPE backtesting, service-level stock recommendation, a FastAPI service and a Streamlit dashboard.",
      metric: "sMAPE", metricLabel: fr ? "backtest" : "backtested",
      tags: ["LightGBM", "SARIMAX", "FastAPI", "Streamlit"],
      repo: "https://github.com/Oumarjalloh/retail-forecast-inventory-Data-science", demo: ""
    },
    {
      n: "05", name: fr ? "Détection du cancer pulmonaire" : "Lung Cancer Detection",
      blurb: fr
        ? "Système multimodal : un modèle ML sur données cliniques et un CNN sur radiographies thoraciques fusionnés pour prédire le risque de malignité, exposé via une app Streamlit."
        : "Multimodal system fusing an ML model on clinical data with a CNN on chest X-rays to predict nodule malignancy risk, served through a Streamlit app.",
      metric: "multimodal", metricLabel: "ML + DL",
      tags: ["scikit-learn", "TensorFlow", "Keras", "Streamlit"],
      repo: "https://github.com/Oumarjalloh/D-tection-du-cancer-pulmonaire",
      demo: "https://d-tection-du-cancer-pulmonaire-ju3uchmstwfzzt9diqnmrh.streamlit.app/"
    }
  ];
}

function buildEducation(fr) {
  return [
    { period: "2024 — 2027", degree: fr ? "Ingénieur Logiciel & Data Engineering" : "Software & Data Engineering", school: "E.S.I.C, Paris" },
    { period: "2022 — 2023", degree: fr ? "Prépa Master Full Stack" : "Full Stack Master Prep", school: "IIM Digital School, Paris" },
    { period: "2019 — 2022", degree: fr ? "Licence Informatique de Gestion" : "B.Sc. Business Computing", school: "EPSIEL, Fès, Maroc" }
  ];
}

/* ===== Helpers ===== */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ===== Rendering ===== */
function renderStack(fr) {
  document.getElementById("stack-grid").innerHTML = buildStack(fr).map(function (g) {
    return '<div class="card">' +
      '<div class="card-head">' +
        '<span class="card-num">' + escapeHtml(g.n) + '</span>' +
        '<span class="card-title">' + escapeHtml(g.title) + '</span>' +
      '</div>' +
      '<div class="pills">' +
        g.items.map(function (it) { return '<span class="pill">' + escapeHtml(it) + '</span>'; }).join('') +
      '</div>' +
    '</div>';
  }).join('');
}

function renderProjects(fr, t) {
  document.getElementById("projects-grid").innerHTML = buildProjects(fr).map(function (p) {
    var demoLink = p.demo
      ? '<a href="' + escapeHtml(p.demo) + '" target="_blank" rel="noopener" class="project-link">↗ ' + escapeHtml(t.linkLive) + '</a>'
      : '';
    return '<div class="project-card">' +
      '<div class="project-top">' +
        '<span class="project-num">' + escapeHtml(p.n) + '</span>' +
        '<div class="project-metric">' +
          '<div class="project-metric-val">' + escapeHtml(p.metric) + '</div>' +
          '<div class="project-metric-label">' + escapeHtml(p.metricLabel) + '</div>' +
        '</div>' +
      '</div>' +
      '<h3 class="project-name">' + escapeHtml(p.name) + '</h3>' +
      '<p class="project-blurb">' + escapeHtml(p.blurb) + '</p>' +
      '<div class="pills project-tags">' +
        p.tags.map(function (tg) { return '<span class="pill pill--sm">' + escapeHtml(tg) + '</span>'; }).join('') +
      '</div>' +
      '<div class="project-links">' +
        '<a href="' + escapeHtml(p.repo) + '" target="_blank" rel="noopener" class="project-link"><span class="t-accent">&lt;/&gt;</span> ' + escapeHtml(t.linkCode) + '</a>' +
        demoLink +
      '</div>' +
    '</div>';
  }).join('');
}

function renderEducation(fr) {
  document.getElementById("education-timeline").innerHTML = buildEducation(fr).map(function (ed) {
    return '<div class="timeline-item">' +
      '<span class="timeline-dot"></span>' +
      '<div class="timeline-period">' + escapeHtml(ed.period) + '</div>' +
      '<div class="timeline-degree">' + escapeHtml(ed.degree) + '</div>' +
      '<div class="timeline-school">' + escapeHtml(ed.school) + '</div>' +
    '</div>';
  }).join('');
}

/* ===== State & controls ===== */
function applyLang(lang) {
  var dict = STR[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  var fr = lang === "fr";
  renderStack(fr);
  renderProjects(fr, dict);
  renderEducation(fr);
  document.documentElement.lang = lang;
  document.getElementById("lang-fr").classList.toggle("lang-btn--active", fr);
  document.getElementById("lang-en").classList.toggle("lang-btn--active", !fr);
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "☾";
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

/* ===== Init ===== */
(function init() {
  var savedTheme, savedLang;
  try { savedTheme = localStorage.getItem("theme"); savedLang = localStorage.getItem("lang"); } catch (e) {}

  applyTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark");
  applyLang(savedLang === "en" ? "en" : "fr");

  document.getElementById("lang-fr").addEventListener("click", function () { applyLang("fr"); });
  document.getElementById("lang-en").addEventListener("click", function () { applyLang("en"); });
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
})();
