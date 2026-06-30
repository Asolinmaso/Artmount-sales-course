import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const modules = [
    {
      num: 'Module 01',
      title: 'Sales Foundations',
      description: 'Learn the core concepts that every successful sales professional needs.',
      pills: [
        'Sales psychology & buyer behavior',
        'Value proposition design',
        'Prospecting methods',
        'CRM & sales tools',
      ],
    },
    {
      num: 'Module 02',
      title: 'Outreach & Lead Gen',
      description: 'Master the art of reaching out to prospects, generating interest, and booking high-value meetings.',
      pills: [
        'Cold email marketing',
        'LinkedIn outreach & networking',
        'Cold calling techniques',
        'Lead generation software',
      ],
    },
    {
      num: 'Module 03',
      title: 'The Art of Closing',
      description: 'Learn how to run productive discovery calls, handle objections, and close deals with high conversion rates.',
      pills: [
        'Objection handling frameworks',
        'Discovery call checklist',
        'Negotiation strategies',
        'Closing questions & contracts',
      ],
    },
    {
      num: 'Module 04',
      title: 'Sales Career Growth',
      description: 'Optimize your sales presence, prepare for top-tier interviews, and learn how to manage and scale high-ticket accounts.',
      pills: [
        'Resume & LinkedIn optimization',
        'Mock interview preparations',
        'High-ticket account management',
        'Freelancing & sales consulting',
      ],
    },
  ];

  const tabs = ['01 — Mindset', '02 — Outreach', '03 — Closing', '04 — Growth'];

  return (
    <section id="course" className="curriculum-section section-padding" ref={ref}>
      <div className="container">
        <p
          className="section-subtitle"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          What You'll Learn
        </p>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          Curriculum Overview
        </h2>

        {/* Tabs */}
        <div
          className="tabs-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content box */}
        <div
          className="tab-content-box"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          <div className="module-info">
            <span className="module-number">{modules[activeTab].num}</span>
            <h3 className="module-title">{modules[activeTab].title}</h3>
            <p className="module-description">{modules[activeTab].description}</p>
          </div>
          <div className="module-pills">
            {modules[activeTab].pills.map((pill, index) => (
              <div
                key={index}
                className="pill-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.4s ease ${0.4 + index * 0.08}s, transform 0.4s ease ${0.4 + index * 0.08}s`,
                }}
              >
                <span className="pill-dot"></span>
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
