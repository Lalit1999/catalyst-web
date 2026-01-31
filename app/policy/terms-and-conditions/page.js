"use client";
import React from "react";
import styles from "./page.module.css";
// Assuming '@comps' points to the correct location for your shared components
import { RightPanel, Title } from "@comps"; 


export default function TermsAndConditionsPage() {

  return (
    <main className={styles.main}>
      <Title
        heading={"Terms and Conditions"}
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          {/* 1. Introduction and Acceptance */}
          <div className={styles.privacyhead}>
            <h1 className={styles.paragraph}>
              Welcome to Catalyst Clinical Services Pvt. Ltd. These Terms and Conditions govern your use of the 
              <a
                href="https://www.catalystclinicalservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.space}
              >
                www.catalystclinicalservices.com 
              </a>
              website and the services offered therein. By accessing or using our website, you agree to be bound by these Terms and all policies incorporated herein by reference.
            </h1>
            <h1 className={styles.paragraph}>
              If you disagree with any part of the terms, then you may not access the Service.
            </h1>
          </div>
          
          {/* 2. Use of the Website */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Use of the Website</h1>
            <h1 className={styles.paragraph}>
              You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Service.
            </h1>
          </div>
          
          {/* 3. Intellectual Property Rights */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Intellectual Property</h1>
            <h1 className={styles.paragraph}>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Catalyst Clinical Services Pvt. Ltd. and its licensors. Our trademarks, trade dress, and intellectual property may not be used in connection with any product or service without the prior written consent of the Company.
            </h1>
          </div>

          {/* 4. User Obligations */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>User Obligations and Content</h1>
            <h1 className={styles.paragraph}>
              When submitting content (such as comments, inquiries, or form submissions) through the Service, you represent and warrant that:
            </h1>
            <div className={styles.policyList}>
              <ul>
                <li className={styles.paragraph}>You own the content submitted or have the right to grant us the license to use it.</li>
                <li className={styles.paragraph}>The content is accurate, complete, and does not violate the rights of any third party.</li>
                <li className={styles.paragraph}>The content does not contain viruses or malicious code.</li>
              </ul>
            </div>
          </div>
          
          {/* 5. Limitation of Liability - MODIFIED TO USE BULLET POINTS */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Limitation of Liability</h1>
            <h1 className={styles.paragraph}>
              In no event shall Catalyst Clinical Services Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </h1>
            <div className={styles.policyList}>
              <ul>
                <li className={styles.paragraph}>Your access to or use of or inability to access or use the Service;</li>
                <li className={styles.paragraph}>Any conduct or content of any third party on the Service;</li>
                <li className={styles.paragraph}>Any content obtained from the Service; or</li>
                <li className={styles.paragraph}>Unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.</li>
              </ul>
            </div>
          </div>
          
          {/* 6. Governing Law */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Governing Law</h1>
            <h1 className={styles.paragraph}>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </h1>
          </div>
          
          {/* 7. Changes to Terms */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Changes to These Terms</h1>
            <h1 className={styles.paragraph}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </h1>
          </div>
          
          {/* 8. Contact Information */}
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Contact Us</h1>
            <h1 className={styles.paragraph}>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:info@catalystclinicalservices.com">
                info@catalystclinicalservices.com
              </a>
              .
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (Maintain structure and dynamic sidebar) */}
        <RightPanel  variants={['therapeutic', 'clinical', 'services']} />
      </div>
    </main>
  );
}