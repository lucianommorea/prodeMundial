import React from 'react';


export default function CountryCard({name, img, continents, id, capital, subregion, area, population, activities}) {
    return(
    <>
        <div>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                ID: {id}
            </div>
            <div>
                Country: {name}
            </div>
            <div>
                Continent: {continents}
            </div>
            <div>
                Capital: {capital}
            </div>
            <div>
                Subregion: {subregion}
            </div>
            <div>
                Area: {area} km2
            </div>
            <div>
                Population: {population}
            </div>
        </div>
        

        <div>
        {
            activities && activities.map(a=>{
                return(
                    <div key={a.id}>
                        <div>
                            Activity: {a.name}
                        </div>
                        <div>
                            Difficult: {a.difficult}
                        </div>
                        <div>
                            Duration: {a.duration}
                        </div>
                        <div>
                            Season: {a.season}
                        </div>
                    </div>
                    )
            })      
        }
        </div>
    </>
        
    )
}
