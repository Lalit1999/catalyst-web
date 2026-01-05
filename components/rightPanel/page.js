import { quickLinks } from '@data'
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const page = ({allServices,otherPageData}) => {
  const path = usePathname()
  
  return (
    <>
    <div className={styles.rightColumn}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>{path.startsWith('/therapeutic-expertise')? `Therapeutic Expertise`: `Services`}</div>
            </div>
            <ul className={styles.sidebarList}>
              {allServices.map((item) => (
                <li key={item.id} className={styles.sidebarItem}>
                  <Link
                    href={path.startsWith(`/therapeutic-expertise`) ? `/therapeutic-expertise/${item.id}` : (!path.startsWith('/what-we-do/clinical-development-services') ? `/what-we-do/${item.id}`:`/what-we-do/clinical-development-services/${item.id}`)}
                    className={`${styles.sidebarNavLink}`}
                  >
                    {item.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>Quick Links</div>
            </div>
            <ul className={styles.sidebarList}>
              {quickLinks.map((link, idx) => (
                <li key={idx} className={styles.sidebarItem}>
                  <Link href={link.path} className={styles.sidebarNavLink}>
                    {/* Render icon based on helper function if needed, or just text */}
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
         {otherPageData && <> <div className={styles.sidebarCard}>
            <div className={styles.sidebarCard_round}>
              <div className={styles.sidebarHeader}>Therapeutic Expertise</div>
            </div>
            <ul className={styles.sidebarList}>
              {otherPageData.map((item) => (
                <li key={item.id} className={styles.sidebarItem}>
                  <Link
                    href={`/therapeutic-expertise/${item.id}`}
                    className={`${styles.sidebarNavLink}`}
                  >
                    {item.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div></>}
        </div>
    </>
  )
}

export default page