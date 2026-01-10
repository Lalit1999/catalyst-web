"use client"

import { useState, useEffect } from 'react';

import { countryArr } from '@data';
import DropDown from './DropDown.js';
import Text from './Text.js';
import styles from './form.module.css';

const Address = ({ defaultValues = {}, onChange, hidePinCode = false }) => {
    const [statesList, setStatesList] = useState(['Select State', defaultValues.state]);
    const [citiesList, setCitiesList] = useState(['Select City', defaultValues.city]);
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", process.env.NEXT_PUBLIC_COUNTRY);
    var requestOptions = { method: 'GET', headers: headers, redirect: 'follow' };

    // Fetch states when the country changes
    useEffect(() => {
        const fetchStates = async () => {
            if (defaultValues.country) {
                const code = defaultValues.country.split(' - ')[1] ;

                if(code) {
                    try {
                        const resp = await fetch(`https://api.countrystatecity.in/v1/countries/${code}/states`, requestOptions) ;
                        const data = await resp.json() ;
                        
                        setStatesList(data.map(state => `${state.name} - ${state.iso2}`).sort() || []);
                        onChange({ ...defaultValues, state: defaultValues.state || '', city: defaultValues.city || '' });
                        setCitiesList(['Select City', defaultValues.city]);
                    }
                    catch(err) {
                        console.error(err) ;
                    }
                }
            }
        };
        fetchStates();
        //eslint-disable-next-line
    }, [defaultValues.country]);

    // Fetch cities when the state changes
    useEffect(() => {
        const fetchCities = async () => {
            if (defaultValues.country && defaultValues.state) {
                const _code = defaultValues.country.split(' - ')[1] ;
                const code = defaultValues.state.split(' - ')[1] ;

                if(code) {
                    try {
                        const resp = await fetch(`https://api.countrystatecity.in/v1/countries/${_code}/states/${code}/cities`, requestOptions) ;
                        const data = await resp.json() ;
                        setCitiesList(data.map(city=>city.name).sort() || []);
                        onChange({ ...defaultValues, city: defaultValues.city || '' });
                    }
                    catch(err) {
                        console.error(err) ;
                    }
                }
            }
        };
        fetchCities();
        //eslint-disable-next-line
    }, [defaultValues.state]);

    const handleChange = (field, value) => onChange({ ...defaultValues, [field]: value })

    return (
        <div className={styles.formRow}>
            <DropDown label="Country" name="country" value={defaultValues.country || ''} options={countryArr} onChange={(value) => handleChange('country', value)} reqd />
            
            <DropDown label="State" name="state" value={defaultValues.state || ''} options={statesList} onChange={(value) => handleChange('state', value)} reqd disabled={!defaultValues?.country?.split(' - ')[1]} />
            
            <DropDown label="City" name="city" value={defaultValues.city || ''} options={citiesList} onChange={(value) => handleChange('city', value)} reqd disabled={!(defaultValues?.country?.split(' - ')[1] && defaultValues?.state?.split(' - ')[1])} />
            
            { !hidePinCode && <Text name="pinCode" type="tel" placeholder="Pincode" value={defaultValues.pinCode || ''} onChange={v => handleChange('pinCode', v)} reqd pattern="\d{6}" />
            }
        </div>
    );
};

export default Address;