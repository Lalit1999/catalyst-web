'use client';

import { useMemo, useContext } from 'react';

import { BasicForm } from '@comps';
import { programsDetailsArr } from '@data';
import { AppContext } from '@ac' ;
import styles from './page.module.css';
import program from '../training-programs/[id]/page';

const genderOptions = ['Female', 'Male'];
const countryOptions = ['India', 'United States', 'Singapore', 'United Arab Emirates'];
const stateOptions = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'New York', 'California', 'Texas'];
const cityOptions = ['New Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Hyderabad', 'New York City', 'San Francisco'];
const participantCategoryOptions = ['Indian Participant', 'Foreign Nationals'];
const qualificationOptions = [
    'High School / Diploma',
    `Bachelor's Degree`,
    `Master's Degree`,
    'PhD / Doctorate',
    'Other',
];
const divisionOptions = ['Distinction', 'First Division', 'Second Division', 'Third Division'];
const yesNoOptions = ['Yes', 'No'];
const phonePattern = /^[0-9+\-\s]{7,15}$/;
const today = new Date().toISOString().split('T')[0];

const SectionHeading = ({ title, subtitle }) => (
    <div className={styles.sectionHeading}>
        <p className={styles.sectionEyebrow}>{title}</p>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
);

const DualSectionHeading = () => (
    <div className={styles.dualSection}>
        <div>
            <SectionHeading
                title="5. Participant Category"
                subtitle="This helps us display the correct fee structure."
            />
        </div>
        <div>
            <SectionHeading
                title="6. Working Professional"
                subtitle="Let us know your current work status."
            />
        </div>
    </div>
);

const RegistrationFormPage = () => {
    const programOptions = useMemo(() => {
        return Object.values(programsDetailsArr).map(({ heading }) => heading).filter(Boolean);
    }, []);

    const { course } = useContext(AppContext);

    const selectedProgram = useMemo(() => {
        return programsDetailsArr?.[course]?.heading ;
    }, [course, programOptions]);

    const registrationFormData = [
        { type: 'custom', component: (
                <SectionHeading
                    title="1. Select Program"
                    subtitle="Pick the program or cohort you plan to enrol in."
                />
            ),
        },
        { type: 'dropdown', name: 'program', label: 'Program', options: programOptions, valid: { required: true } },
        { type: 'custom', component: (
                <SectionHeading
                    title="2. Personal Details"
                    subtitle="Tell us who you are so we can keep your records accurate."
                />
            ),
        },
        { type: 'row', children: [
                { type: 'text', name: 'Name', label: 'Name', valid: { required: true, minLength: 2 } },
                { type: 'dropdown', name: 'gender', label: 'Gender', options: genderOptions, valid: { required: true } },
            ],
        },
        { type: 'row', children: [
                { type: 'email', name: 'email', label: 'Email', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
                { type: 'date', name: 'dob', label: 'Date of Birth', max: today, valid: { required: true }},
            ],
        },
        { type: 'row', children: [
                { type: 'tel', name: 'phone', label: 'Phone Number', ph: '90 0000 0000', valid: { required: true, pattern: phonePattern }},
                { type: 'tel', name: 'whatsapp', label: 'WhatsApp Number', ph: '90 0000 0000', valid: { required: true, pattern: phonePattern }},
            ],
        },
        { type: 'custom', component: (
                <SectionHeading
                    title="3. Address Details"
                    subtitle="Let us know where you are currently based."
                />
            ),
        },
        { type: 'text', name: 'addressLine1', label: 'Address Line 1', valid: { required: true, minLength: 5 } },
        { type: 'text', name: 'addressLine2', label: 'Address Line 2', descr: 'Optional' },
        { type: 'row', children: [
                { type: 'dropdown', name: 'country', label: 'Country', options: countryOptions, valid: { required: true } },
                { type: 'dropdown', name: 'state', label: 'State', options: stateOptions, valid: { required: true } },
            ],
        },
        { type: 'row', children: [
                { type: 'dropdown', name: 'city', label: 'City', options: cityOptions, valid: { required: true } },
                { type: 'number', name: 'pincode', label: 'Pincode', valid: { required: true, min: 100000 } },
            ],
        },
        { type: 'custom', component: (
                <SectionHeading
                    title="4. Academic Details"
                    subtitle="Share your education background."
                />
            ),
        },
        { type: 'row', children: [
                { type: 'dropdown', name: 'qualification', label: 'Highest Qualification', options: qualificationOptions, valid: { required: true } },
                { type: 'text', name: 'institution', label: 'Name of Institution', valid: { required: true, minLength: 3 } },
            ],
        },
        { type: 'row', children: [
                { type: 'number', name: 'yearOfPassing', label: 'Year of Passing', valid: { required: true, min: 1950, max: new Date().getFullYear() } },
                { type: 'dropdown', name: 'division', label: 'Division', options: divisionOptions, valid: { required: true }},
            ], 
        },
        { type: 'custom', component: <DualSectionHeading /> },
        { type: 'row', children: [
                { type: 'dropdown', name: 'category', label: 'Category', options: participantCategoryOptions, valid: { required: true } },
                { type: 'dropdown', name: 'workingProfessional', label: 'Are you working currently?', options: yesNoOptions, valid: { required: true }},
            ],
        },
        { type: 'custom', component: (
                <p className={styles.disclaimer}>
                    By submitting this form you agree to receive important course updates on the contact details shared above.
                </p>
            ),
        },
        { type: 'submit', text: 'Submit Registration', style: styles.submitBtn },
    ];

    const handleSubmit = (values) => {
        console.log('Registration form submitted', values);
    };

    console.log('Selected Program:', selectedProgram);
    console.log('Course from Context:', course);

    return (
        <div  className={styles.registrationMainPage}>            
            <div className={styles.startHead}>
                <div className={styles.headSection}>
                    <h1 className={styles.main_bread}>Home</h1>
                    <h1 className={styles.main_bread}>&rarr;</h1>
                    <h1 className={styles.main_bread}>Online Registration</h1>
                </div>
                <div className={styles.headDesc} >
                    <p className={styles.breadContent}>Online Registration Form</p>
                    <p className={styles.headContent}>Fill out the information below and our academic counselors will reach out with the onboarding kit.</p>
                </div>
            </div>
            <div className={styles.registrationPage}>
                <div className={styles.formCard}>
                    <BasicForm styleOR={styles.formGrid} data={registrationFormData} onFormSubmit={handleSubmit} defaultObj={{program:selectedProgram}} />
                </div>
            </div>
        </div>
    );
};

export default RegistrationFormPage;