'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { pragramBanner, course } from "@images";
import { Card } from '@comps' ;
import { Call2, Whatsapp, Tick, Clock, Menu, Person, Website, Principal, Facebook, Twitter, Instagram, Li, ActivityLine, Prog, StarLine, Doc, Quote, Arrow } from "@icons";
import styles from './page.module.css';

const learnArr = [
    'Modern React with Hooks and Context API',
    'React Router for navigation',
    'Performance optimization techniques',
    'State management with Redux Toolkit',
    'Testing with Jest and React Testing Library',
    'Deployment to production environments',
] ;

const whyChooseArr = [
    {
        icon: <ActivityLine />,
        head: 'Personalized Learning',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
    {
        icon: <Prog />,
        head: '30+ Projects',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
    {
        icon: <StarLine />,
        head: 'Capstone Project',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
    {
        icon: <Principal />,
        head: 'A standout portfolio',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
    {
        icon: <Doc />,
        head: 'Complete career support',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
    {
        icon: <Person />,
        head: 'Best Faculty',
        text: 'Comprehensive Curriculum covering all essential React topics from basics to advanced concepts.'
    },
] ;

const reqArr = [
    'Basic understanding of HTML, CSS, and JavaScript',
    'Familiarity with programming concepts like variables, loops, and functions',
    'A computer with internet access to set up the development environment',
    'A computer with internet access to set up the development environment',
    'Willingness to learn and practice coding regularly'
] ;

const testimonialsArr = [
    {
        name: 'John Doe',
        feedback: 'This course transformed my career! The hands-on projects and expert guidance helped me land my dream job as a React developer.'
    },
    {
        name: 'Jane Smith',
        feedback: 'I highly recommend this course to anyone looking to master React. The curriculum is well-structured, and the instructors are knowledgeable and supportive.'
    },
    {
        name: 'Mike Johnson',
        feedback: 'The practical approach of this course made learning React enjoyable and effective. The projects were challenging yet rewarding, and I gained real-world skills.'
    },
    {
        name: 'Emily Davis',
        feedback: 'As a beginner, I was initially intimidated by React, but this course broke down complex concepts into easy-to-understand lessons. The community support was also fantastic!'
    }
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

const courseDetail = [
    {
        title: 'Advanced Clinical Research Program',
        descr: ' This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you\'ll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you\'ll have the confidence to build complex React applications from scratch.',
        duration: '5 weeks',
        chapters: ['Data Analysis', 'Data Mining', 'Data Restructuring', 'Data Handling', 'Data Visualization'],
        skills: ['Phyton', 'MongoDb', 'Nextjs', 'Al', 'Machine Learning'],
    },
    {
        title: 'Advanced Clinical Research Program',
        descr: ' This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you\'ll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you\'ll have the confidence to build complex React applications from scratch.',
        duration: '5 weeks',
        chapters: ['Data Analysis', 'Data Mining', 'Data Restructuring', 'Data Handling', 'Data Visualization'],
        skills: ['Phyton', 'MongoDb', 'Nextjs', 'Al', 'Machine Learning'],
    },
    {
        title: 'Advanced Clinical Research Program',
        descr: ' This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you\'ll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you\'ll have the confidence to build complex React applications from scratch.',
        duration: '5 weeks',
        chapters: ['Data Analysis', 'Data Mining', 'Data Restructuring', 'Data Handling', 'Data Visualization'],
        skills: ['Phyton', 'MongoDb', 'Nextjs', 'Al', 'Machine Learning'],
    }, 
    {
        title: 'Advanced Clinical Research Program',
        descr: ' This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you\'ll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you\'ll have the confidence to build complex React applications from scratch.',
        duration: '5 weeks',
        chapters: ['Data Analysis', 'Data Mining', 'Data Restructuring', 'Data Handling', 'Data Visualization'],
        skills: ['Phyton', 'MongoDb', 'Nextjs', 'Al', 'Machine Learning'],
    }
] ;

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

const DescrCon = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Course Description</p>
            <p className={styles.descrText}>This React course takes you from beginner to advanced developer. Learn modern React, hooks, state management, and build real-world projects. Gain hands-on experience, master essential concepts, and create portfolio-ready applications to showcase your skills for career growth. Throughout this course, you'll work on hands-on projects including a social media app, e- commerce platform, and task management system. By the end, you'll have the confidence to build complex React applications from scratch.</p>
        </div>
    ) ;
}

const LearnSection = () => {
    return (
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
    ) ;
} 

const CourseSection = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Why choose this Course?</p>
            <div className={styles.whyChooseCon}>
            {
                whyChooseArr.map((one,i) => {
                    return (
                        <div className={styles.whyChooseOne} key={i}>
                            {one.icon}
                            <p className={styles.whyChooseHead}>{one.head}</p>
                            <p className={styles.whyChooseText}>{one.text}</p>
                        </div>
                    ) ;
                })
            }
            </div>
        </div>
    ) ;
}

const BrouchureBox = () => {
    return (
        <div className={styles.brochureBox}>
            <div className={styles.brochureTextCon}>
                <p className={styles.brochureHead}>Need to know more?</p>
                <p className={styles.brochureText}>Get all the details in our comprehensive brochure.</p>
                <Link href="/" className={styles.brochureLink}>Download Brochure</Link>
            </div>
            <div className={styles.brochureIcon}>
                <Menu />
            </div>
        </div>
    ) ;
}

const SectionCon = ({one}) => {

    const [open, setOpen] = useState(false) ;

    return (
        <div className={styles.courseDetailOne} >
            <div className={styles.courseDetailTop}>
                <div className={styles.courseDetailLeft}>
                    <p className={styles.courseDetailTitle}>{one.title}</p>
                    <div className={`${open ? styles.openArrowConOpen : styles.openArrowConClose}`} onClick={()=>setOpen(!open)}>
                        <Arrow />
                    </div>
                </div>
                <div>
                    <p className={styles.courseDetailDuration}>{one.duration}</p>
                </div>
            </div>
            <div className={`${styles.courseDetailDescr} ${open ? '' : styles.hidden}`}>
                <div className={styles.courseDetailDescrChild}>
                    <p className={styles.courseDetailDescrHead}>Topic Covered</p>
                    <div className={styles.courseDetailDescrContent}>
                    {
                        one.chapters.map((chapter,j) => {
                            return (
                                <p className={styles.courseDetailDescrPoint} key={j}><Tick />{chapter}</p>
                            ) ;
                        })
                    }
                    </div>
                </div>
                <div className={styles.courseDetailDescrChild}>
                    <p className={styles.courseDetailDescrHead}>Skills Acquired</p>
                    <div className={styles.courseDetailDescrContent2}>
                    {
                        one.skills.map((skill,k) => {
                            return (
                                <p className={styles.courseDetailDescrPoint2} key={k}>{skill}</p>
                            ) ;
                        })
                    }
                    </div>
                </div>
            </div> 
        </div>
    )
}

const CourseDetailSection = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Course Details</p>
            <div className={styles.CourseSectionMain}>
            {
                courseDetail.map((one,i) => {
                    return (
                        <SectionCon one={one} key={i} />
                    );
                })
            }
            </div>
        </div>
    ) ;
}

