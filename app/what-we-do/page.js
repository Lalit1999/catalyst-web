"use client";

import styles from "./page.module.css";

import { serviceDataObject, servicePageHeader } from "@data";
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
			<section className={styles.section}>
				<div className={styles.container}>
					{	allServices.map((service, i) => <ServiceCard key={i} {...service} /> )}
				</div>
			</section>
		</main>
	);
}
