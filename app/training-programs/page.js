"use client";

import Image from "next/image";
import Link from "next/link";

import { homeBanner2, awards, placementLogos, event1, event2, event3, cardImage, logo, about1, about2, about3, programs } from "@images";
import { ArrowLong, Clock, Location, School } from "@icons";
import { Card } from "@comps";

import styles from "./page.module.css";
import { useState } from "react";

const programsArr = [
  {
    image: cardImage,
    heading: "Professional Diploma in Clinical Research (PDCR)",
    lessons: 4,
    students: 100,
    description:
      "PDCR is India’s largest and widely recognized clinical research training program, designed to cultivate high-calibre professionals for the pharmaceutical, biotechnology, and healthcare research sectors.",
    id: "professional-diploma-in-clinical-research-pdcr",
  },
  {
    image: cardImage,
    heading: "Professional Certificate in Pharmacovigilance (PCPV)",
    lessons: 10,
    students: 100,
    description:
      "The Professional Certificate in Pharmacovigilance (PCPV) is an industry-aligned drug safety training program that equips learners with essential skills in pharmacovigilance, case processing, signal detection, and global safety regulations.",
    id: "professional-certificate-in-pharmacovigilance-pcpv",
  },
  {
    image: cardImage,
    heading: "Advanced Certificate Program in Scientific Writing (SW)",
    lessons: 10,
    students: 100,
    description:
      "The Advanced Certificate Program in Scientific Writing is a comprehensive, competency-building training program designed to prepare participants for specialized roles in scientific and medical writing within the biopharmaceutical, healthcare, and clinical research industries. ",
    id: "advanced-certificate-program-in-scientific-writing-sw",
  },
  {
    image: cardImage,
    heading: "Advanced Certificate Program in Project Management (PM)",
    lessons: 10,
    students: 100,
    description:
      "The Advanced Certificate Program in Project Management is a structured, competency-building course designed to equip participants with the core skills, practical knowledge, and operational insight required for specialized clinical trial project management roles",
    id: "advanced-certificate-program-in-project-management-pm",
  },
  {
    image: cardImage,
    heading: "Advanced Certificate Program in Clinical Trial Monitoring (CTM)",
    lessons: 10,
    students: 100,
    description:
      "The Advanced Certificate Program in Clinical Trial Monitoring is a focused, competency-driven training designed to develop specialized expertise in the oversight and monitoring of clinical trials. ",
    id: "advanced-certificate-program-in-clinical-trial-monitoring-ctm",
  },
  {
    image: cardImage,
    heading: "Oncology Clinical Trials Training (OCTT)",
    lessons: 10,
    students: 100,
    description:
      "The Oncology Clinical Trials Training (OCTT) program is a specialized, competency-driven course designed to equip participants with the knowledge, skills, and practical expertise required to manage and oversee oncology clinical trials. ",
    id: "oncology-clinical-trials-training-octt",
  },
];

const awardsArr = [
  {
    head: "Brand Of The Year",
    subHead: "Organic Perfumes",
    year: 2017,
    descr:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
  },
  {
    head: "Best Organic Cosmetics",
    subHead: "Organic Production",
    year: 2018,
    descr:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
  },
  {
    head: "Best Ingredients",
    subHead: "Organic Perfumes",
    year: 2019,
    descr:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
  },
  {
    head: "Best Business Model",
    subHead: "Organic Perfumes",
    year: 2020,
    descr:
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
  },
];

