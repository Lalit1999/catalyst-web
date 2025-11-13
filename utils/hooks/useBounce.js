'use client'

// hooks/useBounce.js
import { useEffect, useRef } from 'react';

const useBounce = (dependency, className = 'bounceTop') => {
    const elementRef = useRef(null);
    const prevValueRef = useRef(dependency);

    useEffect(() => {
        if (elementRef.current && prevValueRef.current !== dependency) {
            const el = elementRef.current;
            el.classList.remove(className);
            // Trigger reflow to restart animation
            void el.offsetWidth;
            el.classList.add(className);

            prevValueRef.current = dependency;
        }
    }, [dependency, className]);

    return elementRef;
};

export default useBounce;
