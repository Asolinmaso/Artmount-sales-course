import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo — replaced with uploaded PNG */}
        <div className="logo" onClick={() => handleLinkClick('home')} role="button" tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleLinkClick('home')}>
          <img src={logoImg} alt="Artmount Academy" className="logo-img" />
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => handleLinkClick('home')} className="nav-link">Home</button>
          <button onClick={() => handleLinkClick('about')} className="nav-link">About</button>
          <button onClick={() => handleLinkClick('course')} className="nav-link">Course</button>
          <button onClick={() => handleLinkClick('contact')} className="nav-link">Contact</button>
        </nav>

        <div className="header-actions">
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn-gold btn-header"
            id="header-apply-btn"
          >
            Apply Now
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button onClick={() => handleLinkClick('home')} className="mobile-nav-link">Home</button>
          <button onClick={() => handleLinkClick('about')} className="mobile-nav-link">About</button>
          <button onClick={() => handleLinkClick('course')} className="mobile-nav-link">Course</button>
          <button onClick={() => handleLinkClick('contact')} className="mobile-nav-link">Contact</button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn-gold btn-mobile-cta"
            id="mobile-apply-btn"
          >
            Apply Now
          </button>
        </nav>
      </div>

      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />
    </header>
  );
}
