import React, { useEffect, useState } from 'react'
import BasicTable from './Tabla'
import Partido from './Partido'
import style from './Grupo.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupTeams, getGroupGames } from '../../redux/actions'

function Grupo({group}) {

  const games = useSelector(state=> state.games);
  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);
  const teams = useSelector(state=> state.teams);

  useEffect(() => {
    dispatch(getGroupGames(group));
    dispatch(getGroupTeams(group));
  }, [dispatch, group, isModify])



  return (
    <div className={style.all}>
      <div>
        {group === 'A' || group === 'B' || group === 'C' || group === 'D' || group === 'E' || group === 'F' || group === 'G' || group === 'H'
        ? <BasicTable group={group} />
        : null
        }
      </div>
      <div className={style.barra}>
                <div>
                    <span className={style.date}>
                        Dia
                    </span>
                </div>
                <div className={style.hour}>
                    <span className={style.hour}>
                        Hora
                    </span>
                </div>
                <div className={style.stadium}>
                    <span className={style.stadium}>
                        Estadio
                    </span>
                </div>
                <div className={style.flag}>
                </div>
                <div className={style.team}>
                    <span className={style.team1}>
                      Local
                    </span>
                </div>
                <div className={style.goals}>
                </div>
                <div className={style.goals}>
                </div>
                <div className={style.team}>
                    <span className={style.team2}>
                      Visitante
                    </span>
                </div>
                <div className={style.flag}>
                </div>
            </div>

      <div className={style.games}>
        { games.map(game => {
            return (
            <Partido  key={game.id} 
                      id={game.id} 
                      date={game.date.slice(0,10)} 
                      hour={game.date.slice(11,16)}
                      stadium={game.stadium}
                      img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                      // img1={game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img}
                      team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                      // team1={game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name}
                      img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                      // img2={game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img}
                      team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                      // team2={game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name}
                      localResult={game.localResult}
                      awayResult={game.awayResult}
                      setIsModify={setIsModify} />
          )})
        }
        {/* <Partido idGame={idGame}/> */}
      </div>

     
       

    </div>
    
  )
}

export default Grupo

