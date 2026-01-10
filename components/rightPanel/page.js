import { quickLinks } from '@data'
import Link from 'next/link'
import styles from './page.module.css'

const Sidebar = ({ allServices, otherPageData, variant }) => {

  // 1. Define configuration for specific variants
  const variantConfig = {
    therapeutic: {
      title: 'Therapeutic Expertise',
      basePath: '/therapeutic-expertise'
    },
    clinical: {
      title: 'Services',
      basePath: '/what-we-do/clinical-development-services'
    }
  };

  // 2. Select the config based on variant, or fallback to default values
  const activeConfig = variantConfig[variant] || {
    title: 'Services',
    basePath: '/what-we-do'
  };

  return (
    <div className={styles.rightColumn}>

      {/* MAIN SERVICES LIST (Dynamic based on variant) */}
      {allServices && (
        <div className={styles.sidebarCard}>
          <div className={styles.sidebarCard_round}>
            <div className={styles.sidebarHeader}>{activeConfig.title}</div>
          </div>

          <ul className={styles.sidebarList}>
            {allServices.map(item => (
              <li key={item.id} className={styles.sidebarItem}>
                <Link 
                  href={`${activeConfig.basePath}/${item.id}`} 
                  className={styles.sidebarNavLink}
                >
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* QUICK LINKS → ALWAYS VISIBLE */}
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

      {/* OPTIONAL EXTRA LIST (Data passed via props) */}
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