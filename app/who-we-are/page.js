"use client";
import React from "react";

import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import { croPageHeader} from '@data';

// Import Icons
import {
 CheckIcon, ClockCircle, 
StarCircle, User
} from "@icons";


const defaultFeatures = [
  {
    title: "Focused Customer",
    color: "var(--thodaBlue)",
    icon: "user",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "24/7 Care",
    color: "var(--thodaPink)",
    icon: "star",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Timely Care",
    color: "var(--thodaYellow)",
    icon: "clock",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];


const defaultCheckList = [
  "ICH-GCP Compliant Protocols",
  "21 CFR Part 11 Validated Systems",
  "Robust Risk Management Strategies",
  "Real-time Data Visualization",
];


const defaultApproach = [
    "Catalyst provides comprehensive, end-to-end clinical trial management founded on scientific rigor, ethical governance, and a deeply patient-centred philosophy. We collaborate with pharmaceutical, biotechnology, and medical device organizations globally to conceptualize, design, and operationalize clinical studies that are methodologically robust, reflective of real-world patient populations, and capable of generating high-quality, generalizable evidence. ",
    "Spanning the full clinical development continuum, from early-phase investigations to post-marketing evidence generation, our work integrates strategic oversight, regulatory compliance, and operational excellence. Through flexible engagement models, ranging from bespoke solutions to fully integrated services, we enable sponsors to optimize development pathways, manage complexity and risk, and advance therapeutic and technological innovations with confidence, precision, and integrity."
];
const defaultPrimaryCare = "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they’re not alone.";

export default function CROExperiencePage() {
  return (
    <main className={styles.main}>
      <Title 
        bread={'Who we are'} 
        heading={'Who we are'} 
        description={croPageHeader.description} 
        image={croPageHeader.image} 
      />
      
      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>
                Our Mission
              </h2>
              <div className={styles.leftContent}>
                {/* Dynamic Approach Paragraphs */}
                {defaultApproach && defaultApproach.map((paragraph, index) => (
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
              {defaultPrimaryCare}
            </p>

            <div className={styles.featureGrid}>
              {/* Dynamic Feature Cards */}
              {defaultFeatures && defaultFeatures.map((card, idx) => (
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
          {defaultCheckList && (
            <div className={styles.checkCard}>
                {defaultCheckList.map((item, idx) => (
                <div key={idx} className={styles.checkItem}>
                    <CheckIcon />
                    <span>{item}</span>
                </div>
                ))}
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <RightPanel variants={['therapeutic', 'clinical', 'services']} />
      </div>
    </main>
  );
}