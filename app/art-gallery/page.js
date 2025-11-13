"use client"

import Image from 'next/image';

import { titleLine, paintings, sketches, chadar } from '@images';
import { Title } from '@comps' ;
import HeroSlider from './HeroSlider.js';
import styles from './page.module.css';
import { usePc } from '@utils';

const Line = () => {
  const pc = usePc();
  return (
    <Image src={titleLine} alt="title-line" width={pc?500:250} height={pc?24:12} />
  );
};
const ArtGallery = () => (
	<div className={styles.artGalleryMain}>
		<Title title="Art Gallery" subtitle="My artistic journey through paintings and sketches" />
		<HeroSlider />
		<div className={styles.container}>
			<div className={styles.pageSubHeader}>
				<h4 className={styles.subHeading}>Chadar</h4>
				<p className={styles.subTitle}>My painting series &quot;Chadar&quot;</p>
				<Line />
			</div>
			<div className={styles.grid}>
				{chadar.map(([img, name]) => (
					<div className={styles.card} key={name}>
					<div className={styles.imgContainer}>
						<Image src={img} alt={name} className={styles.img} />
					</div>
					<div className={styles.overlay}>
						<h4>{name}</h4>
					</div>
					</div>
				))}
			</div>
			<div className={styles.pageSubHeader}>
				<h4 className={styles.subHeading}>Paintings</h4>
				<p className={styles.subTitle}>Paintings not belonging to a particular collection</p>
				<Line />
			</div>
			<div className={styles.grid}>
				{paintings.map(([img, name]) => (
					<div className={styles.card} key={name}>
					<div className={styles.imgContainer}>
						<Image src={img} alt={name} className={styles.img} />
					</div>
					<div className={styles.overlay}>
						<h4>{name}</h4>
					</div>
					</div>
				))}
			</div>
			<div className={styles.pageSubHeader}>
				<h4 className={styles.subHeading}>Sketches</h4>
				<p className={styles.subTitle}>Sketches from my artistic journey</p>
				<Line />
			</div>
			<div className={styles.grid}>
				{sketches.map(([img, name]) => (
					<div className={styles.card} key={name}>
					<div className={styles.imgContainer}>
						<Image src={img} alt={name} className={styles.img} />
					</div>
					<div className={styles.overlay}>
						<h4>{name}</h4>
					</div>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default ArtGallery;
