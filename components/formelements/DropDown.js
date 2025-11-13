
import styles from './form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
options = possible options dropdown	= required
onChange= onChange event handler 	= required
value 	= value 
reqd 	= reqd or not 				= optional
label 	= label text 				= optional
ph 		= placeholder 				= optional
descr 	= descr of field 			= optional

noPh 	= disable 'Select xyz'		= def : false
*/

const DropDown = ({name, label, descr, ph, options, reqd=false, onChange, value, noPh = false, disabled=false}) => {

	const onInputChange = event => {
		onChange(event.target.value) ;
	}

	if(name && options && options.length > 0 && onChange) {
		const capName = name.replace(/\b\w/g, ch => ch.toUpperCase()) ;
		const textLabel = label?label:capName ;
		const placeholder = ph?ph:`Select ${textLabel}` ;

		return (
			<div className={`${styles.inputField} ${name}DropDown`}>
				{textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{reqd&&<span className={styles.reqd}>*</span>}</label>}
				<select id={name} onChange={onInputChange} value={value} disabled={disabled}>
					{ !noPh && <option value="">{placeholder}</option> }
					{ options.map(opt=><option key={opt} value={opt}>{opt}</option>)}
				</select>
				{descr && <span className={styles.formDescr}> {descr} </span>}
			</div>
		) ;
	}
	else
		return <p> {!name && 'name, '}{!options && 'options, '}{!onChange && 'onChange '} prop is missing </p>
}

export default DropDown ;