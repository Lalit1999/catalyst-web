import styles from '../form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  		= required
label 	= label text 				= optional
descr 	= descr of field 			= optional
readOnly= boolean (default : false)	= optional
min		= min value					= optional
max 	= max value 				= optional
step 	= step by amount			= optional

*/

const Range = ({name, label, descr, register, readOnly=false, min=0, max=100, step=1}) => {
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
	let textLabel = label?label:capName ;

	let propObj = {min, max, step, readOnly} ;

	/* Display min & max values, write nice CSS for this component */

	return (
		<div className={`${styles.inputField} ${name}Range`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}</label>}
            <input id={name} type="range" {...propObj} {...register(name)} />
			{descr && <span className={styles.formDescr}> {descr} </span>}
        </div>
	) ;
}

export default Range ;