'use client'

import AboutTitleSection from './AboutTitleSection';
import AboutContentSection from './AboutContentSection';
import AboutGridSection from './AboutGridSection';
import AboutVideoSection from './AboutVideoSection';
// import ContactForm from './ContactForm';
import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <AboutTitleSection />
      <AboutGridSection />
      <AboutContentSection />
      <AboutVideoSection />
      {/* <ContactForm /> */}
    </main>
  );
}
