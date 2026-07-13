import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(0);
  const [openPill, setOpenPill] = useState(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const modules = [
    {
      num: 'Module 01',
      title: 'Sales Foundations',
      description: (
        <>
          Learn the core concepts that every
          <span className="mobile-break"><br /></span>{" "}
          successful sales professional needs.
        </>
      ),
      pills: [
        { title: 'Sales psychology & buyer behavior' },
        { title: 'Value proposition design' },
        { title: 'Prospecting methods' },
        { title: 'CRM & sales tools' }
      ],
    },
    {
      num: 'Module 02',
      title: 'Sales Mindset',
      description: 'Develop the mental frameworks and resilience required to excel in high-stakes sales environments.',
      pills: [
        { title: 'Growth mindset for sales' },
        { title: 'Emotional intelligence' },
        { title: 'Resilience & grit' },
        { title: 'Goal setting & visualization' },
      ],
    },
    {
      num: 'Module 03',
      title: 'Pitching & Outreach',
      description: 'Master the art of reaching out to prospects and delivering compelling pitches that convert.',
      pills: [
        { title: 'Cold email mastery' },
        { title: 'LinkedIn outreach' },
        { title: 'Cold calling techniques' },
        { title: 'Presentation skills' },
      ],
    },
    {
      num: 'Module 04',
      title: 'Closing & Negotiation',
      description: 'Learn proven closing methodologies and negotiation strategies to win deals consistently.',
      pills: [
        { title: 'Objection handling' },
        { title: 'Discovery calls' },
        { title: 'Negotiation strategies' },
        { title: 'Closing techniques' }
      ],
    },
  ];

  const tabs = ['01 - Mindset', '02 - Outreach', '03 - Closing', '04 - Growth'];

  const togglePill = (index) => {
    setOpenPill(openPill === index ? null : index);
  };

  return (
    <section id="course" className="curriculum-section section-padding" ref={ref} style={{ paddingBottom: '20px' }}>
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
              onClick={() => { setActiveTab(index); setOpenPill(null); }}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="tab-content-box"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            maxWidth: '1500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="module-info">
            <span className="module-number">{modules[activeTab].num}</span>
            <h3 className="module-title">{modules[activeTab].title}</h3>
            <p className="module-description">{modules[activeTab].description}</p>
          </div>
          <div className="module-pills">
            {modules[activeTab].pills.map((pill, index) => (
              <div key={index} className="pill-item-wrapper">
                <button
                  className={`pill-item ${openPill === index ? 'open' : ''}`}
                  onClick={() => togglePill(index)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.4s ease ${0.4 + index * 0.08}s, transform 0.4s ease ${0.4 + index * 0.08}s`,
                  }}
                >
                  <span className="pill-dot"></span>
                  <span className="pill-text">{pill.title}</span>

                </button>
                <div className={`pill-detail ${openPill === index ? 'open' : ''}`}>
                  <p>{pill.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
