import { Bag, Research, Data, Clinical, Fsp } from "@icons";
import { about1 } from "@images";

// 2. Page Header Data (The text you requested)
export const therapeuticPageHeader = {
  bread: "Therapeutic Expertise",
  heading: "Our Therapeutic Expertise",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum bibendum dignissim. Sed quam eros, accumsan in velit a, placerat mollis nunc. Nulla at purus non leo condimentum pellentesque ut a mauris. Vivamus ut euismod nisi, quis laoreet nisl. Suspendi",
  image: about1,
};

// 4. Main Data Object
export const therapeuticExpertiseData = {
  // --- Therapeutic Expertise ---

  "robotic-assisted-surgery": {
    id: "robotic-assisted-surgery",
    heading: "Leaders in Robotic-Assisted Surgery Research",
    subHeading:
      "Evidence that Accelerates Innovation. Data that Transforms Surgery.",
    imgicon: <Research />,
    content: [
      "We are at the forefront of robotic-assisted surgery (RAS) clinical research, supported by India’s largest real-world evidence base - data from 10,000+ patients across multiple centers. Our depth of experience enables sponsors and innovators to advance next-generation surgical technologies with confidence, clarity, and clinical credibility.",
    ],
    capabilityCards: [
      {
        title: "Breadth Across Surgical Specialties",
        points: [
          "From Precision Procedures to Complex Reconstructions.",
          "Our evidence portfolio spans benign and malignant conditions across major surgical disciplines, including:",
        ],
      },
      {
        title: "Urology",
        points: ["Partial nephrectomy, bladder dissection"],
      },
      {
        title: "Gastrointestinal and Colorectal Surgery",
        points: [
          "Rectal resections, cholecystectomy, radical completion cholecystectomy",
        ],
      },
      {
        title: "Gynecology",
        points: [
          "Malignant hysterectomy, myomectomy, endometriosis surgery, uterine niche repair",
        ],
      },
      {
        title: "Abdominal Wall and Metabolic Surgery",
        points: ["Ventral and inguinal hernia repair, bariatric surgery"],
      },
      {
        title: "Breast Surgery",
        points: ["Nipple-sparing mastectomy"],
      },
      {
        title: "Cardiothoracic Surgery",
        points: [
          "Robotic minimally invasive thoracic procedures, mitral valve repair and replacement, bilateral internal mammary artery CABG",
        ],
      },
      {
        title: "Research That Matters",
        points: [
          "Comparative. Comprehensive. Clinically Actionable.",
          "Our work spans retrospective and prospective studies, real-world evidence generation, consensus development, and comparative effectiveness research evaluating robotic, laparoscopic, and open surgical approaches. Key analytical domains include:",
          "Operative efficiency and workflow optimization",
          "Learning-curve assessment and surgeon proficiency metrics",
          "Peri-operative safety and complication profiling",
          "Oncologic adequacy and margin outcomes",
          "Functional recovery and patient-reported outcomes",
          "Health-economic and value-based endpoints",
        ],
      },
      {
        title: "End-to-End Clinical Research Support",
        points: [
          "In close collaboration with leading robotic surgery centers and key opinion leaders across India, we provide comprehensive clinical research support covering:",
          "Protocol development",
          "Regulatory and ethics submissions",
          "Multicenter site coordination",
          "Robust data management",
          "Advanced statistical analyses",
          "High-quality scientific publications",
        ],
      },
    ],
    missionStatement:
      "Our mission is to enable evidence-based decision-making and support the responsible, data-driven integration of robotic technologies into contemporary surgical practice, ensuring scalability, clinical rigor, and confidence in real-world adoption.",
  },

  "oncology": {
    id: "oncology",
    heading: "Oncology Clinical Research and Precision Oncology Capabilities",
    subHeading: "From Molecules to Medicine. From Evidence to Impact.",
    imgicon: <Research />,
    content: [
      "We deliver end-to-end oncology clinical research capabilities that bridge molecular science and patient-centered clinical evidence. Our expertise spans solid tumors and hematological malignancies, integrating translational research with rigorously designed clinical studies to accelerate meaningful advances in cancer care.",
    ],
    capabilityCards: [
      {
        title: "What We Do Best",
        points: [
          "Science-Driven. Clinically Relevant. Globally Aligned.",
        ],
      },
      {
        title: "Comprehensive Oncology Research",
        points: [
          "Early- and late-phase interventional trials, investigator-initiated studies, and academically led collaborations conducted in strict adherence to international regulatory, ethical, and methodological standards.",
        ],
      },
      {
        title: "Precision Oncology and Genomics",
        points: [
          "Deep expertise in NGS-based genomic profiling, encompassing comprehensive molecular characterization, biomarker discovery and validation, and genotype-phenotype correlation.",
        ],
      },
      {
        title: "Biomarker-Led Trial Design",
        points: ["Enable biomarker-guided protocols, identification of clinically actionable alterations, patient stratification, and real-world assessment of molecularly informed therapies."],
      },
      {
        title: "Real-World Evidence Across Diverse Cohorts",
        points: ["Multicentric programs evaluating novel anticancer therapeutics and outcomes across heterogeneous patient populations—translating data into decisions that matter."],
      },
    ],
    missionStatement:
      "We collaborate with globally recognized academic partners to ensure scientific depth, methodological rigor, and strong translational relevance—transforming complex genomic data into actionable clinical insights and advancing personalized cancer care at scale. Our collaborations with leading institutions, including the University of Oxford and the National Cancer Centre, reflect our commitment to globally aligned, high-impact oncology research that bridges discovery and real-world clinical application.",
  },

  "rwe": {
    id: "rwe",
    heading: "Real-World Evidence (RWE) Scientific Expertise",
    subHeading: "From Real-World Data to Real-World Impact",
    imgicon: <Data />,
    content: [
      "We deliver high-quality, decision-grade real-world evidence through the seamless integration of clinical domain expertise, rigorous epidemiological study design, and advanced biostatistical analytics, supported by scalable, compliant, and audit-ready operational execution. Our approach is rooted in scientific rigor and practical relevance - ensuring that real-world data are transformed into credible evidence capable of informing clinical, regulatory, and policy decisions.",
      "We leverage a broad spectrum of heterogeneous real-world data sources, including hospital electronic medical records, patient case files, procedural and device registries, imaging and laboratory datasets, and longitudinal follow-up records. These data are curated, harmonized, and analyzed using robust methodological frameworks to address bias, confounding, and missingness - enabling reliable estimation of clinical outcomes, safety profiles, utilization patterns, and value-based endpoints.",
    ],
    capabilityCards: [
      {
        title: "Our RWE Capabilities",
        points: [
          "Retrospective and prospective observational studies",
          "Treatment-pattern and outcomes research",
          "Comparative effectiveness analyses",
          "Learning-curve and performance evaluations",
          "Health-economic assessments",
          "Emphasis on transparency, reproducibility, and international reporting standards",
        ],
      },
    ],
    missionStatement:
      "By translating routine clinical practice data into structured, interpretable, and scientifically defensible insights, we help stakeholders bridge the gap between controlled clinical trials and real-world patient care - supporting evidence-based decisions that drive better outcomes, smarter adoption of innovations, and more sustainable healthcare systems.",
  },

  "endocrinology": {
    id: "endocrinology",
    heading: "Endocrinology Therapeutic Expertise",
    subHeading: "Transforming Metabolic Science into Everyday Clinical Impact",
    imgicon: <Clinical />,
    content: [
      "We deliver high-quality endocrine and metabolic evidence by integrating deep clinical expertise, robust clinical research methodology, and real-world clinical insight. Our work reflects how diabetes and endocrine disorders are actually managed in routine practice, supporting evidence-based decision-making across the full lifecycle of therapies- from clinical development to real-world adoption.",
    ],
    capabilityCards: [
      {
        title: "Broad Therapeutic Coverage",
        points: [
          "Experience across diabetes (Type 1 and Type 2), obesity and metabolic syndrome, dyslipidemia, and other hormone-mediated conditions.",
         ],
      },
      {
        title: "Comprehensive Study Designs",
        points: [
          "Support for interventional trials, observational studies, investigator-initiated research, and real-world evidence programs across diverse patient populations.",
        ],
      },
      {
        title: "Clinically Relevant Endpoints",
        points: [
          "Integration of HbA1c, fasting and postprandial glucose, weight and cardiometabolic risk markers, patient-reported outcomes, and long-term safety and effectiveness measures.",
        ],
      },
      {
        title: "Real-World Evidence Generation",
        points: [
          "Use of hospital records, laboratory databases, prescription and treatment logs, and longitudinal follow-up data to capture outcomes beyond controlled trial settings.",
         ],
      },
      {
        title: "Advanced Analytics and Scientific Rigor",
        points: [
          "Application of robust epidemiological and biostatistical frameworks to address variability, adherence, durability of response, and healthcare utilization.",
         ],
      },
      {
        title: "Publication-Ready, Globally Aligned Outputs",
        points: [
        "Evidence developed in alignment with international ethical, regulatory, and reporting standards to support publications, regulatory interactions, and guideline development.",
        ],
      },
    ],
    missionStatement:
      "We aim to translate endocrine and metabolic innovation into sustainable glycemic control, improved treatment adherence, and meaningful long-term patient outcomes - enabling evidence-based therapeutic decisions, improved adherence, and lasting patient impact.",
  },

  "cardiology": {
    id: "cardiology",
    heading: "Cardiology Therapeutic Expertise",
    subHeading: "Evidence That Strengthens Every Beat of Care",
    imgicon: <Clinical />,
    content: [
      "We deliver comprehensive cardiology clinical research expertise that integrates deep cardiovascular science, rigorous study design, and real-world clinical insight. Our work supports the generation of robust, practice-informing evidence across the continuum of cardiovascular care - enabling confident, evidence-based decisions in both interventional and medical cardiology.",
    ],
    capabilityCards: [
  {
    title: "Broad Cardiovascular Coverage",
    points: [
      "Experience across coronary artery disease (including CABG), valvular heart disease, hypertension, and preventive cardiology.",
    ],
  },
  {
    title: "Diverse Study Models",
    points: [
      "Support for early- and late-phase interventional trials, device and procedural evaluations, observational studies, registries, investigator-initiated research, and real-world evidence programs.",
    ],
  },
  {
    title: "Clinically Relevant Endpoints",
    points: [
      "Integration of major adverse cardiovascular events (MACE), survival and rehospitalization outcomes, functional status, imaging and hemodynamic parameters, quality-of-life measures, and long-term safety endpoints.",
    ],
  },
  {
    title: "Comparative Effectiveness and RWE",
    points: [
      "Evaluation of medical therapy, interventional procedures, and surgical approaches using real-world data to inform treatment pathways and optimize patient selection.",
    ],
  },
  {
    title: "Advanced Analytics and Methodological Rigor",
    points: [
      "Application of robust epidemiological methods and advanced biostatistics to address confounding, disease heterogeneity, longitudinal follow-up, and risk adjustment.",
    ],
  },
  {
    title: "End-to-End Research Execution",
    points: [
      "Comprehensive support across protocol development, regulatory and ethics submissions, multicenter site coordination, data management, statistical analysis, and scientific publication.",
    ],
  },
  {
    title: "Globally Aligned, Publication-Ready Outputs",
    points: [
      "Evidence developed in alignment with international ethical, regulatory, and reporting standards to support regulatory interactions, clinical guidelines, and high-impact publications.",
    ],
  },
],
    missionStatement:
      "We aim to translate cardiovascular innovation into measurable clinical benefit - enabling safer interventions, more informed therapy choices, and improved long-term outcomes for patients with heart disease.",
  },

  "vaccines": {
    id: "vaccines",
    heading: "Vaccines and Immunization Research Expertise",
    subHeading: "Advancing Prevention Through Evidence",
    imgicon: <Bag />,
    content: [
      "We deliver comprehensive vaccines and immunization research expertise by integrating immunological science, rigorous clinical development methodologies, and real-world evidence generation. Our work spans the full vaccine lifecycle - from clinical development and regulatory evaluation to post-licensure safety and effectiveness, across both routine and priority infectious diseases, including tuberculosis, cholera, and other endemic and emerging pathogens. We generate high-quality evidence that supports informed policy decisions, clinical practice, and population-level public health impact.",
    ],
    capabilityCards: [
  {
    title: "Broad Vaccine Coverage",
    points: [
      "Experience across prophylactic and therapeutic vaccines, including pediatric, adult, and special-population immunization programs.",
    ],
  },
  {
    title: "Diverse Study Designs",
    points: [
      "Support for early- and late-phase clinical trials, post-marketing surveillance, observational studies, registries, and real-world evidence programs.",
    ],
  },
  {
    title: "Safety, Immunogenicity and Effectiveness Endpoints",
    points: [
      "Evaluation of adverse events, reactogenicity, immune response markers, durability of protection, breakthrough infections, and population-level effectiveness.",
    ],
  },
  {
    title: "Real-World Evidence",
    points: [
      "Use of healthcare records, immunization registries, surveillance systems, and longitudinal follow-up data to assess vaccine performance beyond controlled trial environments.",
    ],
  },
  {
    title: "Advanced Epidemiology and Biostatistics",
    points: [
      "Application of robust epidemiological frameworks to address confounding, bias, and population heterogeneity, enabling reliable assessment of benefit–risk profiles.",
    ],
  },
  {
    title: "Public Health and Policy-Relevant Outputs",
    points: [
      "Evidence generation aligned with national and international immunization guidelines to support regulatory submissions, programmatic decisions, and health system planning.",
    ],
  },
  {
    title: "End-to-End Research Execution",
    points: [
      "Comprehensive support across study design, regulatory and ethics submissions, site and community coordination, data management, statistical analysis, and scientific dissemination.",
    ],
  },
],
    missionStatement:
      "We aim to generate trusted, high-quality evidence that strengthens immunization strategies, builds public confidence, and protects populations through science-driven prevention.",
  },

  "others": {
    id: "others",
    heading: "Multi-Therapeutic Clinical Research Expertise",
    subHeading:
      "Hands-on experience across a wide spectrum of therapeutic areas.",
    imgicon: <Fsp />,
    content: [
      "We bring hands-on clinical research experience across a wide spectrum of therapeutic areas, enabling the generation of high-quality, practice-relevant evidence across complex and diverse disease settings. Our multidisciplinary expertise allows us to design and execute studies that are scientifically rigorous, operationally efficient, and closely aligned with real-world clinical care.",
    ],
    capabilityCards: [
  {
    title: "Psychiatry",
    points: [
      "Research across mood disorders, psychotic disorders, and neurobehavioral conditions, with emphasis on safety, treatment response, and patient-reported outcomes.",
    ],
  },
  {
    title: "Critical Care",
    points: [
      "Evidence generation in high-acuity settings, including ICU workflows, peri-interventional outcomes, safety endpoints, and resource utilization.",
    ],
  },
  {
    title: "Ophthalmology",
    points: [
      "Clinical studies evaluating medical and procedural interventions, visual outcomes, and long-term disease progression.",
    ],
  },
  {
    title: "Urology",
    points: [
      "Experience across benign and malignant urologic conditions, including procedural outcomes, functional recovery, and quality-of-life assessments.",
    ],
  },
  {
    title: "Additional Specialties",
    points: [
      "Support across multiple allied medical and surgical domains, adapting study designs to specialty-specific clinical pathways.",
    ],
  },
],
    missionStatement:
      "Across all therapeutic areas, we support interventional trials, observational studies, investigator-initiated research, and real-world evidence programs. Our focus remains consistent: to translate routine clinical practice into robust, publication-ready evidence that informs clinical decision-making, regulatory discussions, and improved patient care.",
  },
};
