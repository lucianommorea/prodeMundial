import React, { useState } from 'react';
import Grupo from './Grupo';
import style from './MisPronosticos.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

function MisPronosticos() {

  const [group, setGroup] = useState('A');

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };


  return (
    <div className={style.all}>
      <div className={style.page}>
        <div className={style.filterbar}>
              
              {/* <select className={style.select} value={sort} onChange={handleSort}>
                <option value="points-desc">Teach Points</option>
                <option value="points-asc">Teach Points ascendente</option>
                <option value="answ-desc">Respuestas</option>
                <option value="answ-asc">Respuestas ascendente</option>
                <option value="quest-desc">Preguntas</option>
                <option value="quest-asc">Preguntas ascendente</option>
              </select> */}

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
                  </Select>
              </FormControl>
        </div>
        <div className={style.title}>
          <h2> Grupo {group}</h2>
        </div>
        <Grupo group={group}/>
      </div>
    </div>
  )
}

export default MisPronosticos