"use client" ;

import { useContext, useState } from 'react' ;

import { AppContext } from '@ac' ;
import { BasicForm } from '@comps';
import styles from './reportJob.module.css' ;

const reportArr = [
    {
        head: "I think it's spam or a scam",
        text: [
            "I think it's a scam, phishing or malware",
            "I think it's promotional or spam",
            "I think it's an illegal good or service",
        ]
    },
    {
        head: "I think it's discriminatory or offensive",
        text: [
            "I think it's discriminatory, or advocates, or supports discrimination",
            "I think it's offensive or harassing",
            "I think it shows or promotes extreme violence or terrorism",
        ]
    },
    {
        head: "I think something is broken or incorrect",
        text: [
            "This job is closed",
            "This job has an incorrect company",
            "This job has an incorrect location",
            "This job has incorrect formatting",
            "This job does not belong on PurpleHunt",
        ]
    },
] ;

const ReportJob = () => {
    const { setPopOpen, popContent } = useContext(AppContext) ;
    const [choice, setChoice] = useState('') ;

    const CheckBoxGroup = ({text}) => (
        <div className={styles.checkboxCon} >
            <input type="radio" name={text} checked={text===choice} onChange={()=>setChoice(text===choice?'':text)} />
            <label htmlFor={text} onClick={()=>setChoice(text===choice?'':text)}>{text}</label>
        </div>
    );

    const ReportComp = ({head, text}) => { 

        return (
            <div className={styles.sixBox} >
                <div className={styles.sixBoxTop} >
                    <p className={styles.sixBoxSubText}>{head}</p>
                </div>
                <div className={styles.sixBoxTextCon}>
                {
                    text.map((one, i) => <CheckBoxGroup key={i} text={one}/>)
                }
                </div>
            </div>
        ) ;
    }

    const onReportClick = async () => {
        // let resp = await patch('job/status', { hi: selected, status: 'deleted' }, orgToken) ;

        // if(resp?.error) {
        //     handleError(resp, resp.error) ;
        // }
        // else {
        //     if(resp.status) {
        //         addNotif('Job Deleted', 'success') ;
        //         setData(data.filter( one => one.hi !== selected)) ;
        //     }
        //     else {
        //         console.error(resp) ;
        //     }
        // }

        //eslint-disable-next-line
        console.log('Report Job Clicked', choice, popContent) ;

        setPopOpen(false) ;
    } ; 

    const formData = [
        { type: 'textArea', name: 'reportMsg', label: ' ', ph: 'Give reason for reporting', rows: 2 },
        { type: 'custom', component: (
            <div className={styles.buttonCon}>
                <button className={`${styles.reportBtn} ${styles.deleteBtn}`}>Report</button>
                <div className={`${styles.reportBtn} ${styles.cancelBtn}`} onClick={()=>setPopOpen(false)} >Cancel</div>
            </div>
        ) },
    ]

    return (
        <div className={styles.listPopup}>
            <p className={styles.boxTitle}>Why are you reporting this job?</p>
            <div className={styles.listPopupContent}> 
                <div className={styles.sixBoxCon}>
                {
                    reportArr.map((one, i)=><ReportComp key={i} {...one} />)
                }
                </div>
                <div className={styles.sixBoxOther}>
                    <p className={styles.sixBoxSubText}>Other reason</p>
                    <BasicForm data={formData} onFormSubmit={onReportClick} />
                </div>
            </div>
        </div>  
    ) ;
} ;

export default ReportJob ;