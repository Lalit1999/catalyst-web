"use client";

import styles from "./page.module.css";

import { clinicalServicesData, serviceDataObject } from "@data";
import { Cols, ServiceCard, Title } from "@comps";
import { usePathname } from "next/navigation";
import { about2 } from "@images";

export default function WhatWeDo() {
	const allServices = Object.values(clinicalServicesData);
  let params = usePathname();
  params = params.slice(params.indexOf('c'),params.length)
  const service = serviceDataObject[params];
	return (
		<main className={styles.main}>
			<Title 
				heading={service.heading}
				desc={service.subHeading}
			/>
			<Cols text={service.content} img={about2} />
			<section className={styles.section}>
				<div className={styles.container}>
					{	allServices.map((service, i) => <ServiceCard subPath={'clinical-development-services/'} key={i} {...service} /> )}
				</div>
			</section>
		</main>
	);
}
