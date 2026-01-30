import { croHome, videoHome, robotic, rwe, oncology } from "@images";
import { Clinical, Research, Therapy, Bullet } from "@icons";

const homePageData = {
    homeSlider: {
        title: 'Accelerating clinical research to deliver life-changing therapies to patients, faster.',
        image: videoHome,
    },
    sectionTwo: {
        subTitle: 'Precision at Every Step',
        title: 'Our Edge',
        descr: 'At Catalyst Clinical Services, you will find unmatched scientific rigor and operational excellence',
        card: [
            {
                title: 'Clinical Trials Solutions',
                icon: <Clinical />,
                descr: ['Excellence in clinical trials is never accidental, it is crafted. From study design to final submission, our teams bring seamless coordination, operational excellence, and real-time oversight. We ensure every trial runs with precision, helping you move from concept to clinical outcomes with confidence and speed.'],
                btnText: 'See How We Partner',
                link: '/what-we-do/clinical-development-services',
            },
            {
                title: 'Therapeutic Expertise',
                icon: <Therapy />,
                descr: ['Our therapeutic strength comes from continuously evolving scientific understanding and close collaboration with subject-matter specialists. Every project is guided by experts who anticipate challenges, interpret data with precision, and tailor strategies that support smarter, faster clinical development across diverse disease areas.'],
                btnText: 'Explore Our Therapeutic Expertise',
                link: '/therapeutic-expertise',
            },
            {
                title: 'Research Publications',
                icon: <Research />,
                descr: ['Our expert medical writers unlock deeper insights from your data. Powered by intelligent workflows, we accelerate evidence generation, enhance accuracy. Deliver high-impact manuscripts for publication in internationally recognized, peer-reviewed medical journals of repute.'],
                btnText: 'Our Peer-Reviewed Publications',
                link: '/research-publications',
            }
        ]
    },
    sectionThree : {
        box1: {
            head: '20+',
            text: 'Years of CRO Experience',
            para: [
                'Catalyst Clinical Services brings over two decades of hands-on experience across global clinical development.',
                'We have supported studies from Phase I to Phase IV, enabling sponsors to navigate regulatory expectations, accelerate timelines, and strengthen data quality.',
            ]
        },
        box2: {
            head : 'Pan-India Site Network',
            para : [
                'We support clinical research across all major zones of India - North, South, East, and West, ensuring efficient study operations through strong investigator networks, diverse patient populations, and reliable site performance.',
            ],
            buttonLink : '/cro-experience',
        },
        box3: {
            head : 'Types of Trial Sites ',
            para : [
                'Our trials are conducted across a diverse spectrum of site types, including government and academic hospitals, private and corporate hospital networks, and specialist clinics. ',
            ],
            buttonLink : '/cro-experience',
        },
    },
    sectionFour: {
        subTitle: 'Our Story',
        title: 'Your Trusted CRO Partner',
        descr: 'Catalyst was founded to redefine research standards through precision, integrity, and scientific excellence. We began with a conviction that clinical research must advance both science and humanity. ',
        box1: {
            head: 'Enabling Impactful Clinical Development',
            text: 'Through integrated trial solutions, deep therapeutic insight, and evidence-driven outcomes.',
            icon: <Bullet />,
        },
        box2: {
            head: 'Accelerating Better Healthcare',
            text: 'By enabling smarter studies, stronger data, and faster pathways from discovery to delivery.',
            icon: <Bullet />,
        },
        buttonText: 'Know More About Us',
        buttonLink: '/who-we-are',
        image: croHome,
    },
    statsArr: [
        {
            number: 15000,
            text1 : 'Patients',
            text2: 'engaged across clinical and RWE studies',
        },
        {
            number: 10000,
            text1 : 'Cases',
            text2: 'generating evidence across robotic and other techniques',
        },
        {
            number: 3000,
            text1 : 'Cases',
            text2: 'driving precision oncology insight',
        },
        {
            number: 100,
            text1 : 'Publications',
            text2: 'across leading peer-reviewed Journals',
        }
    ],
    expertise : {
        subTitle: 'Featured Solutions',
        title: 'Specialized Expertise',
        expertiseArr :[
            {
                title: 'Robotic-Assisted Surgery',
                descr: [
                    'We are one of the largest players in robotic-assisted surgery research, supporting sponsors across the entire clinical development lifecycle - from protocol design and feasibility assessment to multi-centre trial execution and post-market evidence generation. With deep technical expertise in robotic systems, surgical performance metrics, and real-world operating workflows, we deliver high-quality, regulator-ready data that demonstrate precision, safety, and meaningful patient recovery outcomes.',
                ],
                link: '/therapeutic-expertise/robotic-assisted-surgery',
                image: robotic
            },
            {
                title: 'Oncology',
                descr: [
                    'In oncology research, we deliver complex, time-sensitive clinical trials across solid tumours, haematological malignancies, immuno-oncology, precision medicine, and targeted therapies. Through strong investigator networks, biomarker-driven strategies, and patient-centric designs, we generate high-impact clinical evidence while navigating regulatory complexity - accelerating breakthroughs that improve survival, quality of life, and access to advanced cancer therapies.',
                ],
                link: '/therapeutic-expertise/oncology',
                image: oncology
            },
            {
                title: 'RWE',
                descr: [
                    `We bring deep, cross-therapeutic expertise to the conceptualization, design, and execution of Real-World Evidence (RWE) studies - transforming real-world data into meaningful insights. Across the entire research continuum, we support robust evidence generation through both prospective and retrospective study designs, including sponsor-initiated and investigator-initiated research. Our approach delivers tailored evidence that meets scientific rigor while supporting regulatory decisions and market-access success.`,
                ],
                link: '/therapeutic-expertise/rwe',
                image: rwe
            }
        ]
    },
    publications: {
        subTitle: 'Because Every Insight Has the Power to Improve Lives',
        title: 'Most Influential Publications',
        descr: 'Some publications are not just evidence - they are breakthroughs. Our most influential work reflects studies that reshaped understanding, informed clinical decision-making, and advanced innovation across complex therapeutic areas.',
    },
    results: {
        title: 'Advancing Therapies, Accelerating Impact.',
        descr: 'Clinical research delivers its greatest value when it reflects the people it is meant to serve. We at Catalyst lead with :',
        resultPointsArr: [
            'Patient-centric study design ensuring relevance across diverse populations',
            'Inclusive recruitment strategies that strengthen the validity and generalizability of clinical outcomes',
            'Deep expertise in advanced medical technologies, and complex therapeutic areas',
            'Balanced integration of scientific rigor and innovation to accelerate reliable delivery of transformative therapies',
        ]
    }
};

export default homePageData;