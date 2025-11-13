"use client"

import { useState, useContext } from "react";
import { useRouter } from 'next/navigation' ;
import Link from 'next/link' ;

import { AppContext } from '@ac' ;
import { BasicForm } from '@comps' ;
import { Person, Job, Li, Google } from '@icons' ;
import { post, addNotif, remNotif } from '@utils' ;

import styles from '../pop.module.css' ;
import styles2 from '@c/basicform/form.module.css' ;

const SignUp = ({ init="user" }) => {
    const { setPopContent, setPopOpen, loadUser, loadOrg, subscription } = useContext(AppContext) ; 

    const [errMsg, setErrMsg] = useState('') ;
    const [mode, setMode] = useState(init==='user'?'Individual':(init==='org'?'Organization':null)) ;
	const router = useRouter() ;

    const onFormSubmit = async ({email, password, repassword, confirm}) => {
        let obj = { Individual: 'user', Organization: 'org' } ;
        const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com', 'protonmail.com', 'yahoo.in', 'rediffmail.com', 'rediff.in'] ;
        const emailDomain = email.split('@')[1]?.toLowerCase();

        if (mode === 'Organization' && commonDomains.includes(emailDomain)) {
            setErrMsg('Please use a valid organization email (e.g., yourcompany.com).');
            return;
        }

        if(!confirm) {
            setErrMsg('You must confirm your account type', 'error') ;
            return;
        }

        if(repassword === password) {
            addNotif('Signing You Up...', 'loading') ;
            
            let resp = await post(obj[mode], {email, password, subscription}) ;
            
            if(resp?.error) {
                console.error(resp) ;
                remNotif() ;
                setErrMsg(resp.error, 'error') ;
            }
            else {
                if(resp.token) {
                    remNotif() ;
                    addNotif('Sign Up Complete', 'success') ;
                    if(obj[mode]==='user') {
                        loadUser(resp) ;
                        router.push('/dashboard/complete-profile') ;
                    }
                    else if(obj[mode]==='org') {
                        loadOrg(resp) ;
                        router.push('/org-dashboard/profile') ;
                    }
                    setPopOpen(false) ;
                }
                else {
                    console.error(resp) ;
                    remNotif() ;
                }
            }
        }
        else
            setErrMsg('Passwords do not match', 'error') ;
    }

    const formData = [
        { type: 'email', name: 'email', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
        { type: 'password', name: 'password', valid: { required: true } },
        { type: 'password', name: 'repassword', label: 'Re-Enter Password', valid: { required: true } },
        { type: 'checkbox', name: 'confirm', label: `I wish to Sign Up as ${mode}` },
        { type: 'custom', component: <div className={styles.sifText}>
                By signing up, you agree to our <Link href="/policy/terms-and-conditions" className={styles.blueText} target="_blank">Terms & Conditions</Link> and <Link href="/policy/privacy-policy" className={styles.blueText} target="_blank">Privacy Policy</Link>
            </div> },
        { type: 'custom', component: errMsg.length>0 && <span className={`${styles2.formError} shakeHorizontal`}>{errMsg}</span>},
        { type: 'submit', text: 'Continue', style: styles.blackBtn },
        { type: 'custom', component: <p className={styles.sifText}>Already a user ? <span className={styles.blueText} onClick={() => setPopContent(`signIn-${mode==='Individual'?'user':'org'}`)}>Sign In</span> </p> },
    ] ;

    return (
        <div className={`${styles.loginPopup} ${styles.signUpPopup}`}> 
            <div className={styles.lpHead}>
                <p className={styles.lpTitle}>Create your Account</p>
                <div className={styles.lpHr} />
            </div>
            <div className={styles.modeBtns}>
                <button className={`${styles.modeBtn} ${mode==='Individual'?styles.selected:''}`} onClick={()=>setMode('Individual')}><Person />&ensp;Individual</button>
                <button className={`${styles.modeBtn} ${mode==='Organization'?styles.selected:''}`} onClick={()=>setMode('Organization')}><Job />&ensp;Organization</button>
            </div>
            <BasicForm styleOR={styles.signUpForm} data={formData} onFormSubmit={onFormSubmit} />
            {
                mode==='Individual' && (
                    <>
                    <div className={styles.orCon}>
                        <div className={styles.orHr} />
                        <p className={styles.sifText}>OR</p>
                        <div className={styles.orHr} />
                    </div>
                    <div className={styles.modeBtns}>
                        <button className={`${styles.modeBtn} ${styles.blueBtn}`}><Li />&ensp;Sign Up <span className={styles.socialName}>&nbsp;via Linkedin</span></button>
                        <button className={`${styles.modeBtn} ${styles.redBtn}`}><Google />&ensp;Sign Up <span className={styles.socialName}>&nbsp;via Google</span></button>
                    </div>
                    </>
                )
            }
        </div> 
    ) ;
}

export default SignUp;