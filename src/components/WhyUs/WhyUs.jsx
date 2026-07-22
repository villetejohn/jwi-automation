import { useSiteContent } from "../../context/SiteContentContext";
import { ICON_MAP } from "../../data/iconMap";
import { useFadeIn } from "../../hooks/useFadeIn";
import { useCounter } from "../../hooks/useCounter";

export default function WhyUs() {
  const [ref, visible] = useFadeIn();

  return (
    <section ref={ref}>
      <StatsRow visible={visible} />
      <ValueProps visible={visible} />
      <BrandsBar visible={visible} />
    </section>
  );
}

function StatsRow({ visible }) {
  const { COMPANY } = useSiteContent();
  return (
    <div className="whyus-stats">
      <div className="whyus-stats__inner">
        {COMPANY.stats.map((stat, i) => (
          <StatBox key={i} {...stat} active={visible} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}

function StatBox({ value, suffix, label, active, delay }) {
  const count = useCounter(value, 1800, active);
  return (
    <div
      className={`whyus-stat fade-up ${active ? "is-visible" : ""}`}
      style={{ "--delay": `${delay}ms` }}
    >
      <div className="whyus-stat__value">{count}{suffix}</div>
      <div className="whyus-stat__label">{label}</div>
    </div>
  );
}

function ValueProps({ visible }) {
  const { WHY_US } = useSiteContent();
  return (
    <div className="whyus-values">
      <div className="whyus-values__inner">
        <div className={`whyus-values__header fade-up ${visible ? "is-visible" : ""}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow__line" />
            <span className="section-eyebrow__label">Why Choose Us</span>
          </div>
          <h2 className="section-title">The JWI Advantage</h2>
          <p className="section-subtitle">
            More than a supplier — a long-term partner that stands behind every system we deliver.
          </p>
        </div>

        <div className="whyus-values__grid">
          {WHY_US.map((item, i) => (
            <ValueCard key={item.title} item={item} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ item, visible, index }) {
  const Icon = ICON_MAP[item.icon] || ICON_MAP.Award;
  return (
    <div
      className={`value-card fade-up ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 100}ms` }}
    >
      <div className="value-card__icon"><Icon size={24} /></div>
      <h3 className="value-card__title">{item.title}</h3>
      <p className="value-card__desc">{item.desc}</p>
    </div>
  );
}

function BrandsBar({ visible }) {
  const { PARTNER_BRANDS } = useSiteContent();
  return (
    <div className="brands-bar">
      <div className={`brands-bar__inner fade-up ${visible ? "is-visible" : ""}`}>
        <span className="brands-bar__label">Authorized Distributor</span>
        <div className="brands-bar__divider" />
        {PARTNER_BRANDS.map(brand => (
          <span key={brand} className="brands-bar__brand">{brand}</span>
        ))}
      </div>
    </div>
  );
}
