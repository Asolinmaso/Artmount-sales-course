import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import icon1 from '../icons/Frame 1321315049.png';
import icon2 from '../icons/Frame 1321315049 (1).png';
import icon3 from '../icons/Frame 1321315049 (2).png';
import icon4 from '../icons/Frame 1321315049 (3).png';
import icon5 from '../icons/Frame 1321315049 (4).png';
import icon6 from '../icons/Frame 1321315049 (5).png';

export default function WhoShouldJoin() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const cards = [
    {
      icon: icon1,
      title: 'Students',
      description: 'Launch a high-income career right after graduation',
    },
    {
      icon: icon2,
      title: 'Entrepreneurs',
      description: 'Build the sales skills to grow your own business',
    },
    {
      icon: icon3,
      title: 'Career Switchers',
      description: 'Transition into a booming, high-demand field',
    },
    {
      icon: icon4,
      title: 'Freelancers',
      description: 'Turn your current gig hustle into a structured sales career',
    },
    {
      icon: icon5,
      title: 'Job Seekers',
      description: 'Stand out with specialized, market-ready skills',
    },
    {
      icon: icon6,
      title: 'Working Professionals',
      description: 'Level up and accelerate your career trajectory',
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
            fontSize: '24px',
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
            fontSize: '42px',
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
              <div className="card-icon-box"><img src={card.icon} alt={card.title} /></div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
