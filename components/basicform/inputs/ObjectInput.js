import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { Close } from '@icons';
import DropDown from '../../formelements/DropDown.js';
import styles from '../form.module.css';

const ObjectInput = ({ name, label, required=false, control, setValue, def, availableKeys, validationRules={} }) => {
    const initialValues = Object.entries(def || {}).filter(([key, value]) => key && value !== undefined).map(([key, value]) => ({ key, value }));
    const [objectValues, setObjectValues] = useState(initialValues.length ? initialValues : [{ key: '', value: '' }]);

    let capName = name.replace(/\b\w/g, ch => ch.toUpperCase());
    let textLabel = label || capName;

    useEffect(() => {
        const obj = Object.fromEntries(objectValues.filter(({ key, value }) => key&&value&&isNaN(Number(key))).map(({ key, value }) => [key, value]));
        setValue(name, obj);

        objectValues.forEach((obj, index) => {
            if (obj.key && validationRules[obj.key]) {
                setValue(`${name}.${index}.value`, obj.value, { shouldValidate: true });
            }
        });
    }, [setValue, name, objectValues, validationRules]);

    const getRemainingKeys = (currentKey='') => {
        const usedKeys = objectValues.map(obj => obj.key).filter(Boolean);
        return availableKeys.filter(key => !usedKeys.includes(key) || key === currentKey);
    };

    const handleInputChange = (index, field, value) => {
        const newArray = [...objectValues];
        newArray[index][field] = value;
        setObjectValues(newArray);
        
        if (field === 'key') {
            setValue(`${name}.${index}.value`, newArray[index].value, { shouldValidate: true });
        }
    };

    const handleAddElement = () => {
        if (objectValues.every(obj => obj.key && obj.value)) {
            const remainingKeys = getRemainingKeys();
            if (remainingKeys.length > 0) setObjectValues([...objectValues, { key: '', value: '' }]);
        }
    };

    const handleRemoveElement = (index) => {
        const newArray = objectValues.filter((_, idx) => idx !== index);
        setObjectValues(newArray.length ? newArray : [{ key: '', value: '' }]);
        setValue(name, Object.fromEntries(newArray.filter(({ key, value }) => key&&value&&isNaN(Number(key))).map(({ key, value }) => [key, value])));
    };

    const allKeysUsed = getRemainingKeys().length === 0;

    return (
        <div className={`${styles.inputField} ${name}ObjectInput`}>
            {textLabel.length > 1 && <label htmlFor={name}>{textLabel}&nbsp;{required && <span className={styles.reqd}>*</span>}</label>}
            <Controller name={name} control={control} defaultValue={{}} render={() => (
                <div className={styles.arrayInputContainer}>
                    {objectValues.map(({ key, value }, index) => {
                        const regex = key && validationRules[key] ? validationRules[key] : /.*/;

                        return (
                            <div key={index} className={styles.arrayInputRow}>
                                <DropDown name="key" label=" " options={getRemainingKeys(key)} ph={`Select ${name}`} value={key} onChange={(val) => handleInputChange(index, 'key', val)} />
                                <Controller name={`${name}.${index}.value`} control={control} defaultValue={value} rules={{
                                    pattern: {
                                        value: regex,
                                        message: `Invalid input. Doesn't match required format.`,
                                    },
                                }}
                                render={({ field, fieldState }) => (
                                    <div className={styles.objectInputCon}>
                                        <input {...field} type="text" placeholder="Enter Value" value={field?.value || ''} onChange={(e) => {
                                            field.onChange(e); 
                                            handleInputChange(index, 'value', e.target.value); 
                                        }} />
                                        {fieldState.error && (
                                            <span className={`${styles.formError} shakeHorizontal`}>
                                                {fieldState.error.message}
                                            </span>
                                        )}
                                    </div>
                                )}/>
                                <Close className={styles.arrayCancelIcon} onClick={() => handleRemoveElement(index)} />
                            </div>
                        )
                    })}
                    {!allKeysUsed && (
                        <div className={`${styles.formBtn} ${objectValues.some(obj => !obj.key || !obj.value) ? styles.disabled : ''}`} onClick={handleAddElement}>+ Add New</div>
                    )}
                </div>
            )} rules={required ? { validate: value => Object.keys(value).length > 0 || `${textLabel} cannot be empty. Please add at least one entry.` } : {}} />
        </div>
    );
};

export default ObjectInput;
