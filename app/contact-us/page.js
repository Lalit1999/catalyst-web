"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Title, ContactForm } from "@comps";
import NewCard from "./newcard";

const defaultFaqs = [
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
];


export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className={styles.main}>
      {/* HEADER SECTION  */}

      <Title
        heading="Contact Us"
        desc="We'd love to hear from you. Reach out to our team anytime."
      />

      {/* FORM SECTION  */}

      {/* <div className={styles.contactWrapper}>
        <div className={styles.leftSection}>
          <NewCard />
        </div> */}

        <div className={styles.rightSection}>
          <ContactForm />
        </div>
      {/* </div> */}

      {/* FAQ SECTION */}

      {/* <div className={styles.faqBlock}>
        <div className={styles.faqBlockHead}>
          <h2>Frequently Asked Questions</h2>
          <p className={styles.subText}>Common questions about our services.</p>
        </div>

        <div className={styles.faqList}>
          {defaultFaqs?.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={styles.faqItem}>
                <button
                  className={styles.faqSummary}
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{faq.question}</span>
                  <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`}
                >
                  <div className={styles.faqAnswerInner}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </main>
  );
}
