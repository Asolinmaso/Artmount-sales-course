import React, { useEffect, useState } from 'react';
import heroLion from '../assets/hero-lion.png';
import heroBg from '../assets/hero-bg.jpg';
import heroMobile from '../assets/image 1.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleApplyClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Dark room background — 3rd attached image */}
      <img src={heroBg} alt="" className="hero-bg" aria-hidden="true" />
      {/* Dark gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-container">
        {/* LEFT — content slides in */}
        <div className={`hero-content hero-slide-left ${mounted ? 'hero-reveal' : ''}`}>
          <div className="badge-gold hero-badge">
            India's No. 1 Practical Sales Career Program
          </div>

          <h1 className="hero-title">
            Become the Person <span className="mobile-break"><br /></span> Who<span className="desktop-break"><br /></span> <span className="text-gold">Drives Revenue.</span>
          </h1>

          <p className="hero-subtitle">
            Become a <span className="text-gold">High-Income</span>  Sales {" "}
            <span className="mobile-break"> <br /> </span>
            Professional
          </p>

          <p className="hero-description">
            <span className="desktop-only">
              Master sales, business development, and lead
              <br />
              generation with hands-on training, real projects, and
              <br />
              direct mentorship from India's top sales leaders.
            </span>

            <span className="mobile-only">
              Master sales, business development, and lead
              <br />
              generation with hands-on training, real
              <br />
              projects, and direct mentorship from India's top
              <br />
              sales leaders.
            </span>
          </p>

          <button
            onClick={handleApplyClick}
            className="btn-gold hero-cta"
            id="hero-apply-btn"
          >
            Apply Now
          </button>
        </div>

        {/* RIGHT — lion image slides in */}
        <div className={`hero-visual hero-slide-right ${mounted ? 'hero-reveal' : ''}`}>
          <div className="hero-image-wrapper">
            {/* Desktop: lion image */}
            <img
              src={heroLion}
              alt="Sales Leadership"
              className="hero-image"
            />
            {/* Mobile: alternate image */}
            <img
              src={heroMobile}
              alt="Sales Leadership"
              className="hero-image-mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
