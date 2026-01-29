"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./researchCard.module.css";

const ResearchCard = ({ image, link, heading }) => {
    return (
        <Link href={link || "#"} target="_blank" className={styles.courseCard}>
            <div className={styles.courseCardImageCon}>
                <Image fill src={image} alt="paper" quality={100} sizes="50vw"/>
            </div>
            <div className={styles.courseCardDetailsCon}>
                <p className={styles.cardHead}>{heading}</p>
                <div className={styles.cardBtnCon}>
                    <button className={styles.cardBtnFirst}>View Research</button>
                </div>
            </div>
        </Link>
    );
};

export default ResearchCard;
