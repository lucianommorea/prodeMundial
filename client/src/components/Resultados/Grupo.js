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
      <div className={style.buttons}>
          { group === 'A' &&
          <div>      
            <button className={style.hidden}>  </button>
            <button className={style.next}> Ir a Grupo B </button>
          </div> }
          { group === 'B' &&
          <div>      
            <button className={style.prev}> Ir a Grupo A </button>
            <button className={style.next}> Ir a Grupo C </button>
          </div> }       
          { group === 'C' &&
          <div>      
            <button className={style.prev}> Ir a Grupo B </button>
            <button className={style.next}> Ir a Grupo D </button>
          </div> }      
          { group === 'D' &&
          <div>      
            <button className={style.prev}> Ir a Grupo C </button>
            <button className={style.next}> Ir a Grupo E </button>
          </div> }   
          { group === 'E' &&
          <div>      
            <button className={style.prev}> Ir a Grupo D </button>
            <button className={style.next}> Ir a Grupo F </button>
          </div> }     
          { group === 'F' &&
          <div>      
            <button className={style.prev}> Ir a Grupo E </button>
            <button className={style.next}> Ir a Grupo G </button>
          </div> }    
          { group === 'G' &&
          <div>      
            <button className={style.prev}> Ir a Grupo F </button>
            <button className={style.next}> Ir a Grupo H </button>
          </div> }   
          { group === 'H' &&
          <div>      
            <button className={style.prev}> Ir a Grupo G </button>
            <button className={style.next}> Ir a Grupo H  </button>
          </div> }   
          { group === 'Octavos de Final' &&
          <div>      
            <button className={style.prev}> Ir a Grupo H </button>
            <button className={style.next}> Ir a Cuartos de Final  </button>
          </div> }   
          { group === 'Cuartos de Final' &&
          <div>      
            <button className={style.prev}> Ir a Octavos de Final </button>
            <button className={style.next}> Ir a Semifinales  </button>
          </div> }   
          { group === 'Semifinales' &&
          <div>      
            <button className={style.prev}> Ir a Cuartos de Final </button>
            <button className={style.next}> Ir a Final y Tercer Puesto  </button>
          </div> }  
          { group === 'Final y Tercer Puesto' &&
          <div>      
            <button className={style.prev}> Ir a Semifinales </button>
            <button className={style.hidden}>  </button>
          </div> }  
      </div>
     
       

    </div>
    
  )
}

export default Grupo

