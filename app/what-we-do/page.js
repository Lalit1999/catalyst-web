"use client";

import styles from "./page.module.css";

import { serviceDataObject, servicePageHeader } from "@data";
import { Cols, ServiceCard, Title } from "@comps";
import Image from "next/image";

export default function WhatWeDo() {
	const allServices = Object.values(serviceDataObject);

	return (
		<main className={styles.main}>
			<Title 
				heading={servicePageHeader.heading}
				desc={servicePageHeader.description}
			/>
			{/* img={servicePageHeader.image} */}
			<Cols text={servicePageHeader.extra}  />
			<section className={styles.section}>
				<div className={styles.container}>
					{	allServices.map((service, i) => <ServiceCard key={i} {...service} /> )}
				</div>
			</section>
		</main>
	);
}
