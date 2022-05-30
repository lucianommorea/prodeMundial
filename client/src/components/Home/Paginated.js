import React from 'react'

export default function Paginated({countriesPerPage, allCountries, paginado}){

    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                { pageNumbers &&
                    pageNumbers.map(number =>(
                        <li key={number}>
                            <button onClick={()=> paginado(number)}> {number} </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}