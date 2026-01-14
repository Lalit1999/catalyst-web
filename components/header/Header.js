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
		{	text: 'Overview',							link: '/what-we-do'		}, 
		{	text: 'Clinical Development Services',		children : [
				{	text: 'Overview',					link: '/what-we-do/clinical-development-services'		}, 
				{	text: 'Study Design & Startup',		link: '/what-we-do/clinical-development-services/study-design-startup'		}, 
				{	text: 'Patient Recruitment',		link: '/what-we-do/clinical-development-services/patient-recruitment'		}, 
				{	text: 'Project Management',			link: '/what-we-do/clinical-development-services/project-management'	    },
				{ 	text: 'Clinical Trial Monitoring',  link: '/what-we-do/clinical-development-services/clinical-trial-monitoring'	},
				{ 	text: 'Endpoint Adjucation',  		link: '/what-we-do/clinical-development-services/endpoint-adjucation'		}
			]	
		}, 
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
		{	text: 'RWE',								link: '/therapeutic-expertise/rwe'		}, 
		{	text: 'Endocrinology',						link: '/therapeutic-expertise/endocrinology'	},
		{ 	text: 'Cardiology',  						link: '/therapeutic-expertise/cardiology'		},
		{ 	text: 'Vaccines',  							link: '/therapeutic-expertise/vaccines'		},
		{ 	text: 'Others',  							link: '/therapeutic-expertise/others'		}
	]
	},
	{	text: 'Research Publications',	children : [
		{	text: 'Overview',							link: '/research-publications'		}, 
		{	text: 'Robotic Assisted Surgery',			link: '/research-publications#robotic-assisted-surgery'		}, 
		{	text: 'Oncology',							link: '/research-publications#oncology'		}, 
		{	text: 'Other Therapeutic Areas',			link: '/research-publications#other-therapeutic-areas'	},
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

const DropdownList = ({ items, level = 0, containerProps = {} }) => {
  const [ activeItem, setActiveItem ] = useState(null);
  if (!items?.length) return null;

  const { className = '', onMouseEnter, onMouseLeave, ...restProps } = containerProps;
  const handleMouseLeave = (event) => {
    setActiveItem(null);
    onMouseLeave?.(event);
  };

  return (
    <div
      {...restProps}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.dropdownMenu} ${level ? styles.subDropdownMenu : ''} ${className}`.trim()}
    >
      {items.map(({ text, link, children: nestedChildren }) => {
        const hasChildren = Boolean(nestedChildren?.length);
        const isActive = hasChildren && activeItem === text;

        return (
			<div
				key={`${text}-${link ?? 'menu'}`}
				className={`${styles.dropdownItem} ${hasChildren ? styles.hasNested : ''}`.trim()}
				onMouseEnter={() => setActiveItem(hasChildren ? text : null)}
				onMouseLeave={() => hasChildren && setActiveItem(null)}
			>
				{link ? (
				<Link href={link} className={styles.dropdownLink}>{text}</Link>
				) : (
				<span className={styles.dropdownLabel}>{text}</span>
				)}
				{hasChildren && (
				<>
					<Arrow className={`${styles.submenuArrow} ${isActive ? styles.submenuArrowOpen : ''}`.trim()} />
					{isActive && <DropdownList items={nestedChildren} level={level + 1} />}
				</>
				)}
          </div>
        );
      })}
    </div>
  );
};

const HeaderDropdown = ({text, children: dropdownItems}) => {
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
		closeTimerRef.current = setTimeout(() => setOpen(false), 100);
	};

	useEffect(() => () => cancelClose(), []);

	return (
		<div key={text} className={`${styles.headerItem} ${styles.dropdown}`} onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
			<p>{text}</p>
			<div className={`${styles.arrowCon} ${styles[open]}`}>
				<Arrow className={styles.dropdownArrow} />
			</div>
			{open && (
				<DropdownList
					items={dropdownItems}
					containerProps={{
						onClick: () => setOpen(false),
						onMouseEnter: () => cancelClose(),
						onMouseLeave: () => setOpen(false)
					}}
				/>
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