import { useState } from "react";
import { Image } from "lucide-react";
import { useSiteContent } from "../../context/SiteContentContext";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function Gallery() {
  const { GALLERY, GALLERY_FILTERS } = useSiteContent();
  const [ref, visible] = useFadeIn();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? GALLERY : GALLERY.filter(g => g.category === activeFilter);

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="section-inner">
        <div className={`gallery__header fade-up ${visible ? "is-visible" : ""}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow__line" />
            <span className="section-eyebrow__label">Project Gallery</span>
          </div>
          <div className="gallery__title-row">
            <h2 className="section-title">Our Work in the Field</h2>
            <div className="gallery__filters">
              {GALLERY_FILTERS.map(f => (
                <button
                  key={f}
                  className={`gallery__filter-btn ${activeFilter === f ? "is-active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gallery__grid">
          {filtered.map((item, i) => (
            <GalleryCard key={item.label} item={item} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, visible, index }) {
  return (
    <div
      className={`gallery-card fade-up ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 55}ms` }}
    >
      {item.image ? (
        <img src={item.image} alt={item.label} className="gallery-card__img" />
      ) : (
        <div className="gallery-card__placeholder">
          <Image size={36} className="gallery-card__placeholder-icon" />
          <span className="gallery-card__placeholder-text">Photo Coming Soon</span>
        </div>
      )}
      <div className="gallery-card__badge">{item.category}</div>
      <div className="gallery-card__overlay">
        <span className="gallery-card__overlay-label">{item.label}</span>
      </div>
    </div>
  );
}
