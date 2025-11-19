"use client";

import Image from "next/image";
import Link from "next/link";

import { homeBanner, about1, about2 } from "@images";
import { ArrowLong, School, Expertise, MultiLocation, Partners, Patients } from "@icons";
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
] ;

const statsArr = [
	{
		icon: <MultiLocation />,
		number: '40+',
		text: 'locations with our dedicated people',
	},
	{
		icon: <Partners />,
		number: '100+',
		text: 'biotech and pharma partners',
	},
	{
		icon: <Expertise />,
		number: '20+',
		text: 'years of CRO expertise in teams that care',
	},
	{
		icon: <Patients />,
		number: '300k+',
		text: 'patients engaged worldwide',
	}
] ;

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

const SectionThree = () => {
	return (
		<div className={styles.sectionThreeMain}>
			<div className={styles.sectionThreeCon}>
				<div className={styles.sectionThreeFirst}>
					<div className={styles.sectionThreeFirstHead}>
						<p className={styles.threePlusHead}>20+</p>
						<p className={styles.threePlusHeadText}>Years of Research Experience</p>
					</div>
					<p className={styles.sectionThreeFirstText}>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
					<p className={styles.sectionThreeFirstText}>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
					<p className={styles.sectionThreeFirstText}>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
				</div>
				<div className={styles.sectionThreeSecond}>
					<div className={styles.sectionLight}>
						<p className={styles.sectionThreeHead}>Regions Covered</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<div className={styles.sectionDark}>
						<p className={styles.sectionThreeHead}>Types of Trial Sites</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className={styles.sectionThreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
			</div>
		</div>
	) ;
}

const SectionFour = () => {
	return (
		<div className={styles.sectionFourMain}>
			<div className={styles.fourFirst}>
				<p className={styles.fourSubHeading}>Our Story</p>
				<div className={styles.fourHeadingCon}>
					<p className={styles.fourHeading}>We Are The #1 Research Expert Company</p>
					<p className={styles.fourDescr}>Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
				</div>
				<div className={styles.fourInfoCon}>
					<div className={styles.fourInfoBox}>
						<div className={styles.fourInfoIcon}>
							<School />
						</div>	
						<div className={styles.fourInfoTextCon}>
							<p className={styles.fourInfoTextHead}>Lab Technicians</p>
							<p className={styles.fourInfoText}>Est ante in nibh mauris cursus mattis molestie a.</p>
						</div>
					</div>
					<div className={styles.fourInfoBox}>
						<div className={styles.fourInfoIcon}>
							<School />
						</div>
						<div className={styles.fourInfoTextCon}>
							<p className={styles.fourInfoTextHead}>Research Center</p>
							<p className={styles.fourInfoText}>Est ante in nibh mauris cursus mattis molestie a.</p>
						</div>
					</div>
				</div>
				<button className={styles.fourButton}>Know More About Us</button>
			</div>
			<div className={styles.fourSecond}>
				<div className={styles.fourImageCon}>
					<Image src={about2} alt="about-2" />
				</div>
				<div className={styles.fourImageCon}>
					<Image src={about1} alt="about-1" />
				</div>
			</div>
		</div>
	) ;
}

const StatsSection = () => {
	return (
		<div className={styles.statsMain}>
		{
			statsArr.map( ({icon, number, text}) => {
				return (
					<div className={styles.statsBox} key={number}>
						<div className={styles.statsIcon}>{icon}</div>
						<p className={styles.statsNumber}>{number}</p>
						<p className={styles.statsText}>{text}</p>
					</div>
				) ;
			} )
		}
		</div>
	) ;
}

const Home = () => {
  return (
    <div className={styles.home}>
		<HomeSlider />
		{/* <SectionOne /> */}
		<SectionTwo />
		<SectionThree />
		<SectionFour />
		<StatsSection />
		{/* 
		<PortfolioSection />
		<BlogSection /> */}
		{/* <FramesSection /> */}
    </div>
  );
};

export default Home;
