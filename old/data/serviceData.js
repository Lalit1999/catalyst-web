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
  extra : "Spanning the full clinical development continuum, from early-phase investigations to post-marketing evidence generation, our work integrates strategic oversight, regulatory compliance, and operational excellence. Through flexible engagement models, ranging from bespoke solutions to fully integrated services, we enable sponsors to optimize development pathways, manage complexity and risk, and advance therapeutic and technological innovations with confidence, precision, and integrity.",
};

// 4. The Data Object
export const serviceDataObject = {
  "clinical-development-services": {
    id: "clinical-development-services",
    heading: "Clinical Development Services",
    subHeading:
      "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
    imgicon: <Clinical />,
    approachContent: [
      "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It's part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
      "We've redesigned the doctor's office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment. Then we work with you on a plan to help you feel your best — whether you want to sleep better, feel calmer, worry less, or get a better handle on your mood.",
    ],
    primaryCareText:
      "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they're not alone.",
    features: [
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
    ],
    checkList: [
      "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
      "Aliquam erat volutpat. Nunc consequat mattis egestas.",
      "Sed dignissim in ex sit amet imperdiet.",
    ],
    expertiseList: [
      "1. Cartilage Restoration",
      "2. Avascular Necrosis",
      "3. Carpal Tunnel Syndrome",
      "4. Chronic Ligament instability",
      "5. Developmental Dysplasia Of The Hip (DDH)",
      "6. Dislocations",
      "7. Forefoot And Toe Deformities",
      "8. Femoroacetabular Impingement (FAI)",
    ],
    faqList: [
      {
        question: "Can I know the doctors' credentials?",
        answer:
          "Yes, absolutely. We provide full profiles, including board certifications and education.",
      },
      {
        question: "If I'm taking a companion, when can he or she travel?",
        answer:
          "Your companion can travel with you at any time. We assist with all arrangements.",
      },
      {
        question: "What happens if I need follow-up?",
        answer: "We arrange follow-up video consultations with your doctor.",
      },
      {
        question: "What Does Medical Tourism Corporation charge?",
        answer: "Our coordination services are completely free for patients.",
      },
    ],
  },
  fsp: {
    id: "fsp",
    heading: "FSP",
    subHeading:
      "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
    imgicon: <Fsp />,
    approachContent: [
      "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It's part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
      "We've redesigned the doctor's office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment. Then we work with you on a plan to help you feel your best — whether you want to sleep better, feel calmer, worry less, or get a better handle on your mood.",
    ],
    primaryCareText:
      "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they're not alone.",
    features: [
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
    ],
    checkList: [
      "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
      "Aliquam erat volutpat. Nunc consequat mattis egestas.",
      "Sed dignissim in ex sit amet imperdiet.",
    ],
    expertiseList: [
      "1. Cartilage Restoration",
      "2. Avascular Necrosis",
      "3. Carpal Tunnel Syndrome",
      "4. Chronic Ligament instability",
      "5. Developmental Dysplasia Of The Hip (DDH)",
      "6. Dislocations",
      "7. Forefoot And Toe Deformities",
      "8. Femoroacetabular Impingement (FAI)",
    ],
    faqList: [
      {
        question: "Can I know the doctors' credentials?",
        answer:
          "Yes, absolutely. We provide full profiles, including board certifications and education.",
      },
      {
        question: "If I'm taking a companion, when can he or she travel?",
        answer:
          "Your companion can travel with you at any time. We assist with all arrangements.",
      },
      {
        question: "What happens if I need follow-up?",
        answer: "We arrange follow-up video consultations with your doctor.",
      },
      {
        question: "What Does Medical Tourism Corporation charge?",
        answer: "Our coordination services are completely free for patients.",
      },
    ],
  },
  "medical-writing": {
    id: "medical-writing",
    heading: "Medical Writing",
    subHeading:
      "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
    imgicon: <Research />,
   approachContent: [
      "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It's part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
      "We've redesigned the doctor's office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment. Then we work with you on a plan to help you feel your best — whether you want to sleep better, feel calmer, worry less, or get a better handle on your mood.",
    ],
    primaryCareText:
      "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they're not alone.",
    features: [
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
    ],
    checkList: [
      "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
      "Aliquam erat volutpat. Nunc consequat mattis egestas.",
      "Sed dignissim in ex sit amet imperdiet.",
    ],
    expertiseList: [
      "1. Cartilage Restoration",
      "2. Avascular Necrosis",
      "3. Carpal Tunnel Syndrome",
      "4. Chronic Ligament instability",
      "5. Developmental Dysplasia Of The Hip (DDH)",
      "6. Dislocations",
      "7. Forefoot And Toe Deformities",
      "8. Femoroacetabular Impingement (FAI)",
    ],
    faqList: [
      {
        question: "Can I know the doctors' credentials?",
        answer:
          "Yes, absolutely. We provide full profiles, including board certifications and education.",
      },
      {
        question: "If I'm taking a companion, when can he or she travel?",
        answer:
          "Your companion can travel with you at any time. We assist with all arrangements.",
      },
      {
        question: "What happens if I need follow-up?",
        answer: "We arrange follow-up video consultations with your doctor.",
      },
      {
        question: "What Does Medical Tourism Corporation charge?",
        answer: "Our coordination services are completely free for patients.",
      },
    ],
  },
  "regulatory-consulting": {
    id: "regulatory-consulting",
    heading: "Regulatory Consulting",
    subHeading:
      "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
    imgicon: <Bag />,
    approachContent: [
      "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It's part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
      "We've redesigned the doctor's office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment. Then we work with you on a plan to help you feel your best — whether you want to sleep better, feel calmer, worry less, or get a better handle on your mood.",
    ],
    primaryCareText:
      "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they're not alone.",
    features: [
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
    ],
    checkList: [
      "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
      "Aliquam erat volutpat. Nunc consequat mattis egestas.",
      "Sed dignissim in ex sit amet imperdiet.",
    ],
    expertiseList: [
      "1. Cartilage Restoration",
      "2. Avascular Necrosis",
      "3. Carpal Tunnel Syndrome",
      "4. Chronic Ligament instability",
      "5. Developmental Dysplasia Of The Hip (DDH)",
      "6. Dislocations",
      "7. Forefoot And Toe Deformities",
      "8. Femoroacetabular Impingement (FAI)",
    ],
    faqList: [
      {
        question: "Can I know the doctors' credentials?",
        answer:
          "Yes, absolutely. We provide full profiles, including board certifications and education.",
      },
      {
        question: "If I'm taking a companion, when can he or she travel?",
        answer:
          "Your companion can travel with you at any time. We assist with all arrangements.",
      },
      {
        question: "What happens if I need follow-up?",
        answer: "We arrange follow-up video consultations with your doctor.",
      },
      {
        question: "What Does Medical Tourism Corporation charge?",
        answer: "Our coordination services are completely free for patients.",
      },
    ],
  },
  "data-management-biostatistics": {
    id: "data-management-biostatistics",
    heading: "Data Management & Biostatistics",
    subHeading:
      "Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.Medicenter offers comprehensive dental care for both adults and children from our office at Toronto.",
    imgicon: <Data />,
    approachContent: [
      "From trouble sleeping to work stress to anxiety to depression, we all have difficulty managing our emotions at times. It's part of being human. And addressing these issues is a vital part of what we do as a primary care practice, because your emotional well-being is essential to your overall health and wellness.",
      "We've redesigned the doctor's office experience to fit your life, put you at ease, and treat you as a whole person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen without judgment. Then we work with you on a plan to help you feel your best — whether you want to sleep better, feel calmer, worry less, or get a better handle on your mood.",
    ],
    primaryCareText:
      "To continue shedding a light on mental health issues, we teamed up with the award-winning musicians from Bear and a Banjo to create a song showing people they're not alone.",
    features: [
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
    ],
    checkList: [
      "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
      "Aliquam erat volutpat. Nunc consequat mattis egestas.",
      "Sed dignissim in ex sit amet imperdiet.",
    ],
    expertiseList: [
      "1. Cartilage Restoration",
      "2. Avascular Necrosis",
      "3. Carpal Tunnel Syndrome",
      "4. Chronic Ligament instability",
      "5. Developmental Dysplasia Of The Hip (DDH)",
      "6. Dislocations",
      "7. Forefoot And Toe Deformities",
      "8. Femoroacetabular Impingement (FAI)",
    ],
    faqList: [
      {
        question: "Can I know the doctors' credentials?",
        answer:
          "Yes, absolutely. We provide full profiles, including board certifications and education.",
      },
      {
        question: "If I'm taking a companion, when can he or she travel?",
        answer:
          "Your companion can travel with you at any time. We assist with all arrangements.",
      },
      {
        question: "What happens if I need follow-up?",
        answer: "We arrange follow-up video consultations with your doctor.",
      },
      {
        question: "What Does Medical Tourism Corporation charge?",
        answer: "Our coordination services are completely free for patients.",
      },
    ],
  },
};
