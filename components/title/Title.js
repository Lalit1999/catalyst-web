import Image from 'next/image';

import { titleLine } from '@images';
import styles from './title.module.css';
import { usePc } from '@utils';

const Line = () => {
  const pc = usePc();
  return (
    <Image src={titleLine} alt="title-line" width={pc?500:250} height={pc?24:12} />
  );
};
const Title = ({title, subtitle}) => (
    <div className={styles.pageHeader}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.subTitle}>{subtitle}</p>
      <Line />
    </div>
)

export default Title ;