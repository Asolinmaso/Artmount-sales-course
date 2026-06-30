import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const faqs = [
    {
      question: 'Do I need prior sales experience to join?',
      answer: 'No prior sales experience is required. Our program starts from the absolute basics, teaching you foundational sales psychology, outreach mechanics, and closing methodologies. Whether you are a student, career switcher, or freelancer, the curriculum is designed to guide you step-by-step.',
    },
    {
      question: 'What is the duration of the program?',
      answer: 'The program is a comprehensive 12-week (3 months) intensive practical course, featuring live interactive sessions, hands-on roleplays, real sales projects, and direct industry mentor review, followed by 6 months of active placement support.',
    },
    {
      question: 'How is the program delivered — online or offline?',
      answer: 'The program is delivered entirely online to allow flexibility for working professionals and students across India. It features live cohort sessions, interactive workshops, peer-to-peer practice sessions, and 1:1 mentorship calls.',
    },
    {
      question: "What if I don't get placed after completing the program?",
      answer: 'We provide extensive 6-month placement support, including specialized resume optimization, active mock interviews, and direct referrals to our network of 1,000+ hiring partners. If you attend the sessions, complete your projects, and work closely with our career team, we guarantee you will land interviews.',
    },
    {
      question: 'What is the fee structure, and are EMI options available?',
      answer: 'We offer highly competitive program fees with flexible payment options, including monthly EMI plans starting at low interest rates. Detailed pricing sheets and discount plans will be shared with you by our career advisors once you submit your application form.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding" ref={ref}>
      <div className="container">
        <p
          className="section-subtitle"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          Got Questions?
        </p>
        <h2
          className="section-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.5s ease ${0.15 + index * 0.09}s, transform 0.5s ease ${0.15 + index * 0.09}s`,
                }}
              >
                <button className="faq-header" onClick={() => handleToggle(index)}>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon-box">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="faq-icon"
                    >
                      <path
                        d="M8 1V15M1 8H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="faq-body">
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
