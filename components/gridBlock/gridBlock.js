import  Image  from "next/image";
import styles from './gridBlock.module.css'
const TextSection = ({img,text}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.separation}>
        <div className={styles.leftpart}>
          {text.map((item,i)=>{
            return <p key={i} className={styles.heroText}  dangerouslySetInnerHTML={{ __html: item }} />
          })}
        </div>
        <div className={styles.rightPart}>
          {img && <Image fill src={img} className={styles.heroImg} alt="hero" quality={100} sizes="50vw"/>}
        </div>
      </div>
    </div>
  );
};
export default TextSection