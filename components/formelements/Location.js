"use client"

import Button from 'react-bootstrap/Button' ; 

import { revGeoCode, getAddress } from '@utils' ;
import MapContainer from './MapContainer.js' ;
import styles from './form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  					= required
onChange= onChange event handler 				= required
value 	= value 
reqd 	= required or not (def: false)			= optional
label 	= label text 							= optional
descr 	= descr of field 						= optional
col 	= flex direction column or not 			= optional

*/

const Location = ({ name, label, descr, reqd=false, onChange, value }) => {

    const onLocationChange = async coords => {
        const locData = await revGeoCode(coords) ;
		const obj = {
			...locData,
			state 	: getAddress(locData?.addressObj, 'administrative_area_level_1'),
			city 	: getAddress(locData?.addressObj, 'administrative_area_level_3'),
			local 	: getAddress(locData?.addressObj, 'locality'),
			pinCode : getAddress(locData?.addressObj, 'postal_code'),
		}
        onChange(obj) ;
    }

    const onReset = () => onChange(false) ;

	if(name && onChange) {
		let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
		let textLabel = label?label:capName ;

		return (
			<div className={`${styles.locationField} ${name}Location`}>
				{textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{reqd&&<span className={styles.reqd}>*</span>}</label>}
				{ 	value && value?.addressText?.length > 0?(
					<div className={styles.locCon}>
						<div className={styles.locLeft}>
							<p className={styles.locText}>{value.addressText}</p>
							<p className={styles.locText}><strong>State :</strong>&ensp;{value?.state}</p>
							<p className={styles.locText}><strong>District :</strong>&ensp;{value?.city}</p>
							<p className={styles.locText}><strong>Locality :</strong>&ensp;{value?.local}</p>
							<p className={styles.locText}><strong>Pin Code :</strong>&ensp;{value?.pinCode}</p>
						</div>
						<div className={styles.locBtnCon}>
							<Button className={styles.blueBtn} onClick={onReset}>Reset</Button>
						</div>
					</div>
					): (
						<div className={styles.locCol}>
							<MapContainer onLocationSelect={onLocationChange} />
						</div>
					)
				}
				{descr && <span className={styles.formDescr}> {descr} </span>}
			</div>
		) ;
	}
	else 
		return <p> {!name && 'name, '}{!onChange && 'onChange '} prop is missing </p>
}

export default Location ;