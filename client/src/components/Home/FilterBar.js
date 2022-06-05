import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, filterByActivities, getCountries} from '../../redux/actions/actions';
import s from './FilterBar.module.css'




export default function FilterBar({handleClick, handleClickFilter, handleClickContinent}) {

    const dispatch = useDispatch()
    const activities = useSelector(state=> state.activities)

    useEffect(()=> {
        dispatch(getCountries())
        dispatch(getActivities());
    }, [dispatch])

    function handleClickActivity(e){
        e.preventDefault()
        dispatch(filterByActivities(e.target.value))
        document.getElementById("thirdSelect").getElementsByTagName('option')[0].selected = 'selected';
    }

    return(
        <div className={s.all}>
            <div className={s.btn}>
                <span className={s.search}>
                    Press to reset countries:
                </span>
                <button onClick={e=> handleClick(e)}>Reset</button>
            </div>
            <div>
                <p className={s.search}>
                    Filter by Continent:
                </p>
                <select id='firstSelect' onChange={e=> handleClickContinent(e)}>
                    <option value= 'All'>All continents</option>
                    <option value= 'Africa'>Africa</option>
                    <option value= 'Antarctica'>Antartica</option>
                    <option value= 'Asia'>Asia</option>
                    <option value= 'Europe'>Europe</option>
                    <option value= 'South America'>South America</option>
                    <option value= 'North America'>North America</option>
                    <option value= 'Oceania'>Oceania</option>
                </select>
            </div>
            <div>
                <p className={s.search}>
                    Filter by Activity:
                </p>
                <select id='secondSelect' onChange={e=> handleClickActivity(e)} >
                    <option value= 'All'>Select activity</option>
                    { activities && activities.map(a=>(
                        <option value={a.name} key={a.id}>{a.name}</option>
                    ))}                
                </select>
            </div>
            <div>
                <p className={s.search}>
                    Sort by:
                </p>
                <select id='thirdSelect' onChange={e=> handleClickFilter(e)}>
                    <option value= 'All' selected disabled>Please select</option>
                    <option value= 'asc'>A-Z</option>
                    <option value= 'desc'>Z-A</option>
                    <option value= 'maxPop'>Ascending population</option>
                    <option value= 'minPop'>Descending population</option>
                    <option value= 'maxArea'>Largest Area</option>
                    <option value= 'minArea'>Smaller Area</option>
                </select>
            </div>
            
        </div>
    )
}