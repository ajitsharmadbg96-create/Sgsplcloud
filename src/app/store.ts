// Shared content store — persists to localStorage, used by both site and admin

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  color: string;
}

export interface AboutContent {
  tagline: string;
  heading: string;
  para1: string;
  para2: string;
  highlights: string[];
  badge: string;
  badgeSub: string;
}

export interface ContactContent {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  read: boolean;
}

export interface SiteData {
  hero: HeroContent;
  services: ServiceItem[];
  about: AboutContent;
  contact: ContactContent;
  settings: SiteSettings;
  enquiries: Enquiry[];
}

const STORAGE_KEY = "sgspl_site_data";

const defaultData: SiteData = {
  settings: {
    companyName: "SGSPL CLOUD",
    tagline: "IT SERVICES",
  },
  hero: {
    badge: "GROWING IT STARTUP · EST. 2022",
    headline: "Powering Your Business\nWith Smart IT Solutions",
    subheadline:
      "SGSPL CLOUD is a young, agile IT services company built on personal attention and genuine expertise. We treat every client as a long-term partner — not just a ticket number.",
    stat1Label: "Happy Clients",
    stat2Label: "Years in Business",
    stat3Label: "Client Retention",
  },
  services: [
    { id: "1", title: "Cloud Services", desc: "Migrate, manage, and optimize your workloads on AWS, Azure, and GCP. We handle cloud architecture, deployment, and ongoing management.", color: "#1e88e5" },
    { id: "2", title: "Cybersecurity", desc: "Comprehensive security assessments, firewall management, endpoint protection, and compliance consulting to safeguard your business.", color: "#0a7c59" },
    { id: "3", title: "Server & Data Center", desc: "On-premise and co-location server solutions, hardware procurement, installation, and lifecycle management.", color: "#6d28d9" },
    { id: "4", title: "Networking Solutions", desc: "Structured cabling, LAN/WAN design, SD-WAN, and network monitoring to keep your business always connected.", color: "#c05621" },
    { id: "5", title: "IT Support & AMC", desc: "Annual maintenance contracts, 24/7 helpdesk, remote and on-site support with guaranteed SLAs.", color: "#0a2463" },
    { id: "6", title: "Software Solutions", desc: "Custom software development, ERP/CRM implementation, and digital transformation consulting.", color: "#b91c1c" },
    { id: "7", title: "Data Backup & Recovery", desc: "Automated backup solutions, disaster recovery planning, and business continuity services.", color: "#065f46" },
    { id: "8", title: "Internet & Connectivity", desc: "Leased line, broadband, MPLS, and VPN solutions for seamless connectivity across locations.", color: "#1e40af" },
  ],
  about: {
    tagline: "About Us",
    heading: "Your Reliable Technology Partner",
    para1: "SGSPL CLOUD is a lean, focused IT services startup founded in 2022. We started with a simple belief: small and mid-sized businesses deserve the same quality of IT support that large enterprises enjoy — without the enterprise price tag.",
    para2: "With a hands-on approach and direct access to our technical team, we work as an extension of your business — helping you stay secure, connected, and productive. Every client gets our full attention.",
    highlights: [
      "Personalised service — you deal directly with the expert",
      "Fast response times with no bureaucratic delays",
      "Flexible engagement — hourly, project, or retainer",
      "Honest pricing with no hidden charges",
      "Hands-on support for small and growing businesses",
      "Transparent communication at every step",
    ],
    badge: "100%",
    badgeSub: "Client Retention Rate",
  },
  contact: {
    phone: "+91-7982023117",
    email: "sales@sgspl.cloud",
    address: "India",
    officeHours: "Mon–Sat, 9am–7pm IST",
  },
  enquiries: [],
};

export function loadSiteData(): SiteData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const saved = JSON.parse(raw) as Partial<SiteData>;
    return {
      settings: { ...defaultData.settings, ...saved.settings },
      hero: { ...defaultData.hero, ...saved.hero },
      services: saved.services ?? defaultData.services,
      about: { ...defaultData.about, ...saved.about },
      contact: { ...defaultData.contact, ...saved.contact },
      enquiries: saved.enquiries ?? [],
    };
  } catch {
    return defaultData;
  }
}

export function saveSiteData(data: SiteData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event("sitedata"));
}

export function addEnquiry(enquiry: Omit<Enquiry, "id" | "date" | "read">) {
  const data = loadSiteData();
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false,
  };
  data.enquiries = [newEnquiry, ...data.enquiries];
  saveSiteData(data);
}

// Auth helpers
const AUTH_KEY = "sgspl_admin_auth";
export const ADMIN_USER = "admin";
export const ADMIN_PASS = "sgspl@2024";

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login(user: string, pass: string): boolean {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
