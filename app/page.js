"use client";

import Image from "next/image";
import Link from "next/link";

import { homeBanner, about1, about2, exp1, exp2, exp3, pub1, pub2, pub3 } from "@images";
import { ArrowLong, School, Expertise, MultiLocation, Partners, Patients, Arrow, Tick } from "@icons";
import styles from "./page.module.css";


const practiceArr = [
	{
		title: 'Dental Care',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/',
	},
	{
		title: 'Pharmacology',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/',
	},
	{
		title: 'Orthopedics',
		icon: <School />,
		descr: 'Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.',
		link: '/',
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

const expertiseArr = [
	{
		title: 'Oncology',
		descr: 'Our therapeutic expertise spans a wide range of disease areas, including oncology, cardiology, neurology, and infectious diseases. We have a deep understanding of the unique challenges and requirements of each therapeutic area, allowing us to design and execute clinical trials that are tailored to the specific needs of our clients.',
		link: '/',
		image: exp1
	},
	{
		title: 'Predictive Commercial Solutions',
		descr: 'Our therapeutic expertise spans a wide range of disease areas, including oncology, cardiology, neurology, and infectious diseases. We have a deep understanding of the unique challenges and requirements of each therapeutic area, allowing us to design and execute clinical trials that are tailored to the specific needs of our clients.',
		link: '/',
		image: exp2
	},
	{
		title: 'FSP Solutions',
		descr: 'Our therapeutic expertise spans a wide range of disease areas, including oncology, cardiology, neurology, and infectious diseases. We have a deep understanding of the unique challenges and requirements of each therapeutic area, allowing us to design and execute clinical trials that are tailored to the specific needs of our clients.',
		link: '/',
		image: exp3
	}
] ;

const pubArr = [
	{
		image : pub1,
		title: 'Innovating To End Malaria',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		link: '/',
	},
	{
		image : pub2,
		title: 'Emerging Investigators',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		link: '/',
	},
	{
		image : pub3,
		title: 'Vaccine Research',
		descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
		link: '/',
	}
] ;

const resultPointsArr = [
	'Friendly team you can call friends',
	'We accept many insurance plans and offer discounts',
	'We use energy-saving and waste-reducing methods',
	'Commitment to excellence in every project',
] ;

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
		<Image src={homeBanner} alt="Home Banner" />
		<p className={styles.homeSliderText}>A partner as equally committed as you.</p>
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
			<p className={styles.fourSubHeading}>Focus Area</p>
			<p className={styles.fourHeading}>Our Practice Areas</p>
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

const ExpertiseSection = () => {
	return (
		<div className={styles.expertiseMain}>
			<p className={styles.expertiseSubHeading}>Featured Solutions</p>
			<p className={styles.expertiseHeading}>Deep Expertise</p>
			<div className={styles.expertiseBoxesCon}>
			{
				expertiseArr.map( ({title, descr, link, image}) => {
					return (
						<div className={styles.expertiseBox} key={title}>
							<div className={styles.expertiseBoxContentCon}>
								<p className={styles.expertiseBoxTitle}>{title}</p>
								<p className={styles.expertiseBoxDescr}>{descr}</p>
								<Link href={link} className={styles.expertiseBoxLink}>Learn More <ArrowLong /></Link>
							</div>
							<div className={styles.expertiseBoxImageCon}>
								<Image src={image} alt={title} />
							</div>
						</div>
					) ;
				} )
			}
			</div>
		</div>
	) ;
}

const PubSection = () => {
	return (
		<div className={styles.pubMain}>
			<div className={styles.pubHeadCon}>
				<div className={styles.pubHeadTextCon}>
					<p className={styles.fourSubHeading}>Latest Publications</p>
					<p className={styles.fourHeading}>Our Best Publications</p>
					<p className={styles.fourDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div className={styles.pubHeadLinkCon}>
					<Link href="/" className={styles.fourButton}>View All</Link>
				</div>
			</div>
			<div className={styles.pubBoxesCon}>
				{
					pubArr.map( ({image, title, descr, link}) => {
						return (
							<div key={title} className={styles.pubBox}>
								<div className={styles.pubBoxImageCon}>
									<Image src={image} alt={title} />
								</div>
								<div className={styles.pubBoxContentCon}>
									<p className={styles.pubBoxTitle}>{title}</p>
									<p className={styles.pubBoxDescr}>{descr}</p>
									<Link href={link} className={styles.pubBoxLink} ><Arrow />&nbsp;Read More </Link>
								</div>
							</div>
						) ;
					})
				}
			</div>
		</div>
	) ;
}

const ResultsSection = () => {
	return (
		<div className={styles.resultsMain}>
			<div className={styles.resultInfoCon}>
				<p className={styles.fourSubHeading}>Your Health is Our Top Goal</p>
				<p className={styles.fourHeading}>Better Research, Better Results </p>
				<div className={styles.resultsPointsDescrCon}>
					<p className={styles.resultsPointsDescr}>Family medicine and primary care providers treat the full spectrum of conditions and concerns for children, adults and seniors. Many of our providers offer well woman care prenatal care and deliver babies. From preventive exams and physicals.</p>
					<div className={styles.resultPointsCon}>
						{
							resultPointsArr.map( (point) => {
								return (
									<div key={point} className={styles.resultPoint}>
										<Tick />
										<p className={styles.resultPointText}>{point}</p>
									</div>
								) ;
							} )
						}
					</div>
				</div>
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
		<SectionThree />
		<SectionFour />
		<StatsSection />
		<ExpertiseSection />
		<PubSection />
		<ResultsSection />
		{/* 
		<PortfolioSection />
		<BlogSection /> */}
		{/* <FramesSection /> */}
    </div>
  );
};

export default Home;
