"use client"
import React, { useMemo, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { City } from 'country-state-city';
import styles from '../form.module.css';

const CitySelect = ({ name, label, control, valid, errors, watch, setValue }) => {
    
    // 1. Watch both Country and State
    const selectedCountry = watch('country');
    const selectedState = watch('state');

    // 2. Fetch cities based on Country AND State
    const cities = useMemo(() => {
        if (!selectedCountry || !selectedState) return [];
        return City.getCitiesOfState(selectedCountry, selectedState);
    }, [selectedCountry, selectedState]);

    // 3. Reset logic: If State changes, reset City
    useEffect(() => {
    }, [selectedState, setValue, name]);

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
                        className={styles.selectField} // Uses the same class we made for Country/State
                        disabled={!selectedState || cities.length === 0}
                    >
                        <option value="">
                            {!selectedState 
                                ? "Select State First" 
                                : cities.length === 0 
                                    ? "No cities found (Type manually if needed)" 
                                    : "Select City"
                            }
                        </option>
                        
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                                {city.name}
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

export default CitySelect;