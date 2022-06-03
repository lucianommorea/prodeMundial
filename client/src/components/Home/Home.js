import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, orderBy, filterByContinent } from '../../redux/actions/actions';
import CountriesCard from './CountriesCard';
import s from './Home.module.css';
import FilterBar from './FilterBar';
import Pagination from './Pagination'
import SearchBar from '../NavBar/SearchBar';

export default function Home () {

    const dispatch = useDispatch()
    const allCountries = useSelector((state => state.countries))
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountries = allCountries.slice(firstIndex, lastIndex)

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    }

    function handlePrev(e){
        e.preventDefault()
        setCurrentPage(currentPage - 1)
    }

    function handleNext(e){
        e.preventDefault()
        setCurrentPage(currentPage + 1)
    }

    useEffect(()=> {
        dispatch(getCountries());
    }, [dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getCountries())
        document.getElementById("firstSelect").getElementsByTagName('option')[0].selected = 'selected'
        document.getElementById("secondSelect").getElementsByTagName('option')[0].selected = 'selected'
        document.getElementById("thirdSelect").getElementsByTagName('option')[0].selected = 'selected'
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
        <div className={s.all}>
        <div className={s.container}>     
            <div className={s.horizontal}>
                <div className={s.bar}>
                    <SearchBar className={s.search} setCurrentPage={setCurrentPage}/>
                    <FilterBar className={s.filter} handleClick={handleClick} handleClickFilter={handleClickFilter} handleClickContinent={handleClickContinent}/>
                </div>
                <div className={s.cards}>
                    {
                        currentCountries && currentCountries.map(c => {
                            return (
                                <CountriesCard key={c.id} id={c.id} name={c.name} img={c.img} continents={c.continents} capital={c.capital} />
                            )
                        })
                    }
                </div>
            </div>
            <Pagination     countriesPerPage={countriesPerPage}
                            allCountries={allCountries.length}
                            paginado={paginado}
                            currentPage={currentPage}
                            handlePrev={handlePrev}
                            handleNext={handleNext}
            />
        </div>
        </div>
    )
}