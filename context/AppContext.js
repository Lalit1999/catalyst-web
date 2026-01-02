"use client"

import { createContext, useState/*, useRef*/ } from 'react' ;
// import { createContext, useState, useEffect, useRef } from 'react' ;

// import { addNotif, get, remNotif } from '@utils' ;

const AppContext = createContext() ;

const AppContextProvider = ({children}) => {
    // const [user, setUser] = useState({}) ; 
    // const [userToken, setUserToken] = useState('') ; 
    // const [userLoading, setUserLoading] = useState(true) ;
	// const [popOpen, setPopOpen] = useState(false) ;
	// const [popContent, setPopContent] = useState('') ;
	const [course, setCourse] = useState('') ;
	// const conRef = useRef(null);

    // useEffect(() => {
	// 	const fn = async() => {
	// 		const utk = localStorage.getItem('purpleUserToken') ;
			
	// 		if(utk) {
	// 			let resp = await get('user/me', utk) ;
	// 			if(resp?.error) {
	// 				console.error(resp) ;
	// 				addNotif('Session Expired. Please login again', 'error') ;
	// 				loadUser({}) ;	
	// 			} else {
	// 				if(resp && resp.email)
	// 					loadUser({user: resp, token: utk}) ;
	// 				else {
	// 					console.error(resp) ;
	// 					loadUser({}) ;
	// 				}
	// 			}
	// 		}
	// 		else
	// 			setUserLoading(false) ;
	// 	}
	// 	fn() ;
	// }, [])

	// useEffect(() => {
	// 	const fn = async () => {
	// 		let resp = await get('app-data') ;

	// 		if(resp?.error) {
	// 			console.error(resp) ;
	// 			addNotif('Unable to load data', 'error') ;
	// 		} else {
	// 			if(resp?.status) {
	// 				setListData(resp.data) ;
	// 			}
	// 			else {
	// 				console.error(resp) ;
	// 				remNotif() ;
	// 			}
	// 		}
	// 	}

	// 	fn() ;
	// }, [])

	// const loadUser = data => {
	// 	const {user, token} = data ;
	// 	if(user) {
	// 		setUser(user) ;
	// 		setUserToken(token) ;
	// 		localStorage.setItem('purpleUser', JSON.stringify(user) );
	// 		localStorage.setItem('purpleUserToken', token);
	// 		setUserLoading(false) ;
	// 	}	
	// 	else {
	// 		setUser({}) ;
	// 		setUserToken('') ;
	// 		localStorage.clear() ;
	// 		setUserLoading(false) ;
	// 	}
	// }

	// const returnListData = str => {
	// 	if (Object.keys(listData).length > 0)
	// 		return listData[str] ;
    //     else
    //         return [] ;
    // }

	const scrollToTop = () => {
        // if (conRef.current) 
            // conRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };

	const value = {
		course, setCourse,
		// user, userToken, userLoading, loadUser,
		// popOpen, setPopOpen, setPopContent, popContent,
		scrollToTop,
		// conRef, scrollToTop, returnListData,
	} ;
	return <AppContext.Provider value={value}>{children}</AppContext.Provider> ;
}

export {AppContext, AppContextProvider} ;