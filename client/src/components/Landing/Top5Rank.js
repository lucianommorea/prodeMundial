import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Top5Rank.module.css";
import Top5Card from "./Top5Card";
import { getTopFive } from "../../redux/actions";


const Top5Rank = () => {
  
  const topfive = useSelector((state) => state.topfive);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopFive())
  }, [dispatch])
  


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

        {topfive ?
          <>
            {     
              topfive?.map((e) => 
                <div className={`row ${style.mapeando} `} key={e.sub}>
                  <Top5Card
                    sub={e.sub}
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

export default Top5Rank;
