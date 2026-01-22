import { serviceImg } from "@images";
import { Bullet} from "@icons"; // Using the bullet icon you mentioned
import Image from "next/image";
import styles from "./page.module.css";
import { Title } from "@c/index";

// Data for the grid
const servicesData = [
  {
    id: 1,
    title: "Study Planning and Start-Up",
    points: [
      "Preparation of project milestone plan and deliverable tracking",
      "Feasibility assessment of participating centers",
      "Site identification, selection, and onboarding",
      "Oversight of Ethics Committee (EC) submissions and timelines",
    ],
  },
  {
    id: 2,
    title: "Project Coordination and Communication",
    points: [
      "Central liaison among sponsor, investigators, data-collection teams, and statisticians",
      "Establishment of structured communication and reporting pathways",
      "Monthly/weekly project status meetings and progress reporting with internal teams, and sponsors",
    ],
  },
  {
    id: 3,
    title: "Data Management Oversight",
    points: [
      "Setup and oversight of data collection tools",
      "Monitoring accuracy and completeness of submitted data",
    ],
  },
];

// Replicating the data to make 9 cards as seen in the image
const fullServicesList = [...servicesData, ...servicesData, ...servicesData];



const TextSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.separation}>
        <div className={styles.leftpart}>
          <p className={styles.heroText}>
            From trouble sleeping to work stress to anxiety to depression, we
            all have difficulty managing our emotions at times...
          </p>
          <p className={styles.heroText}>
            We’ve redesigned the doctor’s office experience to fit your life,
            put you at ease, and treat you as a whole person. We create safe and
            inviting spaces,ask meaningful questions, give you time to talk, and
            listen without judgment. Then we work with you on a plan to help you
            feel your best — whether you want to sleep better, feel calmer,
            worry less, or get a better handle on your mood.
          </p>
          <p className={styles.heroText}>
            We’ve redesigned the doctor’s office experience to fit your life,
            put you at ease, and treat you as a whole person. We create safe and
            inviting spaces,ask meaningful questions, give you time to talk
          </p>
          {/* ... other paragraphs ... */}
        </div>
        <div className={styles.rightpart}>
          <Image src={serviceImg} className={styles.heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

const ServiceGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {fullServicesList.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          <div className={styles.iconWrapper}>
            <Bullet className={styles.svgIcon} />
          </div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <ul className={styles.pointsList}>
            {service.points.map((point, i) => (
              <li key={i} className={styles.pointItem}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const description = 'Catalyst provides comprehensive, end-to-end clinical trial management founded on scientific rigor, ethical governance, and a deeply patient-centred philosophy. We collaborate with pharmaceutical, biotechnology, and medical device organizations globally to conceptualize, design, and operationalize clinical studies that are methodologically robust, reflective of real-world patient populations, and capable of generating high-quality, generalizable evidence.'
const Page = () => {
  return (
    <div className={styles.main}>
      <Title heading='What we do' desc={description} />
      <TextSection />
      <ServiceGrid />
    </div>
  );
};

export default Page;
