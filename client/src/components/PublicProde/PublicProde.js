import React, { useState, useEffect } from 'react';
import Grupo from './Grupo';
import style from './PublicProde.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/LoadingComponent';

function PublicProde() {

  const [group, setGroup] = useState('A');
  let [isModify, setIsModify] = useState(false);


  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };



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
                      <MenuItem value="Octavos de Final">Octavos de Final</MenuItem>
                      <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem>
                      <MenuItem value="Semifinales">Semifinales</MenuItem>
                      <MenuItem value="Final y Tercer Puesto">Final y 3er Puesto</MenuItem>
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
          <Grupo group={group} setGroup={setGroup} />
        </div>
      </div>
    )
  
}

export default PublicProde