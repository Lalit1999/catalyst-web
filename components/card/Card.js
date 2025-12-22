'use client'

import Image from "next/image";
import Link from "next/link";

import { User, Menu } from '@icons' ;
import styles from './card.module.css';

const Card = ({image, heading, lessons, students, description, id}) => {
    return (
        <div className={styles.courseCard}>
            <div className={styles.courseCardImageCon}>
                <Image src={image} alt="Card Image" />
            </div>
            <div className={styles.courseCardDetailsCon}>
                <div className={styles.cardHead}>
                    <p>{heading}</p>
                </div>
                <div className={styles.cardIconCon}>
                    <div className={styles.cardIcon}>
                        <Menu />
                        <p>{lessons} Lessons</p>
                    </div>
                    <div className={styles.cardIconBar}/>
                    <div className={styles.cardIcon}>
                        <User />
                        <p>{students} Students</p>
                    </div>
                </div>
                <div className={styles.cardText}>
                    <p>{description}</p>
                </div>
                <div className={styles.cardBtnCon}>
                    <Link href={`/training-programs/${id}`} className={styles.cardBtnFirst}>View Details</Link>
                    <button className={styles.cardBtnSecond}>Register Now</button>
                </div>
            </div>
        </div>
    ) ;
}

export default Card ;