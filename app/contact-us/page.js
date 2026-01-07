'use client'
import styles from './page.module.css';
import { NewCard } from '@c/index';
import {NewFormCard} from '@c/index';

export default function ContactUs() {
  return (

    <main className={styles.main}>

{/* HEADER SECTION  */}
      <div className={styles.HeaderSection}>

      <div className={styles.title}>  
        <p> Contact Us</p>
      </div>

      <div className={styles.para1}>
        <p> Find your next career at companies like HubSpot, Nike, and Dropbox</p>
      </div>
      </div>

 {/* FORM SECTION  */}

 <div className={styles.contactWrapper}>
  <div className={styles.leftSection}>
    <NewCard/>
  </div>

  <div className={styles.rightSection}>
    <NewFormCard/>
  </div>
</div>


     
     </main>
  );
}
