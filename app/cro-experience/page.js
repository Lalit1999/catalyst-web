"use client";
import React from "react";
import Image from "next/image";

import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import {  croPageHeader } from '@data';
import { map } from '@images';
import styles from "./page.module.css";

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

const defaultPrimaryCare = "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they’re not alone.";

export default function CROExperiencePage() {
    const {heading, description, subHeading1, descr1, subHeading2, descr2} = croPageHeader;
    return (
        <main className={styles.main}>
            <Title heading={heading} description={description} />        
            <div className={styles.detailsContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.leftpart_1}>
                        {/* <p className={styles.heading}>{subMainHeading}</p> */}
                        <div className={styles.leftBox}>
                            <p className={styles.heading}>{subHeading1}</p>
                            <div className={styles.leftParaCon}>
                                {descr1.map((item, index) => (
                                    <p className={styles.paragraph} key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.leftImageContainer}>
                            <Image src={map} alt="CRO Experience" className={styles.leftImage} />
                        </div>
                        <div className={styles.leftBox}>
                            <p className={styles.heading}>{subHeading2}</p>
                            <div className={styles.leftParaCon}>
                                {descr2.map((item, index) => (
                                    <p className={styles.paragraph} key={index} dangerouslySetInnerHTML={{ __html: item }} />
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
                <RightPanel  variants={['therapeutic', 'clinical', 'services']} />
            </div>
        </main>
  );
}