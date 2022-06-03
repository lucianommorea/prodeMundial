import React from 'react'
import s from './Pagination.module.css'

export default function Pagination({countriesPerPage, allCountries, paginado, currentPage, handleNext, handlePrev}){

    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className={s.bar}>
            <button className={s.prev} onClick={e=>handlePrev(e)} disabled={currentPage - 1 === 0 ? true : false}> Prev </button>
            <ul> 
                { pageNumbers &&
                    pageNumbers.map(number =>(
                        <li key={number}>
                            <button className={s.number} onClick={()=> paginado(number)}> {number} </button>
                        </li>
                    ))
                }
            </ul>
            <button className={s.next} onClick={e=> handleNext(e)} disabled={currentPage >= pageNumbers.length ? true : false}> Next </button>
        </div>
    )
}