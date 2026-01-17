import Image from "next/image";
import { contact } from "@images";
import styles from "./page.module.css";
import { Email, Call2, History2, MapBold } from "@icons";



const NewCard = () => {
  const contactData = [
    {
      icon: <History2 />,
      text: "Mon-Sat 9:00am - 6:00pm",
      link: "#",
    },
    {
      icon: <Call2 />,
      text: "+91-9818356273",
      link: "tel:+919818356273",
    },
    {
      icon: <Email />,
      text: "info@catalystclinicalservices.com",
      link: "mailto:info@catalystclinicalservices.com",
    },
    {
      icon: <MapBold />,
      text: "UG-11, Upper Ground Floor, Aggarwal Prestige Mall, Plot No. 02, Road No. 44, Pitampura, New Delhi - 110034 (INDIA)",
      link: "https://www.google.com/maps/place/Catalyst+Clinical+Services/@28.6890627,77.1332031,21z/data=!4m14!1m7!3m6!1s0x390d02349a4bbf61:0xbe66a845b9981ead!2sCatalyst+Clinical+Services!8m2!3d28.6890873!4d77.1331348!16s%2Fg%2F11clyt7hz1!3m5!1s0x390d02349a4bbf61:0xbe66a845b9981ead!8m2!3d28.6890873!4d77.1331348!16s%2Fg%2F11clyt7hz1?hl=en&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={contact}
          alt="Contact"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <a href="#">
          <span className={styles.title}>
            <p>Catalyst Clinical Services Pvt. Ltd.</p>
          </span>
        </a>

        <ul className={styles.detailsList}>
          {contactData.map((items, idx) => (
            <li key={idx} className={styles.detailItem}>
                {items.icon}
              <a href={items.link} className={styles.detailText}>
                {items.text}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.action} type="button">
          Contact Us
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default NewCard;
