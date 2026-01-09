import React from 'react';
import Image from 'next/image';
import { contact } from '@images';
import styles from './page.module.css';

const NewCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={contact}
          alt="Contact"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.content}>
        <a href="#">
          <span className={styles.title}>
          </span>
        </a>

      <ul className={styles.detailsList}>
  <li>Mon–Sat 9:00am – 6:00pm</li>
  <li>+91-9818356273</li>
  <li>info@catalystclinicalservices.com</li>
  <li>
    UG-11, Upper Ground Floor, Aggarwal Prestige Mall, Plot No. 02,
    Road No. 44, Pitampura, New Delhi – 110034 (INDIA)
  </li>
</ul>

        <button className={styles.action} type="button">
          Contact Us
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default NewCard;
