import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Landing.module.css';
import CardLanding from './CardLanding';
import NextMatch from './NextMatch';
import { getAllUsers, getWorldCup } from '../../redux/actions';
import CardPoints from './CardPoints';
import Top5Rank from './Top5Rank';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../Loading/LoadingComponent';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import {Link} from 'react-router-dom';
import BannedUser from '../GeneralComponents/BannedUser';
import Champion from './Champion';

function Landing() {

  const userInfo= useSelector(state=> state.user);
  const users = useSelector(state=> state.users);
  const worldcup = useSelector(state=> state.worldcup);
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getWorldCup());
    dispatch(getAllUsers());
  }, [dispatch])

  let fecha = new Date();
  // let fecha = new Date(2022,12,19);
  let dateFinales = new Date("2022, 12, 19");
  // let dateFinales = new Date("2022, 10, 15");
  

  const index = users.findIndex(user => user.sub === userInfo.sub);
  
  if(isLoading) {
    return <Loading />
  }
  if(loading){
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    return <Loading />
  }
  else if (userInfo.statusBanned === true) {
    return (
    <>
      <BannedUser />
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
} else{
    return (
      <div className={style.all}>
        <div className={style.top}>
          <h1 className={style.prode}> Prode Qatar 2022 </h1>
        </div>
        <div className={style.down}>
          <div className={style.card}>
            <div className={style.top10}>
              <div className={style.rules}>
                <Link to='/reglas'>
                    <button className={style.btn} > 
                      VER REGLAS 
                    </button>
                </Link>
              </div>
              <p className={style.title}>
                Top 5
              </p>
              <Top5Rank />
            </div>

            <div className={style.card1}>
              {isAuthenticated
              ? <div className={style.card2}>
                  <CardPoints pointsUser={userInfo.totalPoints} />
                </div>
              : null         
              }

              {isAuthenticated
              ? <div className={style.card2}>
                  <CardLanding myPosition={index + 1} />
                </div>
              : null         
              }
              {
                dateFinales > fecha && !worldcup.first ?
                <div className={style.card2}>
                  <NextMatch />
                </div> :
                null        
              }

              {
                worldcup.first && worldcup.bestPlayer ?
                <div className={style.card2}>
                  <Champion />
                </div> :
                null
              }

            </div>
          </div>
        </div>
        <div className={style.footer}>
          <Footer2 />
        </div>
      </div>
    )
  }
}

export default Landing