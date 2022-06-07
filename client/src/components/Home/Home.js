import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, getActivities, orderBy, filterByContinent, filterByActivities} from '../../redux/actions/actions';
import CountriesCard from './CountriesCard';
import s from './Home.module.css';
import FilterBar from './FilterBar';
import Pagination from './Pagination'
import SearchBar from './SearchBar';
import notFoundImage from '../../images/error.jpg'

export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state => state.countries));
    const [orden, setOrden] = useState('')
    let [resetChange, setResetChange] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountries = allCountries.slice(firstIndex, lastIndex)

    // const lastIndex = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1
    // const firstIndex = currentPage === 1 ? 0 : lastIndex - countriesPerPage                si van 9 en la primer pag

    const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    }

    function handlePrev(e){
        e.preventDefault();
        setCurrentPage(prev => prev -1);
    }

    function handleNext(e){
        e.preventDefault();
        setCurrentPage(prev => prev +1);
    }

    useEffect(()=> {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);


    function handleClickContinent(e){
        e.preventDefault()
        let saveActivity = document.getElementById("secondSelect").value
        let filter = document.getElementById("thirdSelect").value
        dispatch(filterByContinent(e.target.value));
        dispatch(filterByActivities(saveActivity));
        dispatch(orderBy(filter));
        if(currentCountries) setCurrentPage(1);
    }

    function handleClickActivity(e){
        e.preventDefault();
        let filter2 = document.getElementById("thirdSelect").value
        dispatch(filterByActivities(e.target.value));
        dispatch(orderBy(filter2));
        if(currentCountries) setCurrentPage(1);
    }


    function handleClickFilter(e) {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value} ${resetChange}`) //solo para setear estado y renderizar
    }

    function handleClickReset(e){
        e.preventDefault()
        dispatch(getCountries())
        document.getElementById("firstSelect").getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById("secondSelect").getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById("thirdSelect").getElementsByTagName('option')[0].selected = 'selected';
        setResetChange(resetChange = resetChange === 0 ? resetChange = 1 : resetChange = 0);
    }

    return(
        <div className={s.all}>
        <div className={s.container}>     
            <div className={s.horizontal}>
                <div className={s.bar}>
                    <SearchBar  className={s.search} setCurrentPage={setCurrentPage}/>
                    <FilterBar  className={s.filter} 
                                handleClickActivity={handleClickActivity} 
                                handleClickReset={handleClickReset} 
                                handleClickFilter={handleClickFilter}
                                handleClickContinent={handleClickContinent}/>
                </div>
                <div className={s.cards}>
                    {
                        currentCountries
                        && currentCountries.map(c => {
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