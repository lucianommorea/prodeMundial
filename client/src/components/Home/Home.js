import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
import CountriesCard from './CountriesCard';
import {Link} from 'react-router-dom';
import s from './Home.module.css';
import FilterBar from './FilterBar';

export default function Home () {

    const dispatch = useDispatch()
    const allCountries = useSelector((state => state.countries))
    
    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getCountries())
    }


    return(
        <>
            <FilterBar handleClick={handleClick} />
                <div className={s.cards}>
                    {
                        allCountries && allCountries.map(c => {
                            return (
                            <Link to={`/home/${c.id}`} key={c.id} >
                                <CountriesCard name={c.name} img={c.img} continents={c.continents} />
                            </Link>
                            )
                        })
                    }
                </div>
        </>
    )
}