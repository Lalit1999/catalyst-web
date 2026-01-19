'use client';

import Image from "next/image";
import Link from "next/link";

import styles from './researchCard.module.css';

const ReaearchCard = ({ image, heading, description, link }) => {
    return (
        <div className={styles.courseCard}>
            <Link href={link ? link : ''} target="_blank" className={styles.courseCardImageCon}>
                {image && <Image fill src={image} alt="Research Paper Cover" className={styles.courseCardImageConimg} />}
            </Link>
            <div className={styles.courseCardDetailsCon}>
                <Link href={link ? link : ''} target="_blank" className={styles.cardHead}>
                    <p>{heading}</p>
                </Link>
                <div className={styles.cardText}>
                    <p>{description}</p>
                </div>
                <div className={styles.cardBtnCon}>
                    <Link href={link ? link : ''} target="_blank" className={styles.cardBtnFirst}>
                        View Research
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReaearchCard;
