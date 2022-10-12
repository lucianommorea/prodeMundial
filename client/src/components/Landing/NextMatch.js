import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import style from './NextMatch.module.css'
import { getAllGames } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import calendarC from '../../images/calendariocolor.png';
import { useAuth0 } from "@auth0/auth0-react";


function NextMatch() {

    const games = useSelector(state=> state.games);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    let fecha = new Date()
    let nextGames = games.filter(game=> new Date(game.date) > fecha);
    let newDate = new Date(games[0]?.date);
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    

    // console.log(newDate)
    // console.log(fecha < new Date(games[0]?.date))
    // console.log(fecha > new Date(games[0]?.date))
    // console.log(nextGames)


    useEffect(() => {
        dispatch(getAllGames(setLoading))
    }, [dispatch])
  

    if (loading) {
        return (
          <>
            Loading
          </>
        );
      } else
    return (
        <div>
            <div className={style.card} >
            <div className={style.game}>
                <div className={style.next}>
                    Proximo Partido
                </div>
                <div className={style.hour}>
                    <img src={calendarC}
                        alt=''
                        className={style.calendar}
                        />
                    {newDate.toString().slice(0, 21)}
                </div>
                <div className={style.points}>
                    {
                        nextGames &&     
                        <div className={style.nextGame}>
                            <img    src={nextGames[0].teams[0].img}
                                        alt=''
                                            className={style.flag}
                            />
                            <div>
                            {nextGames[0].teams[0].id} VS {nextGames[0].teams[1].id}
                            </div>
                            <img    src={nextGames[0].teams[1].img}
                                        alt=''
                                            className={style.flag2}
                            />
                        </div>                
                    }

                </div>
            </div>
                {
                    isAuthenticated ?
                    <Link to='/mispronosticos'>
                        <button className={style.btn} > IR A MIS PRONOSTICOS </button>
                    </Link> :
                        <button className={style.btn} onClick={() => loginWithRedirect()} > IR A MIS PRONOSTICOS </button>
                }
            </div>
        </div>
    )
    }

export default NextMatch