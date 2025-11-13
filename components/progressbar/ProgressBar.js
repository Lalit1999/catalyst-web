import { Fragment } from 'react';

import styles from './progress.module.css';

const ProgressBar = ({ onCircleClick, progress = 0, num = 5 }) => {
    return (
        <div className={styles.progressbar}>
            <div className={styles.pb}>
                {   Array(num).fill(num).map((one, i) => (
                        <Fragment key={i}>
                            {i !== 0 && <div className={`${styles.pbLine} ${i<progress&&styles.active}`} />}
                            <div className={`${styles.numberCon} ${i<progress&&styles.active}`} onClick={onCircleClick ? () => onCircleClick(i + 1) : null} />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    );
}

export default ProgressBar;
