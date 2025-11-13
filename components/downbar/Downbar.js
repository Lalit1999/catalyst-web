"use client"

import Image from 'next/image' ;
import Link from 'next/link' ;

import { Twitter, Instagram, Facebook, Youtube } from '@icons' ;
import { myarth, logo, titleLine, homeImages } from '@images' ;
import styles from './downbar.module.css' ;
import { usePc } from '@utils';

const Line = () => {
  const pc = usePc();
  return (
    <Image src={titleLine} alt="title-line" width={pc?500:250} height={pc?24:12} />
  );
};

const pageData = {
	email: 'info@brushroute.com',
	descr: 'Celebrating creativity and artistic expression, BrushRoute is a platform dedicated to showcasing inspiring artworks and connecting with a vibrant community of art lovers.',
	socails: [
		{	link : 'https://www.youtube.com/@brushroute', 						icon : <Youtube />		},
		{	link : 'https://www.instagram.com/brushroute', 						icon : <Instagram />	},
		{	link : 'https://www.facebook.com/profile.php?id=100012183940214',	icon : <Facebook />		},
		{	link : "https://twitter.com/", 										icon : <Twitter />		},

	],
}

const compLinks = [
    {	text: 'Art Gallery',	link: '/art-gallery',	}, 
	{	text: 'Events',			link: '/events',		}, 
	{	text: 'About Me',		link: '/about',		}, 
	{	text: 'Blogs',			link: '/blogs',		},
] ;

const suppLinks = [
	{	text: 'Terms & Conditions',	link: '/policy/terms-and-conditions',	}, 
	{	text: 'Privacy Policy',		link: '/policy/privacy-policy',			}, 
	{	text: 'Cookie Policy',		link: '/policy/cookie-policy',			}, 
	{	text: 'Refund Policy',		link: '/policy/refund-policy',			}, 
] ;

const Downbar = () => {
	// const { orgToken } = useContext(AppContext) ;
	const pc = usePc();

	const { descr, socails } = pageData  ;

	return (
		<div className={styles.downbar}>
			<div className={styles.downbarTitle}>
				<Line />
			</div>
			<div className={styles.downbarMain}>
				<div className={styles.dbLogo}>
					<Image className={styles.downbarMainImage} src={logo} height={40} alt="brushroute-logo" quality={100} />
				</div>
				<div className={styles.dbContent}>
					<div className={styles.dbContentLeft}>
						<p className={styles.qLinks}>About BrushRoute</p>
						<div className={styles.dbText}>
							<p>{descr}</p>
						</div>
						<div className={styles.downbarSocialIcons}>
						{ 	
							socails.map(({link, icon})=><a key={link} href={link} target="_blank" rel="noopener noreferrer">{icon}</a>) 
						}
						</div>
					</div>
					<div className={styles.dbContentRight}>
						<div className={styles.dbService}>
							<p className={styles.qLinks}>Recent Works</p>
							<div className={styles.dbLinkCon2}>
							{	
								homeImages.slice(0,6).map(([img, name]) => <div key={name} className={styles.dbLinkItem}><Image src={img} alt={name} fill className={styles.img} sizes="5vw"/></div>)
							}
							</div>
						</div>
						<div className={styles.dbCompany}>
							<p className={styles.qLinks}>Quick Links</p>
							<div className={styles.dbLinkCon}>
							{
								compLinks.map(({text, link})=>(
									<Link className={styles.qLink} key={text} href={link}>{text}</Link>
								))
							}
							</div>
						</div>
						<div className={styles.dbSupport}>
							<p className={styles.qLinks}>Support</p>
							<div className={styles.dbLinkCon}>
							{
								suppLinks.map(({text, link})=>(
									<Link className={styles.qLink} key={text} href={link}>{text}</Link>
								))
							}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.dbCopyright}>
					<p className={styles.downbarCrText}>
						All Rights Reserved &copy;&nbsp;Copyright 2025&ensp;BrushRoute |&ensp;Website Design By&nbsp;&nbsp;
						<a href="https://myarth.in">
							<Image  className={styles.downbarMyarth} src={myarth} height={pc?15:10} alt="myarth-logo" />
						</a>
					</p>
				</div>
			</div>
			
		</div>
	) ;
}

export default Downbar ;