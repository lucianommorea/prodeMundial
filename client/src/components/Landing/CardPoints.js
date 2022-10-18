import React from 'react';
import style from './CardLanding.module.css';

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
        </div>
    </div>
  )
}

export default CardPoints