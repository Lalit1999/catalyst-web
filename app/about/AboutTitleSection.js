import { Title } from '@comps' ;
import styles from './page.module.css';

export default function AboutTitleSection() {
  return (
    <section className={styles.titleSection}>
      <Title title="About Me" subtitle="Journey of blending Traditional and Experimental styles of Art" />
    </section>
  );
}
