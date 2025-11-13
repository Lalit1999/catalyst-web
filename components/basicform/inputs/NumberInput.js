
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
valid 	= validations 				= optional
label 	= label text 				= optional
descr 	= descr of field 			= optional
ph 		= placeholder 				= optional
readOnly= boolean (default : false)	= optional
min		= min value					= optional
max 	= max value 				= optional
step 	= step by amount			= optional

*/

const NumberInput = ({name, label, descr, ph, valid={}, register, errors, readOnly=false, min, max, step}) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;
	let placeholder = ph?ph:`Enter ${textLabel}` ;

	let propObj = {min, max, step, readOnly, placeholder} ;

	return (
		<div className={`${styles.inputField} ${name}NumberInput`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
            <input id={name} type="number" {...propObj} {...register(name, valid)} />
			{descr && <span className={styles.formDescr}> {descr} </span>}
            {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel, valid.max, valid.min)}</span>}
        </div>
	) ;
}

export default NumberInput ; 