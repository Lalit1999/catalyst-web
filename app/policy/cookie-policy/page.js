"use client";
import React from "react";
import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import { serviceDataObject, therapeuticExpertiseData } from "@data";

export default function Page() {
  const allServices = Object.values(serviceDataObject);
  const alltherapyData = Object.values(therapeuticExpertiseData);
  return (
    <main className={styles.main}>
      <Title
        breadIn={"Cookie Policy"}
        bread={"Cookie Policy"}
        heading={"Cookie Policy"}
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.leftColumn}>
            <div className={styles.privacyhead}>
              <h1 className={styles.paragraph}>
               Catalyst Clinical Services Pvt. Ltd. uses cookies and similar tracking technologies to enhance user experience, analyze website performance, and improve our services. Cookies are small data files stored on your device when you visit our website.
              </h1>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>What Are Cookies</h1>
              <h1 className={styles.paragraph}>
               Cookies are text files that help websites recognize your device and remember certain information about your visit, such as preferences and settings, to provide a smoother and more personalized browsing experience.
              </h1>
            </div>
           
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>How We Use Cookies</h1>
              <h1 className={styles.paragraph}>
                We use cookies for the following purposes:
              </h1>
              <div className={styles.policyList}>
                <ul>
                  <li className={styles.paragraph}>
                    To ensure the website functions properly and securely
                  </li>
                  <li className={styles.paragraph}>
                    To understand how users interact with our website
                  </li>
                  <li className={styles.paragraph}>
                    To improve website performance and content
                  </li>
                  <li className={styles.paragraph}>
                    To remember user preferences and settings
                  </li>
                  <li className={styles.paragraph}>
                    To analyze traffic and usage patterns
                  </li>
                </ul>
              </div>
            </div>
             <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Types of Cookies We Use</h1>

              <div className={styles.policyList}>
                <ul>
                  <li className={styles.paragraph}>
                    <span className={styles.headpara}>Essential Cookies:</span> Required for basic website functionality and cannot be disabled.
                  </li>
                  <li className={styles.paragraph}>
                    <span className={styles.headpara}>Performance & Analytics Cookies:</span> Help us analyze website traffic and user behavior to improve our services.
                  </li>
                  <li className={styles.paragraph}>
                    <span className={styles.headpara}>Functional Cookies:</span> Enable enhanced functionality and personalization.
                  </li>
                  <li className={styles.paragraph}>
                    <span className={styles.headpara}>Third-Party Cookies:</span> May be set by external service providers such as analytics or marketing platforms.
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Third-Party Services</h1>
              <h1 className={styles.paragraph}>
                Some cookies may be placed by third-party services that appear on our website. These third parties may collect information about your online activities over time and across different websites in accordance with their respective privacy policies.
              </h1>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Managing Cookies</h1>
              <h1 className={styles.paragraph}>
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality and performance of certain features on our website.
              </h1>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Consent</h1>
              <h1 className={styles.paragraph}>
                By continuing to use our website, you consent to the use of cookies in accordance with this Cookie Policy. Where required by law, we will request your explicit consent before placing non-essential cookies on your device.
              </h1>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Updates to This Policy</h1>
              <h1 className={styles.paragraph}>
               Catalyst Clinical Services Pvt. Ltd. may update this Cookie Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective immediately upon posting.
              </h1>
            </div>
            <div className={styles.privacyhead}>
              <h1 className={styles.heading}>Contact Us</h1>
              <h1 className={styles.paragraph}>
               If you have any questions about this Cookie Policy or our use of cookies, please contact us through the details provided on our website.
              </h1>
              
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <RightPanel  variants={['therapeutic', 'clinical', 'services']} />
      </div>
    </main>
  );
}
