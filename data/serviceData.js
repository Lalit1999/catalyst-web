import { Research, Fsp, Clinical, Bag, Data } from "@icons";
import { about1 } from "@images";

// 1. Sidebar Links
export const quickLinks = [
  { heading: "What we do", id: "/what-we-do" },
  { heading: "Who we are", id: "/who-we-are" },
  { heading: "Research Publications", id: "/research-publications" },
  { heading: "Therapeutic Expertise", id: "/therapeutic-expertise" },
  { heading: "Training Programs", id: "/training-programs" },
];

// 2. Header Data
export const servicePageHeader = {
  bread: "Services",
  heading: "Services Offered by Catalyst",
  description:
    "Catalyst provides comprehensive, end-to-end clinical trial management founded on scientific rigor, ethical governance, and a deeply patient-centred philosophy. We collaborate with pharmaceutical, biotechnology, and medical device organizations globally to conceptualize, design, and operationalize clinical studies that are methodologically robust, reflective of real-world patient populations, and capable of generating high-quality, generalizable evidence. ",
  image: about1,
  extra : ["Spanning the full clinical development continuum, from early-phase investigations to post-marketing evidence generation, our work integrates strategic oversight, regulatory compliance, and operational excellence. Through flexible engagement models, ranging from bespoke solutions to fully integrated services, we enable sponsors to optimize development pathways, manage complexity and risk, and advance therapeutic and technological innovations with confidence, precision, and integrity."],
};

