"use client";
import React from "react";
import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path


export default function CROExperiencePage() {

  return (
    <main className={styles.main}>
      <Title
        breadIn={"Privacy Policy"}
        bread={"Policy"}
        heading={"Privacy Policy"}
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.privacyhead}>
            <h1 className={styles.paragraph}>
              Catalyst Clinical Services Pvt. Ltd. operates the
              <a
                href="https://www.catalystclinicalservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.space}
              >
                www.catalystclinicalservices.com 
              </a>
              website, which provides the SERVICES of Clinical research training
              as well as contract clinical research.
            </h1>
            <h1 className={styles.paragraph}>
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service.
            </h1>
            <h1 className={styles.paragraph}>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation with this policy. The Personal
              Information that we collect are used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Information Collection and Use</h1>
            <h1 className={styles.paragraph}>
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Log Data</h1>
            <h1 className={styles.paragraph}>
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer’s Internet Protocol (“IP”) address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Cookies</h1>
            <h1 className={styles.paragraph}>
              Cookies are files with small amount of data that is commonly used
              an anonymous unique identifier. These are sent to your browser
              from the website that you visit and are stored on your computer’s
              hard drive.
            </h1>
            <h1 className={styles.paragraph}>
              Our website uses these “cookies” to collection information and to
              improve our Service. You have the option to either accept or
              refuse these cookies, and know when a cookie is being sent to your
              computer. If you choose to refuse our cookies, you may not be able
              to use some portions of our Service.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Service Providers</h1>
            <h1 className={styles.paragraph}>
              We may employ third-party companies and individuals due to the
              following reasons:
            </h1>
            <div className={styles.policyList}>
              <ul>
                <li className={styles.paragraph}>To facilitate our Service;</li>
                <li className={styles.paragraph}>
                  To provide the Service on our behalf;
                </li>
                <li className={styles.paragraph}>
                  To perform Service-related services; or
                </li>
                <li className={styles.paragraph}>
                  To assist us in analyzing how our Service is used.
                </li>
              </ul>
            </div>
            <h1 className={styles.paragraph}>
              We want to inform our Service users that these third parties have
              access to your Personal Information. The reason is to perform the
              tasks assigned to them on our behalf. However, they are obligated
              not to disclose or use the information for any other purpose.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Security</h1>
            <h1 className={styles.paragraph}>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Links to Other Sites</h1>
            <h1 className={styles.paragraph}>
              Our Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over, and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Children’s Privacy</h1>
            <h1 className={styles.paragraph}>
              Our Services do not address anyone under the age of 18. We do not
              knowingly collect personal identifiable information from children
              under 18. In the case we discover that a child under 18 has
              provided us with personal information, we immediately delete this
              from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Changes to This Privacy Policy</h1>
            <h1 className={styles.paragraph}>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </h1>
          </div>
          <div className={styles.privacyhead}>
            <h1 className={styles.heading}>Contact Us</h1>
            <h1 className={styles.paragraph}>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{" "}
              <a href="mailto:info@catalystclinicalservices.com">
                info@catalystclinicalservices.com
              </a>
              .
            </h1>
            <h1 className={styles.paragraph}>
              This Privacy Policy page was created at{" "}
              <a
                href="https://www.catalystclinicalservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.space}
              >
                www.catalystclinicalservices.com
              </a>
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <RightPanel  variants={['therapeutic', 'clinical', 'services']} />
      </div>
    </main>
  );
}
