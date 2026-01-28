"use client";

import styles from "./page.module.css";

import { therapeuticExpertiseData, therapeuticPageHeader } from "@data";
import { ServiceCard, Title } from "@comps";

export default function Page() {
	const alltherapyData = Object.values(therapeuticExpertiseData);

	return (
		<main className={styles.main}>
			<Title
				heading={therapeuticPageHeader.heading}
				description={therapeuticPageHeader.description}
			/>
			<section className={styles.section}>
				<div className={styles.container}>
					{	alltherapyData.map((service, i) => <ServiceCard key={i} {...service} path="/therapeutic-expertise/" /> )}
				</div>
			</section>
		</main>
	);
}
