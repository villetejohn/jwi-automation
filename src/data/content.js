import {
  Settings, Zap, Wind, Shield, Activity,
  Award, Briefcase, Users, Cpu, Home, Lock,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   IMAGE IMPORTS
   When you have real photos, uncomment and update the imports
   below, then set the corresponding `image:` field to the import.
   See src/assets/ASSETS.md for file locations and naming.
   ═══════════════════════════════════════════════════════════════

// ── Gallery — Residential ──
// import gateSubdivision from "../assets/images/gallery/residential/gate-subdivision.jpg";
// import gateCondo       from "../assets/images/gallery/residential/gate-condo.jpg";
// import gateVillage     from "../assets/images/gallery/residential/gate-village.jpg";

// ── Gallery — Commercial ──
// import barrierBuilding from "../assets/images/gallery/commercial/barrier-building.jpg";
// import hvacBms         from "../assets/images/gallery/commercial/hvac-bms.jpg";
// import campusSecurity  from "../assets/images/gallery/commercial/campus-security.jpg";

// ── Gallery — Industrial ──
// import plantAutomation  from "../assets/images/gallery/industrial/plant-automation.jpg";
// import panelFabrication from "../assets/images/gallery/industrial/panel-fabrication.jpg";
// import plcRetrofit      from "../assets/images/gallery/industrial/plc-retrofit.jpg";

// ── About ──
// import companyPhoto from "../assets/images/about/company-photo.jpg";

   ═══════════════════════════════════════════════════════════════ */

/* ── Replace placeholder text values before launch ── */

export const COMPANY = {
  name: "JWI Automation",
  tagline: "Your Trusted Automation Partner",
  eyebrow: "Gate Automation & Full-Service Industrial Solutions · Philippines",
  description:
    "JWI Automation specializes in residential gate and barrier automation, access control, and full-service industrial and commercial automation. From electric swing gates for subdivisions to PLC systems for manufacturing plants — we deliver reliable systems across the Philippines.",
  address: "Metro Manila, Philippines",
  phone: "+63 (2) 8XXX XXXX",
  mobile: "+63 9XX XXX XXXX",
  emailInfo: "info@jwiautomation.com",
  emailSales: "sales@jwiautomation.com",
  hours: "Mon–Fri: 8:00 AM – 5:30 PM",
  facebook: "#",
  stats: [
    { value: 15, suffix: "+", label: "Years in Business" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 80, suffix: "+", label: "Partner Brands" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ],
};

export const PRODUCTS = [
  {
    icon: Home,
    title: "Automatic Gate Systems",
    desc: "Electric swing gate operators, sliding gate motors, and complete automated entry systems for residential subdivisions, villages, and private properties. Brands: FAAC, BFT, CAME.",
    featured: true,
  },
  {
    icon: Lock,
    title: "Boom Barriers & Car Park Systems",
    desc: "Heavy-duty boom barriers, parking management systems, and vehicle detection loops for commercial buildings, condominiums, and industrial facilities.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Access Control & RFID",
    desc: "Card readers, biometric scanners, flap turnstiles, video intercoms, and integrated CCTV systems for complete perimeter and building security.",
    featured: true,
  },
  {
    icon: Cpu,
    title: "PLCs & Control Systems",
    desc: "Programmable Logic Controllers and SCADA systems from Siemens, Mitsubishi Electric, Omron, and Allen-Bradley for industrial process automation.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Control Panels & Switchgear",
    desc: "Custom-built MCC panels, distribution boards, power factor correction panels, and industrial switchgear fabricated to your specifications.",
    featured: false,
  },
  {
    icon: Wind,
    title: "HVAC & Building Automation",
    desc: "Intelligent building management systems, variable frequency drives, and HVAC controls for commercial and industrial buildings.",
    featured: false,
  },
  {
    icon: Activity,
    title: "Sensors & Field Instruments",
    desc: "Pressure, temperature, flow, and level transmitters — plus analyzers and calibration instruments for precise industrial process control.",
    featured: false,
  },
  {
    icon: Settings,
    title: "Traffic & Road Safety Equipment",
    desc: "Speed humps, road studs, traffic barriers, bollards, and road safety signage for infrastructure projects and private developments.",
    featured: false,
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Gate & Access System Installation",
    desc: "We supply and install complete automated gate and barrier systems — from site survey and civil works coordination through commissioning and handover.",
    features: ["Residential & commercial gate automation", "Boom barrier & car park setup", "Video intercom & access control integration"],
  },
  {
    number: "02",
    title: "Engineering & System Integration",
    desc: "We design, engineer, and integrate custom automation systems — from concept through commissioning — tailored precisely to your process or facility requirements.",
    features: ["PLC & SCADA programming", "HMI design & development", "Control network architecture"],
  },
  {
    number: "03",
    title: "Supply, Installation & Commissioning",
    desc: "Full turnkey supply and on-site installation of automation equipment and systems, managed by our licensed electrical and mechanical engineers.",
    features: ["Turnkey project delivery", "Electrical & mechanical installation", "Factory & site acceptance testing"],
  },
  {
    number: "04",
    title: "Preventive & Corrective Maintenance",
    desc: "Keep your systems running with scheduled maintenance programs and rapid-response corrective repair services — covering gates, barriers, and industrial systems.",
    features: ["Scheduled PM programs", "Emergency repair & response", "Spare parts supply & management"],
  },
];

export const GALLERY = [
  // image: null → shows placeholder. Replace null with the import variable when you have the photo.
  { label: "Residential Subdivision Gate",    category: "Residential", image: null /* gateSubdivision */ },
  { label: "Commercial Building Barrier",      category: "Commercial",  image: null /* barrierBuilding */ },
  { label: "Industrial Plant Automation",      category: "Industrial",  image: null /* plantAutomation */ },
  { label: "MCC Panel Fabrication",            category: "Industrial",  image: null /* panelFabrication */ },
  { label: "Condominium Access Control",       category: "Residential", image: null /* gateCondo */ },
  { label: "HVAC BMS Integration",             category: "Commercial",  image: null /* hvacBms */ },
  { label: "PLC Retrofit & Upgrade",           category: "Industrial",  image: null /* plcRetrofit */ },
  { label: "Village Gate Automation",          category: "Residential", image: null /* gateVillage */ },
  { label: "Campus Security Network",          category: "Commercial",  image: null /* campusSecurity */ },
];

export const GALLERY_FILTERS = ["All", "Residential", "Commercial", "Industrial"];

export const WHY_US = [
  {
    icon: Award,
    title: "Licensed & Certified Engineers",
    desc: "Our team of PRC-licensed electrical and mechanical engineers brings deep industry experience across residential, commercial, and industrial projects.",
  },
  {
    icon: Briefcase,
    title: "Complete Project Accountability",
    desc: "From design and supply through installation, commissioning, and after-sales support — one partner handles it all, with no gaps and no finger-pointing.",
  },
  {
    icon: Users,
    title: "Locally Present, Nationally Capable",
    desc: "Based in Metro Manila with the capability to deploy project teams across the Philippines. Fast response — whether it's a gate fault or a plant shutdown.",
  },
];

export const PARTNER_BRANDS = [
  "FAAC", "BFT", "CAME", "Siemens", "Mitsubishi Electric", "Omron", "Schneider Electric", "ABB",
];

export const CERTIFICATIONS = [
  "ISO 9001:2015",
  "PRC Licensed Engineers",
  "DICT Accredited",
  "PhilGEPS Registered",
];

export const INDUSTRIES = [
  "Residential & Villages",
  "Condominiums & HOAs",
  "Manufacturing & Processing",
  "Commercial & Retail",
  "Infrastructure & Government",
  "Logistics & Warehousing",
];

export const ABOUT = {
  // companyPhoto: null → shows placeholder box. Replace null with the import variable when ready.
  companyPhoto: null, /* companyPhoto */
  heading: "Built for Philippine Homes & Industry",
  body: [
    "JWI Automation is a full-service automation company serving residential, commercial, and industrial clients across the Philippines. We are best known for residential gate and barrier automation — helping subdivisions, villages, and private properties secure and automate their entry systems.",
    "Beyond gates, our licensed engineers deliver end-to-end industrial and building automation solutions — from PLC programming and control panel fabrication to HVAC integration and preventive maintenance. We don't just supply equipment — we take ownership of the outcome.",
  ],
  mission: "To provide Philippine homes and businesses with reliable automation solutions — from the front gate to the factory floor — backed by expert local engineers and lasting after-sales support.",
  vision: "To be the Philippines' most trusted automation partner for residential, commercial, and industrial clients across every region.",
};

export const FOOTER_LINKS = [
  {
    title: "Gate Systems",
    links: ["Automatic Gate Operators", "Boom Barriers", "Access Control", "Video Intercom", "Car Park Systems"],
  },
  {
    title: "Industrial",
    links: ["PLC & SCADA", "Control Panels", "HVAC & BMS", "Sensors & Instruments", "Road Safety"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Projects", "Certifications", "Careers", "Contact"],
  },
  {
    title: "Sectors",
    links: ["Residential", "Commercial", "Industrial", "Infrastructure", "Government"],
  },
];
