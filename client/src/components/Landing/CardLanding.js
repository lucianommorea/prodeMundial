import React from 'react';
import style from './CardLanding.module.css';
import { Link, useLocation } from 'react-router-dom';

function CardLanding({ myPosition}) {

  let location = useLocation();

  return (
    <div>
        <div className={style.card}>
          {/* <div className={style.cardPoints}>
            <div className={style.points}>
              {pointsUser}
            </div>
            <div className={style.myPoints}>
                Mis puntos
            </div>
          </div> */}
          <div className={style.cardPoints}>
            <div className={style.points}>
              {myPosition}°
            </div>
            <div className={style.myPoints}>
                Mi posición
            </div>
          </div>
          {  
            location.pathname === '/' ?
            <Link to='/ranking'>
              <button className={style.btn} > IR AL RANKING </button>
            </Link>    :
            null     

          }

        </div>
    </div>
  )
}

export default CardLanding