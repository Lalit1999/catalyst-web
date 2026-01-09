"use client";
import styles from "./page.module.css";
import { researchPageHeader, researchPaperData } from "@data";
import { Title, Card } from "@comps";

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
            {researchPaperData.map((one, i) => {
              return <Card key={i} {...one} />;
            })}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="oncology">
            oncology
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, i) => {
              return <Card key={i} {...one} />;
            })}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="other-therapeutic-areas">
            other therapeutic areas
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, i) => {
              return <Card key={i} {...one} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
