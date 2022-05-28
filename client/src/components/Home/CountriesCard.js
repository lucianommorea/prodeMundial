import React from 'react'
import s from './CountriesCard.module.css';

export default function CountriesCard ({ name, img, continents}) {
    return(
        <div className={s.cuadro} >
            <img className={s.flag} src={img} alt={name} />
            <p className={s.country}>{name}</p>
            <h6 className={s.continent}>{continents}</h6>
        </div>
    )
}