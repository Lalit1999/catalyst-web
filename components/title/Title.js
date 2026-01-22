import Image from 'next/image';

import styles from './title.module.css';
import { RadientSvgBg } from '@icons';

// const Title = ({ bread, heading, description, image,breadIn,breadIn_1 }) => {
//   return (
//     <div className={styles.startHead}>
//       <div className={styles.headSection}>
//         <h1 className={styles.main_bread}>Home</h1>
//         <h1 className={styles.main_bread}>&rarr;</h1>
//         <h1 className={styles.main_bread}>{bread}</h1>
//        {breadIn ? <> <h1 className={styles.main_bread}>&rarr;</h1>
//         <h1 className={styles.main_bread}>{breadIn}</h1></>: null}
//         {breadIn_1 ? <> <h1 className={styles.main_bread}>&rarr;</h1>
//         <h1 className={styles.main_bread}>{breadIn_1}</h1></>: null}
//       </div>
//       <div className={styles.headDesc}>
//         <p className={styles.breadContent}>{heading}</p>
//         <p className={styles.headContent}>{description}</p>
//         {image && <Image src={image} alt="about service" className={styles.headImg} />}
//       </div>
//     </div>
//   );
// };

const Title = ({heading,desc,desc_1}) => {
  return (
    <div className={styles.homeSlider}>
     <div className={styles.WrapperBg} >
 <div className={styles.homeSliderMain}>
        <h1 className={styles.homeSliderText}>{heading}</h1>
        <p className={styles.homeSliderDesc}>
          {desc}
        </p>
      </div>
     </div>
    </div>
  );
};
export default Title ;