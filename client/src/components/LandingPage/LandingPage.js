import React from 'react';
import {Link} from 'react-router-dom';
import s from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div className={s.back}>
            <div className={s.board}>
                <div className={s.title}>
                    <h1>Henry Countries</h1>
                </div>
                <div className={s.bottom}>
                    <Link to='/home' className={s.start}>  
                        <button className={s.btn}>
                            Start
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}