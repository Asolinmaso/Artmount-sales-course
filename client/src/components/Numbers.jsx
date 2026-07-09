import React from 'react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

function StatCard({ stat, index, sectionVisible }) {
  const numericEnd = parseInt(stat.number.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = stat.number.replace(/[0-9,]/g, '');
  const count = useCountUp(numericEnd, 1800, sectionVisible);

  return (
    <div
      className="stat-card"
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <h3 className="stat-number">
        {sectionVisible ? `${count.toLocaleString()}${suffix}` : `0${suffix}`}
      </h3>
      <p className="stat-label">{stat.label}</p>
      <p className="stat-sub">{stat.sub}</p>
    </div>
  );
}

export default function Numbers() {
  const stats = [
    { number: '2500+', label: 'Students Trained', sub: 'Across India' },
    { number: '100%', label: 'Placement Support', sub: 'Career assistance' },
    { number: '50+', label: 'Industry Mentors', sub: 'Active practitioners' },
    { number: '1000+', label: 'Hiring Partners', sub: 'Top companies' },
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="numbers-section section-padding" ref={ref}>
      <div className="container">
        <p
          className="section-subtitle"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          By The Numbers
        </p>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          Results That Speak
        </h2>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              sectionVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
