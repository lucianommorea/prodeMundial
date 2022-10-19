import React, { useEffect, useState } from 'react';
import BasicTable from './Tabla';
import Partido from './Partido';
import style from './Grupo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupTeams, getGroupGames, cleanGames, cleanTeams} from '../../redux/actions';
import Loading2 from '../Loading/Loading2';
import { useAuth0 } from "@auth0/auth0-react";


function Grupo({group, setGroup}) {

  const games = useSelector(state=> state.games);
  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const userInfo = useSelector(state=> state.user);
  const { isAuthenticated } = useAuth0();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };


  let [teams2, setTeams2] = useState([
    {   
      id: "QAT",
      name: "Qatar",
      img: "https://flagcdn.com/qa.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "ECU",
      name: "Ecuador",
      img: "https://flagcdn.com/ec.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "SEN",
      name: "Senegal",
      img: "https://flagcdn.com/sn.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "NED",
      name: "Paises Bajos",
      img: "https://flagcdn.com/nl.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "ENG",
      name: "Inglaterra",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "IRN",
      name: "Irán",
      img: "https://flagcdn.com/ir.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "USA",
      name: "Estados Unidos",
      img: "https://flagcdn.com/us.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "WAL",
      name: "Gales",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "ARG",
      name: "Argentina",
      img: "https://flagcdn.com/ar.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "KSA",
      name: "Arabia Saudita",
      img: "https://flagcdn.com/sa.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "MEX",
      name: "Mexico",
      img: "https://flagcdn.com/mx.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "POL",
      name: "Polonia",
      img: "https://flagcdn.com/pl.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "FRA",
      name: "Francia",
      img: "https://flagcdn.com/fr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "DEN",
      name: "Dinamarca",
      img: "https://flagcdn.com/dk.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "TUN",
      name: "Tunez",
      img: "https://flagcdn.com/tn.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "AUS",
      name: "Australia",
      img: "https://flagcdn.com/au.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "ESP",
      name: "España",
      img: "https://flagcdn.com/es.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "GER",
      name: "Alemania",
      img: "https://flagcdn.com/de.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "JPN",
      name: "Japón",
      img: "https://flagcdn.com/jp.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "CRC",
      name: "Costa Rica",
      img: "https://flagcdn.com/cr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "BEL",
      name: "Bélgica",
      img: "https://flagcdn.com/be.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "CAN",
      name: "Canadá",
      img: "https://flagcdn.com/ca.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
   {   
      id: "MAR",
      name: "Marruecos",
      img: "https://flagcdn.com/ma.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "CRO",
      name: "Croacia",
      img: "https://flagcdn.com/hr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "BRA",
      name: "Brasil",
      img: "https://flagcdn.com/br.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
   {   
      id: "SRB",
      name: "Serbia",
      img: "https://flagcdn.com/rs.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
   {   
      id: "SUI",
      name: "Suiza",
      img: "https://flagcdn.com/ch.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
  {   
      id: "CMR",
      name: "Camerún",
      img: "https://flagcdn.com/cm.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
  {   
      id: "POR",
      name: "Portugal",
      img: "https://flagcdn.com/pt.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "GHA",
      name: "Ghana",
      img: "https://flagcdn.com/gh.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "URU",
      name: "Uruguay",
      img: "https://flagcdn.com/uy.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "KOR",
      name: "Corea del Sur",
      img: "https://flagcdn.com/kr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  }
])

  useEffect(() => {
    if(isAuthenticated){
      dispatch(getGroupGames(group, setLoading));
      dispatch(getGroupTeams(group, setLoading2));
    }
    // return () => {
    //   dispatch(cleanGames());
    //   dispatch(cleanTeams());
    // }

  }, [dispatch, group, isModify, isAuthenticated, teams2, userInfo, setLoading, setLoading2]);


    
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

  let fecha = new Date()
  let dateOctavos = new Date("2022, 09, 18");
  let dateCuartos = new Date("2022, 09, 18");
  let dateSemis = new Date("2022, 09, 18");
  let dateFinales = new Date("2022, 09, 18");
  // let dateOctavos = new Date("2022, 11, 29");
  // let dateCuartos = new Date("2022, 12, 03");
  // let dateSemis = new Date("2022, 12, 09");
  // let dateFinales = new Date("2022, 12, 13");
  
  if(loading) {
    return <Loading2 className={style.load}/>
  }
  if(loading2) {
    return <Loading2 className={style.load}/>
  }
  // if(isLoading) {
  //   return <Loading2 />
  // }
  else 
    return (
      <div className={style.all}>
        <div className={group === "Octavos de Final" || group === "Cuartos de Final" || group === "Semifinales" || group === "Final y Tercer Puesto" ? style.none : style.tabla}>
          <BasicTable group={group} teams2={teams2} isModify={isModify}/>
        </div>
        <div className={group === "Octavos de Final" || group === "Cuartos de Final" || group === "Semifinales" || group === "Final y Tercer Puesto" ? style.barra : style.barra2}>
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

          { loading ? <Loading2 /> : games.map(game => {
              return (
              <Partido  key={game.id} 
                        id={game.id} 
                        date={game.date.slice(0,10)} 
                        hour={game.date.slice(11,16)}
                        stadium={game.stadium}
                        img1={game.local ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        team1={game.local ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        img2={game.away ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        team2={game.away ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        id1={game.local ? game.local === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        id2={game.away ? game.away === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        localResult={game.localResult}
                        awayResult={game.awayResult}
                        setIsModify={setIsModify}
                        isModify={isModify}
                        teams2={teams2}
                        setTeams2={setTeams2}
                        group={group}
                        position={game.position}
                        loading={loading}
                        setLoading={setLoading} />
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
            {
              dateOctavos < fecha &&
              <button className={style.next} onClick={toNextGroup}> Ir al Octavos de Final  </button>
            }
          </div> }   
          { group === 'Octavos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo H </button> 
            {
              dateCuartos < fecha &&
              <button className={style.next} onClick={toNextGroup}> Ir a Cuartos de Final  </button>
            }
          </div> }   
          { group === 'Cuartos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Octavos de Final </button>
            {
              dateSemis < fecha &&
            <button className={style.next} onClick={toNextGroup}> Ir a Semifinales  </button>
            }
          </div> }   
          { group === 'Semifinales' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Cuartos de Final </button>
            {
              dateFinales < fecha &&
            <button className={style.next} onClick={toNextGroup}> Ir a Final y Tercer Puesto  </button>
            }
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

