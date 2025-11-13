
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
valid 	= validations 				= optional
label 	= label text 				= optional
descr 	= descr of field 			= optional
ph 		= placeholder 				= optional
readOnly= boolean (default : false)	= optional
type 	= [text/email/tel/password/url] (default : text)

*/

const Text = ({name, label, descr, ph, valid={}, register, errors, type='text', readOnly=false, prefix=null}) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;
	let placeholder = ph?ph:`Enter ${textLabel}` ;

	let propObj = {type, readOnly, placeholder} ;

	return (
		<div className={`${styles.inputField} ${readOnly&&styles.disabledInput} ${name}Text`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
			{
				prefix ? (
					<div className={styles.prefixCon}>
						<span className={styles.prefix}>{prefix}</span>
						<input id={name} {...propObj} {...register(name, valid)} />
					</div>
				) :	(
					<input id={name} {...propObj} {...register(name, valid)} />
				)
			}
			{descr && <span className={styles.formDescr}> {descr} </span>}
            {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel)}</span>}
        </div>
	) ;
}

export default Text ;