'use client'

import { useRef, useEffect, useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation' ;
import Image from 'next/image' ;
import Link from 'next/link' ;

import { Menu } from '@comps' ;
import { AppContext } from '@ac' ;
import { logo } from '@images' ;
import { HamburgerMenu, Back, Arrow } from '@icons' ;
import styles from './header.module.css' ;

const headerData = [
	{	text: 'Home',					link: '/',								}, 
	{	text: 'Who we are',				link: '/who-we-are',					}, 
	{	text: 'What we do',				children : [
		{	text: 'Clinical Development Services',		link: '/what-we-do/clinical-development-services'		}, 
		{	text: 'FSP',								link: '/what-we-do/fsp'		}, 
		{	text: 'Medical Writing',					link: '/what-we-do/medical-writing'	},
		{ 	text: 'Regulatory Consulting',  			link: '/what-we-do/regulatory-consulting'		},
		{ 	text: 'Data Management & Biostatistics',  	link: '/what-we-do/data-management-biostatistics'		}
	]
	}, 
	{	text: 'Therapeutic Expertise',	children : [
		{	text: 'Overview',							link: '/therapeutic-expertise'		}, 
		{	text: 'Robotic Assisted Surgery',			link: '/therapeutic-expertise/robotic-assisted-surgery'		}, 
		{	text: 'Oncology',							link: '/therapeutic-expertise/oncology'		}, 
		{	text: 'Endocrinology',						link: '/therapeutic-expertise/endocrinology'	},
		{ 	text: 'Cardiology',  						link: '/therapeutic-expertise/cardiology'		},
		{ 	text: 'Vaccines',  							link: '/therapeutic-expertise/vaccines'		},
		{ 	text: 'Others',  							link: '/therapeutic-expertise/others'		}
	]
	},
	{	text: 'Research Publications',	children : [
		{	text: 'Overview',							link: '/research-publications'		}, 
		{	text: 'Robotic Assisted Surgery',			link: '/research-publications/robotic-assisted-surgery'		}, 
		{	text: 'Oncology',							link: '/research-publications/oncology'		}, 
		{	text: 'Other Therapeutic Areas',			link: '/research-publications/other-therapeutic-areas'	},
	]
	}, 
	{	text: 'Training Programs',		children : [
		{	text: 'Overview',							
			link: '/training-programs'		
		}, 
		{	text: 'Professional Diploma in Clinical Research (PDCR)', 
			link: '/training-programs/professional-diploma-in-clinical-research-pdcr'		
		}, 
		{	text: 'Professional Certificate in Pharmacovigilance (PCPV)', 
			link: '/training-programs/professional-certificate-in-pharmacovigilance-pcpv'		
		}, 
		{ 	text: 'Advanced Certificate Program in Scientific Writing (SW)',  								
			link: '/training-programs/advanced-certificate-program-in-scientific-writing-sw'		
		},
		{ 	text: 'Advanced Certificate Program in Project Management (PM)', 
			link: '/training-programs/advanced-certificate-program-in-project-management-pm'
		},
		{ 	text: 'Advanced Certificate Program in Clinical Trial Monitoring (CTM)', 
			link: '/training-programs/advanced-certificate-program-in-clinical-trial-monitoring-ctm'
		},
		{ 	text: 'Oncology Clinical Trials Training (OCTT)', 
			link: '/training-programs/oncology-clinical-trials-training-octt'	
		},
		{ 	text: 'Workshops',  						
			link: '/training-programs/workshops'		
		}
	]	}, 
] ; 

const HeaderDropdown = ({text, children}) => {
	const [ open, setOpen ] = useState(false) ;
	const closeTimerRef = useRef(null);

	const cancelClose = () => {
		if (closeTimerRef.current) {
			clearTimeout(closeTimerRef.current);
			closeTimerRef.current = null;
		}
	};

	const scheduleClose = () => {
		cancelClose();
		closeTimerRef.current = setTimeout(() => setOpen(false), 500);
	};

	useEffect(() => () => cancelClose(), []);

	return (
		<div key={text} className={`${styles.headerItem} ${styles.dropdown}`} onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
			<p>{text}</p>
			<div className={`${styles.arrowCon} ${styles[open]}`}>
				<Arrow className={styles.dropdownArrow} />
			</div>
			{open && (
				<div className={styles.dropdownMenu} onClick={() => setOpen(!open)} onMouseEnter={()=>cancelClose()} onMouseLeave={()=>setOpen(false)}>
					{children?.map(({text, link}) => <Link key={text} href={link} className={styles.dropdownItem}>{text}</Link>)}
				</div>
			)}
		</div>
	);
}

const Header = () => {
	const { userToken } = useContext(AppContext) ;
    const [ menuOpen, setMenuOpen] = useState(false) ;

	const router = useRouter() ;
	const pathname = usePathname() ;

	return (
		<div className={styles.header}>
			<div className={styles.headerFirst}>
				<Back className={pathname === '/'?styles.none:styles.backArrow} onClick={() => router.back()} />
				<Link href="/" className={styles.logoCon}>
					<Image priority src={logo} height={60} alt="catalyst-logo" loading="eager" quality={100}/>
				</Link>
			</div>
				
			{/* Only visible on PC */}
			<div className={styles.headerContent}>
			{ 	headerData.map( ({link, text, hideOnLogin, children})=> (
				!hideOnLogin || (!userToken) ? (
					children ? (
						<HeaderDropdown key={text} text={text}>{children}</HeaderDropdown>
					) : (
						<Link key={text} href={link} className={`${styles.headerItem} ${link===pathname?styles.selected:''}`}>
							<p>{text}</p>
						</Link>
					)
				):null ))
			}
			</div>
			<div className={styles.headerActions}>
				<button className={styles.contactBtn} onClick={() => router.push('/contact-us')}>Contact Us</button>
				<button className={styles.proposalBtn} onClick={() => router.push('/request-proposal')}>Request a Proposal</button>
			</div>
			{/**/}
			
			{/* Only visible on mobile */}
			<div className={styles.headerRight}>
				<HamburgerMenu onClick={()=>setMenuOpen(true)}/>
			</div>
			{/**/}
			<Menu handleClose={()=>setMenuOpen(false)} show={menuOpen} />
		</div>
	) ;
}

export default Header ;