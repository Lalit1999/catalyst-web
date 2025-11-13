import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
label 	= label text 				= optional
descr 	= descr of field 			= optional
readOnly= boolean (default : false)	= optional

*/

const Color = ({name, label, descr, register, readOnly=false}) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;

	return (
		<div className={`${styles.inputField} ${name}ColorInput`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}</label>}
            <input id={name} type="color" readOnly={readOnly} {...register(name)} />
			{descr && <span className={styles.formDescr}> {descr} </span>}
        </div>
	) ;
}

export default Color ;