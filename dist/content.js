// Set resume to "./resume.pdf" after adding your CV to dist/.
// Set contactEndpoint to your verified Formspree URL or compatible POST endpoint.
export const settings = {
  resume: "",
  contactEndpoint: "",
};

export const skills = [
  ["Programming Languages", "code", [["Python", "python"], ["JavaScript", "javascript"], ["TypeScript", "typescript"], ["SQL"]]],
  ["Backend Development", "terminal", [["Django", "django"], ["Flask", "flask"], ["REST APIs"], ["Backend Application Development"]]],
  ["Frontend Development", "layers", [["React.js", "react"], ["Next.js", "nextjs"], ["HTML5", "html5"], ["CSS3", "css3"], ["Tailwind CSS", "tailwindcss"], ["Bootstrap", "bootstrap"], ["Redux", "redux"], ["Material UI", "materialui"]]],
  ["Databases", "database", [["MySQL", "mysql"], ["PostgreSQL", "postgresql"]]],
  ["Developer Tools", "box", [["Git", "git"], ["GitHub", "github"], ["Postman", "postman"], ["VS Code", "vscode"]]],
];

// Set demo and source to verified HTTPS URLs to show the corresponding buttons.
export const projects = [
  {
    title: "Brikzaa — Construction Marketplace",
    type: "Hackathon Project",
    tags: ["React.js", "Vercel"],
    description: "A construction marketplace prototype that brings equipment, skilled workers, and raw materials into one digital platform. It helps users browse construction listings and discover relevant products and services.",
    features: ["Construction resource categories", "Marketplace browsing interface", "User-friendly navigation", "Deployed hackathon prototype"],
    art: ["Brikzaa", "#243b49", "#6c92a8", [["Equipment", "box"], ["Skilled workers", "users"], ["Materials", "layers"]]],
    demo: "", source: "",
  },
  {
    title: "CRM Management System",
    type: "Live Team Project",
    tags: ["React.js", "Django", "PostgreSQL", "REST APIs"],
    description: "A full-stack customer relationship management application designed to organize customer records, manage sales leads, and track follow-up activities.",
    features: ["Customer record management", "Sales lead management", "Follow-up workflows", "Django REST API integration", "Relational database models"],
    art: ["CRM workspace", "#283b4e", "#809bb4", [["Customers", "users"], ["Leads", "layers"], ["Follow-ups", "mail"]]],
    demo: "", source: "",
  },
  {
    title: "Python E-commerce Website",
    tags: ["Python"],
    description: "A Python-based e-commerce application focused on server-side programming, maintainable backend code, and supporting online shopping workflows.",
    art: ["Store backend", "#243e48", "#568c9b", [["Catalog", "box"], ["Orders", "layers"], ["Backend", "terminal"]]],
    demo: "", source: "",
  },
  {
    title: "E-commerce Frontend",
    tags: ["Next.js"],
    description: "A responsive e-commerce storefront developed using reusable Next.js components, consistent product layouts, and intuitive navigation.",
    art: ["Storefront", "#343d4a", "#8294a9", [["Product grid", "layers"], ["Browse", "box"], ["Navigation", "menu"]]],
    demo: "", source: "",
  },
];
