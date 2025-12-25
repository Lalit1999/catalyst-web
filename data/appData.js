import { homeBanner, about1, about2, exp1, exp2, exp3, pub1, pub2, pub3 } from "@images";
import { School, Expertise, MultiLocation, Partners, Patients } from "@icons";

const homePageData = {
    homeSlider: {
        title: 'At Catalyst Clinical Services Private Limited',
        image: homeBanner,
    },
    sectionTwo: {
        subTitle: 'Precision in Every Phase',
        title: 'Our Edge',
        descr: 'At Catalyst Clinical Services, you will find unmatched scientific rigor and operational excellence in:',
        card: [
            {
                title: 'Clinical Trials',
                icon: <School />,
                descr: ['Excellence in clinical trials is never accidental, it is crafted. From study design to final submission, our teams bring seamless coordination, operational excellence, and real-time oversight.',' We ensure every trial runs with precision, helping you move from concept to clinical outcomes with confidence and speed.'],
                link: '/',
            },
            {
                title: 'Therapeutic Expertise',
                icon: <School />,
                descr: ['Our therapeutic strength comes from continuously evolving scientific understanding and close collaboration with subject-matter specialists.',' Every project is guided by experts who anticipate challenges, interpret data with precision, and tailor strategies that support smarter, faster clinical development across diverse disease areas.'],
                link: '/',
            },
            {
                title: 'Research Publications',
                icon: <School />,
                descr: ['Our expert medical writers unlock deeper insights from your data. Powered by intelligent workflows, we accelerate evidence generation, enhance accuracy.',' Deliver high-impact manuscripts for publication in internationally recognized, peer-reviewed medical journals of repute.'],
                link: '/',
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
        },
        box3: {
            head : 'Types of Trial Sites ',
            para : [
                'Our trials are conducted across a diverse spectrum of site types, including government and academic hospitals, private and corporate hospital networks, and specialist clinics. ',
            ],
        },
    },
    sectionFour: {
        subTitle: 'Our Story',
        title: 'Your Trusted CRO Partner',
        descr: 'Catalyst was founded to redefine research standards through precision, integrity, and scientific excellence. We began with a conviction that clinical research must advance both science and humanity. ',
        para: [
            'We began with a conviction that clinical research must advance both science and humanity. ',
            'Catalyst was founded to redefine research standards through precision, integrity, and scientific excellence. ',
            'Today, we stand as a trusted CRO partner, enabling impactful clinical development through integrated trial solutions, deep therapeutic insight, and evidence-driven outcomes.',
            'Our journey is guided by a singular vision - to accelerate better healthcare by enabling smarter studies, stronger data, and faster pathways from discovery to delivery.',
        ],
        box1: {
            head: 'Enabling Impactful Clinical Development',
            text: 'through integrated trial solutions, deep therapeutic insight, and evidence-driven outcomes.',
            icon: <School />,
        },
        box2: {
            head: 'Accelerating Better Healthcare',
            text: 'by enabling smarter studies, stronger data, and faster pathways from discovery to delivery.',
            icon: <School />,
        },
        buttonText: 'Know More About Us',
        buttonLink: '/who-we-are',
        imageArr: [
            about1,
            about2,
        ],

    },
    statsArr: [
        {
            icon: <MultiLocation />,
            number: '15,000+ Patients',
            text: 'engaged across clinical and RWE studies',
        },
        {
            icon: <Partners />,
            number: '10,000+ Cases',
            text: 'generating evidence across robotic and other surgical techniques',
        },
        {
            icon: <Expertise />,
            number: '3,000+ Cases',
            text: 'driving precision oncology insight',
        },
        {
            icon: <Patients />,
            number: '100+ Publications',
            text: 'across leading peer-reviewed Journals',
        }
    ],
    expertise : {
        subTitle: 'Featured Solutions',
        title: 'Specialized Expertise',
        expertiseArr :[
            {
                title: 'Robotic-Assisted Surgery',
                descr: [
                    'Our expertise in robotic-assisted surgery enables sponsors to advance next-generation surgical solutions with confidence. We support the entire clinical development pathway - from protocol design and feasibility assessment to multi-centre trial execution and post-market evidence generation.',
                    'With deep understanding of robotic systems, performance metrics, and real-world surgical workflows, we help deliver high-quality data on precision, safety, and patient recovery outcomes. Our robust operational frameworks ensure faster study timelines and accelerated adoption of minimally invasive technologies. '
                ],
                link: '/',
                image: exp1
            },
            {
                title: 'Oncology',
                descr: [
                    'In oncology research, we combine scientific depth with operational excellence to manage some of the most complex and time-sensitive clinical trials. Our capabilities span solid tumours and haematological malignancies, immuno-oncology, precision medicine, and novel targeted therapies.',
                    'Through strong investigator networks, biomarker-driven approaches, and patient-centric study designs, we help sponsors generate high-impact clinical evidence while navigating regulatory complexities. Our focus remains on accelerating breakthroughs that improve survival, quality of life, and global access to advanced cancer therapies.',
                ],
                link: '/',
                image: exp2
            },
            {
                title: 'RWE Scientific Expertise',
                descr: [
                    `We possess deep, cross-therapeutic expertise in the conceptualization, design, and execution of real-world evidence (RWE) studies, supporting evidence generation across the entire research continuum.`,
                    `Our experience encompasses prospective and retrospective study designs, including sponsor-initiated and investigator-initiated research, enabling the generation of evidence tailored to diverse scientific, regulatory, and market-access objectives.`,
                ],
                link: '/',
                image: exp3
            }
        ]
    },
    publications: {
        subTitle: 'Latest Publications',
        title: 'Most Influential Publications',
        descr: 'Our most influential work reflects the science that has defined our journey and strengthened our role as a trusted partner in clinical research. These studies have reshaped understanding and advanced innovation across complex therapeutic areas.',
        buttonText: 'View All',
        buttonLink: '/',
        pubArr : [
            {
                image : pub1,
                title: 'Innovating To End Malaria',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                link: '/',
            },
            {
                image : pub2,
                title: 'Emerging Investigators',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                link: '/',
            },
            {
                image : pub3,
                title: 'Vaccine Research',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                link: '/',
            }
        ]
    },
    results: {
        subTitle: 'Client Satisfaction is Our Top Goal',
        title: 'Advancing Therapies, Accelerating Impact.',
        descr: 'Clinical research is most impactful when it reflects real-world patients. Our protocols prioritize inclusive recruitment and outcomes that are relevant across diverse populations and regions.',
        resultPointsArr: [
            'Expertise in advanced medical technologies, including robotic-assisted surgery',
            'Strong experience across complex therapeutic areas such as oncology',
            'Balanced, patient-centric approach to study design and execution',
            'Integration of innovation and compassion to accelerate patient access to therapies',
        ]
    }
};

export default homePageData;