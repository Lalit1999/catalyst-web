"use client";

import { Button } from "antd";
import styles from "../page.module.css";
import Link from "next/link";

export default function Sidebar({ onLogout }) {
  return (
    <aside className={styles.sidebar}>

      <div>
      <h2 className={styles.brand}>AdminPanel</h2>
        <ul className={styles.menu}>
        <li className={styles.activePage} >Dashboard</li>
        <Link href={'/what-we-do'} >Services</Link>
        <Link href={'/therapeutic-expertise'}  >Therapeutic Expertise</Link>
        <Link href={'/research-publications'} >Research Publications</Link>
        <Link href={'/who-we-are'} >About us</Link>
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
