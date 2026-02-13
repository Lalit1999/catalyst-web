"use client";
import React from "react";

import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import { croPageHeader } from "@data";

// Import Icons
import { CheckIcon, ClockCircle, StarCircle, User } from "@icons";
import Image from "next/image";
import { about1, Attire, Company, Guidance, TeamMembers, WorkingDesk } from "@images";

// --- DATA CONFIGURATION ---

const dataOverview = [
  "Clinical research is more than protocols, data points, and timelines, it is a journey of trust. A journey that begins with an idea, carries the hopes of patients and investigators, and culminates in therapies that change lives. For over 20 years, Catalyst has been privileged to walk this journey alongside global sponsors, investigators, and healthcare communities.",
  "Founded with a commitment to scientific integrity and patient-centricity, Catalyst has grown into a trusted Contract Research Organization (CRO) delivering high-quality, scalable clinical research solutions to the pharmaceutical, biotechnology, and medical device industries worldwide. Our legacy is built not just on longevity, but on consistent delivery, ethical conduct, and enduring partnerships. Over two decades, we have evolved with science, embracing innovation while remaining grounded in rigor, compliance, and compassion. From early development programs to post-market evidence generation, Catalyst has supported studies that matter, studies that advance healthcare and bring meaningful outcomes to real patients.",
  "At the heart of Catalyst lies a simple belief: clinical research delivers its greatest value when it reflects the people it is meant to serve. This belief shapes every study we design, manage, and deliver. We offer end-to-end clinical trial management, combining operational excellence with strategic insight. Our flexible engagement models - tailor-made or full-service, allow sponsors to move faster, mitigate risk, and maintain confidence across the clinical development lifecycle.",
];

const dataVisionMission = {
  vision: "Driven by patients. Grounded in science.",
  mission:
    "To advance healthcare by delivering ethical, high-quality, and patient-centric clinical research that transforms scientific innovation into meaningful, real-world health outcomes.",
};

const dataValues = [
  {
    title: "Patient-Guided Science",
    color: "var(--thodaBlue)",
    icon: "user",
    desc: "Patient needs and lived experiences inform every research decision we make.",
  },
  {
    title: "Integrity-Led Excellence",
    color: "var(--thodaPink)",
    icon: "star",
    desc: "Scientific rigor, ethical conduct, and regulatory compliance are non-negotiable in our work.",
  },
  {
    title: "Collaborative Progress",
    color: "var(--thodaYellow)",
    icon: "clock", // Using clock/circle for progress
    desc: "Through partnership, purposeful innovation, and capability building, we advance research that delivers meaningful outcomes.",
  },
];

const dataLeadership = {
  name: "Sanjay Gupta, M.Pharm, MBA",
  role: "Founder and Managing Director",
  bio: [
    "Sanjay Gupta is a recognized luminary in clinical research, bringing over two decades of deep, hands-on experience across the global clinical development landscape. He has personally conducted and supervised more than 100 clinical trials, including global registration studies, Phase I trials, exploratory Phase II studies, and investigator-initiated research, spanning multiple therapeutic areas such as oncology, endocrinology, psychiatry, critical care, infectious diseases, and ophthalmology.",
    "His scientific work has been published and presented across leading international journals and conferences, including the American Society of Clinical Oncology, Seminars in Oncology, British Journal of Cancer, British Journal of Radiology, PLOS One, OncoTargets and Therapy, and Scientific Reports, among others, reflecting a sustained contribution to evidence-based medicine and global scientific discourse. An accomplished author, Sanjay has written 10 books on clinical research, including the widely acclaimed All You Need to Know About Clinical Research and The Big Book of Clinical Research, both of which are regarded as essential references by clinical research professionals, investigators, and regulators worldwide.",
    "A strong advocate of ethics and capacity building, he has played a pivotal role in advancing clinical research training and education in India, contributing to curriculum development and serving as a faculty member for programs on bioethics, Good Clinical Practice (GCP), and regulatory compliance. He is a founder member of the Society for the Promotion of Ethical Clinical Trials (SPECT), India, and previously served as the National Coordinator for a cancer clinical trials network established by the University of Oxford.",
    " Sanjay has been appointed as an Independent Auditor and Co-Monitor by international sponsors and by the Department of Biotechnology, under the Ministry of Science and Technology, Government of India, to audit investigator sites and CROs across India. He has also advised multiple organizations on establishing and optimizing clinical research operations, governance frameworks, and quality systems. Prior to founding Catalyst, Sanjay spent six years with Eli Lilly and Company (India), a research-driven global pharmaceutical organization, where he held roles of increasing responsibility, gaining firsthand experience in sponsor-side clinical development and operational excellence.",
    "Through his leadership at Catalyst, Sanjay continues to shape ethical, patient-centric, and scientifically rigorous clinical research—bridging innovation, compliance, and real-world impact.",
  ],
};

