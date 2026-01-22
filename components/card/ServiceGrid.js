import React from 'react';
import styles from './ServiceGrid.module.css'; 
import { Bullet } from '@icons';


const ServiceGrid = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className={styles.gridContainer}>
      {cards.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          <div className={styles.iconWrapper}>
            <Bullet className={styles.svgIcon} />
          </div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          
          {/* We now check for 'points' instead of 'description' */}
          <ul className={styles.pointsList}>
            {service.points && service.points.map((point, i) => (
              <li key={i} className={styles.pointItem}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;