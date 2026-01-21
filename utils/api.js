
import { encrypt } from './crypt.js' ;
// import { encrypt, decrypt } from './crypt.js' ;
import { remNotif, addNotif } from './notif.js' ;

const cancelTokens = {};

// const fetchUrl = typeof window !== 'undefined' && window.location.hostname.includes('local')?'http://192.168.29.76:8001/':'https://api.catalystclinicalservices.com/' ;
const fetchUrl = typeof window !== 'undefined' && window.location.hostname.includes('local')?'http://localhost:8001/':'https://api.catalystclinicalservices.com/' ;
// const fetchUrl = 'https://api.catalystclinicalservices.com/' ;

const handleError = (message, notif) => {
    console.error(message) ;
    remNotif() ;
    addNotif(notif?notif:message, 'error') ;
}

const get = async (endpoint, token, queryObj={}, cancelPrevious = true) => {
    // If cancelPrevious is true and there is a previous request for this endpoint
    if ( cancelPrevious && cancelTokens[endpoint] !== undefined && typeof window !== 'undefined') {
        cancelTokens[endpoint].abort();             // Abort previous request
        delete cancelTokens[endpoint];              // Remove cancel token from the object
    }

    const controller = new AbortController();
    cancelTokens[endpoint] = controller;

    let url = `${fetchUrl}${endpoint}`;

    const query = Object.entries(queryObj).map(([k, v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&') ;
    const queryString = new URLSearchParams(query).toString();
    if (queryString) 
        url += `?${queryString}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token?`Bearer ${token}`:'',
            },
        });

        // Check if the request was successful
        const resp = await response.json() ;
        if(resp.data)
            return JSON.parse(resp.data) ;
            // return JSON.parse(decrypt(resp.data)) ;

        return resp ;

    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line
            console.log('Request aborted:', error.message);
        } else {
            console.error(error) ; 
            remNotif() ;
            addNotif(error.message, 'error') ;
        }
    }
};

const post = async (endpoint, bodyObj, token, cancelPrevious = true) => {
  // If cancelPrevious is true and there is a previous request for this endpoint
    if ( cancelPrevious && cancelTokens[endpoint] !== undefined && typeof window !== 'undefined') {
        cancelTokens[endpoint].abort();             // Abort previous request
        delete cancelTokens[endpoint];
    }

    const controller = new AbortController();
    cancelTokens[endpoint] = controller;

    let url = `${fetchUrl}${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token?`Bearer ${token}`:'',
            },
            body: JSON.stringify({ data: encrypt(JSON.stringify(bodyObj)) }),
        });

        // Check if the request was successful
        const resp = await response.json() ;
        if(resp.data)
            return JSON.parse(resp.data) ;
            // return JSON.parse(decrypt(resp.data)) ;

        return resp ;
        
    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line
            console.log('Request aborted:', error.message);
        } else {
            console.error(error) ; 
            remNotif() ;
            addNotif(error.message, 'error') ;
        }
    }
};

const patch = async (endpoint, bodyObj, token, cancelPrevious = true) => {
  // If cancelPrevious is true and there is a previous request for this endpoint
    if ( cancelPrevious && cancelTokens[endpoint] !== undefined && typeof window !== 'undefined') {
        cancelTokens[endpoint].abort();             // Abort previous request
        delete cancelTokens[endpoint];
    }

    const controller = new AbortController();
    cancelTokens[endpoint] = controller;

    let url = `${fetchUrl}${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token?`Bearer ${token}`:'',
            },
            body: JSON.stringify({ data: encrypt(JSON.stringify(bodyObj)) }),
        });

        // Check if the request was successful
        const resp = await response.json() ;
        if(resp.data)
            return JSON.parse(resp.data) ;
            // return JSON.parse(decrypt(resp.data)) ;

        return resp ;
        
    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line
            console.log('Request aborted:', error.message);
        } else {
            console.error(error) ; 
            remNotif() ;
            addNotif(error.message, 'error') ;
        }
    }
};

const postUpload = async (endpoint, bodyObj, token, queryObj={}, cancelPrevious = true) => {
  // If cancelPrevious is true and there is a previous request for this endpoint
    if ( cancelPrevious && cancelTokens[endpoint] !== undefined && typeof window !== 'undefined') {
        cancelTokens[endpoint].abort();             // Abort previous request
        delete cancelTokens[endpoint];
    }

    const controller = new AbortController();
    cancelTokens[endpoint] = controller;

    let url = `${fetchUrl}${endpoint}`;

    const query = Object.entries(queryObj).map(([k, v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&') ;
    const queryString = new URLSearchParams(query).toString();
    if (queryString) 
        url += `?${queryString}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            signal: controller.signal,
            headers: {  'Authorization': token?`Bearer ${token}`:'' },
            body: bodyObj,
        });

        // Check if the request was successful
        const resp = await response.json() ;
        if(resp.data)
            return JSON.parse(resp.data) ;
            // return JSON.parse(decrypt(resp.data)) ;

        return resp ;
        
    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line
            console.log('Request aborted:', error.message);
        } else {
            console.error(error) ; 
            remNotif() ;
            addNotif(error.message, 'error') ;
        }
    }
};

const del = async (endpoint, token, cancelPrevious = true) => {
    // If cancelPrevious is true and there is a previous request for this endpoint
    if ( cancelPrevious && cancelTokens[endpoint] !== undefined && typeof window !== 'undefined') {
        cancelTokens[endpoint].abort();             // Abort previous request
        delete cancelTokens[endpoint];              // Remove cancel token from the object
    }

    const controller = new AbortController();
    cancelTokens[endpoint] = controller;

    let url = `${fetchUrl}${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            signal: controller.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token?`Bearer ${token}`:'',
            },
        });

        // Check if the request was successful
        const resp = await response.json() ;
        if(resp.data)
            return JSON.parse(resp.data) ;
            // return JSON.parse(decrypt(resp.data)) ;

        return resp ;

    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line
            console.log('Request aborted:', error.message);
        } else {
            console.error(error) ; 
            remNotif() ;
            addNotif(error.message, 'error') ;
        }
    }
};

export { get, post, patch, handleError, fetchUrl, postUpload, del } ;