'use client'
import styles from "./page.module.css";
import { GridBlock, ServiceGrid, Title } from "@comps";
import { useParams } from "next/navigation";
import { therapeuticExpertiseData } from "@data";

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
  const { heading, content, subHeading, capabilityCards, image } = therapeuticExpertiseData[serviceId];
    
  return (
    <div className={styles.main}>
      <Title heading={heading} desc={subHeading} />
      <GridBlock text={content} img={image} />
      <ServiceGrid cards={capabilityCards} />
    </div>
  );
};

export default Page;
