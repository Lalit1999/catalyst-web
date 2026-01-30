"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";

import { AppContext } from "@ac";
import { BasicForm } from "@comps";
import { post } from "@utils";
import styles from "./page.module.css";

export default function AdminLogin() {
    const router = useRouter();
    const [ errMsg, setErrMsg ] = useState("");
    const { loadAdmin } = useContext(AppContext);

    const onFormSubmit = async ({email, password}) => {
        let resp = await post('admin-login', {email, password}) ;

        if(resp?.error) {
            console.error(resp) ;
            setErrMsg(resp.error) ;
        }
        else {
            if(resp.token) {
                loadAdmin(resp.token) ;
                router.push("/access/dashboard");
            }
            else
                console.error(resp) ;
        }
    }

    const formData = [
        { type: 'email', name: 'email', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
        { type: 'password', name: 'password', valid: { required: true } },
        { type: 'custom', component: errMsg.length>0 && <span className="formError shakeHorizontal">{errMsg}</span>},
        { type: 'submit', text: 'Continue', style: styles.formBtn },
    ] ;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <BasicForm styleOR={styles.form} data={formData} onFormSubmit={onFormSubmit} />
            </div>
        </div>
    );
}
