"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLong, Arrow, Tick } from "@icons";
import { homePageData } from "@data";
import ResearchCard from '@c/card/ResearchCard';

import styles from "./page.module.css";

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
		<Image src={homePageData.homeSlider.image} alt="Home Banner" />
		<p className={styles.homeSliderText}>{homePageData.homeSlider.title}</p>
    </div>
  );
}

const SectionTwo = () => {
  return(
    <div className={styles.sectionTwo}>
        <div className={styles.sectionTwoHeadCon}>
			<p className={styles.fourSubHeading}>{homePageData.sectionTwo.subTitle}</p>
			<p className={styles.fourHeading}>{homePageData.sectionTwo.title}</p>
			<p className={styles.sectionDescr}>{homePageData.sectionTwo.descr}</p>
        </div>
        <div className={styles.sectionTwoBoxesCon}>
		{
			homePageData.sectionTwo.card.map( ({title, icon, descr, link, btnText}) => {
				return (
					<div className={styles.sectionTwoBox} key={title}>
						<div className={styles.sectionTwoBoxIcon}>{icon}</div>
						<div className={styles.sectionTwoBoxContentCon}>
							<p className={styles.sectionTwoBoxTitle}>{title}</p>
							<div className={styles.sectionTwoBoxDescrCon}>
							{	descr.map((d, index) => (
									<p key={index} className={styles.sectionTwoBoxDescr}>{d}</p>
								))
							}
							</div>
						</div>
						<Link href={link} className={styles.sectionTwoBoxLink}>
							<span>{btnText}</span>
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
						<p className={styles.threePlusHead}>{homePageData.sectionThree.box1.head}</p>
						<p className={styles.threePlusHeadText}>{homePageData.sectionThree.box1.text}</p>
					</div>
					{
						homePageData.sectionThree.box1.para.map( (para, index) => {
							return (
								<p key={index} className={styles.sectionThreeFirstText}>{para}</p>
							) ;
						} )
					}
				</div>
				<div className={styles.sectionThreeSecond}>
					<div className={styles.sectionLight}>
						<p className={styles.sectionThreeHead}>{homePageData.sectionThree.box2.head}</p>
						{
							homePageData.sectionThree.box2.para.map( (para, index) => {
								return (
									<p key={index} className={styles.sectionThreePara}>{para}</p>
								) ;
							} )
						}
						<Link href={homePageData.sectionThree.box2.buttonLink||'#'} className={styles.sectionThreeButton}>Read More</Link>
					</div>
					<div className={styles.sectionDark}>
						<p className={styles.sectionThreeHead}>{homePageData.sectionThree.box3.head}</p>
						{
							homePageData.sectionThree.box3.para.map( (para, index) => {
								return (
									<p key={index} className={styles.sectionThreePara}>{para}</p>
								) ;
							} )
						}
						<Link href={homePageData.sectionThree.box2.buttonLink||'#'} className={styles.sectionThreeButton2} >Read More</Link>
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
				<p className={styles.fourSubHeading}>{homePageData.sectionFour.subTitle}</p>
				<div className={styles.fourHeadingCon}>
					<p className={styles.fourHeading}>{homePageData.sectionFour.title}</p>
					<p className={styles.fourDescr}>{homePageData.sectionFour.descr}</p>
				</div>
				<div className={styles.fourInfoCon}>
					<div className={styles.fourInfoBox}>
						<div className={styles.fourInfoIcon}>
							{homePageData.sectionFour.box1.icon}
						</div>	
						<div className={styles.fourInfoTextCon}>
							<p className={styles.fourInfoTextHead}>{homePageData.sectionFour.box1.head}</p>
							<p className={styles.fourInfoText}>{homePageData.sectionFour.box1.text}</p>
						</div>
					</div>
					<div className={styles.fourInfoBox}>
						<div className={styles.fourInfoIcon}>
							{homePageData.sectionFour.box2.icon}
						</div>
						<div className={styles.fourInfoTextCon}>
							<p className={styles.fourInfoTextHead}>{homePageData.sectionFour.box2.head}</p>
							<p className={styles.fourInfoText}>{homePageData.sectionFour.box2.text}</p>
						</div>
					</div>
				</div>
				<Link href={homePageData.sectionFour.buttonLink} className={styles.fourButton}>{homePageData.sectionFour.buttonText}</Link>
			</div>
			<div className={styles.fourSecond}>
				<div className={styles.fourImageCon}>
					<Image src={homePageData.sectionFour.imageArr[1]} alt="about-2" />
				</div>
			</div>
		</div>
	) ;
}

const StatsSection = () => {
	return (
		<div className={styles.statsMain}>
		{
			homePageData.statsArr.map( ({number, text1, text2}) => {
				return (
					<div className={styles.statsBox} key={number}>
						<p className={styles.statsNumber}>{number}</p>
						<p className={styles.statsText1}>{text1}</p>
						<p className={styles.statsText}>{text2}</p>
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
			<p className={styles.expertiseSubHeading}>{homePageData.expertise.subTitle}</p>
			<p className={styles.expertiseHeading}>{homePageData.expertise.title}</p>
			<div className={styles.expertiseBoxesCon}>
			{
				homePageData.expertise.expertiseArr.map( ({title, descr, link, image}) => {
					return (
						<div className={styles.expertiseBox} key={title}>
							<div className={styles.expertiseBoxContentCon}>
								<p className={styles.expertiseBoxTitle}>{title}</p>
								<div className={styles.expertiseBoxDescrCon}>
									{	descr.map( (descr, index) => {
											return (
												<p key={index} className={styles.expertiseBoxDescr}>{descr}</p>
											) ;
										} )
									}
								</div>
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
					<p className={styles.fourSubHeading}>{homePageData.publications.subTitle}</p>
					<p className={styles.fourHeading}>{homePageData.publications.title}</p>
					<p className={styles.fourDescr}>{homePageData.publications.descr}</p>
				</div>
				<div className={styles.pubHeadLinkCon}>
					<Link href="/" className={styles.fourButton}>View All</Link>
				</div>
			</div>
			<div className={styles.pubBoxesCon}>
				{
					homePageData.publications.pubArr.map( (one, i) => {
						 return (
							<ResearchCard key={i} {...one} />
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
				{/* <p className={styles.fourSubHeading}>{homePageData.results.subTitle}</p> */}
				<p className={styles.fourHeading}>{homePageData.results.title}</p>
				<div className={styles.resultsPointsDescrCon}>
					<p className={styles.resultsPointsDescr}>{homePageData.results.descr}</p>
					<div className={styles.resultPointsCon}>
						{
							homePageData.results.resultPointsArr.map( (point) => {
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
