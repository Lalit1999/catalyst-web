import styles from './page.module.css';
import Image from 'next/image';

import { self1 } from '@images';
import { Brush, Palette, Call2, Email, Location, Facebook, Twitter, Youtube, Instagram } from '@icons';

const socialLinks = [
  { icon: <Facebook />, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100012183940214' },
  { icon: <Twitter />, label: 'Twitter', href: 'https://twitter.com/' },
  { icon: <Youtube />, label: 'Youtube', href: 'https://www.youtube.com/@brushroute' },
  { icon: <Instagram />, label: 'Instagram', href: 'https://www.instagram.com/brushroute' },
];

export default function AboutGridSection() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridImageWrapper}>
        <Image src={self1} alt="about-img" fill className={styles.gridImage} />
      </div>
      <div className={styles.gridInfoWrapper}>
        <div className={styles.aboutBoxContent}>
          <Palette className={styles.icon} />
          <div className={styles.iconBox}>
            <h4 className={styles.infoTitle}>About Me</h4>
            <div className={styles.iconText}><p>Name:</p><span> Moni Kumari</span></div>
            <div className={styles.iconText}><p>Location:</p><span> Sampla, Haryana</span></div>
            <p className={styles.infoDesc}>My art blends traditional and experimental styles, using mediums like acrylic, watercolor, pencil, charcoal, and mixed media. I combine detailed drawing with expressive strokes to create layered, emotional compositions inspired by everyday life.</p>
          </div>
        </div>
        <div className={styles.aboutBoxContent}>
          <Brush className={styles.icon} />
          <div className={styles.iconBox}>
            <h4 className={styles.infoTitle}>Get In Touch</h4>
            <div className={styles.socialIconsWrapper}>
                <div className={styles.iconBoxDetailCon}>
                    <Location className={styles.icon} /> 
                    <p>Kheri Sampla, Sampla, Haryana 124501</p>
                </div>
                <div className={styles.iconBoxDetailCon}>
                    <Call2 className={styles.icon} /> 
                    <p>+91 8178948376</p>
                </div>
                <div className={styles.iconBoxDetailCon}>
                    <Email className={styles.icon} /> 
                    <p>mk1960402@gmail.com</p>
                </div>
            </div>
            <p className={styles.infoTitle}>Follow Me</p>  
            <div className={styles.socialList}>
              {socialLinks.map(link => (
                <div key={link.label}>
                  <a className={styles.socialIcons} target="_blank" rel="noopener noreferrer" href={link.href}>{link.icon}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
