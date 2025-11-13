const errMsg = (type, str, max, min) => {
	const obj = {
		required : `${str} is required`,
		pattern: `Invalid ${str} Format`,
		minLength: `${str} is too short`,
		maxLength: `${str} is too long`,
		min: `${str} cannot be less than ${min}`,
		max: `${str} cannot be greater than ${max}`,
	} ;
	return obj[type] ;
}

export default errMsg ;