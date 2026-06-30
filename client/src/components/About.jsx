import React from 'react';
import aboutTeam from '../assets/about-team.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const bulletPoints = [
    'Practical sales curriculum designed by industry experts',
    '1:1 mentorship from active sales leaders',
    'Guaranteed internship with partner companies',
    'Career support until you land the right role',
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="about" className="about-section section-padding" ref={ref}>
      <div className="container about-container">
        {/* Image slides in from LEFT */}
        <div
          className="about-visual"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="about-image-wrapper">
            <img src={aboutTeam} alt="Collaboration in our workspace" className="about-image" />
          </div>
        </div>

        {/* Content slides in from RIGHT */}
        <div
          className="about-content"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          <p className="section-subtitle" style={{ textAlign: 'left' }}>About Us</p>
          <h2 className="about-title">Your Growth. Our Mission.</h2>
          <p className="about-description">
            Growthpreneur is built for ambitious professionals who want to break into high-income sales careers. 
            We combine structured learning with real-world practice and direct industry exposure.
          </p>

          <ul className="about-list">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="about-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: `opacity 0.5s ease ${0.3 + index * 0.1}s, transform 0.5s ease ${0.3 + index * 0.1}s`,
                }}
              >
                <span className="check-icon">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="#2B200B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="about-item-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
