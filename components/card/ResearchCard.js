'use client';

import Image from "next/image";
import { User, Menu } from '@icons';
import styles from './card.module.css';

const Card = ({ image, heading, pages, citations, description }) => {
    return (
        <div className={styles.courseCard}>
            <div className={styles.courseCardImageCon}>
                <Image src={image} alt="Research Paper Cover" />
            </div>

            <div className={styles.courseCardDetailsCon}>
                <div className={styles.cardHead}>
                    <p>{heading}</p>
                </div>

                <div className={styles.cardIconCon}>
                    <div className={styles.cardIcon}>
                        <Menu />
                        <p>{pages} Pages</p>
                    </div>

                    <div className={styles.cardIconBar} />

                    <div className={styles.cardIcon}>
                        <User />
                        <p>{citations} Citations</p>
                    </div>
                </div>

                <div className={styles.cardText}>
                    <p>{description}</p>
                </div>

                <div className={styles.cardBtnCon}>
                    <button className={styles.cardBtnFirst}>
                        Read Abstract
                    </button>
                    <button className={styles.cardBtnSecond}>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
