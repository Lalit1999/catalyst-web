"use client";

import Image from "next/image";
import Link from "next/link";

import { pragramBanner, awards, placementLogos, event1, event2, event3, cardImage } from "@images";
import { ArrowLong, Clock, Location } from "@icons";
import { Card } from "@comps";

import styles from "./page.module.css";

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

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <Image src={pragramBanner} alt="Program Banner" />
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
      {/* <SectionFour /> */}
      <Awards />
      <Placemnets />
      <Event />
    </div>
  );
};

export default TrainingPrograms;
