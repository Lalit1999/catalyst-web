
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
valid 	= validations 				= optional
label 	= label text 				= optional
descr 	= descr of field 			= optional
readOnly= boolean (default : false)	= optional
min		= min value	(yyyy-mm-dd)	= optional
max 	= max value (yyyy-mm-dd)	= optional

*/

const DateInput = ({name, label, descr, valid={}, register, errors, readOnly=false, min, max}) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;

	let propObj = {min, max, readOnly} ;

	return (
		<div className={`${styles.inputField} ${name}DateInput`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
            <input id={name} type="date" {...propObj} {...register(name, valid)} />
			{descr && <span className={styles.formDescr}> {descr} </span>}
            {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel, valid.max, valid.min)}</span>}
        </div>
	) ;
}

export default DateInput ;