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
  "physiotherapy": {
    id: "physiotherapy",
    heading: "Physiotherapy",
    subHeading:
      "Our physiotherapy services focus on restoring movement, improving strength, and reducing pain through personalized exercise programs and hands-on therapy.",
    img: DentalClinic,
    imgicon: D1,
  },

  "occupational-therapy": {
    id: "occupational-therapy",
    heading: "Occupational Therapy",
    subHeading:
      "We help patients regain independence in daily activities by improving motor skills, coordination, and functional abilities tailored to individual needs.",
    img: Pharmacology,
    imgicon: P1,
  },

  "orthopedic-rehabilitation": {
    id: "orthopedic-rehabilitation",
    heading: "Orthopedic Rehabilitation",
    subHeading:
      "Focused rehabilitation programs for bones, joints, and muscles to improve mobility and support long-term recovery after injuries or surgery.",
    img: Orthopedics,
    imgicon: O1,
  },

  "hematology-therapy": {
    id: "hematology-therapy",
    heading: "Hematology Therapy Support",
    subHeading:
      "Specialized therapeutic care supporting patients with blood-related conditions through monitoring, recovery-focused care, and lifestyle guidance.",
    img: Hematology,
    imgicon: H1,
  },

  "neurological-rehabilitation": {
    id: "neurological-rehabilitation",
    heading: "Neurological Rehabilitation",
    subHeading:
      "Therapeutic programs designed to support recovery and functional improvement for patients with neurological conditions and nervous system disorders.",
    img: Neurology,
    imgicon: N1,
  },

  "cardiac-rehabilitation": {
    id: "cardiac-rehabilitation",
    heading: "Cardiac Rehabilitation",
    subHeading:
      "Structured rehabilitation and therapy programs aimed at improving heart health, endurance, and overall well-being after cardiac conditions.",
    img: Cardiomyopathy,
    imgicon: C1,
  },
};

export default therapeuticExpertiseData;
