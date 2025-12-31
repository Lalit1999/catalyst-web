'use client'
import { about1 } from '@images';
import styles from './page.module.css';
import Image from 'next/image';
import { researchPaperData } from '../../data/researchPaper';
import Card from '@c/card/ResearchCard';
export default function Research() {
  return (
    <main className={styles.main}>
      <div className={styles.startHead}>
      <div className={styles.headSection}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>Research Publications</h1>
          </div>
          <div className={styles.headDesc} >
            <p className={styles.breadContent}>Research Publications</p>
          <p className={styles.headContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum bibendum dignissim. Sed quam eros, accumsan in velit a, placerat mollis nunc. Nulla at purus non leo condimentum pellentesque ut a mauris. Vivamus ut euismod nisi, quis laoreet nisl. Suspendi</p>
          <Image src={about1} alt="Research Publication" className={styles.headImg} />
          </div>
      </div>
      <div className={styles.researchHead} >
        <div className={styles.coursesTwo}>
            {
                researchPaperData.map( (one, i) => {
                    return (
                        <Card key={i} {...one} />
                    ) ;
                })
            }
            </div>
      </div>
    </main>
  );
}
