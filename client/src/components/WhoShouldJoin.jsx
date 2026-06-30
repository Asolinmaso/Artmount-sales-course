import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhoShouldJoin() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      ),
      title: 'Students',
      description: 'Launch a high-income sales career right after graduation and avoid job hunt stress.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7.5 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6M10 22h4"/>
        </svg>
      ),
      title: 'Entrepreneurs',
      description: 'Build the critical sales skills required to acquire users and grow your own business.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      ),
      title: 'Career Switchers',
      description: 'Transition smoothly into a booming, high-demand field with transferable sales skills.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Freelancers',
      description: 'Turn your current gig hustle into a structured, scalable and high-income sales consultancy.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
      title: 'Job Seekers',
      description: 'Stand out from competition with specialized, immediately market-ready business development skills.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#2B200B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Working Professionals',
      description: 'Level up your professional toolkit and significantly accelerate your standard career trajectory.',
    },
  ];

  return (
    <section className="join-section section-padding" ref={ref}>
      <div className="container">
        <p
          className="section-subtitle"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          Who Should Join
        </p>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          Built for Ambitious Professionals
        </h2>

        <div className="join-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="join-card glass-card"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `opacity 0.55s ease ${0.15 + index * 0.08}s, transform 0.55s ease ${0.15 + index * 0.08}s`,
              }}
            >
              <div className="card-icon-box">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
