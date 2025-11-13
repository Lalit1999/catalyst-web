"use client"

import { useState, useContext } from "react";
import { useRouter } from 'next/navigation' ;
import Link from 'next/link' ;

import { AppContext } from '@ac' ;
import { BasicForm } from '@comps' ;
import { Person, Job } from '@icons' ;
import { post, addNotif, remNotif } from '@utils' ;

import styles from '../pop.module.css' ;
import styles2 from '@c/basicform/form.module.css' ;

const SignIn = ({ init="user" }) => {
    const { setPopContent, loadUser, setPopOpen, loadOrg } = useContext(AppContext) ; 

    const [errMsg, setErrMsg] = useState('') ;
    const [mode, setMode] = useState(init==='user'?'Individual':(init==='org'?'Organization':null)) ;
    const router = useRouter() ;

    const onFormSubmit = async ({email, password}) => {
        addNotif('Signing In...', 'loading') ;

        let obj = { Individual: 'login', Organization: 'org-login' } ;

        let resp = await post(obj[mode], {email, password}) ;

        if(resp?.error) {
            console.error(resp) ;
            remNotif() ;
            setErrMsg(resp.error, 'error') ;
        }
        else {
            if(resp.token) {
                remNotif() ;
                addNotif('Signed In', 'success') ;
                if(obj[mode]==='login') {
                    loadUser(resp) ;
                    const { user } = resp ;
                    if ( user?.fname?.length > 0 )
                        router.push(`/dashboard`) ;
                    else
                        router.push('/dashboard/complete-profile') ;
                }
                else if(obj[mode]==='org-login') {
                    loadOrg(resp) ;
                    const permissions = resp.org.permissions ;
                    if(permissions.includes('odb')) {
                        router.push('/org-dashboard') ;
                    }
                    else if(permissions.includes('op')) {
                        router.push('/org-dashboard/profile') ;
                    }
                    else if(permissions.includes('jm')) {
                        router.push('/org-dashboard/manage-jobs') ;
                    }
                }
                setPopOpen(false) ;
            }
            else {
                console.error(resp) ;
                remNotif() ;
            }
        }
    }

    const formData = [
        { type: 'email', name: 'email', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
        { type: 'password', name: 'password', valid: { required: true } },
        { type: 'custom', component: errMsg.length>0 && <span className={`${styles2.formError} shakeHorizontal`}>{errMsg}</span>},
        { type: 'custom', component: <p className={`${styles.sifText} ${styles.rtText}`} onClick={() => setPopContent('forgot')}> Forgot Password ? </p> },
        { type: 'submit', text: 'Continue', style: styles.blackBtn },
        { type: 'custom', component: <p className={styles.sifText}>Are you a new user ? <span className={styles.blueText} onClick={() => setPopContent(`signUp-${mode==='Individual'?'user':'org'}`)}>Sign Up</span> </p> },
    ] ;

    return (
        <div className={styles.loginPopup}> 
            <div className={styles.lpHead}>
                <p className={styles.lpTitle}>Sign In to your Account</p>
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
                    </>
                )
            }
            <div className={styles.sifText}>
                By signing in, you agree to our <Link href="#" className={styles.blueText}>Terms of Service</Link> and <Link href="#" className={styles.blueText}>Privacy Policy</Link>
            </div>
        </div> 
    ) ;
}

export default SignIn;