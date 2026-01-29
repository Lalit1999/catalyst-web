"use client";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import Sider from "antd/es/layout/Sider";

// Import Components
import Sidebar from "./components/Sidebar";
import ApplicationsTable from "./components/ApplicationsTable"; // Your Dashboard
import ServicesTable from "./pages/ServiceContent";
import TherapeuticTable from "./pages/TherapeuticContent";
import ResearchTable from "./pages/ResearchContent";
import TrainingTable from "./pages/TrainingContent";

import styles from "./page.module.css";

const { Content } = Layout;

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const auth = localStorage.getItem("adminLoggedIn");
    if (auth !== "true") router.push("/access/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/access/login");
  };

  // Map keys to the imported components
  const contentMap = {
    dashboard: <ApplicationsTable />,
    services: <ServicesTable />,
    therapeutic: <TherapeuticTable />,
    research: <ResearchTable />,
    training: <TrainingTable />,
  };

  return (
    <div className={styles.main}>
      <Layout className={styles.dashboard}>
        <Sider className={styles.sider} width={260}>
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onLogout={handleLogout} 
          />
        </Sider>

        <Layout>
          <Content className={styles.content}>
            {/* Display the active component */}
            {contentMap[activeTab] || <ApplicationsTable />}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}