const ReqSection = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Requirements</p>
            <div className={styles.reqCon}>
            {
                reqArr.map((one,i) => {
                    return (
                        <div className={styles.reqOne} key={i}>
                            <Tick />
                            <p>{one}</p>
                        </div>
                    ) ;
                })
            }
            </div>
        </div>
    ) ;
}

const SideBar = () => {
    return (
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
    ) ;
}

const DetailMain = () => {
    return (
        <div className={styles.courseDetailMain}>
            <div className={styles.detailsLeft}>
                <DescrCon />
                <LearnSection />
                <CourseSection />
                <BrouchureBox />
                <CourseDetailSection />
                <ReqSection />
            </div>
            <SideBar />
        </div>
    ) ;
}

const Testimonials = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Student Testimonials</p>
            <div className={styles.testimonialsCon}>
            {
                testimonialsArr.map((one,i) => {
                    return (
                        <div className={styles.testimonialOne} key={i}>
                            <Quote />
                            <p className={styles.testimonialFeedback}>{one.feedback}</p>
                            <div className={styles.testimonialNameCon}>
                                <p className={styles.testimonialNameCircle}>{one.name.trim().split(" ").map(word => word.charAt(0)).join("")}</p>
                                <p className={styles.testimonialName}>- {one.name}</p>
                            </div>
                        </div>
                    ) ;
                }) 
            }
            </div>
        </div>
    ) ;
}

const RelatedCourseSection = () => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Related Courses</p>
            <div className={styles.relatedCoursesCon}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    ) ;
}

const DetailBottom = () => {
    return (
        <div className={styles.courseDetailBottom}>
            <Testimonials />
            <div className={styles.borderLine} /> 
            <RelatedCourseSection />
        </div>
    ) ;
}

const program = () => {

    return (
        <div className={styles.courseMain}>
            <HomeSlider />
            <div className={styles.courseDetails}>
                <DetailMain />
                <DetailBottom />
            </div>
        </div>
    ) ;
}

export default program;