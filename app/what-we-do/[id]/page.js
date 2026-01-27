'use client'
import { about2 } from "@images";
import styles from "./page.module.css";
import { Cols, ServiceGrid, Title } from "@comps";
import { useParams } from "next/navigation";
import { serviceDataObject } from "@data";

// Data for the grid



// const ServiceGrid = () => {
//   return (
//     <div className={styles.gridContainer}>
//       {fullServicesList.map((service, index) => (
//         <div key={index} className={styles.serviceCard}>
//           <div className={styles.iconWrapper}>
//             <Bullet className={styles.svgIcon} />
//           </div>
//           <h3 className={styles.cardTitle}>{service.title}</h3>
//           <ul className={styles.pointsList}>
//             {service.points.map((point, i) => (
//               <li key={i} className={styles.pointItem}>
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// const description = 'Catalyst provides comprehensive, end-to-end clinical trial management founded on scientific rigor, ethical governance, and a deeply patient-centred philosophy. We collaborate with pharmaceutical, biotechnology, and medical device organizations globally to conceptualize, design, and operationalize clinical studies that are methodologically robust, reflective of real-world patient populations, and capable of generating high-quality, generalizable evidence.'
const Page = () => {
  const params = useParams();
    const serviceId = params.id || params.slug;
    const service = serviceDataObject[serviceId];
    
  return (
    <div className={styles.main}>
      <Title heading={service.heading} desc={service.subHeading} />
      <Cols  text={service.content} img={about2} />
      <ServiceGrid cards={service.capabilityCards} />
    </div>
  );
};

export default Page;
