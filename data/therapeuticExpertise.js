import { C1, D1, H1, N1, O1, P1 } from "@icons";
import {
  Cardiomyopathy,
  DentalClinic,
  Hematology,
  Neurology,
  Orthopedics,
  Pharmacology,
} from "@images";

const therapeuticExpertiseData = {
  "robotic-assisted-surgery": {
    id: "robotic-assisted-surgery",
    heading: "Robotic Assisted Surgery",
    subHeading:
      "Our physiotherapy services focus on restoring movement, improving strength, and reducing pain through personalized exercise programs and hands-on therapy.",
    img: DentalClinic,
    imgicon: D1,
  },

  "oncology": {
    id: "oncology",
    heading: "Oncology",
    subHeading:
      "We help patients regain independence in daily activities by improving motor skills, coordination, and functional abilities tailored to individual needs.",
    img: Pharmacology,
    imgicon: P1,
  },

  "endocrinology": {
    id: "endocrinology",
    heading: "Endocrinology",
    subHeading:
      "Focused rehabilitation programs for bones, joints, and muscles to improve mobility and support long-term recovery after injuries or surgery.",
    img: Orthopedics,
    imgicon: O1,
  },

  "cardiology": {
    id: "cardiology",
    heading: "Cardiology",
    subHeading:
      "Specialized therapeutic care supporting patients with blood-related conditions through monitoring, recovery-focused care, and lifestyle guidance.",
    img: Hematology,
    imgicon: H1,
  },

  "vaccines": {
    id: "vaccines",
    heading: "Vaccines",
    subHeading:
      "Therapeutic programs designed to support recovery and functional improvement for patients with neurological conditions and nervous system disorders.",
    img: Neurology,
    imgicon: N1,
  },

  "others": {
    id: "others",
    heading: "Others",
    subHeading:
      "Structured rehabilitation and therapy programs aimed at improving heart health, endurance, and overall well-being after cardiac conditions.",
    img: Cardiomyopathy,
    imgicon: C1,
  },
};

export default therapeuticExpertiseData;
