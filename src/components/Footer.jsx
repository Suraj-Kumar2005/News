import { useEffect, useRef, useState } from "react";
import profileImage from "../assets/studio_photo1.png";
import { categories } from "../constants/categories";

const gmailIcon = "https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png";
const linkedinIcon = "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png";

const Footer = ({ category, setCategory }) => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="container app-footer-wrap">
      <div className="app-footer glass-panel">
        <div ref={footerRef} className={`footer-motion ${isVisible ? "show" : ""}`}>
          <div className="footer-glow" aria-hidden="true" />
          <div className="footer-main">
            <section className="footer-profile footer-animated-item" aria-label="Profile" style={{ "--footer-delay": "0ms" }}>
              <img className="footer-avatar" src={profileImage} alt="Suraj Kumar" />
              <div>
                <h2 className="footer-name">Suraj Kumar</h2>
                <p className="footer-subtitle">Curating news with clean UI & seamless UX</p>
              </div>
            </section>

            <section className="footer-section footer-explore footer-animated-item" aria-labelledby="footer-explore" style={{ "--footer-delay": "120ms" }}>
              <h3 id="footer-explore" className="footer-heading">Explore</h3>
              <div className="footer-category-grid">
                {categories.map((item) => (
                  <button
                    className={`footer-category-pill ${category === item ? "is-active" : ""}`}
                    type="button"
                    key={item}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

      

            <section className="footer-section footer-animated-item" aria-labelledby="footer-contact" style={{ "--footer-delay": "360ms" }}>
              <h3 id="footer-contact" className="footer-heading">Contact</h3>
              <a className="footer-icon-link" href="mailto:gmail-surajkumardba2005@gmail.com" aria-label="Email Suraj Kumar">
                <img className="footer-brand-icon" src={gmailIcon} alt="" />
              </a>
            </section>

            <section className="footer-section footer-animated-item" aria-labelledby="footer-social" style={{ "--footer-delay": "480ms" }}>
              <h3 id="footer-social" className="footer-heading">Social</h3>
              <a
                className="footer-icon-link"
                href="https://www.linkedin.com/in/surajkumar2005/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Suraj Kumar LinkedIn profile"
              >
                <img className="footer-brand-icon" src={linkedinIcon} alt="" />
              </a>
            </section>
          </div>

          <div className="footer-bottom footer-animated-item" style={{ "--footer-delay": "600ms" }}>
            © 2026 Suraj Kumar • All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
