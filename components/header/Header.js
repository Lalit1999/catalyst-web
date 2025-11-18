'use client'

import { useState, useContext } from 'react' ;
import { useRouter, usePathname } from 'next/navigation' ;
import Image from 'next/image' ;
import Link from 'next/link' ;

import { Menu } from '@comps' ;
import { AppContext } from '@ac' ;
import { logo } from '@images' ;
import { HamburgerMenu, Back } from '@icons' ;
import styles from './header.module.css' ;

const headerData = [
	{	text: 'Home',					link: '/',								}, 
	{	text: 'Who we are',				link: '/who-we-are',					}, 
	{	text: 'What we do',				link: '/what-we-do',					}, 
	{	text: 'Therapeutic Expertise',	link: '/therapeutic-expertise',			}, 
	{	text: 'Research Publications',	link: '/research-publications',			}, 
	{	text: 'Training Programs',		link: '/training-programs',				}, 
] ; 

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
			{ 	headerData.map( ({link, text, hideOnLogin})=> (
				!hideOnLogin || (!userToken) ? (
					<Link key={text} href={link} className={`${styles.headerItem} ${link===pathname?styles.selected:''}`}>
						<p>{text}</p>
					</Link>
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