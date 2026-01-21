"use client"
import { useEffect, useMemo, useRef } from 'react' ;
import { State } from 'country-state-city' ;

import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

const StateSelect = ({name, label, descr, ph, valid = {}, register, errors, noPh = false, watch, setValue}) => {
    const capName = name.replace(/\b\w/g, ch => ch.toUpperCase()) ;
    const textLabel = label ? label : capName ;
    const placeholder = ph ? ph : `Select ${textLabel}` ;

    const selectedCountry = typeof watch === 'function' ? watch('country') : '' ;

    const states = useMemo(() => {
        if(!selectedCountry)
            return [] ;
        return State.getStatesOfCountry(selectedCountry) ;
    }, [selectedCountry]) ;

    const didMountRef = useRef(false) ;
    useEffect(() => {
        if(!setValue)
            return ;
        if(!didMountRef.current) {
            didMountRef.current = true ;
            return ;
        }
        setValue(name, '') ;
    }, [selectedCountry, setValue, name]) ;

    const optionText = !selectedCountry ? 'Select Country First' : placeholder ;

    return (
        <div className={`${styles.inputField} ${name}DropDown`}>
            {textLabel.length > 1 && (
                <label htmlFor={name}>
                    {textLabel}&nbsp;{valid.required && <span className={styles.reqd}>*</span>}
                </label>
            )}
            <select id={name} {...register(name, valid)} disabled={!selectedCountry}>
                {!noPh && <option value="">{optionText}</option>}
                {states?.map(state => (
                    <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
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

export default StateSelect ;