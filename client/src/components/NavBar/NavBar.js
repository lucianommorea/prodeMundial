import React from 'react';
import {Link} from 'react-router-dom';
import s from './NavBar.module.css';
import {useLocation} from 'react-router-dom'


export default function NavBar({match}){

    let location = useLocation();

    return(
        <div className={s.navbar}>
            <div className={s.title}>     
                <span>Countries App  </span>  
            </div>  
            <div>
                <span>  
                    <Link to= {'/'}> 
                        <button className={s.btn1}>
                            Landing Page
                        </button>
                    </Link>
                </span>
            </div> 
            {
                match && !match.isExact ?
                <div>
                    <span>  
                        <Link to= {'/home'} > 
                            <button className={s.btn2}>
                                Home
                            </button>
                        </Link>
                    </span>
                </div>
                :   <div>
                    </div>
                    
            }
            {
                location.pathname !== '/home/activity' ?    
                <div>
                    <span>
                        <Link to={'/home/activity'} >
                            <button className={s.btn3}>
                                Create Activity 
                            </button>
                        </Link>
                    </span>
                </div>
                : <div>
                </div>
             
            }
        </div>
    )
}