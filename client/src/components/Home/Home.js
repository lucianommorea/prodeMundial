import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, orderBy, filterByContinent } from '../../redux/actions/actions';
import CountriesCard from './CountriesCard';
import {Link} from 'react-router-dom';
import s from './Home.module.css';
import FilterBar from './FilterBar';
import Paginated from './Paginated'

export default function Home () {

    const dispatch = useDispatch()
    const allCountries = useSelector((state => state.countries))
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLast = currentPage * countriesPerPage
    const indexOfFirst = indexOfLast - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirst, indexOfLast)

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    }

    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getCountries())
        document.getElementById("firstSelect").getElementsByTagName('option')[0].selected = 'selected'
        document.getElementById("secondSelect").getElementsByTagName('option')[0].selected = 'selected'
    }

    function handleClickFilter(e) {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`) //solo para setear estado y renderizar
    }

    function handleClickContinent(e){
        dispatch(filterByContinent(e.target.value)) 
    }


    return(
        <>
            <FilterBar handleClick={handleClick} handleClickFilter={handleClickFilter} handleClickContinent={handleClickContinent}/>
                <div className={s.cards}>
                    {
                        currentCountries && currentCountries.map(c => {
                            return (
                            <Link to={`/home/${c.id}`} key={c.id} >
                                <CountriesCard name={c.name} img={c.img} continents={c.continents} />
                            </Link>
                            )
                        })
                    }
                </div>
            <Paginated  countriesPerPage={countriesPerPage}
                        allCountries={allCountries.length}
                        paginado={paginado}
            />
        </>
    )
}