'use client'
import { about1 } from "@images";
import styles from "./page.module.css";
import { Cols, ServiceGrid, Title } from "@c/index";
import { useParams } from "next/navigation";
import { clinicalServicesData} from "@data";

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

const Page = () => {
    const params = useParams();
    const serviceId = params.id || params.slug;
    const service = clinicalServicesData[serviceId];
    
  return (
    <div className={styles.main}>
      <Title heading={service.heading} desc={service.subHeading} />
      <Cols  text={service.content} img={about1} />
      <ServiceGrid cards={service.capabilityCards} />
    </div>
  );
};

export default Page;
