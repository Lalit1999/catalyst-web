'use client';

import Image from "next/image";
import Link from "next/link";

import styles from './researchCard.module.css';

const Card = ({ image, heading, description, link }) => {
    return (
        <div className={styles.courseCard}>
            <Link href={link} target="_blank" className={styles.courseCardImageCon}>
                <Image src={image} alt="Research Paper Cover" />
            </Link>
            <div className={styles.courseCardDetailsCon}>
                <Link href={link} target="_blank" className={styles.cardHead}>
                    <p>{heading}</p>
                </Link>
                <div className={styles.cardText}>
                    <p>{description}</p>
                </div>
                <div className={styles.cardBtnCon}>
                    <Link href={link} target="_blank" className={styles.cardBtnFirst}>
                        View Research
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
