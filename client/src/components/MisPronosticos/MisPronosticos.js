import React, { useState, useEffect } from 'react';
import Grupo from './Grupo';
import style from './MisPronosticos.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getGroupGames, getUserId, getWorldCup } from '../../redux/actions';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../Loading/LoadingComponent';
import Loading3 from '../Loading/Loading3';
import BannedUser from '../GeneralComponents/BannedUser';

function MisPronosticos() {

  const dispatch = useDispatch()
  const [group, setGroup] = useState('A');
  const userInfo = useSelector(state=> state.user);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  // eslint-disable-next-line
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  useEffect(() => {
    dispatch(getWorldCup(setLoading));
    dispatch(getUserId(user.sub));
    dispatch(getGroupGames(group, setLoading));
    // eslint-disable-next-line
  }, [dispatch])


  let fecha = new Date()
  // let dateOctavos = new Date("2022, 09, 18");
  // let dateCuartos = new Date("2022, 09, 18");
  // let dateSemis = new Date("2022, 09, 18");
  // let dateFinales = new Date("2022, 09, 18");
  let dateOctavos = new Date("2022, 11, 29");
  let dateCuartos = new Date("2022, 12, 03");
  let dateSemis = new Date("2022, 12, 09");
  let dateFinales = new Date("2022, 12, 13");

  if(loading2) {
      setTimeout(() => {
        setLoading2(false)
      }, 1500)
  }
  
  if(isLoading) {
    return <Loading />
  }
  if(loading){
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1500)
    return <Loading />
  }
  else if (userInfo.statusBanned === true) {
    return (
    <>
      <BannedUser />
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
}
else if (isAuthenticated) {
    return (
      <div className={style.all}>
        {
          loading2 ?
          <Loading3 /> :
          <div className={style.page}>
          <div className={style.filterbar}>
              <div>
                <FormControl sx={{width: 120, margin: 0.5, fontSize: 'small'}}>
                    <InputLabel sx={{color: 'whitesmoke'}} id="demo-simple-select-label">Grupo</InputLabel>
                    <Select value={group} sx={{color: 'whitesmoke', fontSize: 'small'}} label="Grupo" onChange={handleChangeGroup}>
                      <MenuItem value="A">Grupo A</MenuItem>
                      <MenuItem value="B">Grupo B</MenuItem>
                      <MenuItem value="C">Grupo C</MenuItem>
                      <MenuItem value="D">Grupo D</MenuItem>
                      <MenuItem value="E">Grupo E</MenuItem>
                      <MenuItem value="F">Grupo F</MenuItem>
                      <MenuItem value="G">Grupo G</MenuItem>
                      <MenuItem value="H">Grupo H</MenuItem>
                      {
                        dateOctavos < fecha &&
                        <MenuItem value="Octavos de Final">Octavos de Final</MenuItem>
                      }
                      {
                        dateCuartos < fecha &&
                        <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem>
                      }
                      {
                        dateSemis < fecha &&
                        <MenuItem value="Semifinales">Semifinales</MenuItem>
                      }
                      {
                        dateFinales < fecha &&
                        <MenuItem value="Final y Tercer Puesto">Final y Tercer Puesto</MenuItem>
                      }
                    </Select>
                </FormControl>
              </div>
              <div>
                <Link to="/reglas">
                  <button className={style.btn}>
                      Ver Reglas
                  </button>
                </Link>

              </div>
                
          </div>
          {/* <div className={group === "Octavos de Final" || group === "Cuartos de Final" || group === "Semifinales" || group === "Final y Tercer Puesto" ? style.title2 : style.title}> */}
          <div className={style.title2}>
            {group === 'A' || group === 'B' || group === 'C' || group === 'D' || 
            group === 'E' || group === 'F' || group === 'G' || group === 'H' ?
            <h1> Grupo {group}</h1> :
            <h1> {group} </h1>
            }
          </div>
          <Grupo group={group} setGroup={setGroup} />
        </div>
        }
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default MisPronosticos