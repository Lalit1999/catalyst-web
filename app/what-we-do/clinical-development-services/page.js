"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { serviceDataObject, quickLinks } from '@data'; // Ensure this matches your export name
import styles from "./page.module.css";

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
import Link from "next/link";
import { Title } from "@c/index";

// const quickLinks = [
//   { text: "What we do", icon: <BagIcon />, path: "/what-we-do" },
//   { text: "Who we are", icon: <GlobeIcon />, path: "/who-we-are" },
//   {
//     text: "Research Publications",
//     icon: <UserIcon />,
//     path: "/research-publications",
//   },
//   {
//     text: "Therapeutic Expertise",
//     icon: <FlaskIcon />,
//     path: "/therapeutic-expertise",
//   },
//   {
//     text: "Training Programs",
//     icon: <MoneyIcon />,
//     path: "/training-programs",
//   },
// ];

const featureCards = [
  {
    title: "Focused Customer",
    color: "#E1F1F8",
    icon: "user",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "24/7 Care",
    color: "#FADDE1",
    icon: "star",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Timely Care",
    color: "#F9E6A8",
    icon: "clock",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const checkListItems = [
  "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
  "Aliquam erat volutpat. Nunc consequat mattis egestas.",
  "Sed dignissim in ex sit amet imperdiet.",
];

const expertiseList = [
  "1. Cartilage Restoration",
  "2. Avascular Necrosis",
  "3. Carpal Tunnel Syndrome",
  "4. Chronic Ligament instability",
  "5. Developmental Dysplasia Of The Hip (DDH)",
  "6. Dislocations",
  "7. Forefoot And Toe Deformities",
  "8. Femoroacetabular Impingement (FAI)",
];

const faqList = [
  {
    question: "Can I know the doctors’ credentials?",
    answer:
      "Yes, absolutely. We provide full profiles, including board certifications and education.",
  },
  {
    question: "If I'm taking a companion, when can he or she travel?",
    answer:
      "Your companion can travel with you at any time. We assist with all arrangements.",
  },
  {
    question: "What happens if I need follow-up?",
    answer: "We arrange follow-up video consultations with your doctor.",
  },
  {
    question: "What Does Medical Tourism Corporation charge?",
    answer: "Our coordination services are completely free for patients.",
  },
];

const DEFAULT_SERVICE_ID = 'clinical-development-service';

export default function ServiceDetailPage() {
  const params = useParams();
   const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  const serviceId = params?.id || params?.slug || DEFAULT_SERVICE_ID;
  const service = serviceDataObject[serviceId];
  if (!service) {
    return notFound();
  }

  const allServices = Object.values(serviceDataObject);

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
        <div className={styles.rightColumn}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>Services</div>
            </div>
            <ul className={styles.sidebarList}>
              {allServices.map((item) => (
                <li key={item.id} className={styles.sidebarItem}>
                  <Link
                    href={`/what-we-do/${item.id}`}
                    className={`${styles.sidebarNavLink} ${
                      serviceId === item.id ? styles.active : ""
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
                    {/* Render icon based on helper function if needed, or just text */}
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
