import { projects, settings, skills } from "./content.js";
import { icon } from "./icons.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function iconNode(name, className) {
  const node = element("span", "", className);
  node.innerHTML = icon(name);
  return node;
}

function tags(items) {
  const list = element("ul", "", "tags");
  for (const [label, logo] of items) {
    const item = element("li", label);
    if (logo) {
      const image = element("img");
      image.src = "./icons/" + logo + ".svg";
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => image.remove());
      item.prepend(image);
    }
    list.append(item);
  }
  return list;
}

for (const [name, glyph, technologies] of skills) {
  const card = element("article", "", "skill-card");
  card.append(iconNode(glyph, "tile"), element("h3", name), tags(technologies));
  $("#skill-grid").append(card);
}

function projectArt([name, background, glow, tiles]) {
  const art = element("div", "", "art");
  art.setAttribute("aria-hidden", "true");
  art.style.setProperty("--art-bg", background);
  art.style.setProperty("--glow", glow);
  const window = element("div", "", "mock-window");
  const header = element("div", "", "mock-head");
  header.append(element("span", "● ● ●"), element("span", "Concept illustration"));
  const body = element("div", "", "mock-content");
  const grid = element("div", "", "mock-tiles");
  for (const [label, glyph] of tiles) {
    const tile = element("div");
    tile.append(iconNode(glyph), element("span", label));
    grid.append(tile);
  }
  body.append(element("strong", name), grid);
  window.append(header, body);
  art.append(window);
  return art;
}

for (const project of projects) {
  const card = element("article", "", "project");
  const copy = element("div", "", "project-copy");
  if (project.type) copy.append(element("p", project.type, "eyebrow"));
  copy.append(element("h3", project.title), element("p", project.description), tags(project.tags.map((tag) => [tag])));
  if (project.features?.length) {
    const details = element("details");
    const list = element("ul");
    for (const feature of project.features) list.append(element("li", feature));
    details.append(element("summary", "Project features"), list);
    copy.append(details);
  }
  const links = element("div", "", "buttons project-links");
  for (const [label, url] of [["Live Demo", project.demo], ["Source Code", project.source]]) {
    if (!url || !URL.canParse(url) || new URL(url).protocol !== "https:") continue;
    const link = element("a", label, "button secondary");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    links.append(link);
  }
  if (links.childElementCount) copy.append(links);
  card.append(projectArt(project.art), copy);
  $("#project-grid").append(card);
}

for (const node of $$("[data-icon]")) node.innerHTML = icon(node.dataset.icon);
$("#year").textContent = new Date().getFullYear();

const whatsappMessage = "Hi Nihal, I visited your portfolio and would like to connect with you regarding a project or opportunity.";
for (const link of $$("[data-whatsapp]")) {
  const url = new URL(link.href);
  url.searchParams.set("text", whatsappMessage);
  link.href = url;
}
if (settings.resume) {
  const resume = $("[data-resume]");
  resume.href = settings.resume;
  resume.hidden = false;
}

const theme = $("#theme");
const root = document.documentElement;
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
const currentTheme = () => root.dataset.theme || (systemTheme.matches ? "dark" : "light");
function syncThemeLabel() {
  theme.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode");
}
theme.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  try { localStorage.setItem("nihal-theme", nextTheme); } catch {}
  syncThemeLabel();
});
systemTheme.addEventListener("change", syncThemeLabel);
syncThemeLabel();

const menu = $("#menu-toggle");
const nav = $("#nav-links");
function toggleMenu(open) {
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}
menu.addEventListener("click", () => toggleMenu(!nav.classList.contains("open")));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    toggleMenu(false);
    menu.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menu.contains(event.target)) toggleMenu(false);
});
const sections = $$("#nav-links a").map((link) => [link, $(link.hash)]);
for (const [link, section] of sections) {
  link.addEventListener("click", () => {
    if (!nav.classList.contains("open")) return;
    toggleMenu(false);
    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
  });
}
const backTop = $("#back-top");
function updateScroll() {
  let activeLink = sections[0][0];
  for (const [link, section] of sections) {
    if (section.getBoundingClientRect().top <= 115) activeLink = link;
  }
  for (const [link] of sections) {
    if (link === activeLink) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  backTop.hidden = scrollY < 600;
}
let scrollPending = false;
addEventListener("scroll", () => {
  if (scrollPending) return;
  scrollPending = true;
  requestAnimationFrame(() => {
    scrollPending = false;
    updateScroll();
  });
}, { passive: true });
addEventListener("resize", updateScroll);
updateScroll();

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const roles = ["Python Backend Developer", "Full Stack Developer", "Django Developer", "Software Developer"];
const role = $("#role");
let roleIndex = 0;
setInterval(() => {
  if (reduceMotion.matches || document.hidden) return;
  role.classList.add("changing");
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    role.textContent = roles[roleIndex];
    role.classList.remove("changing");
  }, 200);
}, 3300);
if ("IntersectionObserver" in window && !reduceMotion.matches) {
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("revealed");
      reveal.unobserve(entry.target);
    }
  }, { threshold: .12 });
  for (const card of $$(".skill-card, .project, .timeline-card, .specialty, .learning")) reveal.observe(card);
}

const form = $("#contact-form");
const submit = form.querySelector("button[type=submit]");
const status = $("#form-status");
const sendLabel = $("#send-label");
const configured = Boolean(settings.contactEndpoint);
submit.disabled = !configured;
if (configured) status.textContent = "";
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!configured || submit.disabled) return;
  const values = new FormData(form);
  if (values.get("_gotcha")) return;
  for (const field of ["name", "email", "subject", "message"]) {
    if (!values.get(field).trim()) {
      status.dataset.state = "error";
      status.textContent = "Please complete all required fields.";
      form.elements.namedItem(field).focus();
      return;
    }
  }
  submit.disabled = true;
  status.dataset.state = "loading";
  status.textContent = "Sending your message…";
  sendLabel.textContent = "Sending…";
  try {
    const response = await fetch(settings.contactEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: values,
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    status.dataset.state = "success";
    status.textContent = "Thanks for reaching out. Your message was submitted.";
  } catch {
    status.dataset.state = "error";
    status.textContent = "Your message could not be confirmed. Try again or reach me by email or WhatsApp.";
  } finally {
    submit.disabled = false;
    sendLabel.textContent = "Send Message";
  }
});
