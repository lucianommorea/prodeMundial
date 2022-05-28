import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getCountryById} from '../../redux/actions/actions'
import CountryCard from './CountryCard';


export default function Detail(){

    let { id } = useParams()
    let dispatch = useDispatch();
    let detail = useSelector(state=> state.countryDetail);
    

    useEffect(()=> {
        dispatch(getCountryById(id))
    }, [dispatch, id])


    return (
        <>
        {
            <CountryCard 
                    id={detail.id}
                    name={detail.name}
                    img={detail.img}
                    continents={detail.continents}
                    capital={detail.capital}
                    subregion={detail.subregion}
                    area={detail.area}
                    population={detail.population}                   
                    activities={detail.activities}
            />
        }
        </>
    )
}
