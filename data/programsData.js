import { Person, Principal, ActivityLine, Prog, StarLine, Doc } from "@icons";

const programsDetailsArr = {
    'professional-diploma-in-clinical-research-pdcr': {
        id: 'professional-diploma-in-clinical-research-pdcr',
        heading: "Professional Diploma in <br />Clinical Research (PDCR)",
        subHeading: "India's Largest Clinical Research Training Program",
        description: [
            "The Professional Diploma in Clinical Research (PDCR) is India's largest and widely recognized clinical research training program, designed to cultivate high-calibre professionals for the pharmaceutical, biotechnology, and healthcare research sectors.",
            "This comprehensive skill-development programme offers a robust understanding of drug discovery, clinical trial operations, regulatory frameworks, and internationally accepted Good Clinical Practice (GCP) standards.",
            "Participants receive four meticulously curated learning modules along with an Assignment Workbook that together provide a comprehensive grounding in clinical trial methodology. Delivered over six months through a flexible distance-learning model, the PDCR programme enables learners to progress at their own pace while balancing demanding professional or academic commitments.",
            "Ideal for graduates and working professionals seeking a distinguished entry or advancement in the clinical research domain, PDCR equips participants with industry-ready competencies and a competitive edge in a rapidly evolving global landscape.",
        ],
        learnArr: [
            'Drug development phases, GCP, and global trial norms',
            'Clinical trial conduct, monitoring, and documentation',
            'Regulatory pathways including IND/NDA and Indian CT rules',
            'Stakeholder roles across sponsor, investigator, CRA/CRC, etc.',
            'Data management, safety reporting, and core biostatistics',
            'Ethics compliance and quality systems for trial integrity',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Introduction to Pharmaceutical Medicine',
                duration: 'Duration: Self-Paced',
                chapters: ['The Drug Development Process', 'New Drug Discovery', 'Clinical Development of Drug', 'Essential Clinical Trial Documents', 'Clinical Trials Terminology'],
                skills: ['Clinical research fundamentals', 'Drug discovery lifecycle', 'Clinical trial documentation', 'Trial terminology literacy', 'Development process insight'],
            },
            {
                title: 'Module 2: Good Clinical Practice (GCP) Foundations',
                duration: 'Duration: Self-Paced',
                chapters: ['History of GCP - milestones in the evolution of GCP', 'Principles of GCP', 'Applicable GCP Guidelines', 'Declaration of Helsinki', 'Clinical Study Process', 'The Management of Clinical Studies (Sponsor)', 'Ethics in Clinical Research', 'Informed Consent', 'Serious Adverse Event (SAE)', 'Challenges in the Implementation of GCP Guidelines', 'Biostatistics'],
                skills: ['GCP compliance', 'Ethics and informed consent', 'SAE reporting discipline', 'Study management fundamentals', 'Biostatistics basics'],
            },
            {
                title: 'Module 3: Drug Regulatory Affairs (Clinical Trials)',
                duration: 'Duration: Self-Paced',
                chapters: ['Overview of Regulatory Environment in USA, Australia, Europe and India', 'Clinical Trial Application Requirements in India', 'Import- Export of Clinical Trial Drugs in India', 'Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule', 'IND/ANDA/New Drug Application'],
                skills: ['Global clinical regulations', 'IND/ANDA submission know-how', 'Indian CT application prep', 'Import-export compliance', 'HIPAA and privacy readiness'],
            }, 
            {
                title: 'Module 4: Roles & Responsibilities of Clinical Trial Personnel',
                duration: 'Duration: Self-Paced',
                chapters: ['Roles & Responsibilities of Sponsor', 'Roles & Responsibilities of Investigator', 'Roles & Responsibilities of ERB/IRB/IEC', 'Roles & Responsibilities of CRA /Monitor', 'Roles & Responsibilities of Auditor', 'Roles & Responsibilities of Clinical Research Coordinator', 'Roles & Responsibilities of CRO\'s', 'Roles & Responsibilities of Regulatory Authorities', 'Roles & Responsibilities of Clinical Data Manager (CDM)', 'Roles & Responsibilities of Clinical Biostatistician'],
                skills: ['Stakeholder coordination', 'Site and investigator management', 'Monitoring and auditing practice', 'Data management collaboration', 'Biostatistics partnership'],
            }
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
    'professional-certificate-in-pharmacovigilance-pcpv': {
        id: 'professional-certificate-in-pharmacovigilance-pcpv',
        heading: "Professional Certificate in <br />Pharmacovigilance (PCPV)",
        subHeading: "Enhancing Drug Safety Through Skilled Professionals",
        description: [
            "The Professional Certificate in Pharmacovigilance (PCPV) is an industry-aligned drug safety training program that equips learners with essential skills in pharmacovigilance, case processing, signal detection, and global safety regulations. This comprehensive certification prepares professionals for growing career opportunities across pharmaceutical companies, CROs, and medical institutions.",
            "Participants receive carefully structured learning module supported by practical case examples and assessments, offering a clear understanding of end-to-end pharmacovigilance processes. Delivered through a flexible distance-learning format over a span of six months, the PCPV programme allows participants to learn at their convenience while balancing academic, professional, or personal responsibilities.",
            "Ideal for graduates and working professionals aspiring to build a career in drug safety, the PCPV equips learners with industry-ready skills, globally relevant knowledge, and the confidence required to excel in a highly regulated and mission-critical field.",
        ],
        learnArr: [
            'Master global drug safety regulations and authorities',
            'Capture and document safety events per international standards',
            'Evaluate safety data with consistent, compliant methods',
            'Apply standard medical terminologies for harmonized reports',
            'Detect signals and analyze patterns for emerging risks',
            'Support balanced risk-benefit decisions with evidence',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Introduction to Pharmacovigilance and Risk Management',
                duration: 'Duration: Self-Paced',
                chapters: ['Standard Terms and Definition of Pharmacovigilance', 'Global Perspectives PV and ADR Reporting', 'Functions of a National Pharmacovigilance System', 'Minimum Requirements for a Functional National Pharmacovigilance System', 'Basic Steps in Setting up a Pharmacovigilance Centre', 'How to Join the WHO Program for International Drug Monitoring?', 'Procedure for Joining the WHO Drug Monitoring Program', 'Pharmacovigilance Methods', 'Relationship/Casualty Assessment', 'Signal Generation in Pharmacovigilance'],
                skills: ['Pharmacovigilance fundamentals', 'Risk management basics', 'Causality and signal concepts', 'National PV system setup', 'ADR collection and reporting'],
            },
            {
                title: 'Module 2: Guidelines and Standards Governing PV',
                duration: 'Duration: Self-Paced',
                chapters: ['ICH Guidelines', 'US-FDA Guidelines', 'CFR Guidelines', 'European Union Guidelines', 'CIOMS Guidelines', 'Joint CIOMS-WHO Working Group on Drug Development Research and Pharmacovigilance in Resource-Poor Countries (2006)', 'CIOMS-WHO Working Group on Vaccine Pharmacovigilance', 'Pharmacovigilance Program of India (PVPI)', 'List of ADR Monitoring Centres under PVPI'],
                skills: ['ICH/FDA compliance literacy', 'EU and CIOMS guideline application', 'Vaccine PV practices', 'PVPI processes and centres', 'Global regulatory navigation'],
            },
            {
                title: 'Module 3: Global AE Reporting Systems and Forms',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Definitions and Terminology Associated with Clinical Safety', 'Experience, ICH (E2A)', 'Expectedness of an Adverse Drug Reaction', 'Reporting of Adverse Drug Reactions', 'ADR/AE Reporting Procedure', 'AE Reporting Form: - MedWatch Form 3500 and 3500A - Yellow Card - CIOMS I Form - SADRR Form - Blue Card - VAERS, etc.',
                ],
                skills: ['AE terminology and classification', 'Expectedness and seriousness assessment', 'ADR/AE reporting workflows', 'Global reporting forms proficiency', 'Regulatory timeline adherence'],
            }, 
            {
                title: 'Module 4: Individual Case Safety Reports (ICSRs)',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Medical Directory for Drug Regulatory Activities (MedDRA)', 
                    'Periodic Safety Updates Reports (PSURs)', 
                    'Expedited Reporting and Requirements', 
                    'Pharmacovigilance Inspections', 
                ],
                skills: ['MedDRA coding accuracy', 'PSUR drafting fundamentals', 'Expedited reporting criteria', 'Inspection readiness', 'Case quality review'],
            },
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
    'advanced-certificate-program-in-scientific-writing-sw': {
        id: 'advanced-certificate-program-in-scientific-writing-sw',
        heading: "Advanced Certificate Program in <br />Scientific Writing (SW)",
        subHeading: "Master the Art of Evidence-Based Scientific Communication",
        description: [
            "The Advanced Certificate Program in Scientific Writing is a comprehensive, competency-building training program designed to prepare participants for specialized roles in scientific and medical writing within the biopharmaceutical, healthcare, and clinical research industries. This program focuses on developing the core skills required to interpret scientific data, understand study designs, and prepare clear, accurate, and regulatory-compliant scientific documents.",
            "Structured as a six-month distance-learning program, the course offers the flexibility and convenience of self-paced study, allowing learners to complete the training within a typical 3-6 month window. Participants receive a well-crafted self-learning module, an assignment workbook, and hands-on training materials that simulate real-world medical writing tasks. Through case studies, protocol synopses, and guided exercises, learners gain practical experience in preparing essential research documents such as Case Report Forms (CRFs) and Standard Operating Procedures (SOPs), helping them build confidence and applied competence.",
            "The program follows an assignment-based evaluation approach, ensuring that each learner demonstrates a solid understanding of the concepts, methodologies, and document development processes central to scientific writing. Upon successful completion of all required assessments and fulfillment of the minimum qualification criteria, participants are awarded a professional certificate recognizing their skills.",
            "Designed to be accessible and career-oriented, the course provides a structured pathway for graduates, researchers, healthcare professionals, and aspiring writers looking to build or advance their career in scientific and medical writing. With its blend of theoretical knowledge and practical exposure, the program serves as an ideal stepping stone toward industry roles in scientific communication, regulatory writing, medical affairs content creation, and clinical documentation.",
        ],
        learnArr: [
            'Clinical research principles and GCP/ethics basics',
            'Translate study aims into protocols and SOPs',
            'Draft informed consent and CRFs fit for purpose',
            'Author CSRs and publication-ready manuscripts',
            'Plan data validation and quality checks',
            'Write compliant, regulator-ready scientific documents',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Foundations of Clinical Research and Scientific Writing',
                duration: 'Duration: Self-Paced',
                chapters: ['Introduction to clinical research and global guidelines','ICH-GCP, ethics, regulatory standards'],
                skills: ['Clinical research overview', 'Regulatory and ethics literacy', 'GCP foundations', 'Scientific writing basics', 'Compliance mindset'],
            },
            {
                title: 'Module 2: Clinical Study Documentation and Development Skills',
                duration: 'Duration: Self-Paced',
                chapters: ['Standard Operating Procedures (SOPs) - Framework, components, drafting, and implementation','Study Protocol Development - Elements of a protocol, rationale, endpoints, methodology, and statistical considerations','Informed Consent Document (ICD) - Ethical considerations, participant rights, language requirements, and regulatory expectations','Case Report Form (CRF) Development - Designing effective CRFs aligned with study objectives and data capture needs','Data Validation Plan (DVP) - Principles of data quality, validation checks, and consistency rules'],
                skills: ['SOP authoring and structuring', 'Protocol design support', 'Informed consent writing', 'CRF design fundamentals', 'Data validation planning'],
            },
            {
                title: 'Module 3: Scientific Reporting and Publication Writing',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Clinical Study Report (CSR) Development - Writing methodology, safety and efficacy result presentation, and regulatory structure.',
                    'Publication Writing - Manuscript development, journal selection, ethics in authorship, and scientific communication standards.',
                ],
                skills: ['CSR authoring', 'Safety/efficacy results presentation', 'Publication writing and submission', 'Journal selection strategy', 'Authorship ethics'],
            }, 
            {
                title: 'Module 4: Hands-on Training',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Develop a Case Report Form (CRF) from a protocol synopsis',
                    'Create an SOP on SOP development to build practical writing competence',
                ],
                skills: ['CRF development practice', 'SOP drafting practice', 'Applied documentation quality review'],
            },
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
    'advanced-certificate-program-in-project-management-pm': {
        id: 'advanced-certificate-program-in-project-management-pm',
        heading: "Advanced Certificate Program in <br />Project Management (PM)",
        subHeading: "From Planning to Delivery: Master Clinical Trial Project Management",
        description: [
            "The Advanced Certificate Program in Project Management (PM) is a structured, competency-building course designed to equip participants with the core skills, practical knowledge, and operational insight required for specialized clinical trial project management roles. The program is tailored for professionals seeking to develop end-to-end expertise in planning, execution, coordination, and oversight of clinical research projects.",
            "Structured as a six-month distance-learning program, the course offers the flexibility and convenience of self-paced study, allowing learners to complete the training within a typical 3-6 month window. Participants receive a well-crafted self-learning module, an assignment workbook, and hands-on training materials that simulate real-world project management tasks. This approach enables participants to translate regulatory and operational principles directly into practical project management scenarios.",
            "The program adopts a structured, assignment-based evaluation framework, ensuring that each participant demonstrates a clear and practical understanding of core project management concepts, methodologies, and essential documentation. Upon successful completion of all prescribed assessments and fulfilment of the minimum qualification requirements, participants are awarded a professional certification formally recognizing their competency and readiness for project management roles.",
        ],
        learnArr: [
            'Clinical trial planning with regulatory alignment',
            'Budgeting, vendor coordination, and TMF setup',
            'Site initiation, training, and document readiness',
            'Milestone tracking, risk control, and quality assurance',
            'Close-out execution and final reporting compliance',
            'Hands-on project artifacts: plans, budgets, ISF review',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Foundations of Clinical Research',
                duration: 'Duration: Self-Paced',
                chapters: ['Overview of Clinical Research Principles', 'Ethical Considerations in Clinical Trials', 'Regulatory Guidelines', 'Standards Governing Clinical Trials'],
                skills: ['Clinical research principles', 'Ethics and compliance awareness', 'Regulatory navigation', 'Trial standards familiarity'],
            },
            {
                title: 'Module 2: Project Milestone Planning and Forecasting',
                duration: 'Duration: Self-Paced',
                chapters: ['Cost Estimation and Financial Planning', 'Logistics Planning, Vendor Selection, and Management', 'Creation of Trial Master File (TMF)', 'Management of Regulatory Document Submission', 'Coordination of Individual Site Set-up Activities', 'Import/Export Requirements for Clinical Trials', 'Organization of Investigator Training Meeting', 'Study Initiation, Conduct, and Milestones Tracking', 'Audit(s) and Quality Assurance', 'Regulatory Inspection'],
                skills: ['Budgeting and cost estimation', 'Logistics and vendor management', 'TMF setup and oversight', 'Regulatory submission coordination', 'Milestone planning and tracking'],
            },
            {
                title: 'Module 3: Study Close-Out Activities',
                duration: 'Duration: Self-Paced',
                chapters: [ 'Clinical Trial Completion', 'Suspension of Clinical Trial', 'Termination of Clinical Trial', 'Final Study Report Preparation and Submission' ],
                skills: ['Close-out planning', 'Suspension/termination management', 'Final report preparation', 'Regulatory close-out compliance'],
            }, 
            {
                title: 'Module 4: Hands-on Training',
                duration: 'Duration: Self-Paced',
                chapters: [ 'Develop a comprehensive Project Milestone Plan', 'Create a Trial Budget', 'Identify and evaluate discrepancies or deviations within the Investigator Site File (ISF)' ],
                skills: ['Milestone plan drafting', 'Trial budgeting practice', 'ISF quality review', 'Issue identification and remediation'],
            },
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
    'advanced-certificate-program-in-clinical-trial-monitoring-ctm': {
        id: 'advanced-certificate-program-in-clinical-trial-monitoring-ctm',
        heading: "Advanced Certificate Program in <br />Clinical Trial Monitoring (CTM)",
        subHeading: "Step into the Role of a Confident Clinical Trial Monitor",
        description: [
            "The Advanced Certificate Program in Clinical Trial Monitoring is a focused, competency-driven training designed to develop specialized expertise in the oversight and monitoring of clinical trials. The program equips participants with the practical knowledge, regulatory understanding, and hands-on skills required to perform the role of a Clinical Research Associate (CRA) or clinical trial monitor with confidence and accuracy.",
            "Structured as a six-month, distance-learning program, the course offers the flexibility of a self-paced format, enabling participants to complete the training within a typical 3-6 month timeframe. Learners are provided with a comprehensive self-learning module, an assignment workbook, and hands-on training materials designed to closely reflect real-world clinical trial monitoring responsibilities.",
            "Training is delivered through realistic case studies and a robust dummy clinical trial monitoring kit, comprising a protocol synopsis, Case Report Forms (CRFs), source documents, and an Investigator Site File (ISF). This immersive, practice-oriented approach ensures participants gain practical exposure and operational confidence aligned with routine monitoring activities in clinical research.",
            "Upon successful completion of all required assessments and fulfillment of the minimum qualification criteria, participants are awarded a professional certificate, validating their readiness to undertake clinical trial monitoring responsibilities in compliance with ICH-GCP and regulatory standards.",
        ],
        learnArr: [
            'Build monitoring plans aligned to protocol and GCP',
            'Qualify sites and manage initiations and essentials',
            'Perform monitoring visits, SDV, and CRF oversight',
            'Coordinate data flow, SAE review, and compliance',
            'Manage IP accountability, deviations, and escalations',
            'Execute site close-out with complete documentation',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Introduction to Clinical Research and Standards',
                duration: 'Duration: Self-Paced',
                chapters: ['Introduction to Clinical Research', 'Guidelines Governing Clinical Research', 'Standards Governing Clinical Trials'],
                skills: ['Clinical research principles', 'Regulatory standards awareness', 'GCP foundations'],
            },
            {
                title: 'Module 2: Investigator Site Selection and Assessment',
                duration: 'Duration: Self-Paced',
                chapters: ['Investigator Site Selection', 'Site Assessment and Feasibility'],
                skills: ['Site feasibility assessment', 'Investigator selection', 'Site qualification documentation'],
            },
            {
                title: 'Module 3: Monitoring Plan Development and Site Initiation',
                duration: 'Duration: Self-Paced',
                chapters: ['Clinical Trial Monitoring Plan Development', 'Site Initiation and Essential Document Review', 'Delegation of Duties and Responsibilities at Site'],
                skills: ['Monitoring plan design', 'Site initiation procedures', 'Essential document review', 'Delegation oversight'],
            }, 
            {
                title: 'Module 4: Hands-on Training',
                duration: 'Duration: Self-Paced',
                chapters: [ 'Review a simulated clinical trial monitoring kit and accurately complete the Case Report Forms (CRFs)', 'Conduct a monitoring visit and systematically identify and assess discrepancies or protocol deviations', 'Identify and evaluate discrepancies or deviations within the Investigator Site File (ISF)' ],
                skills: ['Monitoring kit handling', 'CRF completion accuracy', 'Protocol deviation detection', 'ISF quality control'],
            },
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
    'oncology-clinical-trials-training-octt': {
        id: 'oncology-clinical-trials-training-octt',
        heading: "Oncology Clinical Trials Training (OCTT)",
        subHeading: "Specialized Training for Excellence in Oncology Clinical Trials",
        description: [
            "The Oncology Clinical Trials Training (OCTT) program is a specialized, competency-driven course designed to equip participants with the knowledge, skills, and practical expertise required to manage and oversee oncology clinical trials. The program focuses on the unique scientific, operational, and regulatory complexities of cancer research, enabling learners to develop proficiency in oncology trial conduct through a structured and hands-on training approach.", 
            "Structured as a six-month, distance-learning program, the course offers the flexibility of a self-paced format, enabling participants to complete the training within a typical 3-6 month timeframe. Learners are provided with two comprehensive self-learning modules, an assignment workbook, and hands-on training materials designed to ensuring a strong foundation in oncology-specific clinical research principles.", 
            "Practical training is reinforced through realistic case studies and a detailed dummy clinical trial monitoring kit, which includes a protocol synopsis, Case Report Forms (CRFs), source documents, and an Investigator Site File (ISF). Learners are required to critically review these materials and identify intentionally embedded deficiencies, closely simulating real-world oncology trial oversight scenarios.", 
            "Successful completion of all required assessments and fulfilment of the minimum qualification criteria, participants are awarded a professional certificate, recognizing their readiness to contribute effectively to oncology clinical trial operations and monitoring.",
        ],
        learnArr: [
            'Oncology trial fundamentals and ethics/consent',
            'Cancer staging, endpoints, and assessment standards',
            'Safety and efficacy evaluation using WHO/RECIST',
            'Oncology-specific monitoring and SDV practices',
            'IP accountability, SAE handling, and deviation control',
            'Oncology site close-out with complete ISF/CRF quality',
        ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Fundamentals of Oncology Clinical Trials',
                duration: 'Duration: Self-Paced',
                chapters: ['Introduction to Drug Discovery Process', 'Guidelines and Standards Governing Clinical Research', 'Essential Clinical Trial Documents', 'Ethics Committee/Ethics Review Board', 'Informed Consent Process', 'Overview of Cancer and Oncology Clinical Trials', 'Diagnosing Cancer: Staging and Disease Assessment', 'Safety Evaluation in Oncology Clinical Trials (WHO, CTC)', 'Efficacy Evaluation in Oncology Clinical Trials (WHO, SWOG, RECIST)', 'Glossary'],
                skills: ['Oncology trial fundamentals', 'Ethics and EC processes', 'Cancer staging and assessment', 'Safety and efficacy evaluation standards', 'Clinical documentation essentials'],
            },
            {
                title: 'Module 2: Oncology Clinical Trials Monitoring',
                duration: 'Duration: Self-Paced',
                chapters: ['Development of a Monitoring Plan', 'Site Initiation, Review of Essential Trial Documents, Delegation of Duties and Responsibilities at Individual Site', 'Clinical Trial Monitoring', 'Inventory Planning and Tracking', 'Source Document Verification (SDV)', 'CRF Review, and Coordination of Data Management Activities', 'Serious Adverse Event (SAE) review and Regulatory Compliance', 'Investigational Product (IP) Accountability and Management', 'Management and Prevention of Deviations', 'Site Closure Monitoring Visit'],
                skills: ['Oncology monitoring plan design', 'Site initiation for oncology studies', 'SDV and CRA practice', 'IP accountability and tracking', 'Deviation management and site closure'],
            },
            {
                title: 'Module 3: Hands-on Training',
                duration: 'Duration: Self-Paced',
                chapters: [ 'Review a simulated oncology clinical trial monitoring kit and accurately complete oncology-specific Case Report Forms (CRFs)', 'Conduct an oncology trial monitoring visit and systematically identify, assess, and document discrepancies or protocol deviations', 'Identify and evaluate discrepancies or deviations within the Investigator Site File (ISF) in the context of oncology clinical trials'
                ],
                skills: ['Oncology CRF completion', 'Monitoring visit execution', 'Protocol deviation detection', 'Oncology ISF quality review'],
            }, 
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 4,
        students: `500+`,
        language: ['English'],
        certificate: true 
    },
    'workshops': {
        id: 'workshops',
        heading: "Workshop on Good Clinical Practice (GCP) and Clinical Research Methodology",
        subHeading: "Program Overview",
        description: [
            "This one-day, workshop-based training program is designed to provide a strong foundation in clinical research principles and Good Clinical Practice (GCP) guidelines, with a practical, application-oriented approach. The program is ideal for professionals seeking structured exposure to the clinical research and drug development ecosystem, complemented by interactive learning and essential soft-skill development.", 
            "<strong>A comprehensive, instructor-led workshop focused on:</strong>", 
            `<ul>
                <li>Core concepts of clinical research and drug development</li>
                <li>Practical understanding of GCP guidelines and ethical conduct of clinical trials</li>
                <li>Regulatory expectations and real-world trial execution</li>
            </ul>`,
            "<strong>A comprehensive, instructor-led workshop focused on:</strong>", 
            `<ul>
                <li>One-day intensive, hands-on workshop format</li>
                <li>Expert-led live lectures and interactive discussions</li>
                <li>Practical insights aligned with industry and regulatory expectations</li>
            </ul>`,
        ],
        // learnArr: [
        //     'Oncology trial fundamentals and ethics/consent',
        //     'Cancer staging, endpoints, and assessment standards',
        //     'Safety and efficacy evaluation using WHO/RECIST',
        //     'Oncology-specific monitoring and SDV practices',
        //     'IP accountability, SAE handling, and deviation control',
        //     'Oncology site close-out with complete ISF/CRF quality',
        // ],
        whyChooseArr: [
            {
                icon: <ActivityLine />,
                head: 'Self-Paced Learning',
                text: 'Flexible format that fits around professional or academic schedules.'
            },
            {
                icon: <Prog />,
                head: '24/7 Expert Academic Support',
                text: '24/7 faculty guidance for queries, feedback, and learning clarity.'
            },
            {
                icon: <StarLine />,
                head: 'Industry-Ready Content',
                text: 'Curriculum mapped to current industry practices and GCP standards.'
            },
            {
                icon: <Principal />,
                head: 'A Standout Portfolio',
                text: 'Assignments that showcase trial design and operational know-how.'
            },
            {
                icon: <Doc />,
                head: 'Real-World Projects & Case Studies',
                text: 'Applied real-world case studies reflecting actual scenarios.'
            },
            {
                icon: <Person />,
                head: 'Placement Assistance',
                text: 'Career guidance and interview readiness for industry roles.'
            },
        ],
        brochureLink: "/",
        courseDetailArr: [
            {
                title: 'Module 1: Introduction to Clinical Research',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as principles of clinical research', 
                    'Drug discovery', 
                    'Clinical Trial Process', 
                    'Phases of Clinical Trials', 
                    'Regulatory Framework', 
                    'Study Designs', 
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 2: Principles of Good Clinical Practices (GCP)',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on principles of GCP', 
                    'Applicable GCP guidelines', 
                    'The evolution of GCP guidelines', 
                    'Responsibilities of various stakeholders (Sponsor, CRO, Investigator, and Ethics Committee). ', 
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 3: Essential Clinical Trial Documents',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as protocol', 
                    'Informed consent document (ICD)', 
                    'Investigator’s brochure (IB)', 
                    'Case report form (CRF)', 
                    'Source data/document (SD)', 
                    'Regulatory and ethics approval', 
                    'Clinical trial agreement (CTA)', 
                    'Clinical trial liability insurance', 
                    'Clinical study report (CSR)'
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 4: Ethical Review',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as categories of review', 
                    'Review documents', 
                    'Quorum requirements', 
                    'Notification of meeting and distribution of material ', 
                    'Meeting procedure'
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 5: •	Informed Consent Process',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as essential elements of patient information sheet and informed consent form', 
                    'Regulatory requirements', 
                    'Informed consent process'
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 6: Safety Reporting and Compensation',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as adverse events', 
                    'Serious adverse events', 
                    'Reporting timelines', 
                    'Compensation in case of clinical trial injury/death', 
                    'Compensation formula Evaluation in Oncology Clinical Trials (WHO, SWOG, RECIST)', 
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
            {
                title: 'Module 7: Regulatory Landscape',
                duration: 'Duration: Self-Paced',
                chapters: [
                    'Training on topics such as recent regulatory changes ', 
                    'Policy initiatives (New Drugs and Clinical Trials Rules, 2019).'
                ],
                // skills: [
                //     'Oncology trial fundamentals', 
                //     'Ethics and EC processes', 'Cancer staging and assessment', 
                //     'Safety and efficacy evaluation standards', 
                //     'Clinical documentation essentials'
                // ],
            },
        ],
        courseSchedule: [
            {
                head: 'Receive Study Material',
                value: 'Upon registration, you will receive four comprehensive Learning Modules along with an Assignment Workbook.'
            },
            {
                head: 'Study & Complete Assignments',
                value: 'Go through the modules and complete the assignments within the standard 4.5-month duration.'
            },
            {
                head: 'Option for Early Completion',
                value: 'If you wish to finish sooner, you may submit your completed workbook with an early assessment request.'
            },
            {
                head: 'Assessment',
                value: 'Your Assignment workbook is evaluated based on the qualification criteria.'
            },
            {
                head: 'Earn Your Certificate',
                value: 'After successful assessment, you will be awarded a Certificate of Completion.'
            },    
        ],
        regProcess: {
            head: 'Three-step registration process:',
            steps: [
                {
                    head: 'Get the Registration Link/QR',
                    value: 'Receive the registration link and QR code from us.'
                },
                {
                    head: 'Complete the Form & Payment',
                    value: 'Fill out the registration form and pay the course fee using the QR code.'
                },
                {
                    head: 'Receive Confirmation',
                    value: 'Get an acknowledgement call confirming your successful registration.'
                }, 
            ],
        },
        usd: 350,
        inr: 14000,
        duration: 'Self-Paced',
        lessons: 7,
        students: `5000+`,
        language: ['English', 'Hindi'],
        certificate: true 
    },
} ;

export default programsDetailsArr ;