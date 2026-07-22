import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Products", "Services", "Gallery", "About", "Contact"];

// Must match the max-width in Navbar.css's burger-menu media query — this
// is the width the desktop link row reappears at, so the JS-driven mobile
// dropdown state needs to reset in sync with it.
const MOBILE_BREAKPOINT = 1080;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Resizing or rotating past the breakpoint while the dropdown is open
    // (e.g. a tablet going portrait -> landscape) would otherwise leave it
    // stuck open underneath the now-visible desktop nav.
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar__inner">
        <Logo />
        <div className="navbar__links">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="navbar__link">{link}</a>
          ))}
          <a href="#contact" className="navbar__cta">Get a Quote</a>
        </div>
        <button className="navbar__burger" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="navbar__mobile-cta">Get a Quote</a>
        </div>
      )}
    </nav>
  );
}

function Logo() {
  return (
    <a href="#home" className="navbar__logo">
      <div className="navbar__logo-name">
        JWI<span className="navbar__logo-dot">.</span>
      </div>
      <div className="navbar__logo-sub">Automation</div>
    </a>
  );
}
