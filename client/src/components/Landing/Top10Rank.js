import React from "react";
import { useSelector } from "react-redux";
import style from "./Top10Rank.module.css";
// import { getTopTenRanking } from "../redux/actions";
// import { useEffect } from "react";
import Top10Card from "./Top10Card";


const Top10Rank = () => {
  
  const users = useSelector((state) => state.users);


  return (
    <div className={style.all}>
      <div>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.info}`}>
            <p className={`col-2 ${style.nro}`}></p>
            <p className={`col-7 ${style.nick}`}>Nombre</p>
            <p className={`col-3 ${style.puntos}`}>Puntos</p>
          </div>
        </div>

        {users ?
          <>
            { users?.map((e) => 
                <div className={`row ${style.mapeando} `} key={e.sub}>
                  <Top10Card
                    position={e.myPosition}
                    nickname={e.nickname}
                    points={e.totalPoints}
                  />
                </div> 
            )}
          </> :
          <div> No se encontraron usuarios </div>
        }
      </div>
    </div>
  );
};

export default Top10Rank;
