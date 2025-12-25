'use client'

import { useParams } from 'next/navigation' ;
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { pragramBanner, course, cardImage } from "@images";
import { Card } from '@comps' ;
import { programsDetailsArr } from '@data' ;
import { Call2, Whatsapp, Tick, Clock, Menu, Person, Website, Principal, Facebook, Twitter, Instagram, Li, Quote, Arrow } from "@icons";
import styles from './page.module.css';

const programsArr = [
    {
        image: cardImage, 
        heading: "Professional Diploma in Clinical Research (PDCR)", 
        lessons: 4, 
        students: 100, 
        description: "PDCR is India’s largest and widely recognized clinical research training program, designed to cultivate high-calibre professionals for the pharmaceutical, biotechnology, and healthcare research sectors.",
        id: 'professional-diploma-in-clinical-research-pdcr',
    },
    {
        image: cardImage, 
        heading: "Professional Certificate in Pharmacovigilance (PCPV)", 
        lessons: 10, 
        students: 100, 
        description: "The Professional Certificate in Pharmacovigilance (PCPV) is an industry-aligned drug safety training program that equips learners with essential skills in pharmacovigilance, case processing, signal detection, and global safety regulations.",
        id: 'professional-certificate-in-pharmacovigilance-pcpv'
    },
    {
        image: cardImage, 
        heading: "Advanced Certificate Program in Scientific Writing (SW)", 
        lessons: 10, 
        students: 100, 
        description: "The Advanced Certificate Program in Scientific Writing is a comprehensive, competency-building training program designed to prepare participants for specialized roles in scientific and medical writing within the biopharmaceutical, healthcare, and clinical research industries. ",
        id: 'advanced-certificate-program-in-scientific-writing-sw'
    },
    {
        image: cardImage, 
        heading: "Advanced Certificate Program in Project Management (PM)", 
        lessons: 10, 
        students: 100, 
        description: "The Advanced Certificate Program in Project Management is a structured, competency-building course designed to equip participants with the core skills, practical knowledge, and operational insight required for specialized clinical trial project management roles",
        id: 'advanced-certificate-program-in-project-management-pm'
    },
    {
        image: cardImage, 
        heading: "Advanced Certificate Program in Clinical Trial Monitoring (CTM)", 
        lessons: 10, 
        students: 100, 
        description: "The Advanced Certificate Program in Clinical Trial Monitoring is a focused, competency-driven training designed to develop specialized expertise in the oversight and monitoring of clinical trials. ",
        id: 'advanced-certificate-program-in-clinical-trial-monitoring-ctm'
    },
    {
        image: cardImage, 
        heading: "Oncology Clinical Trials Training (OCTT)", 
        lessons: 10, 
        students: 100, 
        description: "The Oncology Clinical Trials Training (OCTT) program is a specialized, competency-driven course designed to equip participants with the knowledge, skills, and practical expertise required to manage and oversee oncology clinical trials. ",
        id: 'oncology-clinical-trials-training-octt'
    },
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

const HomeSlider = ({ heading }) => {
    return (
        <div className={styles.homeSlider}>
            <Image src={pragramBanner} alt="Program Banner" />
            <div className={styles.homeSliderMain}>
                <div className={styles.homeSliderLeft}>
                    <div className={styles.sliderLeftText}>
                        <p>{heading}</p>
                    </div>
                    <div className={styles.sliderLeftBtnCon}>
                        <Link href="/" className={styles.homeSliderButton1}>Register Now</Link>
                        <Link href="/" className={styles.homeSliderButton1}><Call2 />&nbsp; Call Us +91-8826806862 </Link>
                        <Link href="/" className={styles.homeSliderButton3}><Whatsapp />&nbsp; Whatsapp Enquiry</Link>
                    </div>
                </div>
                <div className={styles.homeSliderRight}>
                    <Image src={course} alt="course placeholder" fill />
                </div>
            </div>
        </div>
    );
}

const DescrCon = ({subHeading, description}) => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>{subHeading}</p>
            <div className={styles.descrTextCon}>
            {
                description.map((para, i) => {
                    return (
                        <p className={styles.descrText} key={i}>{para}</p>
                    ) ;
                })
            }
            </div>
        </div>
    ) ;
}

const LearnSection = ({learnArr}) => {
    console.log(learnArr) ;
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

const CourseSection = ({whyChooseArr}) => {
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

const BrouchureBox = ({brochureLink}) => {
    return (
        <div className={styles.brochureBox}>
            <div className={styles.brochureTextCon}>
                <p className={styles.brochureHead}>Need to know more?</p>
                <p className={styles.brochureText}>Get all the details in our comprehensive brochure.</p>
                <Link href={`${brochureLink}`} className={styles.brochureLink}>Download Brochure</Link>
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
                                <p className={styles.courseDetailDescrPoint} key={j}>{chapter?<Tick />:null}{chapter}</p>
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

const CourseDetailSection = ({courseDetailArr}) => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Course Details</p>
            <div className={styles.CourseSectionMain}>
            {
                courseDetailArr.map((one,i) => {
                    return (
                        <SectionCon one={one} key={i} />
                    );
                })
            }
            </div>
        </div>
    ) ;
}

const ReqSection = ({courseSchedule}) => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Course Schedule</p>
            <div className={styles.reqCon}>
            {
                courseSchedule.map((one,i) => {
                    return (
                        <div className={styles.reqOneBox} key={i}>
                            <p className={styles.reqOneNum}>{i+1}</p>
                            <div className={styles.reqOne}>
                                <p className={styles.reqOneHead}>{one.head}</p>
                                <p className={styles.reqOneText}>{one.value}</p>
                            </div>
                        </div>
                    ) ;
                })
            }
            </div>
        </div>
    ) ;
}

const RegProcessSection = ({regProcess}) => {
    return (
        <div className={styles.descrCon}>
            <p className={styles.descrHead}>Registration Process</p>
            <p className={styles.descrSubHead}>{regProcess.head}</p>
            <div className={styles.reqCon}>
            {
                regProcess.steps.map((one,i) => {
                    return (
                        <div className={styles.reqOneBox} key={i}>
                            <p className={styles.reqOneNum}>{i+1}</p>
                            <div className={styles.reqOne}>
                                <p className={styles.reqOneHead}>{one.head}</p>
                                <p className={styles.reqOneText}>{one.value}</p>
                            </div>
                        </div>
                    ) ;
                })
            }
            </div>
        </div>
    ) ;
}

const SideBar = ({usd, inr, duration, lessons, students, language, certificate}) => {

    const includesArr = [
        {
            icon: <Clock />,
            text: 'Duration',
            value: duration
        },
        {
            icon: <Menu />,
            text: 'Lessons',
            value: lessons
        },
        {
            icon: <Person />,
            text: 'Students',
            value: students
        },
        {
            icon: <Website />,
            text: 'Language',
            value: language.join(", ")
        },
        {
            icon: <Principal />,
            text: 'Certificate',
            value: certificate ? 'Yes' : 'No'
        }
    ] ; 

    return (
        <div className={styles.detailsRight}>
            <div className={styles.priceBox}>
                <div className={styles.moneyBox}>
                    <p className={styles.headPrice}>USD</p>
                    <p className={styles.offerPrice}>${usd}</p>
                    {/* <p className={styles.offerPrice}><span className={styles.cutPrice}>$100</span>${usd}</p> */}
                </div>
                <div className={styles.moneyBox}>
                    <p className={styles.headPrice}>INR</p>
                    <p className={styles.offerPrice}>₹{inr}</p>
                    {/* <p className={styles.offerPrice}><span className={styles.cutPrice}>₹9000</span>₹{inr}</p> */}
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

const DetailMain = (data) => {
    return (
        <div className={styles.courseDetailMain}>
            <div className={styles.detailsLeft}>
                <DescrCon {...data} />
                <LearnSection {...data} />
                <CourseSection {...data} />
                <CourseDetailSection {...data} />
                <ReqSection {...data} />
                <BrouchureBox {...data} />
                <RegProcessSection {...data} />
            </div>
            <SideBar {...data} />
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
            {
                programsArr.slice(0,4).map( (one, i) => {
                    return (
                        <Card key={i} {...one} />
                    ) ;
                })
            }
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

    const params = useParams() ;
    const { id } = params;
    const decodedId = id ? decodeURIComponent(id) : id;

    const data = programsDetailsArr[decodedId];

    return (
        <div className={styles.courseMain}>
            <HomeSlider heading={data.heading} />
            <div className={styles.courseDetails}>
                <DetailMain {...data} />
                <DetailBottom />
            </div>
        </div>
    ) ;
}

export default program;