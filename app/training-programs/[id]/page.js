'use client'

import Image from "next/image";
import Link from "next/link";

import { pragramBanner, course } from "@images";
import { Call2, Whatsapp, Tick, Clock, Menu, Person, Website, Principal, Facebook, Twitter, Instagram, Li } from "@icons";
import styles from './page.module.css';

const HomeSlider = () => {
    return (
        <div className={styles.homeSlider}>
            <Image src={pragramBanner} alt="Program Banner" />
            <div className={styles.homeSliderMain}>
                <div className={styles.homeSliderLeft}>
                    <div className={styles.sliderLeftText}>
                        <p>Design Thinking Researching for Better UX</p>
                    </div>
                    <div className={styles.sliderLeftBtnCon}>
                        <Link href="/" className={styles.homeSliderButton1}>Register Now</Link>
                        <Link href="/" className={styles.homeSliderButton1}><Call2 />&nbsp; Call Us +91-8826806862 </Link>
                        <Link href="/" className={styles.homeSliderButton3}><Whatsapp />&nbsp; Whatsapp Enquiry</Link>
                    </div>
                </div>
                <div className={styles.homeSliderRight}>
                    <Image src={course} alt="course placeholder" />
                </div>
            </div>
        </div>
    );
}

const learnArr = [
    'Modern React with Hooks and Context API',
    'React Router for navigation',
    'Performance optimization techniques',
    'State management with Redux Toolkit',
    'Testing with Jest and React Testing Library',
    'Deployment to production environments',
] ;

const socialArr = [
    {
        icon: <Facebook />,
        link: 'https://facebook.com'
    },
    {
        icon: <Twitter />,
        link: 'https://x.com'
    },
    {
        icon: <Instagram />,
        link: 'https://instagram.com'
    },
    {
        icon: <Li />,
        link: 'https://linkedin.com'
    }
] ;

const includesArr = [
    {
        icon: <Clock />,
        text: 'Duration',
        value: '12 Weeks'
    },
    {
        icon: <Menu />,
        text: 'Lessons',
        value: '10'
    },
    {
        icon: <Person />,
        text: 'Students',
        value: '50+'
    },
    {
        icon: <Website />,
        text: 'Language',
        value: 'English'
    },
    {
        icon: <Principal />,
        text: 'Certificate',
        value: 'Yes'
    }
] ;

const program = ({ params }) => {

    return (
        <div className={styles.courseMain}>
            <HomeSlider />
            <div className={styles.courseDetails}>
                <div className={styles.courseDetailMain}>
                    <div className={styles.detailsLeft}>
                        <div className={styles.descrCon}>
                            <p className={styles.descrHead}>Course Description</p>
                            <p className={styles.descrText}>This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you'll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you'll have the confidence to build complex React applications from scratch.</p>
                        </div>
                        <div className={styles.descrCon}>
                            <p className={styles.descrHead}>What you'll learn</p>
                            <div className={styles.learnCon}>
                            {
                                learnArr.map((one,i) => {
                                    return (
                                        <div className={styles.learnOne} key={i}>
                                            <Tick />
                                            <p>{one}</p>
                                        </div>
                                    ) ;
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className={styles.detailsRight}>
                        <div className={styles.priceBox}>
                            <div className={styles.moneyBox}>
                                <p className={styles.headPrice}>USD</p>
                                <p className={styles.offerPrice}><span className={styles.cutPrice}>$100</span>$80</p>
                            </div>
                            <div className={styles.moneyBox}>
                                <p className={styles.headPrice}>INR</p>
                                <p className={styles.offerPrice}><span className={styles.cutPrice}>₹9000</span>₹7200</p>
                            </div>
                        </div>
                        <div className={styles.registerBtnCon}>
                            <button className={styles.registerBtn}>Register Now</button>
                        </div>
                        <div className={styles.couponCon}>
                            <p className={styles.descrHead}>Apply Coupon</p>
                            <div className={styles.couponBox}>
                                <input type="text" placeholder="Enter Coupon" className={styles.couponInput} />
                                <button className={styles.couponBtn}>Apply</button>
                            </div>
                        </div>
                        <div className={styles.includesCon}>
                            <p className={styles.descrHead}>This course includes</p>
                            <div className={styles.includesBox}>
                            {
                                includesArr.map((one,i) => {
                                    return (
                                        <div className={styles.includes} key={i}>
                                            <div className={styles.includesLeft}>
                                                {one.icon}
                                                <p className={styles.includesText}>{one.text}</p>
                                            </div>
                                            <p className={styles.includesRight}>{one.value}</p>
                                        </div>
                                    ) ;
                                })
                            }
                            </div>
                        </div>
                        <div className={styles.shareCon}>
                            <div className={styles.shareIconsCon}>
                                {
                                    socialArr.map((one,i) => {
                                        return (
                                            <Link href={one.link} key={i} className={styles.socialIcon}>
                                                {one.icon}
                                            </Link>
                                        ) ;
                                    })
                                }
                            </div>
                            <div className={styles.borderLine}/>
                            <div className={styles.contactCon}>
                                <p className={styles.contactText}>Contact for more details of the course</p>
                                <button className={styles.contactBtn}><Call2 />&nbsp; Call Us +91-8826806862</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.courseDetailBottom}></div>
            </div>
        </div>
    ) ;
}

export default program;