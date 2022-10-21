import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGroupGames } from '../../redux/actions';
import style from './Tabla.module.css'


export default function BasicTable({group, teams2, isModify}) {

  // const teams = useSelector(state => state.teams)
  // const [width, setWidth] = useState(window.innerWitdh);
  // const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch()

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize, false);
  // }, []);

  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };

  useEffect(() => {
    dispatch(getGroupGames(group));
  }, [group, teams2, isModify]);

  if(group === 'A' || group === 'B' || group === 'C' || group === 'D' || group === 'E' || group === 'F' || group === 'G' || group === 'H'){
    return (
      <div className={style.all}>
        <div className={`container-fluid ${style.container}`}>
              <div className={`row align-items-center ${style.columnsname}`}>
                <div className={`col `}></div>
                <div className={`col ${style.seleccion}`}> Equipo </div>
                <div className={`col ${style.stat}`}>PJ</div>
                <div className={`col ${style.stat}`}>G</div>
                <div className={`col ${style.stat}`}>E</div>
                <div className={`col ${style.stat}`}>P</div>
                <div className={`col ${style.stat}`}>GF</div>
                <div className={`col ${style.stat}`}>GC</div>
                <div className={`col ${style.stat}`}>DG</div>
                <div className={`col ${style.stat}`}>Pts</div>
              </div>
  
              {teams2.filter(team => team.group === group).sort(function (a, b) {
                if (a.points > b.points) {
                  return -1;
                }
                if (a.points < b.points) {
                  return 1;
                }
                else {
                  if (a.difGoals > b.difGoals) {
                    return -1;
                  }
                  if (a.difGoals < b.difGoals) {
                    return 1;
                  }
                  else {
                    if (a.goalsF > b.goalsF) {
                      return -1;
                    }
                    if (a.goalsF < b.goalsF) {
                      return 1;
                    }
                    else {
                      if (a.name > b.name) {
                        return -1;
                      }
                      if (a.name < b.name) {
                        return 1;
                      }
                      return 0;
                    }
                  }
                } 
              }).map((team) => ( 
                  <div
                    className={`row align-items-center ${style.columnsteams}`}
                    key={team.id}
                  >
                    <div className={`col ${style.stat}`}>
                    <img
                      src={team.img}
                      className={style.flag}
                      alt={team.name}
                    />
                    </div>
                    <div className={`col ${style.seleccion}`}> {team.name} </div>
                    <div className={`col ${style.stat}`}>{team.totalGames}</div>
                    <div className={`col ${style.stat}`}>{team.wins}</div>
                    <div className={`col ${style.stat}`}>{team.draws}</div>
                    <div className={`col ${style.stat}`}>{team.loses}</div>
                    <div className={`col ${style.stat}`}>{team.goalsF}</div>
                    <div className={`col ${style.stat}`}>{team.goalsC}</div>
                    <div className={`col ${style.stat}`}>{team.difGoals}</div>
                    <div className={`col ${style.stat}`}>{team.points}</div>
                  </div> )
                )}
          </div>
      </div>
    );
  } else {
    return null
  }
  
}
