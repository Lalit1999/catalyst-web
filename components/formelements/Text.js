
import styles from './form.module.css' ;

/* 	 PROPS NEEDED 

name  	= name of component  			= required
onChange= onChange event handler 		= required
value 	= value 
onEnter = enter event handler 			= optional
reqd 	= required or not (def: false)	= optional
maxLength	= Maximum Length 			= optional
label 	= label text 					= optional
descr 	= descr of field 				= optional
ph 		= placeholder 					= optional
readOnly= boolean (default : false)		= optional
type 	= [text/email/tel/password/url] (default : text)

*/

const Text = ({name, label, descr, ph, reqd=false, type='text', readOnly=false, maxLength, onChange, onEnter, value, prefix = null}) => {

	const onInputChange = event => onChange(event.target.value) 

	const onKeyDown = ({key}) => {
		if (key === 'Enter')
			if(onEnter)
				onEnter();
			else
				console.error('No Enter Handler') ;
	}

	if(name && onChange) {
		let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
		let textLabel = label?label:capName ;
		let placeholder = ph?ph:`Enter ${capName}` ;
		
		let propObj = {type, readOnly, placeholder, value, maxLength, onKeyDown } ;

		return (
			<div className={`${styles.inputField} ${name}Text`}>
				{textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{reqd&&<span className={styles.reqd}>*</span>}</label>}
				{
					prefix ? (
						<div className={styles.prefixCon}>
							<span className={styles.prefix}>{prefix}</span>
							<input id={name} onChange={onInputChange} {...propObj} />
						</div>
					) :	(
						<input id={name} onChange={onInputChange} {...propObj} />
					)
				}
				{descr && <span className={styles.formDescr}> {descr} </span>}
			</div>
		) ;
	} 
	else 
		return <p> {!name && 'name, '}{!onChange && 'onChange '} prop is missing </p>
}

export default Text ;