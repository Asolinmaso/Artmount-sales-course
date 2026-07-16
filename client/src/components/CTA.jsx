import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import bgFrame from '../assets/Frame1.png';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const handleApplyClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = ['EMI Available', 'No Prior experience needed', '6-month placement support'];

  return (
    <section className="cta-section section-padding" ref={ref} style={{ backgroundImage: `radial-gradient(circle at center, rgba(255, 215, 0, 0.13) 0%, transparent 70%), url(${bgFrame})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container cta-container">
        <div
          className="badge-gold cta-badge"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',

          }}
        >
          Next cohort starting soon
        </div>

        <h2
          className="cta-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',

          }}
        >
          Ready to Build a <span className="text-gold">High-Income Career?</span>
        </h2>

        <p
          className="cta-description"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',

          }}
        >
          Join 2,500+ professionals who invested in their sales career and transformed their income.
          Applications close when the cohort is full.
        </p>

        <button
          onClick={handleApplyClick}
          className="btn-gold cta-btn"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s',

          }}
        >
          Apply Now
        </button>

        <div className="cta-benefits">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-item"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.4s ease ${0.4 + i * 0.1}s, transform 0.4s ease ${0.4 + i * 0.1}s`,
              }}
            >
              <span className="benefit-dot"></span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
