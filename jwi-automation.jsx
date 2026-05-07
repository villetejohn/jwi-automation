import { useState, useEffect, useRef } from "react";
import {
  Settings, Zap, Wind, Shield, AlertTriangle, Activity,
  ChevronRight, Phone, Mail, MapPin, Clock, Menu, X,
  ArrowUp, Facebook, Linkedin, Twitter, Instagram,
  CheckCircle, Award, Users, Briefcase, Wrench, FileSearch,
  ArrowRight
} from "lucide-react";

/* ─── PLACEHOLDER CONTENT — replace before launch ─── */
const COMPANY = {
  name: "JWI Automation",
  tagline: "Powering Industry Through Automation",
  eyebrow: "Philippines' Trusted Automation Partner",
  description:
    "End-to-end automation solutions for industrial, commercial, and infrastructure sectors across the Philippines.",
  address: "Unit 12, Greenfield Industrial Complex, Mandaluyong City, Metro Manila, Philippines",
  phone: "+63 (2) 8123 4567",
  mobile: "+63 917 800 5500",
  email: "info@jwiautomation.ph",
  hours: "Mon–Fri: 8:00 AM – 5:30 PM",
  stats: [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "+", label: "Partner Brands" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ],
};

const PRODUCTS = [
  { icon: Settings, title: "Industrial Machinery", desc: "Heavy-duty automation machinery for manufacturing lines, assembly systems, and process automation." },
  { icon: Zap, title: "Control Panels & Switchgear", desc: "Custom-engineered electrical control panels, MCC panels, and distribution switchgear." },
  { icon: Wind, title: "HVAC & Building Automation", desc: "Smart HVAC systems and building management solutions for commercial and industrial facilities." },
  { icon: Shield, title: "RFID & Access Control", desc: "Advanced RFID readers, access control systems, car barriers, and security integration." },
  { icon: AlertTriangle, title: "Traffic & Safety Systems", desc: "Traffic management systems, barriers, bollards, speed humps, and safety equipment." },
  { icon: Activity, title: "Sensors & Instruments", desc: "Field instrumentation, sensors, transducers, and measurement devices for precise process control." },
];

const SERVICES = [
  {
    number: "01",
    title: "System Integration",
    desc: "We design and build custom automation systems tailored precisely to your operational processes — from concept to commissioning.",
    features: ["PLC/SCADA integration", "HMI development", "Network & communication design"],
  },
  {
    number: "02",
    title: "Installation & Commissioning",
    desc: "Our certified engineers handle full on-site deployment, ensuring every system is installed safely and operating at peak performance.",
    features: ["On-site project management", "Electrical installation", "Testing & validation"],
  },
  {
    number: "03",
    title: "Preventive Maintenance",
    desc: "Protect your investment with scheduled maintenance programs designed to minimize downtime and extend equipment lifespan.",
    features: ["Scheduled inspection plans", "Emergency corrective maintenance", "Spare parts management"],
  },
  {
    number: "04",
    title: "Consulting & Design",
    desc: "Our senior engineers assess your facility and design the most efficient automation architecture for your specific requirements.",
    features: ["Engineering feasibility studies", "System layout & design", "Cost-benefit analysis"],
  },
];

const GALLERY = [
  { label: "Industrial Plant Automation", category: "Industrial", color: "#1a1a1a" },
  { label: "Commercial Building BMS", category: "Commercial", color: "#161612" },
  { label: "Access Control Installation", category: "Infrastructure", color: "#1a1714" },
  { label: "Switchgear Panel Build", category: "Industrial", color: "#141414" },
  { label: "Traffic Management System", category: "Infrastructure", color: "#181814" },
  { label: "HVAC Control Integration", category: "Commercial", color: "#1a1a16" },
  { label: "PLC Programming & Retrofit", category: "Industrial", color: "#161616" },
  { label: "Warehouse Automation", category: "Industrial", color: "#1a1816" },
  { label: "Campus Security Network", category: "Commercial", color: "#141618" },
];