const eventsCardArr = [
  {
    title: "The Future of Medical Science and Healthcare Solutions",
    date: "22 Dec 2023",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: event1,
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    venue: "Auditorium, Building A",
    id: "event1",
  },
  {
    title: "The Future of Medical Science and Healthcare Solutions",
    date: "22 Dec 2023",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: event2,
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    venue: "Auditorium, Building A",
    id: "event2",
  },
  {
    title: "The Future of Medical Science and Healthcare Solutions",
    date: "22 Dec 2023",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: event3,
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    venue: "Auditorium, Building A",
    id: "event3",
  },
];
const placementsArr = [
    { logo: logo },
    { logo: logo },
    { logo: logo },
    { logo: logo },
    { logo: logo },
    { logo: logo },
    { logo: logo },
    { logo: logo },
]
const SectionFour = () => {
	return (
		<div className={styles.sectionFourMain}>
            <div className={styles.sectionFourMainFirst}>
                <div className={styles.fourFirst}>
                    <p className={styles.fourSubHeading}>Our Story</p>
                    <div className={styles.fourHeadingCon}>
                        <p className={styles.fourHeading}>We Have the best and Expert Faculties</p>
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
                        <Image src={programs} alt="programs" />
                    </div>
                    <div className={styles.fourImageCon}>
                        <Image src={about3} alt="about-3" />
                    </div>
                </div>
            </div>
            <div className={styles.sectionFourMainSecond}>
                <div className={styles.fourStatBox}>
                    <div className={styles.statsCircleCon} style={{ "--percent": 90 }}>
                        <div className={styles.statsCircle}><p>90%</p></div>
                    </div>
                    <div className={styles.statsTextCon}>
                        <p>of novel drugs approved by the US Food and Drug Administration (FDA) including:</p>
                        <ul className={styles.statsTextList}>
                            <li><span>96%</span> of oncology drugs</li>
                            <li><span>89%</span> of central nervous system drugs</li>
                            <li><span>92%</span> of general medicine drugs</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.fourStatBox}>
                    <div className={styles.statsCircleCon} style={{ "--percent": 70 }}>
                        <div className={styles.statsCircle}><p>70%</p></div>
                    </div>
                    <div className={styles.statsTextCon}>
                        <p>of novel products granted marketing authorization by the European Medicines Agency (EMA)</p>
                        <ul className={styles.statsTextList}>
                            <li><span>93%</span> of oncology drugs</li>
                            <li><span>83%</span> of central nervous system drugs</li>
                            <li><span>89%</span> of general medicine drugs</li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
	) ;
}



const TESTIMONIALS_DATA = [
  {
    id: 1,
    title: "Grow Personal Financial Security Thinking & Principles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget dolor sit.",
    name: "Betsy Stanley",
    role: "Teacher",
    rating: 4, 
    image: about1, 
    avatar: about1      
  },
  {
    id: 2,
    title: "Learning to Code changed my professional career",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "John Doe",
    role: "Web Developer",
    rating: 5,
    image: about2, 
    avatar: about2
  },
  {
    id: 3,
    title: "The best platform for academic growth",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    name: "Sarah Smith",
    role: "Graduate Student",
    rating: 3,
    image: about3, 
    avatar: about3
  }
];

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    console.log('prev');
    
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    console.log('next');
    
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.testimonialSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <span className={styles.subtitle}>STUDENTS</span>
        <h2 className={styles.title}>Testimonials</h2>
      </div>

      {/* Carousel Container */}
      <div className={styles.carouselContainer}>
        
        {/* Left Navigation Button */}
        <button 
          className={styles.navButton} 
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Main Card Wrapper */}
        <div className={styles.cardWrapper}>
          {/* Decorative Background Stacks */}
          <div className={`${styles.stackCard} ${styles.stack1}`}></div>
          <div className={`${styles.stackCard} ${styles.stack2}`}></div>

          {/* Actual Content Card */}
          {/* We add key={currentIndex} so React knows to re-render the card animation when data changes */}
          <div className={styles.card} key={currentIndex}>
            
            {/* Left: Image */}
            <div className={styles.imageContainer}>
              <Image 
                src={current.image} 
                alt="Student studying" 
                fill
                className={styles.mainImage}
              />
            </div>

            {/* Right: Content */}
            <div className={styles.contentContainer}>
              <h3 className={styles.cardTitle}>
                {current.title}
              </h3>
              
              <p className={styles.cardBody}>
                {current.text}
              </p>

              <div className={styles.footer}>
                <div className={styles.authorInfo}>
                  <div className={styles.avatarWrapper}>
                    <Image 
                      src={current.avatar} 
                      alt={current.name} 
                      width={40} 
                      height={40} 
                      className={styles.avatar}
                    />
                  </div>
                  <div>
                    <p className={styles.authorName}>{current.name}</p>
                    <p className={styles.authorRole}>{current.role}</p>
                  </div>
                </div>

                {/* Dynamic Star Rating */}
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => {
                    // Check if the current index is less than the rating
                    const isFilled = i < current.rating;
                    return (
                      <span 
                        key={i} 
                        className={isFilled ? styles.starFilled : styles.starEmpty}
                      >
                        {isFilled ? '★' : '☆'}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Navigation Button */}
        <button 
          className={styles.navButton} 
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <Image src={homeBanner2} alt="Program Banner" />
      <div className={styles.homeSliderOverlay} />
      <p className={styles.homeSliderText}>
        A Teacher as equally committed as you.
      </p>
    </div>
  );
};

