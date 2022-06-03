import React from 'react';
import {Link} from 'react-router-dom';
import s from './NavBar.module.css'


export default function NavBar(){
    return(
        <div className={s.navbar}>
            <div className={s.title}>     
                <span>Countries App  </span>  
            </div>  
            <div>
                <span>  
                    <Link to= {'/'}> 
                        <button className={s.btn1}>
                            Home
                        </button>
                    </Link>
                </span>
            </div> 
            <div>
                <span>  
                    <Link to= {'/home'} className={s.countries}> 
                        <button className={s.btn2}>
                            Countries
                        </button>
                    </Link>
                </span>
            </div>     
            <div>
                <span>
                    <Link to={'/home/activity'} >
                        <button className={s.btn3}>
                            Create Activity 
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    )
}