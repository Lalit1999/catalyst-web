"use client";

import styles from "./page.module.css";
import Link from "next/link";

import {serviceDataObject, servicePageHeader} from '@data'
import { Title } from "@c/index";


export default function WhatWeDo() {
  const allServices = Object.values(serviceDataObject);

  return (
    <main className={styles.main}>
     
<Title 
        bread={servicePageHeader.bread} 
        heading={servicePageHeader.heading} 
        description={servicePageHeader.description} 
        image={servicePageHeader.image}  
      />
      <section className={styles.section}>
        <div className={styles.container}>
          {allServices.map((service) => {
            const IconComponent = service.imgicon;

            return (
              <div key={service.id} className={styles.card}>
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
                  {/* Changed service.slug to service.id and service.title to service.heading */}
                  <Link href={`/what-we-do/${service.id}`} className={styles.title}>
                    {service.heading} 
                  </Link>
                  <p className={styles.desc}>{service.subHeading}</p>
                   <p><Link href={`/what-we-do/${service.id}`} className={styles.readMore}>
                    Read More
                  </Link></p>
                 
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