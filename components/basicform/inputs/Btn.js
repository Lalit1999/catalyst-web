import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

/* 	 PROPS NEEDED 

onClick = button on click 		= optional
text 	= link text 			= optional
style  	= style class   		= optional
icon 	= button icon 			= optional

*/

const Btn = ({text, style, onClick, icon}) => {
	return (
		<Button className={style} onClick={onClick}>
			{/*icon?<><FontAwesomeIcon icon={icon} />&emsp;{text}</>:text*/}
			{icon?<>{icon}&emsp;{text}</>:text}
		</Button> 
	);
}

export default Btn ;