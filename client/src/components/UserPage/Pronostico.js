import React from 'react';
import style from './Pronostico.module.css';


function Pronostico({team1, team2, result1, result2}) {

    return (
        <div className={style.all}>
            <div className={style.team}>
                {team1}
            </div>
            <div className={style.result}>
                {result1}
            </div>
            <div className={style.result}>
                {result2}
            </div>
            <div className={style.team2}>
                {team2}
            </div>
        </div>
    )
}

export default Pronostico