const dataAwards = [
  "Our work has been recognized through Clinical Excellence Awards from leading pharmaceutical companies and the Best Scientific Poster Award at the First Asia Pacific Lung Cancer Conference (Thailand, 2004).",
  "We have also been entrusted by the University of Oxford to establish and oversee a cancer clinical trials network spanning India and the UK, an endorsement of our governance, scientific leadership, and operational reliability.",
  "Catalyst stands as India’s largest clinical research and pharmacovigilance training provider, delivering specialized certification programs that build skilled, ethical, and industry-ready professionals. Through this commitment, we continue to strengthen the manpower that powers innovation.",
  "Catalyst has been instrumental in advancing several first-in-class research initiatives and landmark publications, contributing to the generation of novel, practice-changing evidence across diverse therapeutic areas. With over 100 peer-reviewed publications, our work continues to inform clinical decision-making and, most importantly, improve patient lives.",
  "Catalyst has been appointed by the Ministry of Science and Technology, Government of India for project management and monitoring of multiple ministry-sponsored clinical trials, reflecting the trust placed in our scientific rigor, regulatory compliance, and execution excellence.",
];

const dataJourney = [
  "Every study we support, every professional we train, and every insight we publish reflects our belief that science, when done right, has the power to change lives.",
  "As healthcare continues to evolve, so do we. Guided by our 20-year legacy, strengthened by experience, and inspired by purpose, Catalyst remains committed to transforming innovative ideas into life-changing therapies.",
  "Partner with Catalyst where science meets stewardship, and research becomes impact.",
];

export default function CROExperiencePage() {
  return (
    <main className={styles.main}>
      <Title
        bread={"Who we are"}
        heading={"Who we are"}
        description={
          "20+ Years Legacy of Trust. Science with Purpose. Research with Heart."
        }
        image={croPageHeader.image}
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          {/* SECTION 1: OVERVIEW */}
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>Overview</h2>
              <div className={styles.leftPartition}>
                <div className={styles.leftContent}>
                  {dataOverview.map((paragraph, index) => (
                    <div key={index}>
                      {index == 1 ? (
                        <div className={styles.leftSide}>
                          <p key={index} className={styles.paragraph}>
                            {paragraph}
                          </p>
                          <Image
                            src={Company}
                            alt="overview image"
                            className={styles.companyImg}
                          />
                        </div>
                      ) : (
                        <p key={index} className={styles.paragraph}>
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 2: MISSION & VISION */}
            <div className={styles.leftpart}>
              <div className={styles.rightSide}>
                <Image src={TeamMembers} alt="Team Members" className={styles.teamImg} />
              <div className={styles.visionGroup} >
                <h2 className={styles.visionHeading}>Our Vision</h2>
                <p className={styles.visionSubheading}>
                  {`"${dataVisionMission.vision}"`}
                </p>
              </div>
              </div>

              <div className={styles.leftSide}>
             <div className={styles.visionGroup} >
               <h2 className={styles.visionHeading}>Our Mission</h2>
                <p className={styles.dataMissionparagraph}>{`"${dataVisionMission.mission}"`}</p>
             </div>
                <Image
                  className={styles.deskImg}
                  src={WorkingDesk}
                  alt="People Working with Desk"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: VALUES (Grid Layout) */}
          <div className={styles.leftpart_2}>
            <h2 className={styles.heading}>Our Values</h2>
            <div className={styles.featureGrid}>
              {dataValues.map((card, idx) => (
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

          {/* SECTION 4: LEADERSHIP */}
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>Our Leadership</h2>
              <div className={styles.leftContent}>
                <h3 className={styles.heading}>{dataLeadership.name}</h3>
                <span className={styles.leadershipSubheading}>
                  {dataLeadership.role}
                </span>

                {dataLeadership.bio.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <div key="group-1-2" className={styles.leftSideLeader}>
                        <Image
                          src={Attire}
                          alt="attire"
                          className={styles.attire}
                        />

                        <div className={styles.textGroup}>
                          <p className={styles.paragraph}>
                            {dataLeadership.bio[0]}
                          </p>
                          <p className={styles.paragraph}>
                            {dataLeadership.bio[1]}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  if(index == 1) return null;
                  if (index === 2){;
                  return (
                    <div key={index} className={styles.leftSide}>
                      <p className={styles.paragraph}>{paragraph}</p>
                      <Image src={Guidance} alt="Guiding its team" className={styles.guideImg} />
                    </div>
                  );
                }
                if(index => 3){

                  return <p key={index} className={styles.paragraph}>{paragraph}</p>
                }
                })}
              </div>
            </div>
          </div>

          {/* SECTION 5: AWARDS (Checklist Style) */}
          <div className={styles.leftpart_2}>
            <h2 className={styles.heading}>Awards and Achievements</h2>
            <div className={styles.checkCard}>
              {dataAwards.map((item, idx) => (
                <div key={idx} className={styles.checkItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6: THE JOURNEY AHEAD */}
          <div className={styles.leftpart_1}>
            <div className={styles.leftpart}>
              <h2 className={styles.heading}>The Journey Ahead</h2>
              <div className={styles.leftContent}>
                {dataJourney.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <RightPanel variants={["therapeutic", "clinical", "services"]} />
      </div>
    </main>
  );
}
