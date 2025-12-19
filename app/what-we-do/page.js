"use client";
import {
  Cardiomyopathy,
  DentalClinic,
  Hematology,
  Neurology,
  Orthopedics,
  Pharmacology,
} from "@images";
import styles from "./page.module.css";
import Image from "next/image";
import { C1, D1, H1, N1, O1, P1 } from "@icons";
import Link from "next/link";

export default function WhatWeDo() {
  const serviceArray = [
    {
      img: DentalClinic,
      title: "Dental Care",
      desc: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
      link: "#",
      imgicon: <D1/>,
    },
    {
      img: Pharmacology,
      title: "Pharmacology",
      desc: "Medicenter offers comprehensive pharmaceutical care for both adults and children from our office at Toronto.",
      link: "#",
      imgicon: <P1/>,
    },
    {
      img: Orthopedics,
      title: "Orthopedics",
      desc: "Medicenter offers comprehensive orthopedic care for both adults and children from our office at Toronto.",
      link: "#",
      imgicon: <O1/>,
    },
    {
      img: Hematology,
      title: "Hematology",
      desc: "Medicenter offers comprehensive blood disorder diagnostics and treatments from our office at Toronto.",
      link: "#",
      imgicon: <H1/>,
    },
    {
      img: Neurology,
      title: "Neurology",
      desc: "Medicenter offers comprehensive neurological care for both adults and children from our office at Toronto.",
      link: "#",
      imgicon: <N1/>,
    },
    {
      img: Cardiomyopathy,
      title: "Cardiomyopathy",
      desc: "Medicenter offers comprehensive heart health and cardiovascular care from our office at Toronto.",
      link: "#",
      imgicon: <C1/>,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.downbarTop}>
        <div className={styles.downHead}>
          <h1 className={styles.main_bread}>Home</h1>
          <h1 className={styles.main_bread}>&rarr;</h1>
          <h1 className={styles.main_bread}>Services</h1>
        </div>
        {/* content */}
        <p className={styles.breadContent}>Services Offered by Catalyst</p>
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
              
              {/* Icon Badge: Renders the Component Directly */}
              <div className={styles.iconBadge}>
                {service.imgicon}
              </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
              
              <Link href={service.link} className={styles.readMore}>
                <span>Read More</span>
                {/* Optional: Add an arrow icon here if you like */}
                {/* <ArrowLong /> */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>


      
    </main>
  );
}
