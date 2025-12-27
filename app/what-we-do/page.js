"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
// This import is correct for a default export
import serviceData from "../../data/serviceData";
import { about1, about2, about3 } from "@images";

export default function WhatWeDo() {
  // Convert the object into an array so we can map over it
  const allServices = Object.values(serviceData);

  return (
    <main className={styles.main}>
     <div className={styles.startHead}>
      <div className={styles.headSection}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>Services</h1>
          </div>
          <div className={styles.headDesc} >
            <p className={styles.breadContent}>Services Offered by Catalyst</p>
          <p className={styles.headContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum bibendum dignissim. Sed quam eros, accumsan in velit a, placerat mollis nunc. Nulla at purus non leo condimentum pellentesque ut a mauris. Vivamus ut euismod nisi, quis laoreet nisl. Suspendi</p>
          <Image src={about1} alt="about service" className={styles.headImg} />
          </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {allServices.map((service) => {
            // Important: Assign the component to a Capitalized variable 
            // so React recognizes it as a component
            const IconComponent = service.imgicon;

            return (
              <div key={service.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <div className={styles.iconBadge}>
                    {IconComponent && (
                      <div className={styles.iconWrapper}>
                        <IconComponent />
                      </div>
                    )}
                  </div>
                  <div className={styles.content}>
                  <Link href={`/what-we-do/${service.id}`} className={styles.title}>
                    {service.heading} 
                  </Link>
                  <p className={styles.desc}>{service.subHeading}</p>
                  <Link href={`/what-we-do/${service.id}`} className={styles.readMore}>
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