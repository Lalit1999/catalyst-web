
import { ArrowLong } from '@icons' ;

import styles from './pagination.module.css' ;

const Pagination = ({ range, min=1, max, page, setPage }) => (
    <div className={styles.pagination}>
        
        {   page === min ? (
                <div className={`${styles.paginationArrowLeft} ${styles.disabled}`}>
                    <ArrowLong />
                </div>
            ) : (
                <div className={styles.paginationArrowLeft} onClick={() => page>min && setPage(page-1)}>
                    <ArrowLong />
                </div>
            )
        }

        <div className={styles.paginationNumber}>
        {   range.map(i => (
                <p key={i} className={`${styles.paginationNumber} ${i===page?styles.selectedNumber:''}`} onClick={()=>setPage(i)}>{i}</p>
            ))
        }
        </div>

        {   page===max ? (
                <div className={`${styles.paginationArrowRight} ${styles.disabled}`}>
                    <ArrowLong />
                </div>
            ) : (
                <div className={styles.paginationArrowRight} onClick={() => page<max && setPage(page+1)}>
                    <ArrowLong />
                </div>
            )
        }
    </div>
)

export default Pagination;