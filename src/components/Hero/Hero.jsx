import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";

export default function Hero() {
  const { COMPANY } = useSiteContent();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const cls = `hero-fade ${loaded ? "is-loaded" : ""}`;

  return (
    <section id="home" className="hero">
      <div className="hero__grid" />
      <div className="hero__glow-top" />
      <div className="hero__glow-bottom" />

      <div className="hero__body">
        <div className="hero__inner">
          <div className={cls} style={{ "--delay": "0ms" }}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span className="hero__badge-text">{COMPANY.eyebrow}</span>
            </div>
          </div>

          <h1 className={`hero__title ${cls}`} style={{ "--delay": "150ms" }}>
            {COMPANY.tagline}
          </h1>

          <p className={`hero__desc ${cls}`} style={{ "--delay": "300ms" }}>
            {COMPANY.description}
          </p>

          <div className={`hero__ctas ${cls}`} style={{ "--delay": "450ms" }}>
            <a href="#products" className="hero__btn-primary">
              Explore Solutions <ArrowRight size={16} />
            </a>
            <a href="#contact" className="hero__btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>

      <div className={`hero__stat-bar ${cls}`} style={{ "--delay": "600ms" }}>
        <div className="hero__stat-bar-inner">
          {COMPANY.stats.map((stat, i) => (
            <div key={i} className="hero__stat">
              <div className="hero__stat-value">{stat.value}{stat.suffix}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`hero__scroll-indicator ${cls}`} style={{ "--delay": "700ms" }}>
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
