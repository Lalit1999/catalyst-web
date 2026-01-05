"use client";
import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { Title } from "@c/index"; // Adjust path as needed

// 1. Import Data
import { 
  therapeuticExpertiseData, 
  therapeuticPageHeader, 
  quickLinks 
} from "@data"; 

// 2. Import Icons
import {
  BagIcon,
  CheckIcon,
  ClockCircle,
  FlaskIcon,
  GlobeIcon,
  MoneyIcon,
  StarCircle,
  User,
  UserIcon,
} from "@icons";

export default function TherapyDetailPage() {
  const params = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const therapyId = params.id || params.slug;
  const therapy = therapeuticExpertiseData[therapyId];

  if (!therapy) {
    return notFound();
  }

  const alltherapyData = Object.values(therapeuticExpertiseData);

  return (
    <main className={styles.main}>
      
      {/* 3. Title Component 
          Uses Header Data for the main look, but passes therapy.heading 
          to the 'breadIn' prop so the breadcrumb shows: Home -> Expert -> [Therapy Name] 
      */}
      <Title 
        bread={therapeuticPageHeader.bread} 
        breadIn={therapy.heading} 
        heading={therapeuticPageHeader.heading} 
        description={therapeuticPageHeader.description} 
        image={therapeuticPageHeader.image} 
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>
                Our Approach to {therapy.heading}
              </h2>
              <div className={styles.leftContent}>
                {/* Dynamic Approach Content */}
                {therapy.approachContent && therapy.approachContent.map((para, i) => (
                    <p key={i} className={styles.paragraph}>{para}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.leftpart_2}>
            <h2 className={styles.heading}>Primary Care</h2>
            <p className={styles.paragraph}>
              {therapy.primaryCareText}
            </p>

            <div className={styles.featureGrid}>
              {/* Dynamic Feature Cards */}
              {therapy.features && therapy.features.map((card, idx) => (
                <div
                  key={idx}
                  className={styles.featureCard}
                  style={{ backgroundColor: card.color }}
                >
                  <div className={styles.featureIcon}>
                    {card.icon === "user" && (
                      <div className={styles.userIconBg}>
                        <User />
                      </div>
                    )}
                    {card.icon === "star" && <StarCircle />}
                    {card.icon === "clock" && <ClockCircle />}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Checklist */}
          {therapy.checkList && (
            <div className={styles.checkCard}>
                {therapy.checkList.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
            </div>
          )}
          
          <div className={styles.separator}></div>

          {/* Dynamic Industry Expertise */}
          <div className={styles.expertiseBlock}>
            <h2>Our Industry Expertise</h2>
            <p className={styles.subText}>
              Professional care from specialists who understand your specific needs.
            </p>
            <div className={styles.expertiseGrid}>
              {therapy.expertiseList && therapy.expertiseList.map((item, idx) => (
                <p key={idx} className={styles.expertiseItem}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.separator}></div>

          {/* Dynamic FAQs */}
          <div className={styles.faqBlock}>
            <div className={styles.faqBlockHead}>
              <h2>Frequently Asked Questions (FAQs)</h2>
              <p className={styles.subText}>
                Common questions regarding our {therapy.heading} therapies.
              </p>
            </div>
            <div className={styles.faqList}>
              {therapy.faqList && therapy.faqList.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={idx} className={styles.faqItem}>
                    <div className={styles.faqInner}>
                      <button
                        className={styles.faqSummary}
                        onClick={() => toggleFAQ(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.faqQuestion}>{faq.question}</span>
                        <span className={styles.faqIcon}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </div>

                    <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`}>
                      <div className={styles.faqAnswerInner}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <div className={styles.rightColumn}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>Therapeutic Expertise</div>
            </div>
            <ul className={styles.sidebarList}>
              {alltherapyData.map((item) => (
                <li key={item.id} className={styles.sidebarItem}>
                  <Link
                    href={`/therapeutic-expertise/${item.id}`}
                    className={`${styles.sidebarNavLink} ${
                      therapyId === item.id ? styles.active : ""
                    }`}
                  >
                    {item.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>Quick Links</div>
            </div>
            <ul className={styles.sidebarList}>
              {quickLinks.map((link, idx) => (
                <li key={idx} className={styles.sidebarItem}>
                  <Link href={link.path} className={styles.sidebarNavLink}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}