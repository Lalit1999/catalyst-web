import styles from '../form.module.css';

/* 	 PROPS NEEDED 

text 	= link text 			= optional
style  	= style class   		= optional

*/

const Submit = ({text, style, disabled=false}) => {
	return <input type="submit" className={`${style} ${disabled?styles.disabled:''}`} value={text?text:'Submit'} disabled={disabled} /> ;
}

export default Submit ;