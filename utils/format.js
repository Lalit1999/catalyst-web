const formatSize = (size) => {
	if(size < 1000)
		return size + ' Bytes' ;
	else if (size >= 1000 && size < 1000000 )
		return (size/1000).toFixed(3) + ' KB' ;
	else if (size >= 1000000 && size < 1000000000 )
		return (size/1000000).toFixed(3) + ' MB' ;
	else if (size >= 1000000000 && size < 10000000000 )
		return (size/1000000000).toFixed(3) + ' GB' ;
	else 
		throw new Error('Value too big') ; 
}

const formatTime = str => {
	const date = new Date(str);

	const options = {
		timeZone: "Asia/Kolkata",
		hour12: true,
		hour: "numeric",
		minute: "numeric",
	};

	return date.toLocaleTimeString("en-IN", options) ;
}

// returns e.g- "8 Oct 2023"
const formatDate = (str) => {
	const date = new Date(str);
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);
	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	if (isSameDay(date, today))
		return 'Today';
	else if (isSameDay(date, yesterday))
		return 'Yesterday';
	else if (isSameDay(date, tomorrow))
		return 'Tomorrow';
	else {
		const formattedDate = date.toLocaleDateString("en-IN", options);
		return `${formattedDate}`;
	}
};

const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

const formatDateTime = (value) => `${formatDate(value)}, ${formatTime(value)}` ;

const formatLink = (value) => <a href={value} target="_blank" rel="noreferrer">[Click]</a>

const formatLinks = (value) => {
	return (
		<p className="admin-panel-links">
			{value.map( (link, i) => <a key={i} href={link} target="_blank" rel="noreferrer">[{i+1}]</a>)}
		</p>
	) ;
}

const formatAddress = (value) => value.replaceAll(' && ', ', ')

const formatObj = (data, arg) => data[arg]

const formatArray = (value) => value.join(', ')

const formatObjArray = (data, arg) => data[arg].join(', ') 

const formatTags = (value) => {
	if(typeof value === 'object') 
		return value.join(', ') ;
	else
		return value ;
}

const formatCoords = coords => {
	// Coords in [latitude, longitude] format 
	const [latitude, longitude] = coords ;

	const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

	return <p className="coords" onClick={() => window.open(url, "_blank")}>[Click Here]</p> ;
} 

const getAddress = (addressObj, str) => {
	if(addressObj) {
		const temp = addressObj.filter(one=>one.types.includes(str))[0] ;
		return temp?temp?.long_name:'' ;
	}
}

const normalize = obj => {
	if (!obj) return obj ;
    return Object.fromEntries(Object.entries(obj).filter(([key]) => isNaN(Number(key))));
};

const decodeBase64 = base64String => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

// function that takes a number as string and formats it with commas
const formatNumber = (numStr) => {
	if (typeof numStr !== 'string') {
		numStr = String(numStr);
	}
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { formatTime, formatSize, formatDate, formatDateTime, formatLink, formatLinks, formatAddress, formatObj, formatArray, formatObjArray, formatTags, formatCoords, getAddress, normalize, decodeBase64, formatNumber } ;