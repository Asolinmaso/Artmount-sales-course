import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
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

    const contactStr = `${formData.countryCode} ${formData.phone}`.trim();
    const payload = {
      name: formData.name,
      contact: contactStr,
      email: formData.email,
      location: formData.location,
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
        countryCode: '+91',
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

  return (
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
            <div className="contact-detail-item">
              <span className="contact-icon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1H3C1.9 1 1 1.9 1 3V13C1 14.1 1.9 15 3 15H17C18.1 15 19 14.1 19 13V3C19 1.9 18.1 1 17 1Z" stroke="#E5C583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 3L10 9L1 3" stroke="#E5C583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <a href="mailto:Contact@artmountacademy.com" className="contact-link">Contact@artmountacademy.com</a>
            </div>

            <div className="contact-detail-item">
              <span className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 14.5V17.5C19.001 18.03 18.777 18.536 18.384 18.893C17.99 19.25 17.464 19.421 16.94 19.36C13.843 19.023 10.871 17.967 8.27 16.27C5.813 14.697 3.733 12.617 2.16 10.16C0.457 7.548 0.404 4.562 0.07 1.45C0.009 0.927 0.179 0.402 0.536 0.009C0.893-0.384 1.4-0.608 1.93-0.607H4.93C5.922-0.607 6.753 0.125 6.879 1.11C6.993 1.996 7.21 2.868 7.52 3.71C7.799 4.469 7.616 5.316 7.039 5.89L5.769 7.16C7.234 9.737 9.373 11.876 11.95 13.34L13.22 12.07C13.794 11.493 14.641 11.31 15.4 11.59C16.242 11.9 17.114 12.117 18 12.231C18.995 12.359 19.726 13.2 19.726 14.192V14.5H19Z" fill="#E5C583" />
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
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled={status.loading}
                  className="country-select"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+971">+971 (AE)</option>
                  <option value="+65">+65 (SG)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                  disabled={status.loading}
                  className="phone-input"
                />
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
                  placeholder="Message (Optional)"
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

      <div className="footer-bottom-nav section-padding" ref={bottomRef}>
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
              <img src={logoImg} alt="Artmount Academy" className="logo-img" style={{ height: '38px' }} />
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
              <li><button onClick={() => handleLinkClick('faq')} className="footer-btn-link">FAQ</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="footer-btn-link">Contact</button></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="social-block">
            <h4 className="links-title">Follow Us</h4>
            <div className="social-icons">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp" className="social-icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <p>© 2026 Growthpreneur. All rights reserved. | Designed & Developed By Manvian</p>
      </div>
    </footer>
  );
}
