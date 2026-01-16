import { about1, radient, serviceImg } from "@images";
import Image from "next/image";
import styles from "./page.module.css";
const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <Image src={radient} alt="Banner" />
      <div className={styles.homeSliderMain}>
        <h1 className={styles.homeSliderText}>Orthopedics</h1>
        <p className={styles.homeSliderDesc}>
          From trouble sleeping to work stress to anxiety to depression, we all
          have difficulty managing our emotions at times.
        </p>
      </div>
    </div>
  );
};
const TextSection = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.separation}>
          <div className={styles.leftpart}>
            <p className={styles.heroText}>
              From trouble sleeping to work stress to anxiety to depression, we
              all have difficulty managing our emotions at times. It’s part of
              being human. And addressing these issues is a vital part of what
              we do as a primary care practice, because your emotional
              well-being is essential to your overall health and wellness.
            </p>
            <p className={styles.heroText}>
              We’ve redesigned the doctor’s office experience to fit your life,
              put you at ease, and treat you as a whole person. We create safe
              and inviting spaces,ask meaningful questions, give you time to
              talk, and listen without judgment. Then we work with you on a plan
              to help you feel your best — whether you want to sleep better,
              feel calmer, worry less, or get a better handle on your mood.
            </p>
            <p className={styles.heroText}>
              We’ve redesigned the doctor’s office experience to fit your life,
              put you at ease, and treat you as a whole person. We create safe
              and inviting spaces,ask meaningful questions, give you time to
              talk
            </p>
          </div>
          <div className={styles.rightpart}>
            <Image src={serviceImg} className={styles.heroImg} alt="hero image of orthopedics" />
          </div>
        </div>
      </div>
    </>
  );
};

const page = () => {
  return (
    <>
      <div className={styles.main} >
        <HomeSlider />
      <TextSection />
      </div>
    </>
  );
};

export default page;
