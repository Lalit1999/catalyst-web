import { Person, Principal, ActivityLine, Prog, StarLine, Doc } from "@icons";

const programsDetailsArr = {
    'professional-diploma-in-clinical-research-pdcr': {
        id: 'professional-diploma-in-clinical-research-pdcr',
        heading: "Professional Diploma in Clinical Research (PDCR)",
        description: "PDCR is India's largest and widely recognized clinical research training program, designed to cultivate high-calibre professionals for the pharmaceutical, biotechnology, and healthcare research sectors.",
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
                title: 'Unit 1 : Introduction to Pharmaceutical Medicine',
                duration: 'Duration: Self-Paced',
                chapters: ['The Drug Development Process', 'New Drug Discovery', 'Clinical Development of Drug', 'Essential Clinical Trial Documents', 'Clinical Trials Terminology'],
                skills: ['Clinical research fundamentals', 'Drug discovery lifecycle', 'Clinical trial documentation', 'Trial terminology literacy', 'Development process insight'],
            },
            {
                title: 'Unit 2 : Good Clinical Practice (GCP) Foundations',
                duration: 'Duration: Self-Paced',
                chapters: ['History of GCP - milestones in the evolution of GCP', 'Principles of GCP', 'Applicable GCP Guidelines', 'Declaration of Helsinki', 'Clinical Study Process', 'The Management of Clinical Studies (Sponsor)', 'Ethics in Clinical Research', 'Informed Consent', 'Serious Adverse Event (SAE)', 'Challenges in the Implementation of GCP Guidelines', 'Biostatistics'],
                skills: ['GCP compliance', 'Ethics and informed consent', 'SAE reporting discipline', 'Study management fundamentals', 'Biostatistics basics'],
            },
            {
                title: 'Unit 3 : Drug Regulatory Affairs (Clinical Trials)',
                duration: 'Duration: Self-Paced',
                chapters: ['Overview of Regulatory Environment in USA, Australia, Europe and India', 'Clinical Trial Application Requirements in India', 'Import- Export of Clinical Trial Drugs in India', 'Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule', 'IND/ANDA/New Drug Application'],
                skills: ['Global clinical regulations', 'IND/ANDA submission know-how', 'Indian CT application prep', 'Import-export compliance', 'HIPAA and privacy readiness'],
            }, 
            {
                title: 'Unit 4 : Roles & Responsibilities of Clinical Trial Personnel',
                duration: 'Duration: Self-Paced',
                chapters: ['Roles & Responsibilities of Sponsor', 'Roles & Responsibilities of Investigator', 'Roles & Responsibilities of ERB/IRB/IEC', 'Roles & Responsibilities of CRA /Monitor', 'Roles & Responsibilities of Auditor', 'Roles & Responsibilities of Clinical Research Coordinator', 'Roles & Responsibilities of CRO\'s', 'Roles & Responsibilities of Regulatory Authorities', 'Roles & Responsibilities of Clinical Data Manager (CDM)', 'Roles & Responsibilities of Clinical Biostatistician'],
                skills: ['Stakeholder coordination', 'Site and investigator management', 'Monitoring and auditing practice', 'Data management collaboration', 'Biostatistics partnership'],
            }
        ],
        reqArr: [
            'Basic understanding of HTML, CSS, and JavaScript',
            'Familiarity with programming concepts like variables, loops, and functions',
            'A computer with internet access to set up the development environment',
            'A computer with internet access to set up the development environment',
            'Willingness to learn and practice coding regularly'
        ],
        usd: 350,
        inr: 14000,
        duration: '12 Weeks',
        lessons: 10,
        students: `500+`,
        language: ['English'],
        certificate: true
    },
} ;

export default programsDetailsArr ;