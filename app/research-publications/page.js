"use client";
import styles from "./page.module.css";
import { researchPageHeader, researchPaperData } from "@data";
import { researchimages,researchpdf } from "../../data/researchpaperimagespdf";
import { Title, Card } from "@comps";
import { images } from "../../next.config";
import { id } from "intl-tel-input/i18n";

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
             return(
                <Card
                key={one.id}
                image={researchimages[i]}
                pdfs={researchpdf[i]}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="oncology">
            oncology
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, i) => {
             return(
                <Card
                key={one.id}
                image={researchimages[i]}
                pdfs={researchpdf[i]}
                />
              ) })}
          </div>
        </div>
        <div className={styles.paper}>
          <h1 className={styles.heading} id="other-therapeutic-areas">
            other therapeutic areas
          </h1>
          <div className={styles.coursesTwo}>
            {researchPaperData.map((one, i) => {
             return(
                <Card
                key={one.id}
                image={researchimages[i]}
                pdfs={researchpdf[i]}
                />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
