import React from 'react';
import { useSelector } from 'react-redux';
import style from './NextMatch.module.css'
import { Link } from 'react-router-dom';
import calendarC from '../../images/calendariocolor.png';
import { useAuth0 } from "@auth0/auth0-react";


function NextMatch() {

    const games = useSelector(state=> state.games);
    // let fecha = new Date(2022,12,28);
    let fecha = new Date();
    let nextGames = games.filter(game=> new Date(game.date) > fecha);
    let newDate = new Date(nextGames[0]?.date);
    const { isAuthenticated, loginWithRedirect } = useAuth0();


    return (
        <div>
        {
            nextGames.length > 0 ?
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
            </div> :
            null
            
        }
           
        </div>
    )
    }

export default NextMatch