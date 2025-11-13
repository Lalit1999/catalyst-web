// // requires 'react-boostrap-typeahead' installation

// import { Controller } from 'react-hook-form';
// import { Typeahead } from 'react-bootstrap-typeahead';
// import { useEffect } from 'react';

// import errMsg from '../errMsg.js' ;
// import styles from '../form.module.css';

// /* 	 PROPS NEEDED 

// name  	= name of component  		= required
// options = search values (array)     = required
// multiple= multi-value (boolean)     = optional
// allowNew= allow new values (boolean)= optional
// label 	= label text 				= optional
// descr 	= descr of field 			= optional
// ph 		= placeholder 				= optional
// valid 	= validations 				= optional

// */

// const SearchInput = ({ name, label, descr, options=[], multiple=false, allowNew=false, newSelectionPrefix='Add Item : ', ph, control, setValue,  errors, valid={}, def=[], maxLimit=null }) => {
// 	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase()) ;
// 	let textLabel = label?label:capName ;
// 	let placeholder = ph?ph:`Search ${textLabel}` ;

//     useEffect(() => setValue(name, typeof def === 'object'?def:[def]), [def, name, setValue]) ;
    
//     const onChange = e => {
//         let normalized = e.filter(one=>one).map(one=>typeof one === 'object'?one[name]:one) ;
//         if(maxLimit)
//             setValue(name, normalized.slice(0, maxLimit)) ;
//         else
//             setValue(name, normalized)
//     }

//     return (
//         <div className={`${styles.inputField} ${name}SearchInput`}>
//             {textLabel.length>1&&<label htmlFor={name}>{textLabel}&nbsp;{valid.required&&<span className={styles.reqd}>*</span>}</label>}
//             <Controller name={name} control={control} defaultValue={[]} render={() => (
//                 <Typeahead id={name} labelKey={name} options={options} placeholder={placeholder} flip onChange={onChange} multiple={multiple} allowNew={allowNew} newSelectionPrefix={newSelectionPrefix} defaultSelected={typeof def === 'object'?def:[def]} />
//             )} rules={valid}/>
//             {descr && <span className={styles.formDescr}> {descr} </span>}
//             {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errMsg(errors[name].type, textLabel)}</span>}
//         </div>
//     );
// };

// export default SearchInput;