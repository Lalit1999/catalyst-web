"use client"

import { usePathname } from 'next/navigation' ;
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image' ;
import Link from 'next/link' ;

import { Back, Home, School, Job, Contact, Arrow } from '@icons' ;
import { logo } from '@images' ;
import styles from './menu.module.css';

const menuData = [
    {   text: 'Home',        icon: <Home />,            link: '/' },
    {   text: 'Art Gallery', icon: <Contact />,         link: '/art-gallery' },
    {   text: 'About me',    icon: <School />,          link: '/about' },
    {   text: 'Events',      icon: <Job />,             link: '/events' },
    {   text: 'Blogs',       icon: <Contact />,         link: '/blogs' },
] ;

const Menu = ({ handleClose, show }) => {

	const pathname = usePathname() ; 
    
    return (
        <Offcanvas placement='start' className={styles.menu} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <div className={styles.mainMenuHead}>
                        <Back onClick={handleClose} />
                        <Image priority src={logo} height={32} alt="orn-remedies-logo" />
                    </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.menuBody}>
                <div className={styles.mainMenu} onClick={()=>handleClose()}>
                    <div className={styles.mainMenuTop}>
                        { menuData.map(({text, icon, link})=>(
                            <Link key={link} href={link} className={`${styles.menuItem} ${(link===pathname)?styles.selected:''}`}>
                                {icon}
                                <p className={styles.menuText}>{text}</p>
                                <Arrow />
                            </Link>
                        )) }
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Menu;