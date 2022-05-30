import React from 'react';


export default function FilterBar({handleClick, handleClickFilter, handleClickContinent}) {

    return(
        <>
            <div>
                <h1> Countries</h1>
            </div>
            <div>
                <select id='firstSelect' onChange={e=> handleClickFilter(e)}>
                    <option>Order By</option>
                    <option value= 'asc'>A-Z</option>
                    <option value= 'desc'>Z-A</option>
                    <option value= 'maxPop'>Ascending population</option>
                    <option value= 'minPop'>Descending population</option>
                </select>
            </div>
            <div>
                <select id='secondSelect' onChange={e=> handleClickContinent(e)}>
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
                <button onClick={e=> handleClick(e)}>Reset</button>
            </div>
        </>
    )
}