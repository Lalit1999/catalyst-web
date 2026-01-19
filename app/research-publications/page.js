"use client";

import styles from "./page.module.css";
import { researchPageHeader, researchPaperData } from "@data";
import { Title, Card, ResearchCard } from "@comps";
import { researchimages, researchpdf } from "@data";

export default function Research() {
  return (
    <main className={styles.main}>
      <Title
        bread={researchPageHeader.bread}
        heading={researchPageHeader.heading}
        description={researchPageHeader.description}
      />
      <div className={styles.researchHead}>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="robotic-assisted-surgery">
            robotic assisted surgery
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, index) => (
              <ResearchCard
                key={one.id}
                image={researchimages[index]}
                link={researchpdf[index]}
                heading={one.heading}
              />
            ))}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="oncology">
            oncology
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, index) => (
              <ResearchCard
                key={one.id}
                image={researchimages[index]}
                link={researchpdf[index]}
                heading={one.heading}
              />
            ))}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="other-therapeutic-areas">
            other therapeutic areas
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, index) => (
              <ResearchCard
                key={one.id}
                image={researchimages[index]}
                link={researchpdf[index]}
                heading={one.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
