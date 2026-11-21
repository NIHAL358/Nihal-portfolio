const paths = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.9 13.3A9 9 0 0 1 10.7 3.1a9 9 0 1 0 10.2 10.2Z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  github: '<path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1-.1-1.4-.5-1.8 3-.4 5.5-1.4 5.5-5.5a4.2 4.2 0 0 0-1.1-3 4 4 0 0 0-.1-3.1s-1-.3-3.2 1.1a13 13 0 0 0-6.2 0C7.2 3.8 6.2 4.1 6.2 4.1a4 4 0 0 0-.1 3.1A4.2 4.2 0 0 0 5 10.2c0 4.1 2.5 5.1 5.5 5.5-.4.4-.5.9-.5 1.8V21"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7m0-10v.1M12 17v-7m0 3a2 2 0 0 1 4 0v4"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  terminal: '<path d="m4 6 6 6-6 6m9 0h7"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14a8 3 0 0 0 16 0V5M4 12a8 3 0 0 0 16 0"/>',
  spark: '<path d="M12 2c0 6-4 10-10 10 6 0 10 4 10 10 0-6 4-10 10-10-6 0-10-4-10-10Z"/>',
  box: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 20V12L3 7m9 5 9-5"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2m2-15a3 3 0 0 1 0 6m4 9v-2a5 5 0 0 0-3-4.6"/>',
  up: '<path d="m6 14 6-6 6 6"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  whatsapp: '<path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"/><path d="M9.4 8.2 8.7 7.5c-.5.1-1 .7-1 1.4 0 2.9 3.6 6.3 6 6.4.9 0 1.7-.6 1.9-1.3l-1.9-1-1 .8c-1.3-.5-2.6-1.8-3.1-3.1l.8-.9-1-1.6Z"/>',
};

export function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths[name] + '</svg>';
}
