"use client"
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { Country } from 'country-state-city';
import styles from '../form.module.css';

const CountrySelect = ({ name, label, control, valid, errors }) => {
    
    // Get all countries efficiently
    const countries = useMemo(() => Country.getAllCountries(), []);

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
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                                {country.name} {country.flag} 
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

export default CountrySelect;