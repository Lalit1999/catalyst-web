import Button from 'react-bootstrap/Button' ;

import { LineArrowDown, LineArrowUp, LineArrowBoth } from '@icons' ;
import styles from './sortbtn.module.css' ;

const SortBtn = ({name, text, click, icon}) => {
	const returnIcon = () => {
		if(icon==='asc')
			return <LineArrowUp /> ;
		else if(icon==='desc')
			return <LineArrowDown /> ;
		else
			return <LineArrowBoth /> ;
	}

	return <Button className={styles.sortBtn} variant="light" onClick={() => click(name)}>{text}{returnIcon()}</Button> ;
}

export default SortBtn ;