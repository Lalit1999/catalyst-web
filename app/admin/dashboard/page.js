"use client";

import { useEffect } from "react";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import ApplicationsTable from "./components/ApplicationsTable";
import styles from "./page.module.css";
import Sider from "antd/es/layout/Sider";

const { Content } = Layout;

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("adminLoggedIn");
    if (auth !== "true") router.push("/admin/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  };

  return (
    <div className={styles.main} >
<Layout className={styles.dashboard}>
      <Sider className={styles.sider} width={240}>
        <Sidebar onLogout={handleLogout} />
      </Sider>

      <Layout>
        <Content className={styles.content}>
          <ApplicationsTable />
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}
