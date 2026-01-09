import { N1 } from "@icons";
import { Neurology} from "@images"; // Ensure about1 is imported if needed for headers

// 1. Defaults (The content that was previously hardcoded in your component)
const defaultApproach = [
    "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It’s part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
    "We’ve redesigned the doctor’s office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment."
];

const defaultPrimaryCare = "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they’re not alone.";

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

// 2. The Main Data Object
export const clinicalServicesData = {
    "study-design-startup": {
        id: "study-design-startup",
        heading: "Study Design & Startup",
        subHeading: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto...",
        img: Neurology,
        imgicon: N1,
        // Dynamic Fields
        approachContent: defaultApproach,
        primaryCareText: defaultPrimaryCare,
        features: defaultFeatures,
        checkList: defaultCheckList,
        expertiseList: defaultExpertise,
        faqList: defaultFaqs
    },
    "patient-recruitment": {
        id: "patient-recruitment",
        heading: "Patient Recruitment",
        subHeading: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto...",
        img: Neurology,
        imgicon: N1,
        approachContent: defaultApproach,
        primaryCareText: defaultPrimaryCare,
        features: defaultFeatures,
        checkList: defaultCheckList,
        expertiseList: defaultExpertise,
        faqList: defaultFaqs
    },
    "project-management": {
        id: "project-management",
        heading: "Project Management",
        subHeading: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto...",
        img: Neurology,
        imgicon: N1,
        approachContent: defaultApproach,
        primaryCareText: defaultPrimaryCare,
        features: defaultFeatures,
        checkList: defaultCheckList,
        expertiseList: defaultExpertise,
        faqList: defaultFaqs
    },
    "clinical-trial-monitoring": {
        id: "clinical-trial-monitoring",
        heading: "Clinical Trial Monitoring",
        subHeading: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto...",
        img: Neurology,
        imgicon: N1,
        approachContent: defaultApproach,
        primaryCareText: defaultPrimaryCare,
        features: defaultFeatures,
        checkList: defaultCheckList,
        expertiseList: defaultExpertise,
        faqList: defaultFaqs
    },
    "endpoint-adjucation": {
        // Note: You had id: "data-management-biostatistics" in your prompt, I changed it to match the key for safety
        id: "endpoint-adjucation", 
        heading: "Endpoint Adjucation",
        subHeading: "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto...",
        img: Neurology,
        imgicon: N1,
        approachContent: defaultApproach,
        primaryCareText: defaultPrimaryCare,
        features: defaultFeatures,
        checkList: defaultCheckList,
        expertiseList: defaultExpertise,
        faqList: defaultFaqs
    },
};