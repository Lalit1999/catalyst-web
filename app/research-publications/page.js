"use client";

import { about1 } from "@images";
import { researchPaperData, researchPublicationData } from "@data";
import { Title, ResearchCard, GridBlock, ServiceGrid } from "@comps";
import styles from "./page.module.css";

export default function Research() {
    const researchPublications = researchPublicationData["research-publications"];

    return (
        <main className={styles.main}>
            <Title heading={researchPublications.heading} desc={researchPublications.subHeading} />
            <GridBlock  text={researchPublications.content} img={about1} />
            <ServiceGrid cards={researchPublications.capabilityCards} />
            <div className={styles.researchHead}>
                <div className={styles.paper}>
                    <h1 className={styles.heading} id="robotic-assisted-surgery">
                        robotic assisted surgery
                    </h1>
                    <div className={styles.coursesTwo}>
                    {   researchPaperData.map((one,i) => <ResearchCard key={i} {...one} />)    }
                    </div>
                </div>
                <div className={styles.paper}>
                    <h1 className={styles.heading} id="oncology">
                        oncology
                    </h1>
                    <div className={styles.coursesTwo}>
                    {   researchPaperData.map((one,i) => <ResearchCard key={i} {...one} />)    }
                    </div>
                </div>
                <div className={styles.paper}>
                    <h1 className={styles.heading} id="other-therapeutic-areas">
                        other therapeutic areas
                    </h1>
                    <div className={styles.coursesTwo}>
                        {researchPaperData.map((one,i) => <ResearchCard key={i} {...one} />)}
                    </div>
                </div>
            </div>
        </main>
    );
}
