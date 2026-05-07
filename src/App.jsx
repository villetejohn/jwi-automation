/* ── Global styles (import order matters) ── */
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/components/Navbar.css";
import "./styles/components/Hero.css";
import "./styles/components/Products.css";
import "./styles/components/Services.css";
import "./styles/components/Gallery.css";
import "./styles/components/WhyUs.css";
import "./styles/components/About.css";
import "./styles/components/Contact.css";
import "./styles/components/Footer.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import WhyUs from "./components/WhyUs/WhyUs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
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
