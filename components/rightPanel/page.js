// import Link from 'next/link';
// import styles from './page.module.css';
// import { clinicalServicesData, quickLinks, serviceDataObject, therapeuticExpertiseData } from '@data';


// const SIDEBAR_CONFIG = {
//   services: {
//     title: "Services",
//     items: Object.values(serviceDataObject),
//     path : '/what-we-do'
//   },
//   therapeutic: {
//     title: "Therapeutic Expertise",
//     items: Object.values(therapeuticExpertiseData),
//     path : "/therapeutic-expertise"
//   },
//   clinical: {
//     title: "Clinical Operations",
//     items: Object.values(clinicalServicesData),
//     path : '/what-we-do/clinical-development-services'
//   }
// };

// const QUICK_LINKS_DATA = {
//   title: "Quick Links",
//   items: quickLinks
// };

// const Sidebar = ({ variants = [] }) => {

//   const activeVariants = Array.isArray(variants) ? variants : [variants];

//   const renderCard = (key, data) => (
//     <div key={key} className={styles.sidebarCard}>
//       <div className={styles.sidebarCard_round}>
//         <div className={styles.sidebarHeader}>{data.title}</div>
//       </div>

//       <ul className={styles.sidebarList}>
//         {data.items.map((item) => (
//           <li key={item.id} className={styles.sidebarItem}>
//             <Link href={data.path ? `${data.path}/${item.id}`: `${item.id}`} className={styles.sidebarNavLink}>
//               {item.heading}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className={styles.rightColumn}>
      

//       {activeVariants.map((variantKey) => {
//         const data = SIDEBAR_CONFIG[variantKey];

//         if (!data) return null;
//         return renderCard(variantKey, data);
//       })}


//       {renderCard('quick-links-fixed', QUICK_LINKS_DATA)}

//     </div>
//   );
// };

// export default Sidebar;