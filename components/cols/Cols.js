import  Image  from "next/image";
import styles from './page.module.css'
const TextSection = ({img,text,text_1}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.separation}>
        <div className={styles.leftpart}>
          <p className={styles.heroText}>
            {text}
          </p>
          {text_1 && <p className={styles.heroText}>
            {text_1}
          </p>}
        </div>
        {/* <div className={styles.rightpart}>
          {img && <Image src={img} className={styles.heroImg} alt="hero" />}
        </div> */}
      </div>
    </div>
  );
};
export default TextSection