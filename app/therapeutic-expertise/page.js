"use client";

import styles from "./page.module.css";
import Link from "next/link";

import {therapeuticExpertiseData, therapeuticPageHeader} from "@data";
import { Title } from "@c/index";

export default function WhatWeDo() {
  const alltherapyData = Object.values(therapeuticExpertiseData);

  return (
    <main className={styles.main}>
     <Title 
        bread={therapeuticPageHeader.bread}  
        heading={therapeuticPageHeader.heading} 
        description={therapeuticPageHeader.description} 
        image={therapeuticPageHeader.image} 
      />

      <section className={styles.section}>
        <div className={styles.container}>
          {alltherapyData.map((therapyData) => {
            const IconComponent = therapyData.imgicon;

            return (
              <div key={therapyData.id} className={styles.card}>
                <div className={styles.imageContainer}>

                  {/* Icon Badge */}
                  <div className={styles.iconBadge}>
                    {IconComponent && (
                      <div className={styles.iconWrapper}>
                        <IconComponent />
                      </div>
                    )}
                  </div>
                  <div className={styles.content}>
                  {/* Changed therapyData.slug to therapyData.id and therapyData.title to therapyData.heading */}
                  <Link href={`/therapeutic-expertise/${therapyData.id}`} className={styles.title}>
                    {therapyData.heading} 
                  </Link>
                  <p className={styles.desc}>{therapyData.subHeading}</p>
                  <Link href={`/therapeutic-expertise/${therapyData.id}`} className={styles.readMore}>
                    <span>Read More</span>
                  </Link>
                </div>
                </div>
                
                </div>
              
            );
          })}
        </div>
      </section>
    </main>
  );
}