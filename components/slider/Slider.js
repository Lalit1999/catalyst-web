import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image' ;

import styles from './slider.module.css' ;

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = ({ speed = 7500, imgArr = [] }) => (
    <Carousel responsive={responsive} autoPlay autoPlaySpeed={speed} infinite arrows={false}>
        {   imgArr.map((one,i) => (
                <div key={i} className={styles.sliderImgCon}>
                    <Image className={styles.sliderImg} priority fill src={one} alt="heroImage" sizes="100vw" quality={100} />
                </div>
            ))
        }
    </Carousel>
) ;

export default Slider; 