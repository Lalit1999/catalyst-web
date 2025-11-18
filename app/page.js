"use client";

import Image from "next/image";
import Link from "next/link";

import { homeBanner } from "@images";
import { ArrowLong, School } from "@icons";
import styles from "./page.module.css";


const practiceArr = [
	{
		title: 'Dental Care',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/home',
	},
	{
		title: 'Pharmacology',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/home',
	},
	{
		title: 'Orthopedics',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/home',
	}
]

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
    	 <Image src={homeBanner} alt="Home Banner" />
    </div>
  );
}

// const SectionOne = () => {
//   return (
//     <div>
//         this is announcement
//     </div>
//   ) ;
// }

const SectionTwo = () => {
  return(
    <div className={styles.sectionTwo}>
        <div className={styles.sectionTwoHeadCon}>
        	<p className={styles.sectionSubTitle}>Focus Area</p>
        	<p className={styles.sectionHeading}>Our Practice Areas</p>
        	<p className={styles.sectionDescr}>The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes.</p>
        </div>
        <div className={styles.sectionTwoBoxesCon}>
		{
			practiceArr.map( ({title, icon, descr, link}) => {
				return (
					<div className={styles.sectionTwoBox} key={title}>
						<div className={styles.sectionTwoBoxIcon}>{icon}</div>
						<div className={styles.sectionTwoBoxContentCon}>
							<p className={styles.sectionTwoBoxTitle}>{title}</p>
							<p className={styles.sectionTwoBoxDescr}>{descr}</p>
						</div>
						<Link href={link} className={styles.sectionTwoBoxLink}>
							<span>Explore {title}</span>
							<ArrowLong />
						</Link>
					</div>
				) ;
			} )
		}
		</div>
    </div>
  ) ;
}

const Home = () => {
  return (
    <div className={styles.home}>
		<HomeSlider />
		{/* <SectionOne /> */}
		<SectionTwo />
		<p>chwci</p>
		{/* 
		<PortfolioSection />
		<BlogSection /> */}
		{/* <FramesSection /> */}
    </div>
  );
};

export default Home;
