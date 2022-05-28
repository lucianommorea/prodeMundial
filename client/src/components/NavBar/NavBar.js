import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'

export default function NavBar(){
    return(
        <nav>
            <span>Countries App</span>
            <div>
                <span>  
                    <Link to= {'/home'}> 
                       Home 
                    </Link>
                </span>
            </div>            
            <div>
                <span> Create Activity </span>
            </div>
            <SearchBar />

        </nav>
    )
}