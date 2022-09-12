import react, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { getGroupTeams } from '../../redux/actions';
import style from './Tabla.module.css'


export default function BasicTable({group}) {

  const teams = useSelector(state => state.teams)
  const [width, setWidth] = useState(window.innerWitdh);
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // useEffect(() => {
  //   dispatch(getGroupTeams(group));
  // }, [dispatch, group]);



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

            {teams.map((team) => (
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
}
