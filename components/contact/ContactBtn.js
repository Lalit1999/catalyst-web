import { useContext } from "react";

import { AppContext } from '@ac' ;
import { Chat } from '@icons' ;
import styles from './contact.module.css' ;

const ContactBtn = () => {
    const { setPopOpen, setPopContent } = useContext(AppContext) ;

	return (
		<div className={styles.contactBtn} onClick={() => { setPopContent('contact'); setPopOpen(true); } }>
			<Chat />
		</div>
	) ;
}

export default ContactBtn ;