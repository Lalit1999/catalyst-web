
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  		= name of component  		= required
valid 		= validations 				= optional
label 		= label text 				= optional
descr 		= descr of field 			= optional
ph 			= placeholder 				= optional
readOnly	= boolean (default : false)	= optional
maxLength	= max length 				= optional
rows/cols 	= no. of rows & columns 	= optional

*/

const TextArea = ({name, label, descr, ph, rows, cols, maxLength, valid={}, register, errors, readOnly=false})=>{
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;
	let placeholder = ph?ph:`Enter ${textLabel}` ;

	let propObj = {rows, cols, maxLength, readOnly, placeholder}
	
	return (
		<div className={`${styles.inputField} ${name}TextArea`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
            <textarea id={name} {...propObj} {...register(name, valid)} />
			{descr && <span className={styles.formDescr}> {descr} </span>}
            {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel)}</span>}
        </div>
	) ;
}

 export default TextArea ;