const CoursesComp = () => {
  return (
    <div className={styles.coursesComp}>
      <div className={styles.coursesOne}>
        <p className={styles.subHead}>Courses offered by Catalyst</p>
        <p className={styles.mainHead}>Our Courses</p>
        <p className={styles.subDescr}>
          The healthcare arena there was a felt need of developing new as well
          as upgrading the existing functioning and processes.
        </p>
      </div>
      <div className={styles.coursesTwo}>
        {programsArr.map((one, i) => {
          return <Card key={i} {...one} />;
        })}
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <div className={styles.awardsMain}>
      <div className={styles.awardsTop}>
        <div className={styles.awardsTopLeft}>
          <p className={styles.subHead}>Big achievements</p>
          <p className={styles.mainHead}>Our Awards</p>
        </div>
        <div className={styles.awardsTopCenter}>
          <p className={styles.subDescr2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Nisl tincidunt eget nullam non. Quis
            hendrerit dolor magna eget dolor sit.
          </p>
        </div>
        <div className={styles.awardsTopRight}>
          <Link href="/" className={styles.awardsTopBtn}>
            View All <ArrowLong />
          </Link>
        </div>
      </div>
      <div className={styles.awardsBottom}>
        <div className={styles.awardsBottomLeft}>
          <Image src={awards} alt="Awards Banner" fill />
        </div>
        <div className={styles.awardsBottomRight}>
          {awardsArr.map((one, i) => {
            return (
              <div className={styles.awardDetail} key={i}>
                <div className={styles.awardHeadCon}>
                  <p className={styles.awardHead}>{one.head}</p>
                  <p className={styles.awardYear}>{one.year}</p>
                </div>
                <div className={styles.awardSubHead}>{one.subHead}</div>
                <div className={styles.awardDescr}>{one.descr}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Placemnets = () => {
  return (
    <div className={styles.placementsMain}>
      <div className={styles.placementsHead}>
        <p className={styles.mainHead}>Placements</p>
      </div>
      <div className={styles.placementsLogosCon}>
        {Object.values(placementLogos).map((one, i) => {
          return (
            <div className={styles.placementLogo} key={i}>
              <Image src={one} alt={`Placement Logo ${i + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <div className={styles.eventMain}>
      <div className={styles.eventHead}>
        <div className={styles.eventHeadText}>
          <p className={styles.subHead}>Our Upcoming Event</p>
          <p className={styles.mainHead}>
            Join Our Upcoming Educational Events and Workshops Today
          </p>
        </div>
        <div className={styles.eventHeadLink}>
          <Link href="/" className={styles.eventLink}>
            View All Events <ArrowLong />
          </Link>
        </div>
      </div>
      <div className={styles.eventCardCon}>
        {eventsCardArr.map((one, i) => {
          return (
            <div key={i} className={styles.eventCard}>
              <div className={styles.eventCardImageCon}>
                <Image src={one.image} alt={`Event Image ${i + 1}`} />
                <p className={styles.eventDate}>{one.date}</p>
              </div>
              <div className={styles.eventCardTextCon}>
                <p className={styles.eventCardTitle}>{one.title}</p>
                <div className={styles.eventCardDetails}>
                  <Clock />
                  <p>
                    {one.startTime} - {one.endTime}
                  </p>
                </div>
                <div className={styles.eventCardDetails}>
                  <Location />
                  <p>{one.venue}</p>
                </div>
              </div>
              <div className={styles.eventCardBtn}>
                <Link href="/" className={styles.eventCardBtnLink}>
                  Event Details <ArrowLong />
                </Link>
                {/* <Link href={`/events/${one.id}`} className={styles.eventCardBtnLink}>Event Details <ArrowLong /></Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TrainingPrograms = () => {
  return (
    <div className={styles.programsMain}>
      <HomeSlider />
      <CoursesComp />
      <SectionFour />
      <Awards />
      <Placemnets />
      <Event />
      <Testimonials/>
    </div>
  );
};

export default TrainingPrograms;
