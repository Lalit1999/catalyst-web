"use client";
import {
  Badge,
  DoctorAbout,
  Heart,
  IconBookmark,
  IconChart,
  IconCrown,
  IconPig,
  IconUmbrella,
  IconUser,
  Location,
} from "@icons";
import styles from "./page.module.css";
import Image from "next/image";
import { Doctor, headIcon, Nurses, Round, Round1, Round2, Round3 } from "@images";

const timelineData = [
  {
    year: "2001",
    title: "Fill In Our Medical Application",
    desc: "Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci.",
    img: Round,
  },
  {
    year: "2005",
    title: "Review Your Family Medical History",
    desc: "Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci.",
    img: Round1,
  },
  {
    year: "2015",
    title: "Choose Between Our Care Programs",
    desc: "Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci.",
    img: Round2,
  },
  {
    year: "Now",
    title: "Introduce To Highly Qualified Doctors",
    desc: "Nulla metus quam, dictum mollis felis quis, congue sollicitudin orci.",
    img: Round3,
  },
];

const expertiseData = [
  {
    title: "Experience and Expertise",
    icon: <IconBookmark />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Pathology Analysis",
    icon: <IconChart />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Customer Focused",
    icon: <IconUser />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Industry Certified",
    icon: <IconCrown />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Saving Costs",
    icon: <IconPig />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Honesty and Integrity",
    icon: <IconUmbrella />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const statsData = [
  {
    number: "1+",
    label: "Centers Across The United States",
    icon: <Location />,
  },
  {
    number: "1%",
    label: "Customer Satisfaction Is Our Success",
    icon: <Heart />,
  },
  {
    number: "1",
    label: "Honorary Award For Best Quality Hospital",
    icon: <Badge />,
  },
  {
    number: "1",
    label: "Highly Specialized Doctors And Nurses",
    icon: <DoctorAbout />,
  },
];

export default function WhoWeAre() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.downbarTop}>
          <div className={styles.downHead}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>About us</h1>
          </div>
          {/* content */}
          <p className={styles.breadContent}>
            About Catalyst Clinical Services Private Limited
          </p>
        </div>
        {/* ******************************************************** */}
        {/* 2. MISSION & VISION SECTION */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.mvGrid}>
              {/* Mission Card */}
              <div className={styles.mvCard}>
                <h3>Our Mission</h3>
                <p>
                  We understand that accessing medical care can sometimes be
                  challenging, especially for individuals with limited mobility
                  or busy schedules. Lorem ipsum dolor sit amet.
                </p>
              </div>

              {/* Center Image */}
              <div className={styles.mvImageWrapper}>
                <Image
                  src={Nurses}
                  alt="Medical Team"
                  fill
                  className={styles.imgCover}
                />
              </div>

              {/* Vision Card */}
              <div className={styles.mvCard}>
                <h3>Our Vision</h3>
                <p>
                  We understand that accessing medical care can sometimes be
                  challenging, especially for individuals with limited mobility
                  or busy schedules. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROGRESS / CULTURE SECTION */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.splitGrid}>
              <div className={styles.imgCol}>
                <div className={styles.tallImgWrapper}>
                  <Image
                    src={Doctor}
                    alt="Patient Care"
                    fill
                    className={styles.imgCover}
                  />
                </div>
              </div>
              <div className={styles.textCol}>
                <div className={styles.miniTag}>
                  <Image
                    src={headIcon}
                    alt="icon"
                    width={20}
                    height={20}
                    className={styles.miniTagIcon}
                  />
                  <span>Working Together for a Healthy Life</span>
                </div>
                <h2 className={styles.heading}>
                  Committed To Build A Positive, Safe, Patient Focused Culture.
                </h2>
                <p className={styles.desc}>
                  If you’re looking for a reliable health insurer with
                  outstanding services and insurance solutions tailored to your
                  requirements.
                </p>

                {/* Progress Bars */}
                <div className={styles.progressBar}>
                  <div className={styles.progressHeader}>
                    <span>Strategic Analysis</span>
                    <span>80%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressHeader}>
                    <span>Research On Diseases</span>
                    <span>90%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressHeader}>
                    <span>Healing Solution</span>
                    <span>95%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TIMELINE SECTION (Dark Background using var(--main)) */}
        <section className={styles.timelineSection}>
          <div className={styles.container}>
            <div className={styles.timelineGrid}>
              {timelineData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineImg}>
                    {/* Placeholder for round image */}
                    <Image
                      src={item.img}
                      alt={item.year}
                      width={150}
                      height={150}
                      className={styles.roundImg}
                    />
                  </div>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EXPERTISE GRID */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.iconGrid}>
              {expertiseData.map((item, idx) => (
                <div key={idx} className={styles.iconCard}>
                  <div className={styles.iconCircle}>{item.icon}</div>
                  <div className={styles.iconContent}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. STATS BAR (Dark Background using var(--main)) */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {statsData.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
