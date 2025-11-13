"use client"

import { useState, useEffect } from 'react';

const useLimit = (delay) => {
	const [canFetch, setCanFetch] = useState(true);

    useEffect(() => {
        let timer;
        
        if (!canFetch) {
            timer = setTimeout(() => {
                setCanFetch(true);
            }, delay*1000);
        }

        return () => clearTimeout(timer);
    }, [canFetch, delay]);

    return [canFetch, setCanFetch];
}

export default useLimit ;