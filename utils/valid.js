// THIS FILE REQUIRES 'validator' PACKAGE TO WORK

import valid from 'validator' ;

const isBlank = (str, field, min=null, max=null) => {
	str = str.trim() ;
	if(str === '')
		return `${field} can not be blank` ;
	else if(min && str.length < min)
		return `Size of ${field} cannot be less than ${min}` ;
	else if (max && str.length > max)
		return `Size of ${field} cannot be more than ${max}` ;
	else
		return false ;
}

const isEmptyArray = (arr, field) => {
	if(arr.length === 0)
		return `${field} can not be blank` ;
	else 
		return false ;
}

const invalidEmail = (str) => {
	str = str.trim() ;
	if(str === '')
		return false ;
	else if(!valid.isEmail(str))
		return 'This might not be a valid E-Mail address';
	else
		return false ;
}

const invalidName = (str, min=null, max=null) => {
	str = str.trim() ;
	if(str === '')
		return 'Name(s) cannot be Blank' ;
	else if ( !valid.isAlpha(str.replace(/\s/g, 'z')))
		return 'Name(s) cannot contain digits(0-9) or Symbols' ;
	else if(min && str.length < min)
		return `Size of name cannot be less than ${min}` ;
	else if (max && str.length > max)
		return `Size of name cannot be more than ${max}` ;
	else 
		return false ;
}

const invalidPass = (str, str2) => {
	str = str.trim() ;
	if(str === '' || str2 === '')
		return 'Password can not be blank' ;
	else if (str.length < 6 || str2.length < 6 )
		return 'Password must be at least 6 digits long' ;
	else if ( str !== str2 )
		return 'Re-Password must match password' ;
	else
		return false ;
}

const invalidMobile = (str) => {
	str = str.trim() ;
	if(str === '')
		return 'Mobile No. can not be blank' ;
	else if(!valid.isNumeric(str))
		return 'Mobile No. must only contain numbers';
	else if(str.length < 10)
		return 'Mobile No. must be at least 10 digits long' ;
	else if(str.length > 12)
		return 'Mobile No. can not be this long' ;
	else
		return false ;
}

const isMaxMin = (str, field, min, max) => {
	if(str === 0)
		return `${field} can not be 0` ;
	else if(str < min || str > max)
		return `${field} must be between ${min} & ${max}` ;
	else
		return false ;
}

const isNonZero = (str, field) => {
	if(str === 0)
		return `${field} can not be 0` ;
	else
		return false ;
}

const isLink = (str, field) => {
	if(typeof str === 'object')
		return `${field} needs to be uploaded first` ;
	else {
		str = str.trim() ;
		if(str === '')
			return `${field} can not be blank` ;
		else if(!valid.isURL(str))
			return `${field} might not be a valid URL`;
		else
			return false ;
	}
}

const isDual = (str, field) => {
	const allowed = ["Yes", "No", 'yes', 'no', true, false] ;
	if(!allowed.includes(str))
		return `Invalid Value for ${field}` ;
	else
		return false ; 
}

const isEqual = (obj1, obj2) => {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length)
		return false;

	for (const key of keys1)
		if (obj1[key] !== obj2[key])
			return false; 

	return true;
}

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every(key => deepEqual(obj1[key], obj2[key]));
};

const arraysEqual = (arr1, arr2) => {
	if (!arr1 && !arr2) return true ;
    if (arr1?.length !== arr2?.length) return false;
    return arr1?.every((item, index) => deepEqual(item, arr2[index]));
};

export { isBlank, isMaxMin, invalidPass, invalidMobile, invalidEmail, invalidName, isLink, isNonZero, isDual, isEmptyArray, isEqual, arraysEqual, deepEqual} ;