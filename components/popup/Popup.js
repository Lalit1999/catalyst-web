// import { useRef } from 'react';

import { Close } from '@icons';
import styles from './pop.module.css';

const Popup = ({ open, onCloseClick, children, conStyleOR, styleOR, btnStyleOR }) => {
    // const popupRef = useRef(null);

    // const handleClick = (event) => {
    //     // Check if the event target is the same as the popup element (i.e., not a child)
    //     // closes popup when clicking black portion
    //     if (event.target === popupRef.current) {
    //         onCloseClick && onCloseClick();
    //     }
    // };

    if (open) {
        return (
            <div className={`${styles.popCon} ${conStyleOR}`} /*onClick={handleClick} ref={popupRef}*/>
                <div className={`${styles.popup} ${styleOR}`}>
                    {onCloseClick && (
                        <div className={`${styles.popupClose} ${btnStyleOR}`} onClick={onCloseClick}>
                            <Close />
                        </div>
                    )}
                    {children}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Popup;