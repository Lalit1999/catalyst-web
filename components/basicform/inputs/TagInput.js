import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import styles from '../form.module.css';

/* 	 PROPS NEEDED 

name  	= name of component  		= required
label 	= label text 				= optional
descr 	= descr of field 			= optional
ph 		= placeholder 				= optional
char 	= break character 			= optional
maxTags = maximum number of tags	= optional (default: unlimited)

*/

const TagInput = ({ name, label, descr, ph, control, setValue, char=',', def, maxTags=Infinity }) => {
    const [tagText, setTagText] = useState('');
    const [tagArray, setTagArray] = useState(def?def:[]);
	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase());
	let textLabel = label?label:capName;
	let placeholder = ph?ph:`Enter ${textLabel}` ;
    
    useEffect(() => setValue(name, tagArray), [setValue, name, tagArray]);

    const onTagChange = (e) => {
        const inputValue = e.target.value;

        if (inputValue.includes(char)) {
            const newArr = inputValue.split(char).map(tag=>tag.trim().toLowerCase()).filter(tag => tag!=='');

            if (tagArray.length + newArr.length > maxTags) {
                setTagText('');
                return;
            }

            setTagArray([...new Set([...tagArray, ...newArr])]);
            setTagText('');
        } else {
            setTagText(inputValue);
        }
	}

    const onCrossClick = (str) => {
        const newArr = tagArray.filter((tag) => tag !== str);
        setTagArray(newArr);
    }

    return (
        <div className={`${styles.inputField} ${name}TagInput`}>
            {textLabel.length>1&&<label htmlFor={name}>{textLabel}</label>}
            <Controller name={name} control={control} defaultValue={[]} render={({ field }) => (
                <>
                <input type="text" value={tagText} id={name} placeholder={placeholder} onChange={onTagChange} disabled={tagArray.length >= maxTags} />
                <div className={styles.tagFlex} {...field}>
                    {tagArray.map((tag) => (
                        <div key={tag} className={styles.tagCon}>
                            {tag}&nbsp;<span className={styles.tagCross} onClick={()=>onCrossClick(tag)}>
                                x</span>
                        </div>
                    ))}
                </div>
                </>
            )}/>
            {(descr || maxTags !== Infinity) && <span className={styles.formDescr}> {maxTags !== Infinity?`(Max Limit = ${maxTags}) . `:''} {descr} </span>}
        </div>
    );
};

export default TagInput;