// ============================================
// LUV OS — Desktop
// Every icon is a shortcut. Edit here to add clients.
// ============================================

export const clients = [
  // ── system
  { id: 'looterio', name: 'Looterio', icon: '🌐', iconType: 'image', iconSrc: 'icons/looterio.png', iconClass: 'raw', href: 'https://looterstudio.xyz/looterio/' },
  { id: 'louv', name: 'Snowball', icon: 'S', iconType: 'image', iconSrc: 'snowball.png', isSpecial: true, action: 'about' },
  { id: 'mi-pc', name: 'My Computer', icon: '🖥️', iconType: 'image', iconSrc: 'icons/computer.svg', isSpecial: true, action: 'about' },
  { id: 'papelera', name: 'Recycle Bin', icon: '🗑️', iconType: 'image', iconSrc: 'icons/bin.svg', isSpecial: true, action: 'recycle' },
  // ── games (they never open, like the good old days)
  { id: 'vice-city', name: 'Vice City', icon: '🌴', iconType: 'image', iconSrc: 'icons/vicecity.png', isSpecial: true, action: 'game' },
  { id: 'tibia', name: 'Tibia', icon: '⚔️', iconType: 'image', iconSrc: 'icons/tibia.png', isSpecial: true, action: 'game' },
  // ── clients
  { id: 'villarroel', name: 'Clínica Villarroel', icon: '🦷', iconType: 'image', iconSrc: 'icons/villarroel.png', iconClass: 'app', url: 'https://clinica-villarroel.vercel.app', description: 'Clínica Odontológica Villarroel, Cochabamba. A full clinic management system: database, clinical records and odontograms, appointments, payments, document storage, a patient portal, an AI assistant, and the website on top.', services: ['Software', 'Database', 'Management system', 'Website', 'AI'] },
  { id: 'client-002', name: 'Client 002', icon: '📁', iconType: 'folder', description: 'In progress.', services: ['soon'] },
  { id: 'client-003', name: 'Client 003', icon: '📁', iconType: 'folder', description: 'In progress.', services: ['soon'] },
  { id: 'start', name: 'Start a project', icon: '✉️', iconType: 'image', iconSrc: 'icons/mail.svg', isSpecial: true, action: 'contact' },
];

export const services = {
  web: { title: '🌐 Websites', description: 'Landing pages, stores, and full sites. Designed to look like a real company and built to convert.', items: ['Landing pages', 'E-commerce', 'Web apps', 'SEO and speed', 'Hosting and domains'] },
  software: { title: '💻 Software', description: 'Custom software, automation, and AI. The things that make a business run without you.', items: ['Dashboards', 'Automation', 'AI agents', 'APIs and integrations', 'Mobile apps'] },
  ads: { title: '📢 Ads', description: 'Meta, Google, TikTok. Campaigns with a budget, a target, and a number at the end.', items: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Creatives', 'Analytics and reporting'] },
  branding: { title: '🎨 Branding', description: 'Name, logo, identity, voice. The part people remember.', items: ['Logo and identity', 'Brand book', 'Packaging', 'Art direction', 'Naming'] },
  social: { title: '📱 Social', description: 'Content that looks like it costs money. Instagram, TikTok, X.', items: ['Content strategy', 'Design and video', 'Community', 'Growth', 'Launches'] },
};
