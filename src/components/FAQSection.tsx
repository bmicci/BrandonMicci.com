'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What executive roles does Brandon Micci specialize in?',
    answer: 'Brandon Micci is a Senior AI and Digital Transformation Executive specializing in Chief AI Officer, VP of AI Products, and Head of Enterprise AI Strategy roles. He leads large-scale AI initiatives across Fortune 500 organizations—transforming data, analytics, and technology strategy into measurable ROI.',
  },
  {
    question: 'What measurable outcomes has Brandon achieved through AI leadership?',
    answer: 'Brandon has delivered $400M+ in measurable business value through AI and digital transformation. His initiatives include deploying an enterprise LLM assistant to 27,000 users at JPMorgan Chase, achieving 30% operational efficiency gains, and launching a $20M IoT-AI optimization program in aviation.',
  },
  {
    question: 'In what industries has Brandon led transformation programs?',
    answer: 'Financial services, aviation, insurance, and consulting. Brandon has implemented AI-powered fraud analytics at global insurers, IoT modernization at major airlines, and AI governance frameworks for top financial institutions.',
  },
  {
    question: "What are Brandon Micci's primary areas of expertise?",
    answer: 'Enterprise AI strategy, large language model deployment, AI governance, data modernization, and ROI-driven transformation. Brandon focuses on creating scalable AI platforms, governance models, and executive operating frameworks that accelerate adoption and measurable value.',
  },
  {
    question: 'Does Brandon provide speaking or advisory services?',
    answer: 'Yes. Brandon provides executive briefings, board workshops, and private advisory sessions focused on enterprise AI strategy, scaling LLMs, and digital transformation operating models. Engagements include 60–120 minute board sessions, 2–4 week ROI sprints, and keynote speaking.',
  },
  {
    question: 'How can recruiters or organizations contact Brandon Micci?',
    answer: 'Email brandon@brandonmicci.com or connect via LinkedIn at linkedin.com/in/brandonmicci for executive search, advisory, or speaking engagements.',
  },
  {
    question: 'What Fortune 500 companies has Brandon worked with?',
    answer: 'Brandon has led enterprise AI and digital transformation initiatives at JPMorgan Chase, Capital One, Citigroup, Southwest Airlines, and delivered advisory engagements through Ernst & Young (EY), PwC, Capgemini, and Booz Allen Hamilton for Fortune 50 insurance and financial services clients.',
  },
  {
    question: 'What technical skills does Brandon bring to AI leadership roles?',
    answer: 'Brandon combines executive leadership with deep technical expertise in: LLM deployment (MLOps/LLMOps), cloud architecture (AWS, Azure, Snowflake, Databricks), enterprise data platforms (Spark, Kafka, Data Lakes), DevOps/Kubernetes, analytics platforms (Tableau, Power BI), and AI governance frameworks. He has built and led 50+ FTE technical organizations with $30M+ P&L responsibility, including $15M+ direct P&L ownership at JPMorgan Chase.',
  },
  {
    question: 'What size organizations and budgets has Brandon managed?',
    answer: 'Brandon has led cross-functional teams of 50+ full-time employees with direct P&L oversight of $45M+ technology portfolios. His programs have generated $400M+ in measurable enterprise value across Fortune 500 organizations.',
  },
  {
    question: 'Is Brandon open to relocation for executive roles?',
    answer: 'Brandon is based in Dallas, Texas and open to hybrid, remote, or relocation opportunities for the right executive role. He has successfully led distributed global teams and is available for Chief AI Officer, VP AI Products, and Senior Director AI Strategy positions.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        .faq-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .faq-header p {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          cursor: pointer;
          user-select: none;
          gap: 1rem;
        }

        .faq-question h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0;
          color: white;
          flex: 1;
        }

        .faq-icon {
          flex-shrink: 0;
          transition: transform 0.3s ease;
          color: rgba(0, 212, 255, 0.8);
        }

        .faq-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 0 1.5rem 1.5rem;
        }

        .faq-answer p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 3rem 1.5rem;
          }

          .faq-header h2 {
            font-size: 2rem;
          }

          .faq-header p {
            font-size: 1rem;
          }

          .faq-question {
            padding: 1.25rem;
          }

          .faq-question h3 {
            font-size: 1rem;
          }

          .faq-answer.open {
            padding: 0 1.25rem 1.25rem;
          }
        }
      `}</style>

      <section
        id="faq"
        className="faq-section"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Common questions from executive recruiters and organizations about
            Brandon&apos;s experience and capabilities
          </p>
        </div>

        <div className="faq-container">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                aria-expanded={openIndex === index}
              >
                <h3 itemProp="name">{faq.question}</h3>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? 'open' : ''}`}
                  size={24}
                />
              </div>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQSection;

