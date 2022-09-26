import react from 'react';
import { useSelector } from 'react-redux';
import style from './Tabla.module.css'


export default function BasicTable({group}) {

  const teams = useSelector(state => state.teams);


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
