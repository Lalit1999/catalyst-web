"use client"
import React, { useEffect, useMemo, useRef } from 'react' ;
import { City } from 'country-state-city' ;

import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

const CitySelect = ({name, label, descr, ph, valid = {}, register, errors, noPh = false, watch, setValue}) => {
    const capName = name.replace(/\b\w/g, ch => ch.toUpperCase()) ;
    const textLabel = label ? label : capName ;
    const placeholder = ph ? ph : `Select ${textLabel}` ;

    const selectedCountry = typeof watch === 'function' ? watch('country') : '' ;
    const selectedState = typeof watch === 'function' ? watch('state') : '' ;

    const cities = useMemo(() => {
        if(!selectedCountry || !selectedState)
            return [] ;
        return City.getCitiesOfState(selectedCountry, selectedState) ;
    }, [selectedCountry, selectedState]) ;

    const didMountRef = useRef(false) ;
    useEffect(() => {
        if(!setValue)
            return ;
        if(!didMountRef.current) {
            didMountRef.current = true ;
            return ;
        }
        setValue(name, '') ;
    }, [selectedCountry, selectedState, setValue, name]) ;

    const optionText = !selectedState
        ? 'Select State First'
        : cities.length === 0
            ? 'No cities found (Type manually if needed)'
            : placeholder ;

    return (
        <div className={`${styles.inputField} ${name}DropDown`}>
            {textLabel.length > 1 && (
                <label htmlFor={name}>
                    {textLabel}&nbsp;{valid.required && <span className={styles.reqd}>*</span>}
                </label>
            )}
            <select id={name} {...register(name, valid)} disabled={!selectedState || cities.length === 0}>
                {!noPh && <option value="">{optionText}</option>}
                {cities?.map(city => (
                    <option key={city.name} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
            {descr && <span className={styles.formDescr}> {descr} </span>}
            {errors?.[name] && (
                <span className={`${styles.formError} shakeHorizontal`}>
                    {errMsg(errors[name].type, textLabel)}
                </span>
            )}
        </div>
    ) ;
} ;

export default CitySelect ;