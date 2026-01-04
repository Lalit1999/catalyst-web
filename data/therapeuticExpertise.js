import { C1, D1, H1, N1, O1, P1 } from "@icons";
import {
  about1, // Ensure this is imported
  Cardiomyopathy,
  DentalClinic,
  Hematology,
  Neurology,
  Orthopedics,
  Pharmacology,
} from "@images";


// 2. Page Header Data (The text you requested)
export const therapeuticPageHeader = {
    bread: 'Therapeutic Expertise',
    heading: 'Therapeutic Expertise by Catalyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum bibendum dignissim. Sed quam eros, accumsan in velit a, placerat mollis nunc. Nulla at purus non leo condimentum pellentesque ut a mauris. Vivamus ut euismod nisi, quis laoreet nisl. Suspendi',
    image: about1, 
};

// 3. Default/Dummy Data for Content Arrays
const defaultFeatures = [
  {
    title: "Focused Customer",
    color: "var(--thodaBlue)",
    icon: "user",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "24/7 Care",
    color: "var(--thodaPink)",
    icon: "star",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Timely Care",
    color: "var(--thodaYellow)",
    icon: "clock",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const defaultCheckList = [
  "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
  "Aliquam erat volutpat. Nunc consequat mattis egestas.",
  "Sed dignissim in ex sit amet imperdiet.",
];

const defaultExpertise = [
  "1. Cartilage Restoration",
  "2. Avascular Necrosis",
  "3. Carpal Tunnel Syndrome",
  "4. Chronic Ligament instability",
  "5. Developmental Dysplasia Of The Hip (DDH)",
  "6. Dislocations",
  "7. Forefoot And Toe Deformities",
  "8. Femoroacetabular Impingement (FAI)",
];

const defaultFaqs = [
  {
    question: "Can I know the doctors’ credentials?",
    answer: "Yes, absolutely. We provide full profiles, including board certifications and education.",
  },
  {
    question: "If I’m taking a companion, when can he or she travel?",
    answer: "Your companion can travel with you at any time. We assist with all arrangements.",
  },
  {
    question: "What happens if I need follow-up?",
    answer: "We arrange follow-up video consultations with your doctor.",
  },
  {
    question: "What Does Medical Tourism Corporation charge?",
    answer: "Our coordination services are completely free for patients.",
  },
];

const defaultApproach = [
    "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It’s part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
    "We’ve redesigned the doctor’s office experience to fit your life, put you at ease, and treat you as a whole person."
];

const defaultPrimaryCare = "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they’re not alone.";

// 4. Main Data Object
export const therapeuticExpertiseData = {
  "robotic-assisted-surgery": {
    id: "robotic-assisted-surgery",
    heading: "Robotic Assisted Surgery",
    subHeading: "Our physiotherapy services focus on restoring movement, improving strength, and reducing pain through personalized exercise programs and hands-on therapy.",
    img: DentalClinic,
    imgicon: D1,
    // Dynamic Arrays
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "oncology": {
    id: "oncology",
    heading: "Oncology",
    subHeading: "We help patients regain independence in daily activities by improving motor skills, coordination, and functional abilities tailored to individual needs.",
    img: Pharmacology,
    imgicon: P1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "rwe-scientific-expertise": {
    id: "rwe-scientific-expertise",
    heading: "RWE Scientific Expertise",
    subHeading: "We help patients regain independence in daily activities by improving motor skills, coordination, and functional abilities tailored to individual needs.",
    img: Pharmacology,
    imgicon: P1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "endocrinology": {
    id: "endocrinology",
    heading: "Endocrinology",
    subHeading: "Focused rehabilitation programs for bones, joints, and muscles to improve mobility and support long-term recovery after injuries or surgery.",
    img: Orthopedics,
    imgicon: O1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "cardiology": {
    id: "cardiology",
    heading: "Cardiology",
    subHeading: "Specialized therapeutic care supporting patients with blood-related conditions through monitoring, recovery-focused care, and lifestyle guidance.",
    img: Hematology,
    imgicon: H1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "vaccines": {
    id: "vaccines",
    heading: "Vaccines",
    subHeading: "Therapeutic programs designed to support recovery and functional improvement for patients with neurological conditions and nervous system disorders.",
    img: Neurology,
    imgicon: N1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },

  "others": {
    id: "others",
    heading: "Others",
    subHeading: "Structured rehabilitation and therapy programs aimed at improving heart health, endurance, and overall well-being after cardiac conditions.",
    img: Cardiomyopathy,
    imgicon: C1,
    approachContent: defaultApproach,
    primaryCareText: defaultPrimaryCare,
    features: defaultFeatures,
    checkList: defaultCheckList,
    expertiseList: defaultExpertise,
    faqList: defaultFaqs
  },
};