import { Home, Settings, Shield, Wrench, CheckCircle } from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";
import { useFadeIn } from "../../hooks/useFadeIn";

const SERVICE_ICONS = [Home, Settings, Wrench, Shield];

export default function Services() {
  const { SERVICES } = useSiteContent();
  const [ref, visible] = useFadeIn();

  return (
    <section id="services" className="services" ref={ref}>
      <div className="section-inner">
        <div className={`services__header fade-up ${visible ? "is-visible" : ""}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow__line" />
            <span className="section-eyebrow__label">What We Do</span>
          </div>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            End-to-end service delivery — from gate automation for homes to full-scale industrial systems.
          </p>
        </div>

        <div className="services__list">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.number} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index, visible }) {
  const Icon = SERVICE_ICONS[index];
  return (
    <div
      className={`service-row fade-up ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 110}ms` }}
    >
      <div className="service-row__main">
        <span className="service-row__number">{service.number}</span>
        <div className="service-row__content">
          <div className="service-row__title-row">
            <div className="service-row__icon">
              <Icon size={16} />
            </div>
            <h3 className="service-row__title">{service.title}</h3>
          </div>
          <p className="service-row__desc">{service.desc}</p>
        </div>
      </div>

      <div className="service-row__features">
        <ul className="service-row__feature-list">
          {service.features.map((feature) => (
            <li key={feature} className="service-row__feature-item">
              <CheckCircle size={16} className="service-row__feature-icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
