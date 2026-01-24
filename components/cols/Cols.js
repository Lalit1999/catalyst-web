import  Image  from "next/image";
import styles from './Cols.module.css'
const TextSection = ({img,text,text_1}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.separation}>
        <div className={styles.leftpart}>
          {text.map((item,i)=>{
            return <p key={i} className={styles.heroText}  dangerouslySetInnerHTML={{ __html: item }} />
          })}
        </div>
        <div className={styles.rightpart}>
          {img && <Image src={img} className={styles.heroImg} alt="hero" />}
        </div>
      </div>
    </div>
  );
};
export default TextSection