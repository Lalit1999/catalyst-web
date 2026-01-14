"use client";
import React, { useState } from "react";

import { notFound, useParams } from "next/navigation";

import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import { serviceDataObject} from '@data';

// Import Icons
import {
   CheckIcon, ClockCircle, 
 StarCircle, User
} from "@icons";

export default function ServiceDetailPage() {
  const params = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const serviceId = params.id || params.slug;
  const service = serviceDataObject[serviceId];

  if (!service) {
    return notFound();
  }


  // use like ( icons[value] || <DefaultIcon /> )
  // const icons = {
  //   bag: <BagIcon />,
  //   globe: <GlobeIcon />,
  //   user: <UserIcon />,
  //   flask: <FlaskIcon />,
  //   money: <MoneyIcon />,
  // }

  return (
    <main className={styles.main}>
      <Title 
        bread={'Services'} 
        breadIn={service.heading} 
        heading={service.heading} 
        description={service.subHeading} 
        image={service.img} 
      />
      
      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>
                Our Approach to {service.heading}
              </h2>
              <div className={styles.leftContent}>
                {/* Dynamic Approach Paragraphs */}
                {service.approachContent && service.approachContent.map((paragraph, index) => (
                    <p key={index} className={styles.paragraph}>
                        {paragraph}
                    </p>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.leftpart_2}>
            <h2 className={styles.heading}>Primary Care</h2>
            {/* Dynamic Primary Care Text */}
            <p className={styles.paragraph}>
              {service.primaryCareText}
            </p>

            <div className={styles.featureGrid}>
              {/* Dynamic Feature Cards */}
              {service.features && service.features.map((card, idx) => (
                <div
                  key={idx}
                  className={styles.featureCard}
                  style={{ backgroundColor: card.color }}
                >
                  <div className={styles.featureIcon}>
                    {card.icon === "user" && (
                      <div className={styles.userIconBg}><User /></div>
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
          {service.checkList && (
            <div className={styles.checkCard}>
                {service.checkList.map((item, idx) => (
                <div key={idx} className={styles.checkItem}>
                    <CheckIcon />
                    <span>{item}</span>
                </div>
                ))}
            </div>
          )}
          
          <div className={styles.separator}></div>

          {/* Dynamic Expertise */}
          <div className={styles.expertiseBlock}>
            <h2>Our Industry Expertise</h2>
            <p className={styles.subText}>
              Professional care from specialists who understand your specific needs.
            </p>
            <div className={styles.expertiseGrid}>
              {service.expertiseList && service.expertiseList.map((item, idx) => (
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
                Common questions regarding our {service.heading} services.
              </p>
            </div>
            <div className={styles.faqList}>
              {service.faqList && service.faqList.map((faq, idx) => {
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
        <RightPanel variants={'services'} />
      </div>
    </main>
  );
}