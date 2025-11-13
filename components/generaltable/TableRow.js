import { Fragment, useState } from 'react' ;
import Button from 'react-bootstrap/Button' ;
import Form from 'react-bootstrap/Form' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
// import { faPenToSquare, faEye, faTrash } from '@fortawesome/free-solid-svg-icons' ;
// import { useRouter, usePathname } from 'next/navigation' ;

import { TableCell } from './TableComps.js' ;
// import styles from './gtable.module.css' ;

const TableRow = ({sno, rowData, columns, actions }) => {
	// const router = useRouter() ;
	// const pathname = usePathname() ;
	const [active, setActive] = useState(true) ;

	const toggleActive = () => setActive(!active) ;	

	const onSwitchClick = (event) => {
		toggleActive() ;
		actions['switch'](event) ;
	}

	// const onViewClick = () => {
	// 	if(actions?.view)
	// 		actions.view(rowData) ;
	// 	else
	// 		router.push(`${pathname}/view/${rowData._id}`) ;
	// }

	// const onEditClick = () => {
	// 	if(actions?.edit)
	// 		actions.edit(rowData) ;
	// 	else
	// 		router.push(`${pathname}/edit/${rowData._id}`) ;
	// }

	// const onDeleteClick = () => {
	// 	if(actions?.delete)
	// 		actions.delete(rowData) ;
	// 	else
	// 		console.error('Pass an event handler \'delete\' ') ;
	// }

	const createTableComps = (one, sno) => {
		const {_id} = rowData ;

		const aria = `${one}+${_id}` ;

		const tableComps = {

			// Commented due to icons (baad me theek karna hai)
			// view: <td onClick={onViewClick}><FontAwesomeIcon className={`${styles.gtableIcon} ${styles.gtableEye}`} icon={faEye} /></td>,
			// delete: <td onClick={onDeleteClick}><FontAwesomeIcon className={`${styles.gtableIcon} ${styles.gtableTrash}`} icon={faTrash} /></td>,
			// edit: <td onClick={onEditClick}><FontAwesomeIcon className={`${styles.gtableIcon} ${styles.gtablePen}`} icon={faPenToSquare} /></td>,

			sno: <td onClick={actions['sno']}>{sno}</td>,
			// pehle se comment tha
			// checkbox: <td><Form.Check aria-label={aria} onChange={onCheckBoxClick} checked={checked}/></td>,
			switch: <td><Form.Check aria-label={aria} type="switch" checked={active} onChange={onSwitchClick}/></td>,
			cancel: <td onClick={actions['cancel']}><Button variant="danger">Cancel</Button></td>,
		}

		return tableComps[one] ;
	}

	return (
		<tr>
			{actions.before?.map((one, i) => <Fragment key={i}>{createTableComps(one, sno)}</Fragment>)}
			{columns.map((col, i)=> <TableCell key={i} col={col} cellData={rowData[col.name]} full={rowData}/>)}
			{actions.after?.map((one, i) => <Fragment key={i}>{createTableComps(one, sno)}</Fragment>)}
		</tr>
	) ;
}

export default TableRow ;