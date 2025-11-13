import Button from 'react-bootstrap/Button' ;
import Form from 'react-bootstrap/Form' ;

import SortBtn from '../sortbtn/SortBtn.js' ;
import styles from './gtable.module.css' ;

const TableHeader = ({columns, before, after, filter, changeFilter, filterOrder}) => {
	const heads = {
		sno: <Button className={styles.sortBtn} variant="light">SNo.</Button>,
		view: 'View',
		delete: 'Del',
		edit: 'Edit',
		checkbox: <Form.Check aria-label="select-all" />,
		switch: 'Active',
		offswitch: 'Confirm',
		cancel: 'Cancel Order'
	}

	if(columns.length>0)
		return (
			<thead className={styles.gtableHead}><tr>
				{before?.map((one, i)=><th key={i}>{heads[one]}</th>)}
				{columns.map((col, i) => <th key={i}><SortBtn name={col.name} text={col.title?col.title:col.name} click={changeFilter} icon={col.name === filter?filterOrder:' '} /></th>)}
				{after?.map((one, i)=><th key={i}>{heads[one]}</th>)}
			</tr></thead>
		) ;
	else 
		return null ;
}

const TableCell = ({col, cellData, full}) => {
	if(col.format)
		if(col.full)
			return <td>{col.format(full)}</td>
		else
			return <td>{col.format(cellData)}</td>
	else
		return <td>{cellData}</td> ;
}

export {TableCell, TableHeader} ;