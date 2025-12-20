import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceArray } from "../../../data/serviceData";
import styles from "./page.module.css";
import { Ortho } from "@images";
import { BagIcon, CheckIcon, ClockCircle, FlaskIcon, GlobeIcon, MoneyIcon, StarCircle, UserCircle, UserIcon } from "@icons";
import Link from "next/link";

const quickLinks = [
  { text: "What we do", icon: <BagIcon /> },
  { text: "Who are we", icon: <GlobeIcon /> },
  { text: "Research Publications", icon: <UserIcon /> },
  { text: "Therapeutic Expertise", icon: <FlaskIcon /> },
  { text: "Training Programs", icon: <MoneyIcon /> },
];

const featureCards = [
  {
    title: "Focused Customer",
    color: "#E1F1F8",
    icon: "user",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula",
  },
  {
    title: "24/7 Care",
    color: "#FADDE1",
    icon: "star",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula",
  },
  {
    title: "Timely Care",
    color: "#F9E6A8",
    icon: "clock",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula",
  },
];

const checkListItems = [
  "Pellentesque elementum purus nec venenatis hendrerit. Praesent eu ex sollicitudin.",
  "Aliquam erat volutpat. Nunc consequat mattis egestas. Quisque a elit id ipsum ultricies convallis.",
  "Sed dignissim in ex sit amet imperdiet. Pellentesque vulputate, justo sit amet.",
];

const expertiseList = [
  "1. Cartilage Restoration",
  "2. Avascular Necrosis",
  "3. Carpal Tunnel Syndrome",
  "4. Chronic Ligament instability",
  "5. Developmental Dysplasia Of The Hip (DDH)",
  "6. Dislocations",
  "7. Forefoot And Toe Deformities",
  "8. Femoroacetabular Impingement (FAI)",
];

const faqList = [
    {
      question: "Can I know the doctors’ credentials?",
      answer: "Yes, absolutely. We provide full profiles, including board certifications, education, and years of experience for all our specialists before you book."
    },
    {
      question: "If I’m taking a companion, when can he or she travel?",
      answer: "Your companion can travel with you at any time. We can assist with flight and accommodation arrangements for both of you to ensure a comfortable trip."
    },
    {
      question: "What happens if I need follow-up?",
      answer: "We arrange follow-up video consultations with your doctor. If physical intervention is needed, we coordinate with local specialists in your home city."
    },
    {
      question: "What Does Medical Tourism Corporation charge?",
      answer: "Our coordination services are completely free for patients. You pay directly to the hospital or clinic for your medical procedures."
    }
];


