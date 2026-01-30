"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import Link from "next/link";

import { Back, Arrow } from "@icons";
import { logo } from "@images";
import styles from "./menu.module.css";

const menuData = [
	{	text: 'Home',					link: '/',								}, 
	{	text: 'Who we are',				link: '/who-we-are',					}, 
	{	text: 'What we do',				children : [
		{	text: 'Overview',							link: '/what-we-do'		}, 
		{	text: 'Clinical Development Services',		children : [
			{	text: 'Overview',					link: '/what-we-do/clinical-development-services'		}, 
			{	text: 'Project Management',			link: '/what-we-do/clinical-development-services/project-management'	    },
			{	text: 'Clinical Site Management',		link: '/what-we-do/clinical-development-services/clinical-site-management'		}, 
			{ 	text: 'Clinical Study Monitoring',  link: '/what-we-do/clinical-development-services/clinical-trial-monitoring'	},
				{	text: 'Patient Recruitment',		link: '/what-we-do/clinical-development-services/patient-recruitment'		}, 
				{ 	text: 'Investigator Training',  		link: '/what-we-do/clinical-development-services/investigator-training'		}
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
];

const NestedMenuList = ({ items, level = 0, pathname, handleClose }) => {
  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={`${styles.nestedMenu} ${level ? styles.nestedMenuInner : ""}`}
    >
      {items.map((item) => (
        <MenuNestedItem
          key={`${item.text}-${item.link ?? "group"}`}
          item={item}
          level={level}
          pathname={pathname}
          handleClose={handleClose}
        />
      ))}
    </div>
  );
};

const MenuNestedItem = ({ item, level, pathname, handleClose }) => {
  const [open, setOpen] = useState(false);
  const { text, link, children } = item;
  const hasChildren = Boolean(children?.length);
  const paddingLeft = `calc(1em + ${level} * 12px)`;

  if (hasChildren) {
    return (
      <div
        className={`${styles.menuItem} ${styles.dd} ${styles.nestedItem}`}
        style={{ paddingLeft }}
      >
        <div
          className={`${styles.arrowMain} ${styles[open]}`}
          onClick={() => setOpen(!open)}
        >
          <p className={styles.subHeaderText}>{text}</p>
          <Arrow className={`${styles.ddArrow} ${styles[open]}`} />
        </div>
        {open && (
          <NestedMenuList
            items={children}
            level={level + 1}
            pathname={pathname}
            handleClose={handleClose}
          />
        )}
      </div>
    );
  }

  return (
    <Link
      href={link}
      className={`${styles.menuItem} ${styles.nestedItem} ${
        link === pathname ? styles.selected : ""
      }`}
      style={{ paddingLeft }}
      onClick={() => handleClose()}
    >
      <p className={styles.subHeaderText}>{text}</p>
      <Arrow />
    </Link>
  );
};

const MenuDropdown = ({ text, children, pathname, handleClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div key={text} className={`${styles.menuItem} ${styles.dd}`}>
      <div
        className={`${styles.arrowMain} ${styles[open]}`}
        onClick={() => setOpen(!open)}
      >
        <p className={styles.menuText}>{text}</p>
        <Arrow className={`${styles.ddArrow} ${styles[open]}`} />
      </div>
      {open && (
        <div className={styles.ddMenu}>
          <NestedMenuList
            items={children}
            level={1}
            pathname={pathname}
            handleClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

const Menu = ({ handleClose, show }) => {
  const pathname = usePathname();

  return (
    <Offcanvas
      placement="start"
      className={styles.menu}
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className={styles.mainMenuHead}>
            <Back onClick={handleClose} />
            <Image priority src={logo} height={32} alt="orn-remedies-logo" />
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.menuBody}>
        <div className={styles.mainMenu}>
          <div className={styles.mainMenuTop}>
            {menuData.map(({ text, link, children }) =>
              children ? (
                <MenuDropdown
                  key={text}
                  text={text}
                  pathname={pathname}
                  handleClose={handleClose}
                >
                  {children}
                </MenuDropdown>
              ) : (
                <Link
                  key={link}
                  href={link}
                  className={`${styles.menuItem} ${
                    link === pathname ? styles.selected : ""
                  }`}
                  onClick={() => handleClose()}
                >
                  <p className={styles.menuText}>{text}</p>
                  <Arrow />
                </Link>
              )
            )}
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Menu;
