import Image from 'next/image';

// import { titleLine } from '@images';
import styles from './title.module.css';
// import { usePc } from '@utils';

// const Line = () => {
//   const pc = usePc();
//   return (
//     <Image src={titleLine} alt="title-line" width={pc?500:250} height={pc?24:12} />
//   );
// };
// const Title = ({title, subtitle}) => (
//     <div className={styles.pageHeader}>
//       <h2 className={styles.heading}>{title}</h2>
//       <p className={styles.subTitle}>{subtitle}</p>
//       <Line />
//     </div>
// )

const Title = ({ bread, heading, description, image,breadIn,breadIn_1 }) => {
  return (
    <div className={styles.startHead}>
      <div className={styles.headSection}>
        <h1 className={styles.main_bread}>Home</h1>
        <h1 className={styles.main_bread}>&rarr;</h1>
        <h1 className={styles.main_bread}>{bread}</h1>
       {breadIn ? <> <h1 className={styles.main_bread}>&rarr;</h1>
        <h1 className={styles.main_bread}>{breadIn}</h1></>: null}
        {breadIn_1 ? <> <h1 className={styles.main_bread}>&rarr;</h1>
        <h1 className={styles.main_bread}>{breadIn_1}</h1></>: null}
      </div>
      <div className={styles.headDesc}>
        <p className={styles.breadContent}>{heading}</p>
        <p className={styles.headContent}>{description}</p>
        {image && <Image src={image} alt="about service" className={styles.headImg} />}
      </div>
    </div>
  );
};


export default Title ;