export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;

  const urlId = resolvedParams.id;

  const idToFind = Number(urlId);
  const service = serviceArray.find((item) => item.id === idToFind);

  if (service) {
    console.log("✅ Found Service:", service.title);
  } else {
    console.error("❌ Service NOT FOUND.");
  }

  if (!service) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      {/* Inside your ServiceDetailPage return statement */}

      <div className={styles.downbarTop}>
        {/* Wrapper to keep content aligned in the center of the screen */}
        <div className={styles.contentContainer}>
          {/* Breadcrumbs */}
          <div className={styles.downHead}>
            <h1 className={styles.main_bread}>Home</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>Services</h1>
            <h1 className={styles.main_bread}>&rarr;</h1>
            <h1 className={styles.main_bread}>{service.title}</h1>
          </div>

          {/* Main Hero Content */}
          <div className={styles.head}>
            {/* Left Side: Title & Button */}
            <div className={styles.head_one}>
              <h1 className={styles.titleLarge}>{service.title}</h1>
              <button className={styles.enquiryBtn}>Enquiry</button>
            </div>

            {/* Right Side: Image with white border */}
            <div className={styles.head_two}>
              {service.img && (
                <Image
                  src={Ortho}
                  alt={service.title}
                  width={400}
                  height={260}
                  className={styles.heroImg}
                />
              )}
            </div>
            {/* main content start  from here */}
          </div>
        </div>
      </div>
      {/* ****************** */}
      <section className={styles.detailsSection}>
        <div className={styles.detailsContainer}>
          {/* LEFT COLUMN: Main Content */}
          <div className={styles.leftColumn}>
            {/* Large Body Image */}
            {service.img && (
              <div className={styles.bodyImageContainer}>
                <Image
                  src={service.img}
                  alt="Detail view"
                  fill
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </div>
            )}

            <h2 className={styles.heading}>Our Approach to {service.title}</h2>
            <p className={styles.paragraph}>
              From trouble sleeping to work stress to anxiety to depression, we
              all have difficulty managing our emotions at times. It’s part of
              being human. And addressing these issues is a vital part of what
              we do as a primary care practice, because your emotional
              well-being is essential to your overall health and wellness.
            </p>
            <p className={styles.paragraph}>
              We’ve redesigned the doctor’s office experience to fit your life,
              put you at ease, and treat you as a whole person. We create safe
              and inviting spaces, ask meaningful questions, give you time to
              talk, and listen without judgment. Then we work with you on a plan
              to help you feel your best — whether you want to sleep better,
              feel calmer, worry less, or get a better handle on your mood.
            </p>

            <h2 className={styles.heading}>Primary Care</h2>
            <p className={styles.paragraph}>
              To continue shedding a light on mental health issues, we teamed up
              with the award-winning musicians from Bear and a Banjo to create a
              song showing people they’re not alone.
            </p>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className={styles.rightColumn}>
            {/* Services Widget */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCard_round} >
                <div className={styles.sidebarHeader}>Services</div>
              </div>
              <ul className={styles.sidebarList}>
                {serviceArray.map((item) => (
                  <li key={item.id} className={styles.sidebarItem}>
                    <Link
                      href={`/what-we-do/${item.id}`}
                      className={styles.sidebarLink}
                    >
                      {item.title.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Widget */}
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarCard_round} ><div className={styles.sidebarHeader}>Quick Links</div></div>
              <ul className={styles.sidebarList}>
                {quickLinks.map((link, idx) => (
                  <li key={idx} className={styles.sidebarItem}>
                    <div className={styles.quickLinkRow}>
                      <span className={styles.quickLinkIcon}>{link.icon}</span>
                      <span className={styles.quickLinkText}>{link.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* ***************************** */}
 <section className={styles.extraSection}>
                <div className={styles.extraContainer}>
                    
                    {/* 1. THREE COLORED CARDS */}
                    <div className={styles.featureGrid}>
                        {featureCards.map((card, idx) => (
                            <div key={idx} className={styles.featureCard} style={{ backgroundColor: card.color }}>
                                <div className={styles.featureIcon}>
                                    {card.icon === 'user' && <UserCircle />}
                                    {card.icon === 'star' && <StarCircle />}
                                    {card.icon === 'clock' && <ClockCircle />}
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 2. CHECKLIST CARD */}
                    <div className={styles.checkCard}>
                        {checkListItems.map((item, idx) => (
                            <div key={idx} className={styles.checkItem}>
                                <CheckIcon />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.separator}></div>

                    {/* 3. INDUSTRY EXPERTISE */}
                    <div className={styles.expertiseBlock}>
                        <h2>Our Industry Expertise</h2>
                        <p className={styles.subText}>
                            You know your body better than anyone, so when aches, pains or sprains make your life more challenging, 
                            it’s a good idea to seek help from specialists.
                        </p>
                        
                        <div className={styles.expertiseGrid}>
                            {expertiseList.map((item, idx) => (
                                <p key={idx} className={styles.expertiseItem}>{item}</p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.separator}></div>

                    {/* 4. FAQ SECTION */}
                    <div className={styles.faqBlock}>
                <h2>FAQs About The Service</h2>
                <p className={styles.subText}>
                    There are many questions about the service, we have selected frequently asked questions about this service.
                </p>

                <div className={styles.faqList}>
                    {faqList.map((faq, idx) => (
                        <details key={idx} className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>
                                <span className={styles.faqQuestion}>{faq.question}</span>
                                {/* Text-based Icon */}
                                <span className={styles.faqIcon}>+</span>
                            </summary>
                            <div className={styles.faqAnswer}>
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

                </div>
           </section>
    </main>
  );
}
