import { useContext } from "react";

import { AppContext } from '@ac' ;
import { BasicForm } from '@comps' ;
import { post, addNotif, remNotif } from '@utils' ;
import styles from './contact.module.css' ;

const ContactForm = ( ) => {

    const { setPopOpen } = useContext(AppContext) ;

	const formData = [
        { type: 'row', children: [
                { type: 'text', name: 'name', label: 'Name', ph: 'Enter Name', valid: {required: true, pattern: /^[a-zA-Z ]*$/i } },
                { type: 'text', name: "Company's name", label: "Company's name", ph: 'Write your Company name....', valid: {required: true, max: 50 } }
            ] 
        },
        {type : 'row',children :[
            { type: 'email', name: 'email', label: 'E-mail', ph: 'Enter Email Id', valid: {required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
            { type: 'tel', name: 'phone', label: 'Mobile', ph: 'Enter Phone No.', valid: {required: true, minLength: 8, pattern: /^\d{10}$/ } },
        ]},
        { type: 'textArea', name: 'message', label: 'Message', ph: 'How may we help you?', valid: {required: true, max: 250 } },

        { type: 'submit', text: 'Send Message', style: styles.blackBtn },
    ] ;

    const onFormSubmit = async data => {
        let resp = await post('message', data) ;

        if(resp?.error) {
            console.error(resp) ;
            remNotif() ;
        }
        else {
            if(resp.status) {
                remNotif() ;
                addNotif('Message Sent Successfully', 'success') ;
                setPopOpen(false) ;
            }
            else {
                console.error(resp) ;
                remNotif() ;
            }
        }
    }

	return (
        <div className={styles.contactForm} >
			<p className={styles.subPageContentHead}>Send Message / Feedback</p>
			<BasicForm data={formData} onFormSubmit={onFormSubmit} reset />
        </div>
	) ;
}

export default ContactForm ;