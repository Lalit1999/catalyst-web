"use client";

import { Button } from "antd";
import styles from "../page.module.css";
// We no longer need next/link since we aren't changing URLs
// import Link from "next/link"; 

export default function Sidebar({ onLogout, activeTab, setActiveTab }) {
  
  // Helper to determine class names
  const getItemClass = (tabName) => {
    return activeTab === tabName ? styles.activePage : "";
  };

  return (
    <aside className={styles.sidebar}>
      <div>
        <h2 className={styles.brand}>AdminPanel</h2>
        <ul className={styles.menu}>
          {/* Dashboard */}
          <li 
            className={getItemClass("dashboard")} 
            onClick={() => setActiveTab("dashboard")}
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </li>

          {/* Services */}
          <li 
            className={getItemClass("services")} 
            onClick={() => setActiveTab("services")}
            style={{ cursor: "pointer" }}
          >
            What we do
          </li>

          {/* Therapeutic Expertise */}
          <li 
            className={getItemClass("therapeutic")} 
            onClick={() => setActiveTab("therapeutic")}
            style={{ cursor: "pointer" }}
          >
            Therapeutic Expertise
          </li>

          {/* Research Publications */}
          {/* <li 
            className={getItemClass("research")} 
            onClick={() => setActiveTab("research")}
            style={{ cursor: "pointer" }}
          >
            Research Publications
          </li> */}

          {/* Renamed About us to Training Programs */}
          <li 
            className={getItemClass("training")} 
            onClick={() => setActiveTab("training")}
            style={{ cursor: "pointer" }}
          >
            Training Programs
          </li>
        </ul>
      </div>

      <div>
        <Button danger type="primary" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </aside>
  );
}