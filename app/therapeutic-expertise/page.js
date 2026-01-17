"use client";

import styles from "./page.module.css";
import Link from "next/link";

import { therapeuticExpertiseData, therapeuticPageHeader } from "@data";
import { ServiceCard, Title } from "@comps";

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
          {alltherapyData.map((service, i) => {
            return (
              <ServiceCard
                key={i}
                service={service}
                path={"/therapeutic-expertise/"}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
