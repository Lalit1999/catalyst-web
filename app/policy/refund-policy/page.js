"use client";
import React from "react";
import styles from "./page.module.css";
import { RightPanel, Title } from "@comps"; // Assuming this is your path

// Import Data and QuickLinks
import {
  serviceDataObject,
  therapeuticExpertiseData,
} from "@data";



export default function Page() {
  const allServices = Object.values(serviceDataObject);
  const alltherapyData = Object.values(therapeuticExpertiseData);
  return (
    <main className={styles.main}>
      <Title
        breadIn={"Refund Policy"}
        bread={"Refund Policy"}
        heading={"Refund Policy"}
      />

      <div className={styles.detailsContainer}>
        <div className={styles.leftColumn}>
          <h1 className={styles.paragraph}>All fees paid towards training courses, certification programs, workshops, or related services provided by Catalyst Clinical Services Pvt. Ltd. are final. Such payments are non-refundable and non-transferable in whole or in part, under any circumstances, including but not limited to participant withdrawal, failure to attend sessions, scheduling conflicts, or force majeure events. By enrolling in any program, the participant acknowledges and agrees to this policy.</h1>
        </div>

        {/* RIGHT COLUMN: Sidebar */}
        <RightPanel allServices={allServices} otherPageData={alltherapyData} />
      </div>
    </main>
  );
}
