"use client"

import { useState } from 'react' ; 

import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './apb.module.css' ;

const AnimProgBar = ({ total=0, success=0, failed=0, txt="Please wait..." }) => {
	const [progress, setProgress] = useState(0) ;

    if (total && total > 0) {
        const prog = Math.floor((success / total) * 100); // Calculate progress percentage

        if (prog !== progress) {
            setProgress(prog); // Update the progress bar value
        }

        return (
            <div className={styles.pbCon}>
                {total!==success+failed && txt && <p className="image-success-text"> {txt} </p>}
                <ProgressBar animated={total!==success+failed} label={progress<100?`${progress}%`:'✓ Completed'} striped variant="success" now={progress} />
            </div>
        ) ;
    }

    return null;
}

export default AnimProgBar;