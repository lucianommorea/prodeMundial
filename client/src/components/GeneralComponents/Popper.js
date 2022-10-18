import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import InfoIcon from '@mui/icons-material/Info';
import style from './Popper.module.css'

export default function InfoPopper() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
        <InfoIcon aria-describedby={id} type="button" onClick={handleClick} fontSize="large" className={style.button}/>
        <Popper id={id} open={open} anchorEl={anchorEl} transition >
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                <Box sx={{ border: 0.5, p: 1, fontSize:'small', width: 250, backgroundColor: '#c36494', borderRadius: 2, marginTop: 0.1, marginLeft: 0 }}>
                    <span> Estos resultados no se guardarán, es solo un simulador de Mundial. </span> <br></br>
                    <span> Para que queden guardados, deberás completarlo desde la sección Mis Pronósticos, una vez logueado. </span>
                </Box>
            </Fade>
            )}
        </Popper>
    </div>
  );
}
