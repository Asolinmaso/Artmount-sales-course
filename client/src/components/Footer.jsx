import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import logoImg from '../assets/logo.png';
import footerBg from '../assets/Frame2.png';
import instagramIcon from '../icons/Frame 291.png';
import facebookIcon from '../icons/Frame 292.png';
import linkedinIcon from '../icons/Frame 294.png';
import youtubeIcon from '../icons/Frame 295.png';
import dropdownIcon from '../icons/Vector.png';
import emailIcon from '../icons/Email.png';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const payload = {
      name: formData.name,
      contact: formData.phone,
      email: formData.email,
      message: formData.message
    };

    try {
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: ''
      });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 6000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: brandRef, isVisible: brandVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <footer className="footer-section">
        <div id="contact" className="container contact-container section-padding" ref={contactRef}>
          <div
            className="contact-info-col"
            style={{
              opacity: contactVisible ? 1 : 0,
              transform: contactVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h2 className="contact-title">
              Ready to Become a <br />
              <span className="text-gold">Growthpreneur?</span>
            </h2>
            <p className="contact-description">
              Take the first step towards building a high-growth career in sales and business development.
            </p>

            <div className="contact-details">
              <h1 className="contact-label">Contact Us</h1>
              <div className="contact-detail-item contact-email-item">
                <span className="contact-icon">
                  <img src={emailIcon} alt="Email" />
                </span>
                <a href="mailto:Contact@artmountacademy.com" className="contact-link">Contact@artmountacademy.com</a>
              </div>

              <div className="contact-detail-item contact-phone-item">
                <span className="contact-icon">
                  <svg width="25" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 14.5V17.5C19.001 18.03 18.777 18.536 18.384 18.893C17.99 19.25 17.464 19.421 16.94 19.36C13.843 19.023 10.871 17.967 8.27 16.27C5.813 14.697 3.733 12.617 2.16 10.16C0.457 7.548 0.404 4.562 0.07 1.45C0.009 0.927 0.179 0.402 0.536 0.009C0.893-0.384 1.4-0.608 1.93-0.607H4.93C5.922-0.607 6.753 0.125 6.879 1.11C6.993 1.996 7.21 2.868 7.52 3.71C7.799 4.469 7.616 5.316 7.039 5.89L5.769 7.16C7.234 9.737 9.373 11.876 11.95 13.34L13.22 12.07C13.794 11.493 14.641 11.31 15.4 11.59C16.242 11.9 17.114 12.117 18 12.231C18.995 12.359 19.726 13.2 19.726 14.192V14.5H19Z" fill="#C89B3C" />
                  </svg>
                </span>
                <a href="tel:+918778359643" className="contact-link">+91 8778359643</a>
              </div>
            </div>
          </div>

          <div
            className="contact-form-col"
            style={{
              opacity: contactVisible ? 1 : 0,
              transform: contactVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <div className="form-box">
              <h3 className="form-title">Apply Now</h3>

              {status.success && (
                <div className="alert alert-success">
                  Application submitted successfully! Our career team will contact you soon.
                </div>
              )}

              {status.error && (
                <div className="alert alert-error">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="apply-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group phone-group">
                  <div className="phone-input-wrapper">
                    <div className="phone-code-wrapper">
                      <select
                        name="phoneCode"
                        className="phone-code-select"
                        disabled={status.loading}
                      >
                        <option value="+91">+91</option>
                      </select>
                      <img src={dropdownIcon} alt="" className="phone-code-arrow" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact"
                      required
                      disabled={status.loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                    disabled={status.loading}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    disabled={status.loading}
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold btn-submit" disabled={status.loading}>
                  {status.loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom-nav section-padding" ref={bottomRef} style={{ backgroundImage: `radial-gradient(circle at center, rgba(255, 215, 0, 0.13) 0%, transparent 70%), url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div
            className="container bottom-nav-container"
            style={{
              opacity: bottomVisible ? 1 : 0,
              transform: bottomVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div className="company-info-block">
              <div className="logo logo-footer" onClick={() => handleLinkClick('home')} role="button" tabIndex={0}>
                <img src={logoImg} alt="Artmount Academy" className="logo-img" style={{ height: '55px' }} />
              </div>
              <p className="footer-tagline">
                India's most practical sales career program. Building the next generation of high-income sales professionals.
              </p>
            </div>

            <div className="links-block">
              <h4 className="links-title">Quick Links</h4>
              <ul className="links-list">
                <li><button onClick={() => handleLinkClick('home')} className="footer-btn-link">Home</button></li>
                <li><button onClick={() => handleLinkClick('about')} className="footer-btn-link">About Us</button></li>
                <li><button onClick={() => handleLinkClick('course')} className="footer-btn-link">Course</button></li>
                <li><button onClick={() => handleLinkClick('faq')} className="footer-btn-link">Who Should Join</button></li>
              </ul>
            </div>

            <div className="links-block">
              <h4 className="links-title">Support</h4>
              <ul className="links-list">
                <li><button onClick={() => handleLinkClick('contact')} className="footer-btn-link">FAQ</button></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="social-block">
              <h4 className="links-title">Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Instagram" className="social-icon-btn">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" aria-label="Facebook" className="social-icon-btn">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon-btn">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="#" aria-label="YouTube" className="social-icon-btn">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>


      </footer>
      <section className="footer-brand-text" ref={brandRef}>
        <div className="brand-text-row" style={{ opacity: brandVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {'ARTMOUNT'.split('').map((letter, i) => (
            <span
              key={i}
              className="brand-letter"
              style={{
                animation: brandVisible ? `slideLetter 0.5s ease ${i * 0.12}s forwards` : 'none',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </section>
      <div className="copyright-bar">
        <p>&copy; 2026 Growthpreneur. All rights reserved. | Designed &amp; Developed By Manvian</p>
      </div>
    </>
  );
}