export const serviceDataObject = {
  "clinical-development-services": {
    id: "clinical-development-services",
    heading: "Clinical Development Services",
    subHeading:
      "Every clinical trial carries the responsibility to shape the future of patient care worldwide.",
    content: [
      "<strong>Your Trusted Partner in Clinical Trial Optimization : </strong>Operational excellence delivered through focused, compliant, and scalable trial support.",
      "We deliver integrated clinical development services designed to support sponsors across the full lifecycle of study execution. Our capabilities encompass strategic study design and start-up, efficient and ethical patient recruitment, and robust project management to ensure timelines, quality, and compliance are maintained. We provide comprehensive clinical site management and clinical trial monitoring, enabling consistent protocol adherence, data integrity, and regulatory readiness across single-centre and multicentre studies. Together, these services enable streamlined study conduct, reduced operational risk, and the generation of high-quality, reliable clinical evidence."
    ],
    imgicon: <Clinical />,
    capabilityCards: [
      {
        title: "Project Management",
        points: [
          "End-to-end oversight to ensure timelines, quality, and stakeholder alignment",
        ],
      },
      {
        title: "Clinical Site Management",
        points: [
          "Site activation, coordination, and ongoing operational support",
        ],
      },
      {
        title: "Clinical Trial Monitoring",
        points: [
          "Risk-based and on-site monitoring to ensure protocol adherence and data integrity",
        ],
      },
      {
        title: "Patient Recruitment",
        points: [
          "Ethical, efficient subject recruitment strategies tailored to study needs",
        ],
      },
      {
        title: "Investigator’s Training Meetings",
        points: [
          "Planning and execution of investigator and site staff training programs",
        ],
      },
    ],
  },
  "medical-writing": {
    id: "medical-writing",
    heading: "Expert Medical Writing and Scientific Publication Services",
    subHeading:
      "Transforming complex clinical and real-world data into clear, credible, and publication-ready scientific evidence.",
    content: [
      "<strong>Our Medical Writing Capabilities : </strong>Our protocols are designed to be scientifically robust, operationally executable, and defensible from both regulatory and ethics perspectives.",
      "Catalyst delivers high-quality medical writing and scientific publication services through a multidisciplinary team of senior medical professionals, scientific subject-matter experts, biostatisticians, and experienced medical writers. Working in close collaboration with investigators and sponsors, we translate complex clinical and real-world data into scientifically rigorous, regulator-ready, and publication-quality documentation. Our expertise spans the full continuum of evidence generation, including retrospective and prospective datasets, real-world evidence (RWE), observational and registry-based studies, and interventional clinical trials."
    ],
    imgicon: <Research />,
    capabilityCards: [
      {
        title: "Protocol Design and Development",
        points: [
          "Scientific and operational input into protocol design",
          "Development of compliant study protocols and amendments",
          "Alignment of endpoints, statistical considerations, and assessment schedules",
          "Integration of patient-centric and real-world considerations",
          "Close collaboration with investigators and sponsors",
        ],
      },
      {
        title: "Clinical Study Reports (Phase I–IV)",
        points: [
          "Preparation of full CSRs, synopses, and appendices",
          "Integration and interpretation of tables, listings, and figures (TLFs)",
          "Clear presentation of efficacy, safety, and exploratory outcomes",
          "Coordination with biostatisticians to ensure analytical consistency",
          "Support for interim, final, and post-marketing study reports",
        ],
      },
      {
        title: "Manuscript Development and Publication Support",
        points: [
          "Development of abstracts, full manuscripts, reviews, and conference materials",
          "Compliance with CONSORT, STROBE, PRISMA, CARE, and GPP guidelines",
          "Journal-specific manuscript formatting and submission packages",
          "Coordination of peer-review responses, revisions, and resubmissions",
          "Support through acceptance and publication",
        ],
      },
      {
        title: "Scientific Integrity",
        points: [
          "Active intellectual partners in evidence dissemination",
          "Ensuring scientific ownership, transparency, and ethical integrity",
          "Maximizing scientific visibility and regulatory confidence",
        ],
      },
    ],
  },
  "regulatory-consulting": {
    id: "regulatory-consulting",
    heading: "Regulatory Consulting",
    subHeading:
      "Regulatory success lies not only in compliance, but in anticipation.",
    content: [
      "<strong>End-to-End Regulatory Affairs and Compliance Solutions : </strong>We leverage strong India-based regulatory resources to seamlessly support pharmaceutical, biotechnology, and medical device regulatory requirements.",
      "At Catalyst Clinical Services, our regulatory affairs experts combine deep domain knowledge with hands-on experience to navigate complex local and global regulatory landscapes with precision and foresight. We proactively identify regulatory requirements and anticipate submission-stage challenges, enabling sponsors to address concerns early and achieve timely, seamless approvals. From early-phase planning through post-approval obligations, we provide end-to-end regulatory consulting and compliance support across the entire clinical trial lifecycle."
    ],
    imgicon: <Bag />,
    capabilityCards: [
      {
        title: "Regulatory Dossier Preparation",
        points: [
          "Preparation of high-quality, submission-ready regulatory dossiers",
          "Compliance with NDCTR 2019, ICH-GCP guidelines, and applicable local requirements",
          "Review for completeness, accuracy, and regulatory consistency to support efficient approvals",
        ],
      },
      {
        title: "Regulatory Authority Coordination",
        points: [
          "Single point of contact for coordination with the Ministry of Health and Family Welfare (MoH) and regulatory authorities",
          "Support for clinical trial approvals, regulatory queries, and follow-up submissions",
          "Proactive engagement to facilitate timely regulatory decisions",
        ],
      },
      {
        title: "Import License Management",
        points: [
          "End-to-end coordination for issuance, amendment, and renewal of Import Licenses",
          "Coverage for investigational products, comparators, and trial-related materials",
          "Ensuring regulatory continuity and uninterrupted trial conduct",
        ],
      },
      {
        title: "Safety Reporting & Pharmacovigilance",
        points: [
          "Comprehensive safety reporting in accordance with Table 5, Third Schedule of NDCTR 2019",
          "Support for SUSAR reporting, periodic safety updates, and annual safety submissions",
          "Coordination with Ethics Committees and regulatory authorities to ensure timely compliance",
        ],
      },
      {
        title: "Regulatory Documentation",
        points: [
          "Collaboration between regulatory and medical writing teams",
          "Preparation of regulator-ready CSRs and supporting documentation",
          "Alignment with national and international submission standards",
        ],
      },
    ],
  },
  "fsp": {
    id: "fsp",
    heading: "Tailored Clinical Operations FSP Models",
    subHeading: "Precisely aligned to sponsor needs.",
    content: [
      "<strong>Why Partner with Catalyst for FSP : </strong>Our clinical operations FSP models are structured to deliver immediate productivity and sustained performance.",
      "Catalyst Clinical Services delivers customized Clinical Operations Functional Service Provider (FSP) models designed to align seamlessly with each sponsor’s development strategy, operational structure, and delivery objectives. We embed dedicated, role-aligned clinical operations professionals who function as a true extension of sponsor teams. Our resources integrate seamlessly with sponsor SOPs, systems, governance frameworks, and workflows—ensuring continuity, consistency, and operational efficiency from day one."
    ],
    imgicon: <Fsp />,
    capabilityCards: [
      {
        title: "Governance-Driven Delivery",
        points: [
          "Clearly defined roles and responsibilities",
          "Performance metrics and service-level expectations",
          "Structured escalation and issue-management mechanisms",
        ],
      },
      {
        title: "Why Partner with Catalyst",
        points: [
          "Customized, role-aligned clinical operations teams",
          "Strong governance, oversight, and quality frameworks",
          "Rapid onboarding and productivity",
          "Flexible and scalable resource models",
          "India-based expertise aligned with global standards",
        ],
      },
      {
        title: "Engagement Models",
        points: [
          "Scale resources up or down based on study demands",
          "Transition smoothly across study phases",
          "Optimize timelines and costs without disrupting operations",
        ],
      },
    ],
  },
  "data-management-biostatistics": {
    id: "data-management-biostatistics",
    heading: "Data Management and Biostatistics",
    subHeading:
      "Ensuring data integrity, analytical rigor, and regulatory confidence.",
    content: [
      "<strong>Our Data & Biostatistics Capabilities : </strong>Independent quality checks and regulatory-aligned processes.",
      "At Catalyst Clinical Services, our Data Management and Biostatistics services are designed to deliver clean, consistent, and audit-ready datasets that support reliable decision-making and high-quality regulatory submissions. Our integrated approach ensures accuracy, traceability, and compliance across the entire data lifecycle—from collection to final analysis and reporting."
    ],
    imgicon: <Data />,
    capabilityCards: [
      {
        title: "Clinical Data Management",
        points: [
          "Standardized data collection using structured paper CRFs to ensure uniformity across sites",
          "Accurate and complete data entry into a secure, controlled MS Excel–based database",
          "Structured query management, including discrepancy identification and resolution",
          "Ongoing data cleaning, validation, and consistency checks for critical variables",
          "Independent data review with 100% verification to ensure accuracy",
          "Coordination and execution of formal database lock procedures",
          "Support for generating summary tables, listings, and descriptive/statistical outputs",
          "Assistance with final reports, manuscripts, and audit-ready documentation",
        ],
      },
      {
        title: "Biostatistics Services",
        points: [
          "Development of comprehensive Statistical Analysis Plans (SAPs)",
          "Preparation, validation, and finalization of analysis-ready datasets",
          "Execution of descriptive and inferential statistical analyses aligned with study objectives",
          "Generation of high-quality Tables, Listings, and Figures (TLFs/TLGs)",
          "Subgroup and exploratory analyses, as appropriate",
          "Independent verification of statistical outputs to ensure accuracy",
          "Interpretation of results in close collaboration with the Sponsor",
          "Preparation of statistical sections for Clinical Study Reports (CSRs)",
          "Delivery of complete, audit-ready analysis files, programs, and documentation",
        ],
      },
      {
        title: "Why Catalyst?",
        points: [
          "End-to-end data lifecycle management",
          "Strong focus on data integrity and audit readiness",
          "Independent quality checks and verification",
          "Regulatory-aligned processes and documentation",
          "Integrated medical writing and reporting support",
        ],
      },
    ],
  },
};