import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "../../data/content";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function Products() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="products" className="products" ref={ref}>
      <div className="section-inner">
        <div className={`products__header fade-up ${visible ? "is-visible" : ""}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow__line" />
            <span className="section-eyebrow__label">Our Products</span>
          </div>
          <h2 className="section-title">Complete Automation Product Range</h2>
          <p className="section-subtitle">
            Specializing in gate and barrier automation for residential and commercial clients, plus a full range of industrial automation equipment.
          </p>
        </div>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.title} product={product} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, visible, index }) {
  const Icon = product.icon;
  return (
    <div
      className={`product-card ${product.featured ? "product-card--featured" : ""} fade-up ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 60}ms` }}
    >
      {product.featured && <div className="product-card__tag">Specialty</div>}
      <div className="product-card__icon">
        <Icon size={22} />
      </div>
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__desc">{product.desc}</p>
      <span className="product-card__link">
        View Products <ChevronRight size={14} />
      </span>
    </div>
  );
}
