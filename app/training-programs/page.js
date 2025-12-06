'use client'

import Image from "next/image";
import { homeBanner } from "@images";

import styles from './page.module.css';

const HomeSlider = () => {
    return (
        <div className={styles.homeSlider}>
            <Image src={homeBanner} alt="Home Banner" />
            <p className={styles.homeSliderText}>A partner as equally committed as you.</p>
        </div>
    );
}

const CoursesComp = () => {
    return (
        <div className={styles.coursesComp}>
            <div className={styles.coursesOne} >
                <p className={styles.subHead} >Courses offered by Catalyst</p>
                <p className={styles.mainHead}>Our Courses</p>
                <p className={styles.subDescr}>The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes.</p>
            </div>
            <div className={styles.coursesTwo}>
                <div className={styles.courseCard}>
                    <div className={styles.courseCardImageCon}>
                        <Image src={homeBanner} alt="Course Image" />
                    </div>
                    <div className={styles.courseCardDetailsCon}>
                        <div className={styles.cardHead}></div>
                        <div className={styles.cardIconCon}>
                            <div className={styles.cardIcon}></div>
                            <div className={styles.cardIconBar}/>
                            <div className={styles.cardIcon}></div>
                        </div>
                        <div className={styles.cardText}>
                            <p></p>
                        </div>
                        <div className={styles.cardBtnCon}>
                            <button className={styles.cardBtnFirst}>View Details</button>
                            <button className={styles.cardBtnSecond}>Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) ;
} ;

const TrainingPrograms = () => {
    return (
        <main className={styles.programsMain}>
            <HomeSlider />
            <CoursesComp />
        </main>
    );
}

export default TrainingPrograms;
