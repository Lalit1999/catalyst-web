
import errMsg from '../errMsg.js' ;
import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
valid 	= validations 				= optional
label 	= label text 				= optional
descr 	= descr of field 			= optional

*/

const Checkbox = ({name, label, descr, valid={}, register, errors, def }) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;

	return (
		<div className={`${styles.inputField} ${styles.inputFieldCheckBox} ${name}Checkbox`}>
            <div className={styles.checkboxCon}>
                <input type="checkbox" defaultChecked={def} id={name} {...register(name, valid)} />
                {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
            </div>
			{descr && <span className={styles.formDescr}> {descr} </span>}
            {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, capName)}</span>}
        </div>
	) ;
}

export default Checkbox ;