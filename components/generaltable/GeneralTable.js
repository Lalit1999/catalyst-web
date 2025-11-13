"use client"

import {useState, useEffect} from 'react' ;
import Table from 'react-bootstrap/Table' ;

import PageList from '../pagelist/PageList.js' ;
import Loading from '../loading/Loading.js' ;
import TableRow from './TableRow.js' ;
import { TableHeader } from './TableComps.js' ;
import { Search, Close } from '@icons' ;
import styles from './gtable.module.css' ;

const GeneralTable = ({title, data, columns, actions, loading}) => {
	const [filter, setFilter] = useState('sno') ;
	const [filterOrder, setFilterOrder] = useState('asc') ;
	const [page, setPage] = useState(0) ;
	const [searchText, setSearchText] = useState('') ;
	const [filteredData, setFilteredData] = useState(data) ;

	const qty = 100 ;
	
	useEffect( ()=> {
		setFilteredData(data?.filter(one => actions.search.map(two => one[two]).join(' ').toLowerCase().includes(searchText.toLowerCase())) )
	}, [data, searchText, actions])

	const createRows = () => {
		const compare = ( a, b ) => {
			if(filter !== ' ') {
				let mul = filterOrder === 'asc'?1:-1 ;
				let ans ;	
				if( a[filter] < b[filter] )
					ans = -1;
				else
					ans = 1;
				return ans*mul ;
			}		
			return 0;
		}

		return filteredData.sort(compare).slice(page*qty, (page*qty)+qty).map( (one, i) => <TableRow key={i} sno={i+1} rowData={one} columns={columns} actions={actions} /> ) ;
	}

	const changeFilter = (str) => {
		if(filter === str) {
			if(filterOrder === 'asc')
				setFilterOrder('desc') ;
			else {
				setFilter('sno') ;
				setFilterOrder('asc') ;
			}
		}
		else {
			setFilter(str) ;
			setFilterOrder('asc') ;
		}
	}

	const clearSearch = () => setSearchText('') ;

	const returnTableHeader = () => {
		return (
			<div className={styles.tableHeader}>
				<div className={styles.searchCon}>
					<input className={styles.searchInput} type='text' placeholder='Search' value={searchText} onChange={e=>{ setSearchText(e.target.value) ; setPage(0) ; }} />
					<Close className={searchText.length>0?styles.cancel:styles.hide} onClick={clearSearch} />
					<div className={styles.searchBtn}><Search /></div>
				</div>
				<PageList current={page+1} setPage={setPage} max={Math.ceil(filteredData.length/qty)}/>
			</div>
		) ;
	}

	const headProps = {columns, before:actions?.before, after:actions?.after, filter, filterOrder, changeFilter} ; 

	const returnData = () => {
		const colspan=columns.length+(actions?.before?actions.before.length:0)+(actions?.after?actions.after.length:0);
		if(loading)
			return <tr><td className={styles.empty}><Loading /></td></tr>
		else {
			if(data && data.length > 0)
				return createRows() ;
			else
				return <tr><td className={styles.empty} colSpan={colspan}>This table has no records</td></tr> ;
		}
	}

	return (
		<div className={styles.generalTable}>
			<h3 className={styles.tableTitle}>{title}<span className={styles.totalRows}>&emsp;(&nbsp;{filteredData.length} Records&nbsp;)</span> </h3>
			{ returnTableHeader() }
			<Table className={styles.gtable} striped bordered hover responsive>
				<TableHeader {...headProps} />
				<tbody>{ returnData() }</tbody>
			</Table>
		</div>
	) ;
}

export default GeneralTable ;