"use client";

import styles from "./page.module.css";
import Link from "next/link";

import {serviceDataObject, servicePageHeader} from '@data'
import { ServiceCard, Title } from "@comps";


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
      <ServiceCard allServices={allServices} path={'/what-we-do/'} />
    </main>
  );
}