const WHY_US = [
  { icon: Award, title: "Expert Engineers", desc: "Our team of licensed electrical and mechanical engineers brings decades of combined experience across industries." },
  { icon: Briefcase, title: "End-to-End Service", desc: "From initial consultation and design through installation, commissioning, and ongoing maintenance — one partner, complete accountability." },
  { icon: Users, title: "Local Support", desc: "Headquartered in Metro Manila with service reach across the Philippines. We're always close when you need us." },
];
/* ─── END PLACEHOLDER CONTENT ─── */

/* ─── Animation hook ─── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Counter hook ─── */
function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

/* ─── Shared styles ─── */
const S = {
  section: "py-24 px-6 md:px-12 lg:px-20",
  eyebrow: "text-[11px] font-semibold tracking-[0.2em] uppercase mb-4",
  h2: "text-5xl md:text-6xl font-normal leading-none mb-6",
  orangeLine: "w-12 h-[3px] bg-orange-500 mb-8",
};

/* ════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home", "Products", "Services", "Gallery", "About", "Contact"];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,13,13,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ cursor: "pointer" }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, lineHeight: 1, color: "#F2F0EC", letterSpacing: "0.05em" }}>
            JWI<span style={{ color: "#E8520A" }}>.</span>
          </div>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", color: "#9A9590", fontWeight: 600, textTransform: "uppercase", borderTop: "2px solid #E8520A", paddingTop: 2, marginTop: 2 }}>
            AUTOMATION
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "#9A9590", fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#F2F0EC"}
              onMouseLeave={e => e.target.style.color = "#9A9590"}>
              {l}
            </a>
          ))}
          <a href="#contact" style={{ background: "#E8520A", color: "#fff", padding: "10px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em", textDecoration: "none", textTransform: "uppercase", transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = "#FF6620"}
            onMouseLeave={e => e.target.style.background = "#E8520A"}>
            Get a Quote
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#F2F0EC", cursor: "pointer", display: "none" }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0D0D0D", borderTop: "1px solid #252525", padding: "16px 24px 24px" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: "block", color: "#F2F0EC", fontSize: 16, fontWeight: 600, padding: "12px 0", borderBottom: "1px solid #1a1a1a", textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="#contact" style={{ display: "block", background: "#E8520A", color: "#fff", padding: "12px 20px", textAlign: "center", fontWeight: 700, marginTop: 16, textDecoration: "none" }}>
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media(max-width: 768px){ .hidden-mobile{display:none!important} .show-mobile{display:block!important} }
        @media(min-width: 769px){ .show-mobile{display:none!important} }
      `}</style>
    </nav>
  );
}

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const fadeUp = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      background: "#0D0D0D", position: "relative", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.07,
        backgroundImage: "linear-gradient(#E8520A 1px, transparent 1px), linear-gradient(90deg, #E8520A 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      {/* Orange diagonal accent */}
      <div style={{
        position: "absolute", top: -120, right: -80, width: 420, height: 420,
        background: "radial-gradient(circle, rgba(232,82,10,0.18) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", bottom: 60, left: -100, width: 300, height: 300,
        background: "radial-gradient(circle, rgba(232,82,10,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 24px 60px", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={fadeUp(0)}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              {COMPANY.eyebrow}
            </span>
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(56px, 9vw, 108px)",
          lineHeight: 0.95, color: "#F2F0EC",
          letterSpacing: "0.02em", margin: "0 0 24px",
          maxWidth: 900,
          ...fadeUp(150),
        }}>
          {COMPANY.tagline}
        </h1>

        <p style={{ color: "#9A9590", fontSize: "clamp(16px, 2vw, 19px)", maxWidth: 560, lineHeight: 1.7, marginBottom: 40, ...fadeUp(300) }}>
          {COMPANY.description}
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", ...fadeUp(450) }}>
          <a href="#products" style={{
            background: "#E8520A", color: "#fff", padding: "14px 32px", fontWeight: 700,
            fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8, transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#FF6620"}
            onMouseLeave={e => e.currentTarget.style.background = "#E8520A"}>
            Explore Solutions <ArrowRight size={16} />
          </a>
          <a href="#contact" style={{
            border: "1px solid #9A9590", color: "#F2F0EC", padding: "14px 32px", fontWeight: 600,
            fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#E8520A"; e.currentTarget.style.color = "#E8520A"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#9A9590"; e.currentTarget.style.color = "#F2F0EC"; }}>
            Contact Us
          </a>
        </div>
      </div>

      {/* Stat bar */}
      <div style={{
        borderTop: "1px solid #252525", background: "rgba(20,20,20,0.9)",
        backdropFilter: "blur(8px)", position: "relative", zIndex: 2,
        ...fadeUp(600),
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 24px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        }}>
          {COMPANY.stats.map((s, i) => (
            <div key={i} style={{
              padding: "24px 16px", textAlign: "center",
              borderRight: i < COMPANY.stats.length - 1 ? "1px solid #252525" : "none",
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: "#E8520A", lineHeight: 1 }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ color: "#9A9590", fontSize: 12, letterSpacing: "0.1em", marginTop: 4, textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PRODUCTS
════════════════════════════════════════════ */
function Products() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="products" ref={ref} style={{ background: "#141414", padding: "96px 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Our Products</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: 0 }}>
            Complete Automation Product Range
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: "#252525" }}>
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} style={{
                background: "#0D0D0D", padding: "36px 32px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${i * 80}ms`,
                cursor: "pointer", position: "relative", overflow: "hidden",
                borderLeft: "3px solid transparent",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = "#E8520A"; e.currentTarget.style.background = "#141414"; }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.background = "#0D0D0D"; }}>
                <div style={{ width: 48, height: 48, background: "rgba(232,82,10,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={22} color="#E8520A" />
                </div>
                <h3 style={{ color: "#F2F0EC", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: "#9A9590", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <span style={{ color: "#E8520A", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  View Products <ChevronRight size={14} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SERVICES
════════════════════════════════════════════ */
function Services() {
  const [ref, visible] = useFadeIn();
  const serviceIcons = [Wrench, Settings, Shield, FileSearch];

  return (
    <section id="services" ref={ref} style={{ background: "#0D0D0D", padding: "96px 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s ease", marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>What We Do</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: 0 }}>
            Our Core Services
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SERVICES.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 0, borderTop: "1px solid #252525",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(24px)",
                transition: `all 0.6s ease ${i * 120}ms`,
              }}>
                {/* Number + Title col */}
                <div style={{
                  padding: "48px 40px 48px 0",
                  borderRight: "1px solid #252525",
                  display: "flex", alignItems: "flex-start", gap: 24,
                }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72, color: "#252525", lineHeight: 1, minWidth: 60 }}>{s.number}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <Icon size={18} color="#E8520A" />
                      <h3 style={{ color: "#F2F0EC", fontSize: 22, fontWeight: 700, margin: 0 }}>{s.title}</h3>
                    </div>
                    <p style={{ color: "#9A9590", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
                {/* Features col */}
                <div style={{ padding: "48px 0 48px 40px", display: "flex", alignItems: "center" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: 12, color: "#9A9590", fontSize: 14 }}>
                        <CheckCircle size={16} color="#E8520A" style={{ flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid #252525" }} />
        </div>
      </div>
      <style>{`@media(max-width:768px){#services .service-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ════════════════════════════════════════════
   GALLERY
════════════════════════════════════════════ */
function Gallery() {
  const [ref, visible] = useFadeIn();
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Industrial", "Commercial", "Infrastructure"];

  const filtered = filter === "All" ? GALLERY : GALLERY.filter(g => g.category === filter);

  return (
    <section id="gallery" ref={ref} style={{ background: "#141414", padding: "96px 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Project Gallery</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: 0 }}>
              Our Work in the Field
            </h2>
            <div style={{ display: "flex", gap: 8 }}>
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  background: filter === f ? "#E8520A" : "transparent",
                  border: `1px solid ${filter === f ? "#E8520A" : "#252525"}`,
                  color: filter === f ? "#fff" : "#9A9590",
                  padding: "8px 16px", fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer",
                  transition: "all 0.2s",
                }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
          {filtered.map((g, i) => (
            <div key={g.label} style={{
              aspectRatio: "4/3", background: g.color,
              position: "relative", overflow: "hidden", cursor: "pointer",
              border: "1px solid #252525",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: `all 0.5s ease ${i * 60}ms`,
            }}
              onMouseEnter={e => {
                e.currentTarget.querySelector(".ov").style.opacity = 1;
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector(".ov").style.opacity = 0;
              }}>
              {/* Placeholder visual */}
              <div style={{
                position: "absolute", inset: 0,
                background: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(232,82,10,0.04) 20px, rgba(232,82,10,0.04) 21px)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Settings size={40} color="#252525" />
              </div>
              {/* Category badge */}
              <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(13,13,13,0.8)", padding: "4px 10px", fontSize: 10, color: "#9A9590", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {g.category}
              </div>
              {/* Hover overlay */}
              <div className="ov" style={{
                position: "absolute", inset: 0, background: "rgba(232,82,10,0.85)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 0.3s",
              }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, textAlign: "center", padding: "0 20px" }}>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   WHY CHOOSE US + STATS
════════════════════════════════════════════ */
function WhyUs() {
  const [ref, visible] = useFadeIn();

  function StatBox({ value, suffix, label, active, delay }) {
    const count = useCounter(value, 1800, active);
    return (
      <div style={{
        textAlign: "center", padding: "40px 16px",
        opacity: active ? 1 : 0, transform: active ? "none" : "translateY(20px)",
        transition: `all 0.6s ease ${delay}ms`,
        borderRight: "1px solid #252525",
      }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 72, color: "#E8520A", lineHeight: 1 }}>
          {count}{suffix}
        </div>
        <div style={{ color: "#9A9590", fontSize: 13, letterSpacing: "0.12em", marginTop: 8, textTransform: "uppercase" }}>{label}</div>
      </div>
    );
  }

  return (
    <section ref={ref} style={{ background: "#0D0D0D", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Stats row */}
      <div style={{ borderTop: "1px solid #252525", borderBottom: "1px solid #252525" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {COMPANY.stats.map((s, i) => (
            <StatBox key={i} {...s} active={visible} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Value props */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 24px" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Why Choose Us</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: 0 }}>
            The JWI Advantage
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2, background: "#252525" }}>
          {WHY_US.map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={i} style={{
                background: "#0D0D0D", padding: "48px 36px",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 100}ms`,
                borderTop: "3px solid #E8520A",
              }}>
                <div style={{ width: 52, height: 52, background: "rgba(232,82,10,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Icon size={24} color="#E8520A" />
                </div>
                <h3 style={{ color: "#F2F0EC", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{w.title}</h3>
                <p style={{ color: "#9A9590", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════ */
function About() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="about" ref={ref} style={{ background: "#141414", padding: "96px 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>About JWI Automation</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: "0 0 24px" }}>
            Built for Philippine Industry
          </h2>
          <p style={{ color: "#9A9590", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            Founded over a decade ago, JWI Automation has grown to become one of the Philippines' most trusted providers of industrial and commercial automation solutions. We serve clients across manufacturing, real estate, infrastructure, logistics, and government sectors.
          </p>
          <p style={{ color: "#9A9590", fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
            Our team of licensed engineers and certified technicians is committed to delivering not just products — but complete, reliable systems that keep your operations running at peak efficiency.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#252525" }}>
            {[
              { label: "Our Mission", text: "To empower Philippine businesses with world-class automation technology, delivered with local expertise and lasting support." },
              { label: "Our Vision", text: "To be the leading end-to-end automation partner for every industry sector in the Philippines." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0D0D0D", padding: "28px 24px", borderTop: `3px solid ${i === 0 ? "#E8520A" : "#252525"}` }}>
                <div style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{item.label}</div>
                <p style={{ color: "#9A9590", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s 0.2s" }}>
          {/* Placeholder image */}
          <div style={{
            background: "#0D0D0D", border: "1px solid #252525",
            aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 2, position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(232,82,10,0.03) 30px, rgba(232,82,10,0.03) 31px)",
            }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <Briefcase size={48} color="#252525" />
              <div style={{ color: "#252525", fontSize: 12, marginTop: 12, fontWeight: 600, letterSpacing: "0.1em" }}>COMPANY PHOTO</div>
            </div>
          </div>
          {/* Certifications strip */}
          <div style={{ background: "#0D0D0D", border: "1px solid #252525", padding: "24px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ color: "#9A9590", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Certifications:</span>
            {["ISO 9001", "PEC Licensed", "DICT Accredited", "PhilGEPS Registered"].map(c => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, color: "#9A9590", fontSize: 13 }}>
                <Award size={14} color="#E8520A" /> {c}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about>div>div:first-child,#about>div>div:last-child{grid-column:1/-1}#about>div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ════════════════════════════════════════════
   CONTACT
════════════════════════════════════════════ */
function Contact() {
  const [ref, visible] = useFadeIn();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" ref={ref} style={{ background: "#0D0D0D", padding: "96px 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8520A" }} />
            <span style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>Get In Touch</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", color: "#F2F0EC", margin: 0 }}>
            Let's Build Something Together
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 2, background: "#252525" }}>
          {/* Contact details */}
          <div style={{ background: "#141414", padding: "48px 40px", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s 0.1s" }}>
            <h3 style={{ color: "#F2F0EC", fontSize: 20, fontWeight: 700, marginBottom: 36 }}>Contact Information</h3>
            {[
              { icon: MapPin, label: "Address", value: COMPANY.address },
              { icon: Phone, label: "Phone", value: `${COMPANY.phone}\n${COMPANY.mobile}` },
              { icon: Mail, label: "Email", value: COMPANY.email },
              { icon: Clock, label: "Business Hours", value: COMPANY.hours },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(232,82,10,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="#E8520A" />
                  </div>
                  <div>
                    <div style={{ color: "#E8520A", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ color: "#9A9590", fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid #252525", paddingTop: 28, marginTop: 8, display: "flex", gap: 12 }}>
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <div key={i} style={{
                  width: 40, height: 40, border: "1px solid #252525",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#E8520A"; e.currentTarget.style.background = "rgba(232,82,10,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#252525"; e.currentTarget.style.background = "transparent"; }}>
                  <Icon size={16} color="#9A9590" />
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#0D0D0D", padding: "48px 40px", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s 0.2s" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16 }}>
                <CheckCircle size={56} color="#E8520A" />
                <h3 style={{ color: "#F2F0EC", fontSize: 22, fontWeight: 700 }}>Inquiry Sent!</h3>
                <p style={{ color: "#9A9590", textAlign: "center" }}>Thank you for reaching out. Our team will contact you within 1 business day.</p>
                <button onClick={() => setSent(false)} style={{ border: "1px solid #252525", background: "none", color: "#9A9590", padding: "10px 24px", cursor: "pointer", fontSize: 13 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { key: "name", label: "Full Name *", placeholder: "Juan dela Cruz" },
                    { key: "company", label: "Company", placeholder: "Your Company Inc." },
                    { key: "email", label: "Email Address *", placeholder: "juan@company.ph" },
                    { key: "phone", label: "Phone Number", placeholder: "+63 9XX XXX XXXX" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", color: "#9A9590", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{f.label}</label>
                      <input value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        style={{ width: "100%", background: "#141414", border: "1px solid #252525", color: "#F2F0EC", padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "'DM Sans', sans-serif" }}
                        onFocus={e => e.target.style.borderColor = "#E8520A"}
                        onBlur={e => e.target.style.borderColor = "#252525"}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: "#9A9590", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Service Interest</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ width: "100%", background: "#141414", border: "1px solid #252525", color: form.service ? "#F2F0EC" : "#9A9590", padding: "12px 14px", fontSize: 14, outline: "none", fontFamily: "'DM Sans', sans-serif", appearance: "none" }}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    <option value="Products">Product Inquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", color: "#9A9590", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Message *</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project or inquiry..."
                    rows={5}
                    style={{ width: "100%", background: "#141414", border: "1px solid #252525", color: "#F2F0EC", padding: "12px 14px", fontSize: 14, outline: "none", resize: "vertical", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#E8520A"}
                    onBlur={e => e.target.style.borderColor = "#252525"}
                  />
                </div>
                <button onClick={handleSubmit} style={{
                  width: "100%", background: "#E8520A", color: "#fff",
                  padding: "14px", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#FF6620"}
                  onMouseLeave={e => e.currentTarget.style.background = "#E8520A"}>
                  Send Inquiry <ArrowRight size={16} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contact>div>div:last-child{grid-template-columns:1fr!important;grid-column:1/-1}#contact>div>div:first-child{grid-column:1/-1}}`}</style>
    </section>
  );
}

/* ════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════ */
function Footer() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const fn = () => setTop(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const cols = [
    { title: "Products", links: ["Industrial Machinery", "Control Panels", "HVAC Systems", "RFID & Access", "Traffic Safety", "Sensors & Instruments"] },
    { title: "Services", links: ["System Integration", "Installation", "Maintenance", "Consulting & Design"] },
    { title: "Company", links: ["About Us", "Our Projects", "Certifications", "Careers", "Blog"] },
    { title: "Connect", links: ["Facebook", "LinkedIn", "Instagram", "YouTube"] },
  ];

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #252525", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: "#F2F0EC" }}>
                JWI<span style={{ color: "#E8520A" }}>.</span>
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.3em", color: "#9A9590", fontWeight: 600, textTransform: "uppercase", borderTop: "2px solid #E8520A", paddingTop: 2, marginTop: 2, display: "inline-block" }}>
                AUTOMATION
              </div>
            </div>
            <p style={{ color: "#9A9590", fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              End-to-end automation solutions for Philippine industry. Built on expertise, delivered with integrity.
            </p>
          </div>
          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ color: "#F2F0EC", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ color: "#9A9590", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#E8520A"}
                    onMouseLeave={e => e.target.style.color = "#9A9590"}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #252525", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "#9A9590", fontSize: 13 }}>
            © 2026 JWI Automation. All rights reserved. Built in the Philippines 🇵🇭
          </span>
          <span style={{ color: "#252525", fontSize: 13 }}>Privacy Policy · Terms of Service</span>
        </div>
      </div>

      {/* Back to top */}
      {top && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
          position: "fixed", bottom: 32, right: 32, width: 48, height: 48,
          background: "#E8520A", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 99, transition: "background 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#FF6620"}
          onMouseLeave={e => e.currentTarget.style.background = "#E8520A"}>
          <ArrowUp size={20} color="#fff" />
        </button>
      )}
    </footer>
  );
}

/* ════════════════════════════════════════════
   APP ROOT
════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0D0D0D; color: #F2F0EC; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: #E8520A; }
        input::placeholder, textarea::placeholder { color: #3a3a3a; }
        @media(max-width:768px){
          #about>div{grid-template-columns:1fr!important; gap:40px!important}
          #contact>div>div:last-child>div:first-child{grid-template-columns:1fr!important}
          section > div > div:last-child { grid-column: unset!important }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Gallery />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
