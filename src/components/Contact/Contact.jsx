import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { COMPANY, SERVICES } from "../../data/content";
import { useFadeIn } from "../../hooks/useFadeIn";

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: COMPANY.facebook },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
];

const CONTACT_DETAILS = [
  { Icon: MapPin, label: "Address", value: (c) => c.address },
  { Icon: Phone, label: "Phone", value: (c) => `${c.phone}\n${c.mobile}` },
  { Icon: Mail, label: "Email", value: (c) => `${c.emailInfo}\n${c.emailSales}` },
  { Icon: Clock, label: "Business Hours", value: (c) => c.hours },
];

export default function Contact() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__inner">
        <div className={`contact__header fade-up ${visible ? "is-visible" : ""}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow__line" />
            <span className="section-eyebrow__label">Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            Send us your project requirements and our engineering team will get back to you within one business day.
          </p>
        </div>

        <div className="contact__grid">
          <ContactDetails visible={visible} />
          <InquiryForm visible={visible} />
        </div>
      </div>
    </section>
  );
}

function ContactDetails({ visible }) {
  return (
    <div className={`contact-details fade-up ${visible ? "is-visible" : ""}`} style={{ "--delay": "100ms" }}>
      <h3 className="contact-details__title">Contact Information</h3>
      <div className="contact-details__items">
        {CONTACT_DETAILS.map(({ Icon, label, value }) => (
          <div key={label} className="contact-detail-item">
            <div className="contact-detail-item__icon-wrap"><Icon size={16} /></div>
            <div>
              <div className="contact-detail-item__label">{label}</div>
              <div className="contact-detail-item__value">{value(COMPANY)}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="contact-details__divider" />
        <div className="contact-details__socials">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a key={label} href={href} title={label} className="contact-details__social-btn">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function InquiryForm({ visible }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));
  const handleSubmit = () => { if (form.name && form.email && form.message) setSent(true); };

  if (sent) {
    return (
      <div className={`contact-form fade-up ${visible ? "is-visible" : ""}`} style={{ "--delay": "200ms" }}>
        <div className="contact-form__success">
          <div className="contact-form__success-icon"><CheckCircle size={36} /></div>
          <h3 className="contact-form__success-title">Inquiry Sent!</h3>
          <p className="contact-form__success-text">
            Thank you for reaching out. Our engineering team will contact you within 1 business day.
          </p>
          <button className="contact-form__success-btn" onClick={() => setSent(false)}>
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`contact-form fade-up ${visible ? "is-visible" : ""}`} style={{ "--delay": "200ms" }}>
      <div className="contact-form__grid">
        {[
          { key: "name", label: "Full Name *", placeholder: "Juan dela Cruz" },
          { key: "company", label: "Company", placeholder: "Your Company Inc." },
          { key: "email", label: "Email Address *", placeholder: "juan@company.ph" },
          { key: "phone", label: "Phone Number", placeholder: "+63 9XX XXX XXXX" },
        ].map(({ key, label, placeholder }) => (
          <div key={key}>
            <label className="contact-form__label">{label}</label>
            <input className="contact-form__input" value={form[key]} onChange={update(key)} placeholder={placeholder} />
          </div>
        ))}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">Service Interest</label>
        <select className="contact-form__select" value={form.service} onChange={update("service")}>
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
          <option value="Products">Product Inquiry / Quotation</option>
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label">Message *</label>
        <textarea
          className="contact-form__textarea"
          value={form.message}
          onChange={update("message")}
          placeholder="Describe your project, gate type, equipment needed, or inquiry..."
          rows={5}
        />
      </div>

      <button className="contact-form__submit" onClick={handleSubmit}>
        Send Inquiry <ArrowRight size={16} />
      </button>
    </div>
  );
}
