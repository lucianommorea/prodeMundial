import React, { useState, useEffect } from 'react';
import Grupo from './Grupo';
import style from './MisPronosticos.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/LoadingComponent';
import { getWorldCup } from '../../redux/actions';
import Footer from '../Footer/Footer';

function MisPronosticos() {

  const dispatch = useDispatch()
  const [group, setGroup] = useState('A');
  const userInfo = useSelector(state=> state.user);
  const worldcup = useSelector(state=> state.worldcup)

  console.log(userInfo);
  console.log(userInfo.points);
  console.log(userInfo.totalPoints);
  console.log(userInfo.octavos);
  console.log(worldcup.octavos)

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  useEffect(() => {
    dispatch(getWorldCup())
  }, [dispatch])
  

  // console.log(userInfo.octavos);
  // console.log(userInfo.points)
  // console.log(userInfo.totalPoints)


  let fecha = new Date()
  let dateOctavos = new Date("2022, 09, 18");
  let dateCuartos = new Date("2022, 09, 18");
  let dateSemis = new Date("2022, 09, 18");
  let dateFinales = new Date("2022, 09, 18");
  // let dateOctavos = new Date("2022, 11, 29");
  // let dateCuartos = new Date("2022, 12, 04");
  // let dateSemis = new Date("2022, 12, 04");
  // let dateFinales = new Date("2022, 12, 04");
  


    return (
      <div className={style.all}>
        <div className={style.page}>
          <div className={style.filterbar}>

                <FormControl sx={{width: 120, margin: 0.5, fontSize: 'small'}}>
                    <InputLabel sx={{color: 'whitesmoke'}} id="demo-simple-select-label">Grupo</InputLabel>
                    <Select value={group} sx={{color: 'whitesmoke'}} label="Grupo" onChange={handleChangeGroup}>
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
                      {/* <MenuItem value="Octavos de Final">Octavos de Final</MenuItem> */}
                      {
                        dateCuartos < fecha &&
                        <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem>
                      }
                      {/* <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem> */}
                      {
                        dateSemis < fecha &&
                        <MenuItem value="Semifinales">Semifinales</MenuItem>
                      }
                      {/* <MenuItem value="Semifinales">Semifinales</MenuItem> */}
                      {
                        dateFinales < fecha &&
                        <MenuItem value="Final y Tercer Puesto">Final y Tercer Puesto</MenuItem>
                      }
                      {/* <MenuItem value="Final y Tercer Puesto">Final y 3er Puesto</MenuItem> */}
                    </Select>
                </FormControl>
          </div>
          <div className={style.title}>
            {group === 'A' || group === 'B' || group === 'C' || group === 'D' || 
            group === 'E' || group === 'F' || group === 'G' || group === 'H' ?
            <h1> Grupo {group}</h1> :
            <h1> {group} </h1>
            }
          </div>
          <Grupo group={group} setGroup={setGroup} userInfo={userInfo}/>
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    )
  
}

export default MisPronosticos