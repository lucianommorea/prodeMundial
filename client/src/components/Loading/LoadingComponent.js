import React from 'react';
import style from './Loading.module.css';
import mascota from '../../images/mascota.gif'

export default function Loading () {

    // return (
    //     <div className={s.center}>
    //         <div className={s.ring}> </div>
    //         <span> Loading ... </span>
    //     </div>
    // )

    return (
        <div className={style.all}>
            <div className={style.load}> 
                <img src={mascota} alt='Loading' className={style.gif}></img>
            </div>
            {/* <span> Loading ... </span> */}
        </div>
    )

}