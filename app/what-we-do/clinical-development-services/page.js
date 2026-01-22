"use client";

import styles from "./page.module.css";

import { clinicalServicesData, serviceDataObject, servicePageHeader } from "@data";
import { Cols, ServiceCard, Title } from "@comps";
import { usePathname } from "next/navigation";

export default function WhatWeDo() {
	const allServices = Object.values(clinicalServicesData);
  let params = usePathname();
  params = params.slice(params.indexOf('c'),params.length)
  console.log(params);
  const service = serviceDataObject[params];
	return (
		<main className={styles.main}>
			<Title 
				heading={service.heading}
				desc={service.subHeading}
			/>
			<Cols text={service.content} />
			<section className={styles.section}>
				<div className={styles.container}>
					{	allServices.map((service, i) => <ServiceCard subPath={'clinical-development-services/'} key={i} {...service} /> )}
				</div>
			</section>
		</main>
	);
}
