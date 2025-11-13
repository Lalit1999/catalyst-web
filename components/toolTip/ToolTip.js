import styles from './toolTip.module.css';

const ToolTip = ({text, item}) => {
    return (
        <div className={styles.toolTip}>
            <p className={`${styles.tooltiptext}`}>{text}</p>
                {item}
        </div>
    )
}
export default ToolTip;