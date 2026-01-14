"use client"
import React, { useMemo, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { State } from 'country-state-city';
import styles from '../form.module.css';

const StateSelect = ({ name, label, control, valid, errors, watch, setValue }) => {
    
    // 1. Watch the 'country' field value
    const selectedCountry = watch('country');

    // 2. Fetch states based on the selected country
    const states = useMemo(() => {
        if (!selectedCountry) return [];
        return State.getStatesOfCountry(selectedCountry);
    }, [selectedCountry]);

    useEffect(() => {

        if (selectedCountry) {
        }
    }, [selectedCountry]);

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            
            <Controller
                name={name}
                control={control}
                rules={valid}
                render={({ field }) => (
                    <select 
                        {...field} 
                        className={styles.selectField}
                        disabled={!selectedCountry} 
                    >
                        <option value="">
                            {!selectedCountry ? "Select Country First" : "Select State"}
                        </option>
                        
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                )}
            />

            {errors && errors[name] && (
                <span className={styles.errorMsg}>
                    {errors[name]?.message || 'Required'}
                </span>
            )}
        </div>
    );
};

export default StateSelect;