"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
// This import is correct for a default export
import serviceData from "../../data/serviceData";

export default function WhatWeDo() {
  // Convert the object into an array so we can map over it
  const allServices = Object.values(serviceData);

  return (
    <main className={styles.main}>
      <div className={styles.downbarMainCon}>
        <div className={styles.downbarTop}>
          <div className={styles.downHead}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>Services</h1>
          </div>
          <p className={styles.breadContent}>Services Offered by Catalyst</p>
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
                {/* Image Wrapper */}
                <div className={styles.imageContainer}>
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={service.heading} // Changed from title to heading
                      className={styles.mainImage}
                      width={400}
                      height={250}
                    />
                  )}

                  {/* Icon Badge */}
                  <div className={styles.iconBadge}>
                    {IconComponent && (
                      <div className={styles.iconWrapper}>
                        <IconComponent />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  {/* Changed service.slug to service.id and service.title to service.heading */}
                  <Link href={`/what-we-do/${service.id}`} className={styles.title}>
                    {service.heading} 
                  </Link>

                  {/* Changed service.desc to service.subHeading */}
                  <p className={styles.desc}>{service.subHeading}</p>

                  <Link href={`/what-we-do/${service.id}`} className={styles.readMore}>
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}