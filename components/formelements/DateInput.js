
import styles from './form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  			= required
onChange= onChange event handler 		= required
value 	= value 
reqd 	= required or not (def: false)	= optional
label 	= label text 					= optional
descr 	= descr of field 				= optional
readOnly= boolean (default : false)		= optional
min		= min value	(yyyy-mm-dd)		= optional
max 	= max value (yyyy-mm-dd)		= optional

*/

const DateInput = ({name, label, descr, reqd=false, readOnly=false, min, max, onChange, value}) => {
	
	const onInputChange = event => onChange(event.target.value) 
	
	if(name && onChange) {
		let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
		let textLabel = label?label:capName ;

		let propObj = {min, max, readOnly, value} ;

		return (
			<div className={`${styles.inputField} ${name}DateInput`}>
				{textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{reqd&&<span className={styles.reqd}>*</span>}</label>}
				<input id={name} type="date" onChange={onInputChange} placeholder="Select a Date" {...propObj} />
				{textLabel===" " && !value && <span className={styles.formPhMob}> Select a Date </span>}
				{descr && <span className={styles.formDescr}> {descr} </span>}
			</div>
		) ;
	}
	else 
		return <p> {!name && 'name, '}{!onChange && 'onChange '} prop is missing </p>
}

export default DateInput ;