"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import therapyData from "../../data/therapeuticExpertise";
import { about1 } from "@images";

export default function WhatWeDo() {
  const alltherapyData = Object.values(therapyData);

  return (
    <main className={styles.main}>
     <div className={styles.startHead}>
      <div className={styles.headSection}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>Therapeutic Expertise</h1>
          </div>
          <div className={styles.headDesc} >
            <p className={styles.breadContent}>Therapeutic Expertise by Catalyst</p>
          <p className={styles.headContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum bibendum dignissim. Sed quam eros, accumsan in velit a, placerat mollis nunc. Nulla at purus non leo condimentum pellentesque ut a mauris. Vivamus ut euismod nisi, quis laoreet nisl. Suspendi</p>
          <Image src={about1} alt="about therapyData" className={styles.headImg} />
          </div>
      </div>

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