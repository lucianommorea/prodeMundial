import React, { useEffect, useState } from 'react';
import BasicTable from './Tabla';
import Partido from './Partido';
import style from './Grupo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupTeams, getGroupGames, getUserId } from '../../redux/actions';


function Grupo({group, setGroup}) {

  const games = useSelector(state=> state.games);
  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);
  // const teams = useSelector(state=> state.teams);

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

let [games2, setGames2] = useState([
    {
      id: 49,
      stadium: "Khalifa International",
      date: "2022/12/03 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 50,
      stadium: "Ahmad Bin Ali",
      date: "2022/12/03 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 51,
      stadium: "Al Thumama",
      date: "2022/12/04 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 52,
      stadium: "Al Bayt",
      date: "2022/12/04 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 53,
      stadium: "Al Janoub",
      date: "2022/12/05 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 54,
      stadium: "Stadium 974",
      date: "2022/12/05 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 55,
      stadium: "Education City",
      date: "2022/12/06 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 56,
      stadium: "Lusail Stadium",
      date: "2022/12/06 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 57,
      stadium: "Education City",
      date: "2022/12/09 12:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 58,
      stadium: "Lusail Stadium",
      date: "2022/12/09 16:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 59,
      stadium: "Al Thumama",
      date: "2022/12/10 12:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 60,
      stadium: "Al Bayt",
      date: "2022/12/10 16:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 61,
      stadium: "Lusail Stadium",
      date: "2022/12/13 16:00:00.59",
      position: 'Semifinales',
      group: 'Semifinales',
    },
    {
      id: 62,
      stadium: "Al Bayt",
      date: "2022/12/14 16:00:00.59",
      position: 'Semifinales',
      group: 'Semifinales',
    },
    {
      id: 63,
      stadium: "Khalifa International",
      date: "2022/12/17 12:00:00.59",
      position: 'Final y Tercer Puesto',
      group: 'Final y Tercer Puesto',
    },
    {
      id: 64,
      stadium: "Lusail Stadium",
      date: "2022/12/18 12:00:00.59",
      position: 'Final y Tercer Puesto',
      group: 'Final y Tercer Puesto',
    }
  ]);


  useEffect(() => {
    dispatch(getGroupGames(group));
    dispatch(getGroupTeams(group));
  }, [dispatch, group, isModify]);




    return (
      <div className={style.all}>
        <div>
          <BasicTable group={group} teams2={teams2} isModify={isModify}/>
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
          { (group === 'A' || group === 'B' || group === 'C' || group === 'D' || group === 'E' || group === 'F' || group === 'G' || group === 'H') &&
            games.map(game => {
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
                        // localResult={game.localResult}
                        // awayResult={game.awayResult}
                        setIsModify={setIsModify}
                        isModify={isModify}
                        teams2={teams2}
                        setTeams2={setTeams2}
                        group={group}
                        games2={games2} 
                        position={game.position} />
            )})
          }
           { (group === 'Octavos de Final' || group === 'Cuartos de Final' || group === 'Semifinales' || group === 'Final y Tercer Puesto') &&
            games2.filter(game=> game.group === group).map(game => {
              return (
              <Partido  key={game.id} 
                        id={game.id} 
                        date={game.date.slice(0,10)} 
                        hour={game.date.slice(11,16)}
                        stadium={game.stadium}
                        // img1={game.local ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        // team1={game.local ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        // img2={game.away ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        // team2={game.away ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        // id1={game.local ? game.local === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        // id2={game.away ? game.away === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        img1={game.local ? game.local.img : null}
                        img2={game.away ? game.away.img : null}
                        team1={game.local ? game.local.name : null}
                        team2={game.away ? game.away.name : null}
                        id1={game.local ? game.local.id : null}
                        id2={game.away ? game.away.id : null}
                        // team1={game.local ? teams2.find(team=> team.id === game.local).name : null}
                        // team2={game.local ? teams2.find(team=> team.id === game.local).name : null}
                        // id1={game.local ? teams2.find(team=> team.id === game.local).id : null}
                        // id2={game.local ? teams2.find(team=> team.id === game.local).id : null}
                        // localResult={game.localResult}
                        // awayResult={game.awayResult}
                        setIsModify={setIsModify}
                        isModify={isModify}
                        teams2={teams2}
                        setTeams2={setTeams2} 
                        games2={games2} />
            )})
          }
        </div>
  
      </div>
      
    )

  }
  

export default Grupo

