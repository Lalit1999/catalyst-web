"use client";
import React, { useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import serviceData from "../../../data/serviceData"; // Ensure this matches your export name
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

const quickLinks = [
  { text: "What we do", icon: <BagIcon />, path: "/what-we-do" },
  { text: "Who we are", icon: <GlobeIcon />, path: "/who-we-are" },
  {
    text: "Research Publications",
    icon: <UserIcon />,
    path: "/research-publications",
  },
  {
    text: "Therapeutic Expertise",
    icon: <FlaskIcon />,
    path: "/therapeutic-expertise",
  },
  {
    text: "Training Programs",
    icon: <MoneyIcon />,
    path: "/training-programs",
  },
];

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

export default function ServiceDetailPage() {
  const params = useParams();
   const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  const serviceId = params.id || params.slug;
  const service = serviceData[serviceId];
  if (!service) {
    return notFound();
  }

  const allServices = Object.values(serviceData);

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        {/* Breadcrumbs */}
        <div className={styles.downHead}>
          <h1 className={styles.main_bread}>Home</h1>
          <h1 className={styles.main_bread}>&rarr;</h1>
          <h1 className={styles.main_bread}>Services</h1>
          <h1 className={styles.main_bread}>&rarr;</h1>
          <h1 className={styles.main_bread}>{service.heading}</h1>
        </div>
        {/* Main Hero Content */}
        <div className={styles.head}>
          <h1 className={styles.titleLarge}>{service.heading}</h1>
          <p className={styles.paragraph}>{service.subHeading}</p>
          {service.img && (
              <div className={styles.bodyImageContainer}>
                <Image
                  src={service.img}
                  alt="Detail view"
                  fill
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </div>
            )}
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.leftpart_1}>
            
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>
                Our Approach to {service.heading}
              </h2>
              <div className={styles.leftContent}>
                <p className={styles.paragraph}>
                From trouble sleeping to work stress to anxiety to depression,
                we all have difficulty managing our emotions at times. It’s part
                of being human. And addressing these issues is a vital part of
                what we do as a primary care practice, because your emotional
                well-being is essential to your overall health and wellness.
              </p>
              <p className={styles.paragraph}>
                We’ve redesigned the doctor’s office experience to fit your
                life, put you at ease, and treat you as a whole person. We
                create safe and inviting spaces, ask meaningful questions, give
                you time to talk, and listen without judgment. Then we work with
                you on a plan to help you feel your best — whether you want to
                sleep better, feel calmer, worry less, or get a better handle on
                your mood.
              </p>
              </div>
            </div>
          </div>
          <div className={styles.leftpart_2}>
            <h2 className={styles.heading}>Primary Care</h2>
            <p className={styles.paragraph}>
              To continue shedding a light on mental health issues, we teamed up
              with the award-winning musicians from Bear and a Banjo to create a
              song showing people they’re not alone.
            </p>

            <div className={styles.featureGrid}>
              {featureCards.map((card, idx) => (
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

          <section className={styles.extraSection}>
            <div className={styles.extraContainer}>
              {/* 2. CHECKLIST CARD */}
               <div className={styles.checkCard}>
                {checkListItems.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.separator}></div>

              {/* 3. INDUSTRY EXPERTISE */}
              <div className={styles.expertiseBlock}>
                <h2>Our Industry Expertise</h2>
                <p className={styles.subText}>
                  Professional care from specialists who understand your
                  specific needs.
                </p>
                <div className={styles.expertiseGrid}>
                  {expertiseList.map((item, idx) => (
                    <p key={idx} className={styles.expertiseItem}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className={styles.separator}></div>

              {/* 4. FAQ SECTION RESTORED */}
              <div className={styles.faqBlock}>
                <div className={styles.faqBlockHead}>
                  <h2>FAQs About The Service</h2>
                <p className={styles.subText}>
                  Common questions regarding our {service.heading} services.
                </p>

                </div>
                <div className={styles.faqList}>
      {faqList.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className={styles.faqItem}>
            <div className={styles.faqInner} >
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

            <div
              className={`${styles.faqAnswer} ${
                isOpen ? styles.open : ""
              }`}
            >
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
          </section>
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
