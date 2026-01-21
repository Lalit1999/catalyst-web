'use client';

import { useMemo, useContext, useEffect, useState } from 'react';

import { BasicForm, Title } from '@comps';
import { programsDetailsArr } from '@data';
import { AppContext } from '@ac' ;
import styles from './page.module.css';

const genderOptions = ['Female', 'Male'];
const categoryOptions = ['Indian Participant', 'Foreign Nationals'];
const qualificationOptions = ['High School / Diploma', `Bachelor's Degree`, `Master's Degree`, 'PhD / Doctorate', 'Other' ];
const divisionOptions = ['Distinction', 'First Division', 'Second Division', 'Third Division'];

const SectionHeading = ({ title, subtitle }) => (
    <div className={styles.sectionHeading}>
        <p className={styles.sectionEyebrow}>{title}</p>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
);

const RegistrationFormPage = () => {
    const [today, setToday] = useState('') ;

    useEffect(() => {
        setToday(new Date().toISOString().split('T')[0]) ;
    }, []) ;

    const programOptions = useMemo(() => {
        return Object.values(programsDetailsArr).map(({ heading }) => heading.split('<br />').join('')).filter(Boolean);
    }, []);

    const { course } = useContext(AppContext);

    const selectedProgram = useMemo(() => {
                const heading = programsDetailsArr?.[course]?.heading ;
                if(!heading)
			return '' ;
		return heading.split('<br />').join('') ;
    }, [course]);

    const registrationFormData = [
        {   type: 'custom', component: <SectionHeading title="1. Select Program" /> },
        {   type: 'dropdown', name: 'program', options: programOptions, valid: { required: true } },
        
        {   type: 'custom', component: <SectionHeading title="2. Participant Category" /> },
        {   type: 'dropdown', name: 'category', options: categoryOptions, valid: { required: true } },
        
        {   type: 'custom', component: <SectionHeading title="3. Personal Details" /> },
        {   type: 'row', children: [
                { type: 'text', name: 'name', valid: { required: true, pattern: /^[A-Za-z\s]+$/ } },
                { type: 'dropdown', name: 'gender', options: genderOptions, valid: { required: true } },
            ],
        },
        {   type: 'row', children: [
                { type: 'email', name: 'email', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
				{ type: 'date', name: 'dob', label: 'Date of Birth', max: today || undefined, valid: { required: true }},
            ],
        },
        {   type: 'row', children: [
            { type: 'phone', name: 'phone', label: 'Phone Number', valid: { required: true } },
            { type: 'phone', name: 'whatsapp', label: 'WhatsApp Number', valid: { required: true } },
            ],
        },
    
        {   type: 'custom', component: <SectionHeading title="4. Address Details" /> },
        {   type: 'textArea', name: 'address', rows: 3, valid: { required: true } },
        {   type: 'row', children: [
                { type: 'country', name: 'country', valid: { required: true } },
                { type: 'state', name: 'state', valid: { required: true } },
            ],
        },
        {   type: 'row', children: [
                { type: 'city', name: 'city', valid: { required: true } },
                { type: 'number', name: 'pincode', valid: { required: true, minLength: 4 } },
            ],
        },

        {   type: 'custom', component: <SectionHeading title="5. Academic Details" /> },
        {   type: 'row', children: [
                { type: 'dropdown', name: 'qualification', label: 'Highest Qualification', options: qualificationOptions, valid: { required: true } },
                { type: 'text', name: 'institution', label: 'Name of Institution', valid: { required: true, minLength: 3 } },
            ],
        },
        {   type: 'row', children: [
                { type: 'number', name: 'yearOfPassing', label: 'Year of Passing', valid: { required: true, min: 1950, max: new Date().getFullYear() } },
                { type: 'dropdown', name: 'division', label: 'Division', options: divisionOptions, valid: { required: true }},
            ], 
        },
            
        {   type: 'custom', component: <SectionHeading title="6. Working Professional" /> },
        {   type: 'checkbox', name: 'working', label: 'I am currently working' },

        {   type: 'custom', component: <SectionHeading title="7. Applicant Declaration" /> },
        {   type: 'custom', component: (
                <p className={styles.disclaimer}>
                    <strong>I hereby declare that,</strong><br/>
                    I have read the Information Brochure and understood the eligibility criteria. I fulfill the eligibility criteria and I have provided necessary information in this regard. In the event of any incorrect or misleading information, my candidature shall be liable for cancellation at any time and I shall not be entitled to any claim for readmission/reimbursement/certification.
                </p>
            ),
        },
        {   type: 'checkbox', name: 'declaration', label: 'I agree' },

        {   type: 'custom', component: <SectionHeading title="8. Applicant Understanding" /> },
        {   type: 'custom', component: (
                <div className={styles.disclaimer}>
                    <strong>I understand that,</strong>
                    <ul>
                        <li> No employment or recruitment is guaranteed by Catalyst Clinical Services Pvt. Ltd. pursuant to completion of the training program(s). </li>
                        <li>No representation as regards affiliation of the program(s) from any university or government educational institute is made.</li>
                        <li>Catalyst Clinical Services Pvt. Ltd. reserves the right to change the rules and regulations from time to time in its sole and absolute discretion. If any such change is made, the latest amended rule/regulation would be applicable.</li>
                        <li>The enrolment in the training program(s) is subject to the realization of program fee.</li>
                        <li>Catalyst Clinical Services Pvt. Ltd. shall not be responsible for postal delays of the study material.</li>
                        <li>The fee paid by me for the training program(s) is non-refundable, non-transferable under any circumstances whatsoever.</li>
                        <li>I will receive information on various training programs, job openings, industry news and promotional offers from Catalyst Clinical Services Pvt. Ltd. and group companies via email/SMS/WhatsApp and I agree to such access.</li>
                    </ul>
                </div>
            ),
        },
        {   type: 'checkbox', name: 'declaration', label: 'I understand' },

        {   type: 'submit', text: 'Proceed to Payment', style: styles.submitBtn },
    ];

    const handleSubmit = (values) => {
        console.log('Registration form submitted', values, selectedProgram);
    };


    return (
        <div  className={styles.registrationMainPage}>            
            <Title bread='Online Registration' heading='Online Registration Form' description='Fill out the information below and our academic counselors will reach out with the onboarding kit.' />
            <div className={styles.registrationPage}>
                <div className={styles.formCard}>
                    <BasicForm styleOR={styles.formGrid} data={registrationFormData} onFormSubmit={handleSubmit} defaultObj={{program:selectedProgram}} />
                </div>
            </div>
        </div>
    );
};

export default RegistrationFormPage;