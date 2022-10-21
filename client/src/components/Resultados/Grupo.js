import React, { useEffect, useState } from 'react';
import BasicTable from './Tabla';
import Partido from './Partido';
import style from './Grupo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupTeams, getGroupGames } from '../../redux/actions';
import Loading2 from '../Loading/Loading2';

function Grupo({group, setGroup}) {

  const games = useSelector(state=> state.games);
  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);
  // const teams = useSelector(state=> state.teams);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // useEffect(() => {
  //   dispatch(getGroupGames(group));
  //   dispatch(getGroupTeams(group));
  //   // return () => {
  //   //   dispatch(cleanGames());
  //   //   dispatch(cleanTeams());
  //   // }
  // }, [dispatch, group, isModify])

  useEffect(() => {
      // setLoading(true);
      // setLoading2(true);
      // dispatch(getGroupGames(group, setLoading));
      dispatch(getGroupTeams(group, setLoading));
  }, [dispatch, group, isModify]);


  useEffect(() => {
    setLoading(true);
    dispatch(getGroupGames(group, setLoading));
    // eslint-disable-next-line
  }, [group]);

  function toNextGroup() {
    if(group === "A") setGroup("B");
    if(group === "B") setGroup("C");
    if(group === "C") setGroup("D");
    if(group === "D") setGroup("E");
    if(group === "E") setGroup("F");
    if(group === "F") setGroup("G");
    if(group === "G") setGroup("H");
    if(group === "H") setGroup("Octavos de Final");
    if(group === "Octavos de Final") setGroup("Cuartos de Final");
    if(group === "Cuartos de Final") setGroup("Semifinales");
    if(group === "Semifinales") setGroup("Final y Tercer Puesto");
  }

  function toPrevGroup() {
    if(group === "B") setGroup("A");
    if(group === "C") setGroup("B");
    if(group === "D") setGroup("C");
    if(group === "E") setGroup("D");
    if(group === "F") setGroup("E");
    if(group === "G") setGroup("F");
    if(group === "H") setGroup("G");
    if(group === "Octavos de Final") setGroup("H");
    if(group === "Cuartos de Final") setGroup("Octavos de Final");
    if(group === "Semifinales") setGroup("Cuartos de Final");
    if(group === "Final y Tercer Puesto") setGroup("Semifinales");
  }

  if(loading) {
    return(
      <div className={style.load}>
          <Loading2 />
      </div>
    )
  }
  return (
    <div className={style.all}>
      <div className={style.tabla}>
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
                <div className={width > 800 ? style.stadium : style.none}>
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
                      group={game.group}
                      penalties={game.penalties}
                      img1={ game.local !== null ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null }
                      team1={game.local !== null ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                      img2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                      team2={game.away !== null ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                      localResult={game.localResult}
                      awayResult={game.awayResult}
                      isModify={isModify}
                      setIsModify={setIsModify} />
          )})
        }
      </div>
      <div className={style.buttons}>
          { group === 'A' &&
          <div>      
            <button className={style.hidden}>  </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo B </button>
          </div> }
          { group === 'B' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo A </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo C </button>
          </div> }       
          { group === 'C' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo B </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo D </button>
          </div> }      
          { group === 'D' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo C </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo E </button>
          </div> }   
          { group === 'E' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo D </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo F </button>
          </div> }     
          { group === 'F' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo E </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo G </button>
          </div> }    
          { group === 'G' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo F </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo H </button>
          </div> }   
          { group === 'H' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo G </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Octavos de Final  </button>
          </div> }   
          { group === 'Octavos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo H </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Cuartos de Final  </button>
          </div> }   
          { group === 'Cuartos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Octavos de Final </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Semifinales  </button>
          </div> }   
          { group === 'Semifinales' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Cuartos de Final </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Final y Tercer Puesto  </button>
          </div> }  
          { group === 'Final y Tercer Puesto' &&
          <div >      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Semifinales </button>
            <button className={style.hidden}>  </button>
          </div> }  
      </div>
     
       

    </div>
    
  )
}

export default Grupo

