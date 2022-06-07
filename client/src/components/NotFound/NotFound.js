import React from 'react';
import {Link} from 'react-router-dom';
import notFoundImage from '../../images/error.jpg'
import s from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={s.back}>
            <div id={s.notFoundCountry} > 
                <img src={notFoundImage} alt='Not Found'/>
            </div>
            <div id={s.btn}>
                <Link to='/home'>   
                        <button> Back to countries </button>
                </Link> 
            </div>
        </div>
    )
}