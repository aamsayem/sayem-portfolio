export type AboutTraitIcon = "graduationCap" | "palette" | "heart" | "shield" | "code" | "briefcase";

export type AboutTraitHref = string;

export type ClubIcon = "heart" | "shield" | "monitor" | "globe" | "users" | "droplets" | "megaphone" | "zap";

export type SocialIcon = "mail" | "github" | "linkedin" | "phone";

const isDev = import.meta.env.DEV;
const publicAssetBase = isDev ? "/" : import.meta.env.BASE_URL;

export const portfolioContent = {
  brandName: "Sayem",
  ownerName: "Abdullah Al Mahmud Sayem",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Clubs", href: "#clubs" },
    { label: "Achievements", href: "#design" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    intro: "Student - Designer - Volunteer - Entrepreneur",
    nameTop: "Abdullah Al",
    nameMiddle: "Mahmud",
    nameAccent: "Sayem.",
    summary:
      "A responsible and motivated individual with real experience in leading teams, organizing events, and helping people through social work. I enjoy working with others and always try to complete my tasks sincerely. I am looking for a chance to join a well-organized team where I can learn more, grow personally, and make a useful contribution to the work being done",
    resumeHref: `${publicAssetBase}Abdullah_Al_Mahmud_Sayem_Resume.pdf`,
    resumeLabel: "Download CV",
    contactLabel: "Get in touch",
    scrollLabel: "Scroll to explore",
  },
  about: {
    eyebrow: "About",
    title: "I thrive at the intersection of technology, design & community.",
    description:
      "I am a responsible and motivated individual with real experience in leading teams, organizing events, and helping people through social work. I enjoy working with others and always try to complete my tasks sincerely.",
    traits: [
      { icon: "graduationCap" as AboutTraitIcon, label: "BSc in CSE", desc: "International Islamic University Chittagong" },
      { icon: "palette" as AboutTraitIcon, label: "Designer", desc: "Graphics & visual experiences", href: "https://www.behance.net/aamsayem" },
      { icon: "heart" as AboutTraitIcon, label: "Volunteer Leader", desc: "Selfless Organization BD • General Secretary" },
      { icon: "shield" as AboutTraitIcon, label: "BNCC Cadet", desc: "Cadet Sargent • military training" },
      { icon: "code" as AboutTraitIcon, label: "Programmer", desc: "C, C++, Python, Java" },
      { icon: "briefcase" as AboutTraitIcon, label: "Entrepreneur", desc: "Running small ventures", href: "#ventures" },
    ],
  },
  clubs: {
    eyebrow: "Clubs & Volunteering",
    title: "Community is everything.",
    items: [
      {
        icon: "heart" as ClubIcon,
        name: "Selfless Organization BD",
        role: "General Secretary",
        desc: "Led relief and welfare programs including food, clothing, and education support for underprivileged communities. Assisted in rehabilitation, home repair, and empowerment projects for flood-affected families.",
        period: "10/2024 – Present",
      },
      {
        icon: "shield" as ClubIcon,
        name: "Bangladesh National Cadet Crops, BNCC",
        role: "Cadet Sargent",
        desc: "Led two military training programs. Participated in COVID-19 awareness campaigns.",
        period: "08/2019 – 08/2021",
      },
      {
        icon: "users" as ClubIcon,
        name: "Red Crescent Youth, Chittagong",
        role: "Deputy Team Leader-2, Red Crescent Unit, IIUC",
        desc: "",
        period: "06/2026 – Present",
      },
      {
        icon: "monitor" as ClubIcon,
        name: "IIUC Computer Club",
        role: "Event Secretary",
        desc: "",
        period: "09/2026 – Present",
      },
      {
        icon: "monitor" as ClubIcon,
        name: "IIUC Computer Club",
        role: "Assistant Social Welfare Secretary",
        desc: "Received the Most Dedicated Member Award.",
        period: "10/2025 – 09/2026",
      },
      {
        icon: "monitor" as ClubIcon,
        name: "IIUC Computer Club",
        role: "Executive Member",
        desc: "Volunteered in multiple departmental events including Farewell, Fresher's Reception, Ramadan Fest, and Sports Week. Contributed to organizing academic and co-curricular programs such as Orientation, View Exchange, and Programming Contest.",
        period: "10/2024 – 10/2025",
      },
      {
        icon: "users" as ClubIcon,
        name: "Cox's Bazar Students Welfare Association IIUC",
        role: "Office Secretary (ICT & Digital Records)",
        desc: "",
        period: "06/2026 – Present",
      },
      {
        icon: "users" as ClubIcon,
        name: "Cox's Bazar Students Welfare Association IIUC",
        role: "Assistant IT Secretary",
        desc: "Contributed to successful events including Reception, Farewell & Grand Iftar and Freshers & Merit Reception. Assisted in technical coordination, digital promotions, and multimedia management for organizational meetings, events, and official communications.",
        period: "02/2025 – 06/2026",
      },
      {
        icon: "globe" as ClubIcon,
        name: "IIUC Cyber Security Club",
        role: "Assistant Logistics & Events Secretary",
        desc: "Served as Assistant Logistics & Event Secretary at IIUC Cyber Security Club, contributing to the successful execution of major events including CyberQuest 101, Secure Insight Webinar, and Secure Coding 101. Coordinated logistics, registration, and event management tasks to ensure smooth operations and impactful participant engagement across workshops and webinars.",
        period: "05/2025 – 12/2025",
      },
      {
        icon: "droplets" as ClubIcon,
        name: "Lohagara Blood Donation Group",
        role: "General Member",
        desc: "Managed blood donors for patients and conducted awareness campaigns about blood donation. Personally donated blood.",
        period: "09/2025 – Present",
      },
      {
        icon: "megaphone" as ClubIcon,
        name: "ICT Olympiad",
        role: "Campus Ambassador",
        desc: "Most Promising Ambassador (Season 3), ICT Olympiad Bangladesh. Handled 2-day offline registration booth at IIUC campus.",
        period: "08/2025 – Present",
      },
      {
        icon: "zap" as ClubIcon,
        name: "SURGE Bangladesh",
        role: "Campus Ambassador",
        desc: "Handled full day offline registration booth and information session at IIUC campus.",
        period: "03/2026 – 08/2026",
      },
    ],
  },
  achievements: {
    eyebrow: "Achievements",
    title: "Certifications & awards.",
    certificationsLabel: "Certifications",
    awardsLabel: "Awards",
    verifyLabel: "Verify",
    idLabel: "ID",
    certifications: [
      {
        title: "Machine Learning I",
        issuer: "Columbia+",
        date: "Oct 2025",
        link: "https://badges.plus.columbia.edu/992b0908-6b5a-4b80-8455-03691999f1ca#acc.qin6fvD3",
        credentialId: "162242148",
      },
      {
        title: "Agent X - AI Prompt Engineering & Microsoft 365 Copilot",
        issuer: "Credential",
        date: "Sep 2025",
        link: "https://verify.certs365.io/?=128166210926",
        credentialId: "128166210926",
      },
      {
        title: "Basic Programming with Python",
        issuer: "EDGE",
        date: "Apr 2025",
        link: "https://training.edge.gov.bd/certificate-validation",
        credentialId: "EDGE-DSTS-104-1699-00025",
      },
      {
        title: "AI Prompt Engineer Level 1™ – AI CERTs®",
        issuer: "AI CERTs",
        date: "Aug 2025",
        link: "https://verify.certs365.io/?=439ee6c361f0",
        credentialId: "439ee6c361f0",
      },
    ],
    awards: [
      { title: "Physics Olympiad 2020 Regional Round Winner", org: "Bangladesh Physics Olympiad", date: "02/2020" },
      { title: "3rd Position in the CyberCamp101 Onsite Capture The Flag (CTF) Competition", org: "IIUC Cyber Security Club", date: "03/2026" },
      { title: "3rd place in Graphics Design Bootcamp 2025", org: "IIUC Developers & Entrepreneurs Society", date: "03/2026" },
      { title: "Champion at Volleyball", org: "Bangladesh National Cadet Corps", date: "11/2019" },
      { title: "Most Dedicated Member Award", org: "IIUC Computer Club", date: "06/2026" },
      { title: "Best Campus Ambassador", org: "SURGE Bangladesh", date: "09/2026" },
    ],
  },
  ventures: {
    eyebrow: "Ventures",
    titleTop: "Small businesses,",
    titleBottom: "big ambitions.",
    items: [
      {
        name: "Pico Picks",
        desc: "We import premium diecast cars, CCA, Hot Wheels, miniature items and many more.",
        status: "Active",
        mail: "picopicksbd@gmail.com",
        link: "https://www.facebook.com/picopicks",
      },
      {
        name: "Wizen",
        desc: "We import premium decorative items, katana swords, watches, special key rings, lights, toys and more.",
        status: "Active",
        mail: "wizenbd@gmail.com",
        link: "https://www.facebook.com/wizenbd",
      },
      {
        name: "Kiddiq",
        desc: "We offer premium imported toys for babies & kids that blend fun with learning - carefully selected for safety, quality, and brain development.",
        status: "Active",
        mail: "kiddiqbd@gmail.com",
        link: "https://www.facebook.com/kiddiqbd",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together.",
    description: "Whether you need a designer, a developer, or just want to chat about ideas - I'd love to hear from you.",
    location: "Uthman Ra Hall, IIUC, Kumira",
    footerNote: "Built with passion",
    socials: [
      { icon: "mail" as SocialIcon, label: "Email", href: "mailto:aamsayem01@gmail.com" },
      { icon: "github" as SocialIcon, label: "GitHub", href: "https://github.com/aamsayem" },
      { icon: "linkedin" as SocialIcon, label: "LinkedIn", href: "https://linkedin.com/in/aamsayem" },
      { icon: "phone" as SocialIcon, label: "Call", href: "tel:+8801886072936" },
    ],
  },
};
