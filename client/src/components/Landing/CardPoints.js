import React from 'react';
import style from './CardLanding.module.css';
import { Link } from 'react-router-dom';

function CardPoints({pointsUser}) {

  return (
    <div>
        <div className={style.card}>
          <div className={style.cardPoints}>
            <div className={style.points}>
              {pointsUser}
            </div>
            <div className={style.myPoints}>
                Mis puntos
            </div>
          </div>
            {/* <Link to='/ranking'>
                <button className={style.btn} > IR AL RANKING </button>
            </Link> */}
        </div>
    </div>
  )
}

export default CardPoints