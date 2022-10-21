import React, { useState, useEffect } from 'react';
import Grupo from './Grupo';
import style from './Resultados.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getWorldCup } from '../../redux/actions';
import NotFound from '../NotFound/NotFound'
import Footer from '../Footer/Footer';
import Loading from '../Loading/LoadingComponent';


function Resultados() {

  const dispatch = useDispatch()
  const [group, setGroup] = useState('A');
  const [loading, setLoading] = useState(true);
  // const worldcup = useSelector(state=> state.worldcup);
  const userInfo = useSelector(state=> state.user);

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  useEffect(() => {
    dispatch(getWorldCup(setLoading))
  }, [dispatch])
  
  if(loading){
    return (
      <Loading />
    )
  }
  if (userInfo.statusAdmin) {   
    return (
      <div className={style.all}>
        <div className={style.page}>
          <div className={style.filterbar}>

                <FormControl sx={{width: 120, margin: 0.5, fontSize: 'small'}}>
                    <InputLabel sx={{color: 'whitesmoke'}} id="demo-simple-select-label">Grupo</InputLabel>
                    <Select value={group} sx={{color: 'whitesmoke', fontSize: 'small'}} label="Grupo" onChange={handleChangeGroup}>
                      <MenuItem className="menu-dark" value="A">Grupo A</MenuItem>
                      <MenuItem className="menu-dark" value="B">Grupo B</MenuItem>
                      <MenuItem value="C">Grupo C</MenuItem>
                      <MenuItem value="D">Grupo D</MenuItem>
                      <MenuItem value="E">Grupo E</MenuItem>
                      <MenuItem value="F">Grupo F</MenuItem>
                      <MenuItem value="G">Grupo G</MenuItem>
                      <MenuItem value="H">Grupo H</MenuItem>
                      <MenuItem value="Octavos de Final">Octavos de Final</MenuItem>
                      <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem>
                      <MenuItem value="Semifinales">Semifinales</MenuItem>
                      <MenuItem value="Final y Tercer Puesto">Final y 3er Puesto</MenuItem>
                    </Select>
                </FormControl>
          </div>
          <div className={group === "Octavos de Final" || group === "Cuartos de Final" || group === "Semifinales" || group === "Final y Tercer Puesto" ? style.title2 : style.title}>
            {group === 'A' || group === 'B' || group === 'C' || group === 'D' || 
            group === 'E' || group === 'F' || group === 'G' || group === 'H' ?
            <h1> Grupo {group}</h1> :
            <h1> {group} </h1>
            }
          </div>
          <Grupo group={group} setGroup={setGroup}/>
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    )
  }
  else {
    return <NotFound />
  }
}

export default Resultados