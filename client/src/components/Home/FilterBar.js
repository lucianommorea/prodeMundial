import React from 'react';

export default function FilterBar({handleClick}) {
    return(
        <>
            <div>
                <h1> Countries</h1>
                <button onClick={e=> handleClick(e)}>Reset</button>
            </div>
            <div>
                <select>
                    <option value= 'asc'>A-Z</option>
                    <option value= 'desc'>Z-A</option>
                </select>
                <select>
                    <option value= 'maxPop'>Ascending population</option>
                    <option value= 'minPop'>Descending population</option>
                </select>
            </div>
        </>
    )
}