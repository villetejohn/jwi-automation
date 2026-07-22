import { useState, useEffect } from "react";
import { ArrowUp, Phone, Mail } from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";

export default function Footer() {
  const { FOOTER_LINKS, COMPANY } = useSiteContent();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__topbar">
        <div className="footer__topbar-inner">
          <span className="footer__topbar-tagline">
            Serving residential, commercial, and industrial clients nationwide
          </span>
          <div className="footer__topbar-contacts">
            <a href={`tel:${COMPANY.phone}`} className="footer__topbar-link">
              <Phone size={13} /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.emailInfo}`} className="footer__topbar-link">
              <Mail size={13} /> {COMPANY.emailInfo}
            </a>
          </div>
        </div>
      </div>

      <div className="footer__body">
        <div className="footer__columns">
          <BrandColumn />
          {FOOTER_LINKS.map(col => (
            <LinkColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026 JWI Automation. All rights reserved. Philippines 🇵🇭
          </span>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {showTop && (
        <button
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}

function BrandColumn() {
  return (
    <div className="footer__brand">
      <div className="footer__logo">
        <div className="footer__logo-name">
          JWI<span className="footer__logo-dot">.</span>
        </div>
        <div className="footer__logo-sub">Automation</div>
      </div>
      <p className="footer__brand-desc">
        Full-service automation for Philippine homes and industry — from the front gate to the factory floor.
      </p>
    </div>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <div className="footer__col-title">{title}</div>
      {links.map(link => (
        <a key={link} href="#" className="footer__col-link">{link}</a>
      ))}
    </div>
  );
}
