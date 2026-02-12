"use client"

import Image from 'next/image' ;
import Link from 'next/link' ;

import { Twitter, Instagram, Facebook, Youtube, Email, Call2, History2, MapBold, Whatsapp, Linkedin, ArrowLong } from '@icons' ;
import { logo } from '@images' ;
import styles from './downbar.module.css' ;

const pageData = {
	email: 'info@catalystclinicalservices.com',
	descr: 'Accelerating clinical research to deliver life-changing therapies to patients, faster.',
	socails: [
		{	link : 'https://www.youtube.com/channel/UCavhIhqTyY4Pt-AiS-Hn1vw/videos', 	icon : <Youtube />		},
		{	link : "https://api.whatsapp.com/send?phone=919818356273&text=&text=Hello%20Team%20Catalyst!%20Please%20call%20me%20back%20to%20discuss%20more.", 	icon : <Whatsapp />		},
		{	link : 'https://www.instagram.com/catalyst.cro', 			icon : <Instagram />	},
		{	link : "https://www.linkedin.com/feed/update/urn:li:activity:7391739616799842304", 	icon : <Linkedin />		},
		{	link : 'https://www.facebook.com/catalystclinicalservices',	icon : <Facebook />		},
		{	link : "https://x.com/catalystpvt", 						icon : <Twitter />		},

	],
}

const serviceLinks = [
    {	text: 'Who we are',				link: '/who-we-are',	}, 
	{	text: 'What we do',				link: '/what-we-do',		}, 
	{	text: 'Therapeutic Expertise',	link: '/therapeutic-expertise',		}, 
	{	text: 'Research Publications',	link: '/research-publications',		}, 
	{	text: 'Training Programs',		link: '/training-programs',		},
] ;

const pagesLinks = [
	{	text: 'About Us',			link: '/who-we-are',	}, 
	{	text: 'Privacy Policy',		link: '/policy/privacy-policy',	}, 
	{	text: 'Cookie Policy',		link: '/policy/cookie-policy',	}, 
	{	text: 'Refund Policy',		link: '/policy/refund-policy',	}, 
	{	text: 'Terms & Conditions',	link: '/policy/terms-and-conditions',	}, 
	// {	text: 'Privacy Policy',		link: '/policy/privacy-policy',			}, 
	// {	text: 'Cookie Policy',		link: '/policy/cookie-policy',			}, 
	// {	text: 'Refund Policy',		link: '/policy/refund-policy',			}, 
] ;

const contactData = [
	{
		icon: <History2 />,
		text: 'Mon-Sat 9:00am - 6:00pm',
		link: '#'
	},
	{
		icon: <Call2 />,
		text: '+91-9818356273',
		link: 'tel:+919818356273'
	},
	{
		icon: <Email />,
		text: 'info@catalystclinicalservices.com',
		link: 'mailto:info@catalystclinicalservices.com'
	},
	{
		icon: <MapBold />,
		text: 'UG-11, Upper Ground Floor, Aggarwal Prestige Mall, Plot No. 02, Road No. 44, Pitampura, New Delhi - 110034 (INDIA)',
		link: 'https://www.google.com/maps/place/Catalyst+Clinical+Services/@28.6890627,77.1332031,21z/data=!4m14!1m7!3m6!1s0x390d02349a4bbf61:0xbe66a845b9981ead!2sCatalyst+Clinical+Services!8m2!3d28.6890873!4d77.1331348!16s%2Fg%2F11clyt7hz1!3m5!1s0x390d02349a4bbf61:0xbe66a845b9981ead!8m2!3d28.6890873!4d77.1331348!16s%2Fg%2F11clyt7hz1?hl=en&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D'
	},
] ;

const DownBarTop = () => {
	return (
		<div className={styles.downbarTop}>
			<p className={styles.dbTopText}>Interested in Catalyst Clinical Services?</p>
			<Link href='/contact-us' className={styles.dbTopButton}>Get in touch&ensp;&ensp; <ArrowLong /></Link>
		</div>
	) ;
}

const Downbar = () => {
	let year = new Date();
	year = year.getFullYear();
	// const { orgToken } = useContext(AppContext) ;
	// const pc = usePc();

	const { descr, socails } = pageData  ;

	return (
		<div className={styles.downbarMainCon}>
			<DownBarTop />
			<div className={styles.downbar}>
				<div className={styles.downbarMain}>
					<div className={styles.dbLogo}>
						<Image className={styles.downbarMainImage} src={logo} height={100} alt="catalyst-logo" quality={100} />
						<div className={styles.dbContentLeft}>
							<div className={styles.dbText}>
								<p>{descr}</p>
							</div>
							<div className={styles.downbarSocialIcons}>
							{ 	
								socails.map(({link, icon})=><a key={link} href={link} target="_blank" rel="noopener noreferrer">{icon}</a>) 
							}
							</div>
						</div>
					</div>
					<div className={styles.dbContent}>
						<div className={styles.dbService}>
							<p className={styles.qLinks}>Our Services</p>
							<div className={styles.dbLinkCon}>
							{
								serviceLinks.map(({text, link})=>(
									<Link className={styles.qLink} key={text} href={link}>{text}</Link>
								))
							}
							</div>
						</div>
						<div className={styles.dbCompany}>
							<p className={styles.qLinks}>Pages</p>
							<div className={styles.dbLinkCon}>
							{
								pagesLinks.map(({text, link})=>(
									<Link className={styles.qLink} key={text} href={link}>{text}</Link>
								))
							}
							</div>
						</div>
						<div className={styles.dbSupport}>
							<p className={styles.qLinks}>Contact</p>
							<div className={styles.dbLinkCon}>
							{
								contactData.map(({text, icon, link})=> {
									return (
										<div key={text} className={styles.dbLinkItem}>
											{icon}
											<Link className={styles.qLink} key={text} href={link}>{text}</Link>
										</div>
									)
								})
							}
							</div>
						</div>
					</div>
				</div>			
				<div className={styles.dbCopyright}>
					<p className={styles.downbarCrText}>
						All Rights Reserved &copy;&nbsp;Copyright {year}&ensp;Catalyst Clinical Services Pvt. Ltd. 
					</p>
				</div>
			</div>
		</div>
	) ;
}

export default Downbar ;