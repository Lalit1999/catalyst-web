"use client"

import { useState, useEffect } from 'react';

const usePc = () => {
	const [pc, setPc] = useState(false) ;

	useEffect( ()=> {
        if(typeof window === 'undefined' || window.screen.availWidth > 923)
            setPc(true) ;
        else
            setPc(false) ;
    }, [])

    return pc ;
}

export default usePc ;