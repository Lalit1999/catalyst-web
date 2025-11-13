
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
options = possible options dropdown	= required
valid 	= validations 				= optional
label 	= label text 				= optional
ph 		= placeholder 				= optional
descr 	= descr of field 			= optional

*/

const DropDown = ({name, label, descr, ph, options, valid={}, register, errors, noPh = false}) => {
	const capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	const textLabel = label?label:capName ;
	const placeholder = ph?ph:`Select ${textLabel}` ;

	return (
		<div className={`${styles.inputField} ${name}DropDown`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
			<select id={name} {...register(name, valid)}>
				{ !noPh && <option value="">{placeholder}</option> }
				{ options?.map(opt=><option key={opt} value={opt}>{opt}</option>)}
			</select>
			{descr && <span className={styles.formDescr}> {descr} </span>}
			{errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel)}</span>}
		</div>
	) ;
}

export default DropDown ;