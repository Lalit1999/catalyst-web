"use client";

import styles from "./page.module.css";
import Image from "next/image";

import Link from "next/link";
import { serviceArray } from "../../data/serviceData";


export default function WhatWeDo() {

  return (
    <main className={styles.main}>
      <div className={styles.downbarMainCon} >
        <div className={styles.downbarTop}>
        <div className={styles.downHead}>
          <h1 className={styles.main_bread}>Home</h1>
          <h1 className={styles.main_bread}>&rarr;</h1>
          <h1 className={styles.main_bread}>Services</h1>
        </div>
        {/* content */}
        <p className={styles.breadContent}>Services Offered by Catalyst</p>
      </div>

      </div>
      
      {/* main Content Starts from here */}

       <section className={styles.section}>
      <div className={styles.container}>
        {serviceArray.map((service, index) => (
      <div key={index} className={styles.card}>
    
    {/* Image Wrapper */}
    <div className={styles.imageContainer}>
      {service.img && (
        <Image 
          src={service.img} 
          alt={service.title} 
          className={styles.mainImage}
          width={400} 
          height={250}
        />
      )}
      
      {/* Icon Badge: Updated for Images */}
      <div className={styles.iconBadge}>
        {service.imgicon && (
          <Image 
            src={service.imgicon} 
            alt="service icon"
            width={24} 
            height={24} 
            className={styles.iconImg} 
          />
        )}
      </div>
    </div>

    {/* Content */}
    <div className={styles.content}>
      <Link href={`/what-we-do/${service.slug}`} className={styles.title}>{service.title}</Link>
      <p className={styles.desc}>{service.desc}</p>
      
       <Link href={`/what-we-do/${service.slug}`} className={styles.readMore}>
                  <span>Read More</span>
                </Link>
    </div>
  </div>
))}
      </div>
    </section>


      
    </main>
  );
}
