import { Building2, Award } from "lucide-react";
import { ABOUT, CERTIFICATIONS, INDUSTRIES } from "../../data/content";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function About() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__inner">
        <AboutCopy visible={visible} />
        <AboutMedia visible={visible} />
      </div>
    </section>
  );
}

function AboutCopy({ visible }) {
  return (
    <div className={`about__copy fade-up ${visible ? "is-visible" : ""}`}>
      <div className="about__header">
        <div className="section-eyebrow">
          <div className="section-eyebrow__line" />
          <span className="section-eyebrow__label">About JWI Automation</span>
        </div>
        <h2 className="section-title">{ABOUT.heading}</h2>
      </div>

      {ABOUT.body.map((para, i) => (
        <p key={i} className="about__body-text">{para}</p>
      ))}

      <div className="about__industries">
        <div className="about__industries-label">Industries Served</div>
        <div className="about__industry-tags">
          {INDUSTRIES.map(industry => (
            <span key={industry} className="about__industry-tag">{industry}</span>
          ))}
        </div>
      </div>

      <div className="about__mv-grid">
        <div className="about__mv-card about__mv-card--mission">
          <div className="about__mv-label">Our Mission</div>
          <p className="about__mv-text">{ABOUT.mission}</p>
        </div>
        <div className="about__mv-card about__mv-card--vision">
          <div className="about__mv-label">Our Vision</div>
          <p className="about__mv-text">{ABOUT.vision}</p>
        </div>
      </div>
    </div>
  );
}

function AboutMedia({ visible }) {
  return (
    <div className={`about__media fade-up ${visible ? "is-visible" : ""}`} style={{ "--delay": "200ms" }}>
      <div className="about__photo-placeholder">
        <Building2 size={52} className="about__photo-icon" />
        <div className="about__photo-label">Company Photo</div>
      </div>

      <div className="about__certs">
        <div className="about__certs-label">Certifications & Accreditations</div>
        <div className="about__cert-list">
          {CERTIFICATIONS.map(cert => (
            <div key={cert} className="about__cert-item">
              <Award size={16} />
              <span className="about__cert-name">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
