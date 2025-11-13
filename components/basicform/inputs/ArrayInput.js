import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { Close } from '@icons' ;
import styles from '../form.module.css';

/* PROPS NEEDED

name        = name of component  = required
label       = label text         = optional
descr       = descr of field     = optional
ph          = placeholder        = optional
required    = required or not    = optional
*/

const ArrayInput = ({ name, label, descr, ph, required = false, control, setValue, btnText='+ Add Paragraph', def, errors }) => {
    const [arrayValues, setArrayValues] = useState(def?def:['']);
    let capName = name.replace(/\b\w/g, ch => ch.toUpperCase());
    let textLabel = label ? label : capName;
    let placeholder = ph ? ph : `Enter ${textLabel}`;

    useEffect(() => setValue(name, arrayValues.filter(val => val.trim() !== '')), [setValue, name, arrayValues]);

    const handleInputChange = (index, value) => {
        const newArray = [...arrayValues];
        newArray[index] = value;
        setArrayValues(newArray);
    };

    const handleAddElement = () => {
        if (arrayValues.every(val => val.trim() !== '')) {
            setArrayValues([...arrayValues, '']);
        }
    };

    const handleRemoveElement = (index) => {
        const newArray = arrayValues.filter((_, idx) => idx !== index);
        setArrayValues(newArray.length ? newArray : ['']);
    };

    return (
        <div className={`${styles.inputField} ${name}ArrayInput`}>
            {textLabel.length > 1 && <label htmlFor={name}>{textLabel}&nbsp;{required&&<span className={styles.reqd}>*</span>}</label>}
            <Controller name={name} control={control} defaultValue={[]} render={() => (
                    <div className={styles.arrayInputContainer}>
                        {arrayValues.map((value, index) => (
                            <div key={index} className={styles.arrayInputRow}>
                                <input type="text" value={value} placeholder={placeholder} onChange={(e) => handleInputChange(index, e.target.value)} />
                                <Close className={styles.arrayCancelIcon} onClick={() => handleRemoveElement(index)} />
                            </div>
                        ))}
                        {errors[name] && <span className={`${styles.formError} shakeHorizontal`}>{errors[name].message}</span>}
                        <div className={`${styles.formBtn} ${arrayValues.some(val => val.trim()==='')?styles.disabled:''}`} onClick={handleAddElement}>{btnText}</div>
                    </div>
            )} rules={required?{validate: value=>value.length > 0 || `${textLabel} cannot be empty. Please add at least one entry.` }:{}}/>
            {descr && <span className={styles.formDescr}>{descr}</span>}
        </div>
    );
};

export default ArrayInput;
