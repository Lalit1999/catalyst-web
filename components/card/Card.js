'use client'

import Image from "next/image";
import Link from "next/link";

import { cardImage } from "@images";
import { User, Menu } from '@icons' ;
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.courseCard}>
            <div className={styles.courseCardImageCon}>
                <Image src={cardImage} alt="Card Image" />
            </div>
            <div className={styles.courseCardDetailsCon}>
                <div className={styles.cardHead}>
                    <p>Design Thinking Researching for Better UX</p>
                </div>
                <div className={styles.cardIconCon}>
                    <div className={styles.cardIcon}>
                        <Menu />
                        <p>20 Lessons</p>
                    </div>
                    <div className={styles.cardIconBar}/>
                    <div className={styles.cardIcon}>
                        <User />
                        <p>15 Students</p>
                    </div>
                </div>
                <div className={styles.cardText}>
                    <p>Its done really well. Perfect for my brain in the way it learns. Lectures are great and the great</p>
                </div>
                <div className={styles.cardBtnCon}>
                    <Link href={`/training-programs/${123}`} className={styles.cardBtnFirst}>View Details</Link>
                    <button className={styles.cardBtnSecond}>Register Now</button>
                </div>
            </div>
        </div>
    ) ;
}

export default Card ;