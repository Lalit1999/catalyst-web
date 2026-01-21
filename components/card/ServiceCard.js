import Link from "next/link";

import styles from "./ServiceCard.module.css";

const ServiceCard = ({ id, heading, imgicon, subHeading, path="/what-we-do/" }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<div className={styles.iconBadge}>{imgicon}</div>
				<div className={styles.content}>
					<Link href={`${path}${id}`} className={styles.title}>
						{heading}
					</Link>
					<p className={styles.desc}>{subHeading}</p>
					<Link href={`${path}${id}`} className={styles.readMore}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
