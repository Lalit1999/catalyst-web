"use client"
import React, { useRef } from 'react';
import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import styles from '../form.module.css';
import "intl-tel-input/styles";

const IntlTelInput = dynamic(
    () => import('intl-tel-input/reactWithUtils'),
    { 
        ssr: false, 
        loading: () => <div style={{height: '40px', background: '#f0f0f0', borderRadius: '4px'}}></div> 
    }
);

const IntlPhoneInput = ({ name, label, control, valid, errors, descr }) => {
    
    const isValidRef = useRef(false);

    return (
        // The styles.inputWrapper here now has 'flex: 1'
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            
            <Controller
                name={name}
                control={control}
                rules={{
                    ...valid,
                    validate: (value) => {
                        if (!valid?.required && !value) return true;
                        return isValidRef.current || "Invalid phone number";
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <IntlTelInput
                        value={value || ""}
                        onChangeNumber={onChange}
                        onChangeValidity={(isValid) => { isValidRef.current = isValid; }}
                        initOptions={{
                            initialCountry: "in",
                            separateDialCode: true,
                            countrySearch: true, // Make sure search is enabled
                            
                            // CHANGE THE TEXT WRITTEN INSIDE HERE:
                            i18n: { 
                                searchPlaceholder: "Search Country...", // Default is "Search"
                            }
                        }}
                        inputProps={{
                            // We don't apply width classes here because 
                            // we handled it in CSS via :global(.iti)
                            className: styles.inputField 
                        }}
                    />
                )}
            />

            {errors && errors[name] && (
                <span className={`${styles.formError} shakeHorizontal`}>
                    {errors[name]?.message || 'Invalid Phone Number'}
                </span>
            )}
            
            {descr && <span className={styles.description}>{descr}</span>}
        </div>
    );
};

export default IntlPhoneInput;