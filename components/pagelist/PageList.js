
import Pagination from 'react-bootstrap/Pagination' ;

import styles from './pagelist.module.css' ;

const PageList = ({current, setPage, max, start=0}) => {

	const to = num => {
		if( !(num<=start || num>max) )
			setPage(num-1) ;
	}

	return (
		<div className={styles.pageList}> 
			<Pagination>
				<Pagination.Prev onClick={()=>to(current-1)}/>
				{	[current-2, current-1, current, current+1, current+2].map(num => {
						if(num <= start || num > max)
							return <Pagination.Item key={num} disabled>_</Pagination.Item> ;
						else
							return <Pagination.Item key={num} onClick={()=>to(num)} active={num===current}>{num}</Pagination.Item> ;
					})
				}
				<Pagination.Next onClick={()=>to(current+1)}/>
			</Pagination>
		</div>
	)
}

export default PageList ;