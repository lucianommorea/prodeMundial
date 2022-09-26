import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Landing.module.css';
import CardLanding from './CardLanding';
import NextMatch from './NextMatch';
import { getUsersRanking } from '../../redux/actions';
import CardPoints from './CardPoints';
import Top10Rank from './Top10Rank';

function Landing() {

  const userInfo= useSelector(state=> state.user);
  const users = useSelector(state=> state.users);
  const dispatch = useDispatch();

  console.log(userInfo);

  useEffect(() => {
    dispatch(getUsersRanking())
  }, [dispatch])

  const index = users.findIndex(user => user.sub === userInfo.sub)
  
    
  return (
    <div className={style.all}>
      <div className={style.top}>
        <h1 className={style.prode}> Prode Qatar 2022 </h1>
      </div>
      <div className={style.down}>
        <div className={style.card}>
          <div className={style.top10}>
            <p className={style.title}>
              Top 10
            </p>
            <Top10Rank />
          </div>
          <div className={style.card1}>
            <div className={style.card2}>
              <CardPoints pointsUser={userInfo.totalPoints} />
            </div>
            <div className={style.card2}>
              <CardLanding myPosition={index+1} />
            </div>
            <div className={style.card2}>
              <NextMatch />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing