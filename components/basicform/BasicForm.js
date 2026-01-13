"use client"

import { Fragment } from 'react' ;
import { useForm } from 'react-hook-form';

import ArrayInput from './inputs/ArrayInput.js';
// import AvatarInput from './inputs/AvatarInput.js';
import Btn from './inputs/Btn.js';
import Checkbox from './inputs/Checkbox.js';
import CitySelect from './inputs/CitySelect.js';
import Color from './inputs/Color.js';
import CountrySelect from './inputs/CountrySelect.js';
import DateInput from './inputs/DateInput.js';
import DPInput from './inputs/DPInput.js';
import DropDown from './inputs/DropDown.js';
import ImageInput from './inputs/ImageInput.js';
import IntlPhoneInput from './inputs/IntlInput.js';
import NumberInput from './inputs/NumberInput.js';
import ObjectInput from './inputs/ObjectInput.js';
import PdfInput from './inputs/PdfInput.js';
import Range from './inputs/Range.js';
import SearchInput from './inputs/SearchInput.js';
import StateSelect from './inputs/StateSelect.js';
import Submit from './inputs/Submit.js';
import TagInput from './inputs/TagInput.js';
import Text from './inputs/Text.js';
import TextArea from './inputs/TextArea.js';

import styles from './form.module.css';
const defaultFn = data => {
	//eslint-disable-next-line
	console.log(data) ;
}

const BasicForm = ({data, onFormSubmit=defaultFn, styleOR='', reset, defaultObj }) => {

	let { watch, control, setValue, register, reset: resetForm, handleSubmit, formState: { errors } } = useForm({
		defaultValues : defaultObj?defaultObj:data?.filter( i => i.type && !(['submit', 'custom', 'row'].includes(i.type)) ).reduce((result, {name, def})=>({ ...result, [name]: def?def:'' }), {}),
	});

	const generateElement = element => {
		if (element.type === 'row') {
			return (
				<div className={styles.formRow}>
					{ 	element.children.map((child, index) => (
							<Fragment key={index}>{generateElement(child)}</Fragment>
						))
					}
				</div>
			);
		} else {
			const compObj = {...element, register, errors } ;
			const compObj2 = {...element, register, errors, control, setValue, def: defaultObj?defaultObj[element.name]:undefined, watch } ;

			const formElement = {
				text 		: <Text {...compObj} />,
				password 	: <Text {...compObj2} />,
				email 		: <Text {...compObj} />,
				tel 		: <Text {...compObj} />,
				url 		: <Text {...compObj} />,
				textArea 	: <TextArea {...compObj} />,
				checkbox 	: <Checkbox {...compObj} />,
				btn 		: <Btn {...compObj} />,
				submit 		: <Submit {...compObj} />,
				color 		: <Color {...compObj}/>,
				range 		: <Range {...compObj} />,
				number 		: <NumberInput {...compObj} />,
				dropdown 	: <DropDown {...compObj}  />,
				date 		: <DateInput {...compObj2} />,
				tags 		: <TagInput {...compObj2} />, 
				array 		: <ArrayInput {...compObj2} />,
				object 		: <ObjectInput {...compObj2}/>,
				phone       : <IntlPhoneInput {...compObj2} />,
				city    : <CitySelect {...compObj2} />,
				country : <CountrySelect {...compObj2} />,
                state   : <StateSelect {...compObj2} />,
				/* external libs */
				search 		: <SearchInput {...compObj2} />,
				dp 			: <DPInput {...compObj2} />,
				image 		: <ImageInput {...compObj2} />,
				pdf 		: <PdfInput {...compObj2} />,

				custom: element.component,
			}

			return formElement[element.type] ;
		}
	}

	const onSubmit = data => {
		if(reset) {
			resetForm() ;
		}
		onFormSubmit(data) ;
	}

	return (
		<form className={`${styles.basicForm} ${styleOR}`} onSubmit={handleSubmit(onSubmit)}>
			{	data && data?.length>0?
				data.map((one,i)=><Fragment key={i}>{generateElement(one)}</Fragment>)
				:<p> Form Data not Supplied or empty </p>
			}
		</form>
	) ;
}

export default BasicForm ;