import Link from "next/link";
import styles from "./ServiceCard.module.css";
const ServiceCard = ({ service, path }) => {
  const IconComponent = service?.imgicon;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {/* Icon Badge */}
          <div className={styles.iconBadge}>
            {IconComponent && (
              <div className={styles.iconWrapper}>
                <IconComponent />
              </div>
            )}
          </div>
          <div className={styles.content}>
            {/* Changed service.slug to service.id and service.title to service.heading */}
            <Link href={`${path}${service?.id}`} className={styles.title}>
              {service?.heading}
            </Link>
            <p className={styles.desc}>{service?.subHeading}</p>
            <p>
              <Link href={`${path}${service?.id}`} className={styles.readMore}>
                Read More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
