"use client"

import { useState, useEffect } from 'react';

const useMobile = () => {
	const [mobile, setMobile] = useState(true) ;

	useEffect( ()=> {
        if(typeof window === 'undefined' || window.screen.availWidth > 923)
            setMobile(false) ;
        else
            setMobile(true) ;
    }, [])

    return mobile ;
}

export default useMobile ;