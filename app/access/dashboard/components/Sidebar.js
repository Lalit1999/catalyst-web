"use client";

import { Button } from "antd";
import styles from "../page.module.css";

export default function Sidebar({ onLogout }) {
  return (
    <aside className={styles.sidebar}>

      <div>
      <h2 className={styles.brand}>AdminPanel</h2>
        <ul className={styles.menu}>
        <li className={styles.active}>Dashboard</li>
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
