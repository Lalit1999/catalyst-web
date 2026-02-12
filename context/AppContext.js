"use client"

import { createContext, useState, useEffect } from 'react' ;


const AppContext = createContext() ;

const AppContextProvider = ({children}) => {
	const [adminToken, setAdminToken] = useState(false) ;
	const [course, setCourse] = useState('') ;
	const [appData] = useState({}) ;

	// useEffect(() => {
    //     const fn = async() => {
    //         const cachedData = localStorage.getItem(`catalyst-app-data`) ;
    //         if (cachedData)
    //             setAppData(JSON.parse(cachedData)) ;

    //         const resp = await get('app-data') ;

    //         if(resp?.error) {
    //             console.error(resp) ;
    //             addNotif('Error loading app data') ;
    //         } else {
    //             if(resp?.status) {
    //                 setAppData(resp.data) ;
    //                 localStorage.setItem(`catalyst-app-data`, JSON.stringify(resp.data)) ;
    //             }
    //             else
    //                 console.error(resp, 'Context 61') ;
    //         }
    //     }

    //     fn() ;
    // }, [])

	const loadAdmin = token => {
        if(token) {
            setAdminToken(token) ;
			localStorage.setItem('catalystAdminToken', token);
		}	
		else {
            setAdminToken('') ;
			localStorage.clear() ;
		}
	}

	useEffect(() => {
        const fn = async() => {
            const utk = localStorage.getItem('catalystAdminToken') ;
            
            if(utk) 
                loadAdmin(utk) ;
            else 
                loadAdmin() ;
        }
        fn() ;
    }, [])

    const getAppData = str => {
        if (Object.keys(appData).length > 0)
            return appData.filter(i => i.name === str)[0]?.items || [] ;
        else
            return [] ;
    }

	const value = {
		course, setCourse, adminToken, loadAdmin, getAppData,
	} ;
	return <AppContext.Provider value={value}>{children}</AppContext.Provider> ;
}

export {AppContext, AppContextProvider} ;