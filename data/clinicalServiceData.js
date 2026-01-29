import { Clinical } from "@icons";
import { Neurology } from "@images"; 

export const clinicalServicesData = {
  "project-management": {
    id: "project-management",
    heading: "Project Management Services",
    subHeading:
      "Structured oversight to ensure compliant, efficient, and transparent clinical trial execution.",
    img: Neurology,
    imgicon: <Clinical />,
    content: [
      "<strong>Our Project Management Capabilities :</strong> Our disciplined yet flexible approach enables efficient study conduct, proactive risk management, and audit-ready documentation.",
      "Project Management services are integral throughout the entire conduct of the study, beginning with pre-study planning, continuing through active study execution, and extending into post-study closeout activities.", "We provide structured, end-to-end oversight across the entire study lifecycle. From pre-study planning and regulatory coordination to data oversight, quality assurance, and final closeout. By serving as the central point of coordination among sponsors, investigators, and cross-functional teams, we ensure clear communication, regulatory compliance, timely execution, and robust data integrity."
    ],
    capabilityCards: [
      {
        title: "Study Planning and Start-Up",
        points: [
          "Preparation of project milestone plan and deliverable tracking",
          "Feasibility assessment of participating centers",
          "Site identification, selection, and onboarding",
          "Oversight of Ethics Committee (EC) submissions and timelines",
          "Finalization of draft CTAs at all participating institutions",
        ],
      },
      {
        title: "Regulatory and Compliance Management",
        points: [
          "Ensure NDCT Rules 2019 / ICH-GCP compliance (as applicable)",
          "Assistance with CTRI registration and related regulatory requirements",
        ],
      },
      {
        title: "Project Coordination and Communication",
        points: [
          "Central liaison among sponsor, investigators, data-collection teams, and statisticians",
          "Establishment of structured communication and reporting pathways",
          "Monthly/weekly project status meetings and progress reporting",
        ],
      },
      {
        title: "Data Management Oversight",
        points: [
          "Setup and oversight of data collection tools",
          "Monitoring accuracy and completeness of submitted data",
        ],
      },
      {
        title: "Quality Assurance and Monitoring",
        points: [
          "Development of monitoring plan aligned with study design",
          "Identification, initiation and follow-up of CAPAs",
        ],
      },
      {
        title: "Budget and Financial Oversight",
        points: [
          "Budget planning and tracker development",
          "Processing of invoices from sites/vendors",
          "Oversight of TDS/GST compliance and documentation",
        ],
      },
      {
        title: "Biostatistics and Medical Writing Coordination",
        points: [
          "Coordination with biostatisticians teams for analysis plan (SAP)",
          "Transfer of cleaned and locked datasets",
          "Coordination for manuscript writing (if applicable)",
          "Support for poster/abstract presentations (if applicable)",
        ],
      },
      {
        title: "Study Close-Out",
        points: [
          "Confirmation of data completion across all sites",
          "Completion of site compliance checklists",
          "Preparation of final project closure reports",
        ],
      },
      {
        title: "Documentation and Archival",
        points: [
          "Archival of study documentation in compliance with regulatory requirements (typically 5 years)",
          "Secure data storage to ensure audit readiness",
          "Handover of final dataset, logs, and documentation to sponsors",
        ],
      },
    ],
  },
  "clinical-site-management": {
    id: "clinical-site-management",
    heading: "Clinical Site Management",
    subHeading:
      "Ensuring consistent, compliant, and well-coordinated study conduct across all participating sites.",
    img: Neurology,
    imgicon: <Clinical />,
    content: [
      "<strong>Comprehensive Site Operations Support : </strong> Proactive coordination and performance oversight for seamless study execution.",
      "Our Clinical Site Management services support seamless site operations through proactive coordination, regulatory compliance, and continuous performance oversight. We work closely with investigators and site teams to ensure uniform understanding of study requirements, timely execution, data quality, and audit readiness throughout the study lifecycle."
    ],
    capabilityCards: [
      {
        title: "Investigator Onboarding and Training",
        points: [
          "Coordination of investigator onboarding and site readiness verification",
          "Conducting structured training sessions on protocol and data collection",
          "Ensuring consistent understanding of study processes across all sites",
        ],
      },
      {
        title: "Ethics Committee (EC) Dossier Preparation",
        points: [
          "Preparation and compilation of site-specific EC submission dossiers",
          "Submission of dossiers as per institutional EC requirements",
          "Tracking EC approvals, queries, amendments, and renewals",
          "Tracking progress-report submissions and close-out notifications",
          "Ensuring compliance with NDCT Rules 2019, ICH-GCP, and institutional guidelines",
        ],
      },
      {
        title: "Site Communication and Coordination",
        points: [
          "Serving as the central communication point for all participating sites",
          "Conducting regular coordination meetings and sharing progress updates",
          "Dissemination of study documents, clarifications, and technical guidance",
          "Maintaining detailed documentation and audit readiness",
        ],
      },
      {
        title: "Data Management Coordination",
        points: [
          "Training site teams on CRF completion and data-entry processes",
          "Oversight of data-entry completeness, accuracy and timelines",
          "Periodic data-quality reviews and generation of progress reports",
          "Identification and resolution of data queries across sites",
          "Routine data cleaning, quality checks, and validation of key variables",
          "Coordination of final quality control cycles and database lock",
        ],
      },
      {
        title: "Issue Identification and Resolution",
        points: [
          "Continuous monitoring to identify operational challenges",
          "Coordination with site teams and investigators to resolve issues promptly",
          "Implementing and follow-up CAPA measures, where required",
        ],
      },
      {
        title: "Grant Management and Disbursement",
        points: [
          "Verification of site performance milestones",
          "Processing of site invoices with applicable TDS/GST compliance",
          "Coordination of timely and transparent site payment disbursement",
        ],
      },
      {
        title: "Ongoing Site Performance Monitoring",
        points: [
          "Regular tracking of site progress against study timelines",
          "Identification of underperforming sites and initiation of corrective actions",
          "Preparation of periodic progress summaries",
        ],
      },
      {
        title: "Site Close-Out",
        points: [
          "Ensuring completion of site close-out activities across all the participating sites",
        ],
      },
      {
        title: "Documentation and Archival",
        points: [
          "Maintenance of up-to-date TMF/SMF",
          "Archival of study documents across all participating sites (typically retained for five years)",
        ],
      },
    ],
  },
  "clinical-trial-monitoring": {
    id: "clinical-trial-monitoring",
    heading: "Clinical Study Monitoring",
    subHeading:
      "Ensuring protocol adherence, data integrity, and regulatory compliance throughout study execution.",
    img: Neurology,
    imgicon: <Clinical />,
    content: [
      "<strong>Clinical Study Monitoring Activities : </strong> Independent oversight for high-quality data and risk identification.",
      "Our Clinical Study Monitoring services provide independent oversight to ensure that all participating sites operate in full compliance with study protocol, defined procedures, and applicable regulatory requirements. Through structured on-site monitoring, we support high-quality data collection, early identification of risks, and consistent study execution across sites."
    ],
    capabilityCards: [
      {
        title: "Site Initiation Visits (SIVs)",
        points: [
          "Conducting on-site SIVs to confirm site readiness prior to study start",
          "Training investigators and site teams on protocol, CRFs, and source documentation",
          "Verifying availability of required study documents, infrastructure, and approvals",
          "Ensuring uniform understanding of the study processes across all centers",
        ],
      },
      {
        title: "Clinical Trial Monitoring Visits",
        points: [
          "Performing on-site monitoring visits to assess data accuracy and consistency",
          "Verifying selected source documents against CRFs",
          "Reviewing compliance with inclusion/exclusion criteria and regulations",
          "Identifying deviations, quality gaps, and operational challenges",
          "Implementation of corrective and preventive actions (CAPA)",
        ],
      },
      {
        title: "Study Close-Out Visits",
        points: [
          "Conducting end-of-study close-out visits to confirm completion of activities",
          "Ensuring all data have been collected, verified, cleaned, and submitted",
          "Confirming proper archiving of essential documents and SOP adherence",
          "Reviewing final compliance with sponsor expectations and regulatory obligations",
          "Supporting sites with Ethics Committee (EC) study-closure notifications",
        ],
      },
    ],
  },
  "patient-recruitment": {
    id: "patient-recruitment",
    heading: "Patient Recruitment",
    subHeading:
      "Ethical, data-driven recruitment strategies to enroll the right patients, at the right time.",
    img: Neurology,
    imgicon: <Clinical />,
    content: [
      "<strong>Our Patient Recruitment Capabilities : </strong>Strategies grounded in real-world feasibility and regulatory requirements.",
      "Catalyst delivers strategic, patient-centric recruitment solutions designed to identify and enroll eligible patients efficiently while maintaining the highest standards of ethics, compliance, and patient safety. Leveraging deep therapeutic expertise and a geographically diverse network of clinical sites, we ensure access to representative patient populations across regions, care settings, and demographics. Our recruitment strategies are grounded in real-world feasibility and regulatory requirements, minimizing recruitment risk without compromising data quality or participant welfare.",
      "Our teams proactively monitor recruitment performance, address barriers in real time, and adapt strategies as needed to maintain momentum. Through this integrated approach, we help sponsors achieve inclusive, timely recruitment and generate evidence that is robust, generalizable, and reflective of real-world patient populations."
    ],
    capabilityCards: [
      {
        title: "Feasibility and Enrollment Planning",
        points: [
          "Site-level feasibility assessments based on patient availability and historical performance",
          "Enrollment forecasting and realistic recruitment timelines",
          "Identification of high-performing and under-represented sites",
        ],
      },
      {
        title: "Site-Driven Patient Identification",
        points: [
          "Support to investigators for structured patient identification at sites",
          "Review of screening logs and enrollment funnels",
          "Optimization of site workflows to improve recruitment efficiency",
        ],
      },
      {
        title: "Patient Engagement and Retention Support",
        points: [
          "Patient-centric communication approaches aligned with protocol requirements",
          "Support for informed consent discussions and documentation processes",
          "Ongoing engagement strategies to minimize screen failures and dropouts",
        ],
      },
      {
        title: "Recruitment Performance Monitoring",
        points: [
          "Real-time tracking of enrollment metrics across sites",
          "Identification of recruitment bottlenecks and corrective actions",
          "Adaptive strategy refinement to sustain enrollment momentum",
        ],
      },
      {
        title: "Ethics and Regulatory Compliance",
        points: [
          "Recruitment activities conducted in accordance with ICH-GCP, NDCT Rules 2019, and EC approvals",
          "Oversight to ensure ethical patient engagement and data privacy",
          "Documentation to support audit and inspection readiness",
        ],
      },
      {
        title: "Inclusive and Representative Enrollment",
        points: [
          "Strategies to support diversity in age, gender, and disease representation",
          "Alignment with protocol inclusion/exclusion criteria",
          "Generation of evidence reflective of real-world patient populations",
        ],
      },
    ],
  },
  "investigator-training": {
    id: "investigator-training",
    heading: "Organization of Investigator’s Training Meetings",
    subHeading:
      "Equipping investigators and site teams with the knowledge and clarity required for consistent, compliant study execution.",
    img: Neurology,
    imgicon: <Clinical />,
    content: [
      "<strong>Scope of Investigator Training Meetings : </strong> Establishing a strong operational foundation and reducing start-up risk.",
      "We design and conduct structured Investigator Training Meetings (ITMs) to ensure investigators and site teams are fully prepared prior to study initiation. These meetings establish a strong operational foundation, reinforce protocol adherence, and promote standardized study conduct across all participating sites, reducing start-up risk and variability."
    ],
    capabilityCards: [
      {
        title: "Training Planning and Execution",
        points: [
          "Planning and conduct of comprehensive investigator training sessions prior to study initiation",
          "Coordination of training logistics and participation for investigators and site staff",
        ],
      },
      {
        title: "Protocol and Study Overview",
        points: [
          "Detailed review of study objectives, endpoints, eligibility criteria, and study workflows",
          "Clear explanation of investigator roles, site responsibilities, and study expectations",
        ],
      },
      {
        title: "Operational and Data Management Training",
        points: [
          "Hands-on training on CRF completion, data entry processes, and query management",
          "Guidance on documentation standards to ensure accurate, complete, and consistent data capture",
        ],
      },
      {
        title: "Regulatory and Ethical Compliance",
        points: [
          "Training on GCP principles, regulatory requirements, and patient confidentiality",
          "Reinforcement of ethical conduct and compliance expectations",
        ],
      },
      {
        title: "Interactive Engagement and Alignment",
        points: [
          "Facilitated discussions to address site-specific queries and operational challenges",
          "Ensuring uniform understanding and alignment across all participating sites prior to study start",
        ],
      },
    ],
  },
};