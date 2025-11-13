
import Image from 'next/image' ;

import { collage  } from '@images';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  return (
    <div className={styles.sliderCon}>
      <Image className={styles.heroSliderImg} src={collage} alt="brush-route-collage" fill/>
    </div>
  );
};

export default HeroSlider;
