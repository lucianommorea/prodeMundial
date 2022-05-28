import React from 'react'
import s from './SearchBar.module.css'

export default function SearchBar(){

    function handleOnSearch(){

    }

    return(
        <div className={s.bar} >
            <input type='text' id='name' placeholder="Search country..." autoComplete='off' />
            <button className={s.btn} onClick={handleOnSearch}> Buscar </button>
        </div>
    
    )
}