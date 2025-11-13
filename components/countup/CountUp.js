import { useState, useEffect, useRef } from 'react';

const CountUp = ({ value, duration = 500, className, prefix=null }) => {
    const [count, setCount] = useState(0);
    const [startCounting, setStartCounting] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                //eslint-disable-next-line
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!startCounting) return;

        const frameDuration = 16; // Approx 60 FPS (16ms per frame)
        const totalFrames = Math.round(duration / frameDuration);
        const increment = value / totalFrames;

        let currentFrame = 0;

        const timer = setInterval(() => {
            currentFrame++;
            setCount((prev) => {
                const nextCount = prev + increment;
                return nextCount >= value ? value : nextCount;
            });

            if (currentFrame >= totalFrames) {
                setCount(value); // Ensure the final value is set
                clearInterval(timer);
            }
        }, frameDuration);

        return () => clearInterval(timer);
    }, [startCounting, value, duration]);

    return <span ref={elementRef} className={className}>{prefix?`${prefix} `:''}{Math.floor(count)}</span>;
};

export default CountUp;
