import React, { useState } from 'react';
import Grupo from './Grupo';
import style from './PublicProde.module.css'
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import Footer from '.././Footer/Footer';
import InfoPopper from '../GeneralComponents/Popper';
import { useSelector } from 'react-redux';
import BannedUser from '../GeneralComponents/BannedUser';

function PublicProde() {

  const [group, setGroup] = useState('A');
  const userInfo = useSelector(state => state.user)
  // let [isModify, setIsModify] = useState(false);


  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  if (userInfo.statusBanned === true) {
    return (
    <>
      <BannedUser />
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
  }

  return (
      <div className={style.all}>
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
                        <MenuItem value="Octavos de Final">Octavos de Final</MenuItem>
                        <MenuItem value="Cuartos de Final">Cuartos de Final</MenuItem>
                        <MenuItem value="Semifinales">Semifinales</MenuItem>
                        <MenuItem value="Final y Tercer Puesto">Final y Tercer Puesto</MenuItem>
                    </Select>
                </FormControl>
              </div>
              <div>
                <InfoPopper />
              </div>
      
          </div>
          <div className={group === "Octavos de Final" || group === "Cuartos de Final" || group === "Semifinales" || group === "Final y Tercer Puesto" ? style.title2 : style.title}>
            {group === 'A' || group === 'B' || group === 'C' || group === 'D' || 
            group === 'E' || group === 'F' || group === 'G' || group === 'H' ?
            <h1> Grupo {group}</h1> :
            <h1> {group} </h1>
            }
          </div>
          <Grupo group={group} setGroup={setGroup} />
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    )
  
}

export default PublicProde