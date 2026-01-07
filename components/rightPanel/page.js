import { quickLinks } from '@data'
import Link from 'next/link'
import styles from './page.module.css'

const Sidebar = ({ allServices, otherPageData, variant }) => {

  const getHref = (id) => {
    switch (variant) {
      case 'therapeutic':
        return `/therapeutic-expertise/${id}`

      case 'clinical':
        return `/what-we-do/clinical-development-services/${id}`

      default:
        return `/what-we-do/${id}`
    }
  }

  const title =
    variant === 'therapeutic' ? 'Therapeutic Expertise' : 'Services'

  return (
    <div className={styles.rightColumn}>

      {/* MAIN SERVICES */}
      {allServices && (
        <div className={styles.sidebarCard}>
          <div className={styles.sidebarCard_round}>
            <div className={styles.sidebarHeader}>{title}</div>
          </div>

          <ul className={styles.sidebarList}>
            {allServices.map(item => (
              <li key={item.id} className={styles.sidebarItem}>
                <Link href={getHref(item.id)} className={styles.sidebarNavLink}>
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* QUICK LINKS → ALWAYS */}
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarCard_round}>
          <div className={styles.sidebarHeader}>Quick Links</div>
        </div>

        <ul className={styles.sidebarList}>
          {quickLinks.map((link, idx) => (
            <li key={idx} className={styles.sidebarItem}>
              <Link href={link.path} className={styles.sidebarNavLink}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OPTIONAL EXTRA LIST */}
      {otherPageData && (
        <div className={styles.sidebarCard}>
          <div className={styles.sidebarCard_round}>
            <div className={styles.sidebarHeader}>
              Therapeutic Expertise
            </div>
          </div>

          <ul className={styles.sidebarList}>
            {otherPageData.map(item => (
              <li key={item.id} className={styles.sidebarItem}>
                <Link
                  href={`/therapeutic-expertise/${item.id}`}
                  className={styles.sidebarNavLink}
                >
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}

export default Sidebar
