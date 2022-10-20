import React from 'react';
import style from './Rules.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import BannedUser from '../GeneralComponents/BannedUser';

function Rules() {

    const userInfo = useSelector(state=> state.user)

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
        <div className={style.title}>
            <h1> Reglas y Suma de Puntos</h1>
        </div>
        <div className={style.down}>
            <div className={style.cuadro}>
                <div className={style.subtitle}>
                    <h4> I- Reglas Generales</h4>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                    <Typography>Donde cargo mis pronósticos para que queden guardados?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                    <Typography>
                        Debes entrar a Mis Pronosticos, y desde ahí completar los resultados para que queden guardados.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                    <Typography>Cuantos puntos obtengo por adivinar el ganador de un partido o el empate?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                    <Typography>
                        Si adivinas quien gana o el empate -sin importar el resultado exacto-, se obtienen 3 puntos. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar el resultado exacto?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Se obtienen 5 puntos. (Son puntos totales, no se suman a los puntos por adivinar resultado).                        
                        </Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Puedo ver los pronosticos de otra persona?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Si, es posible. Quedarán habilitados para ver desde la página del usuario en cuestión, desde que ya no pueda modificarse dicho resultado o premio.
                        </Typography>
                        </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Puedo cargar todos mis pronósticos de resultados del Mundial antes de que empiece?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            No, no es posible. En primer término, solo estarán disponible los partidos de Primera Fase. 
                            Una vez que se confirmen ambos países de cada cruce de fase final, se habilitará la posibilidad de completar el pronóstico de dicho partido.
                        </Typography>
                        </AccordionDetails>
                </Accordion>
            </div>

            <div className={style.cuadro}>
                <div className={style.subtitle}>
                    <h4> II- Fase de Grupos</h4>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Hasta cuando puedo modificar Mis Pronosticos de Resultados?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Para la Fase de Grupos, se pueden enviar los resultados hasta las 23:59 hs. del día anterior a que empiece el mundial.
                            Una vez comenzado el día del partido inagural, se cerrará automaticamente la posibilidad de enviar resultados.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar los equipos que pasan a Octavos de Final</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Por adivinar cada equipo que avanza a Octavos de Final, se obtienen 4 puntos -sin importar la posición en que terminaron-.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Como selecciono los países que avanzan a Octavos de Final?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Se determinan automáticamente, una vez que se completen todos los pronósticos de resultados de cada grupo.
                            Para verificarlo, se puede acceder a la sección Mis Premios, donde se verán los países que avanzarían de fase según lo pronosticado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
                
            <div className={style.cuadro}>
                <div className={style.subtitle}>
                    <h4> III- Fase Final</h4>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>A partir de cuando hay tiempo de completar los pronósticos de cada instancia de la Fase Final?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Se habilitará para completar los resultados, una vez que estén determinados ambos países que se enfrenten en el partido.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Hasta cuando hay tiempo de completar los pronósticos de cada instancia de la Fase Final?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Para cada Fase, se podrán enviar los resultados hasta las 23:59 hs. del día anterior a que empiece el primer partido de dicha fase.
                            Atención que para algunos casos, solo habrá menos de 8 horas para completar algún partido. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Que sucede en caso de que haya prórroga?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}} >
                        <Typography>
                            En caso de que haya un ganador en los 90 minutos, se tendrá en cuenta dicho resultado. Si hay empate en los 90 minutos, y se juega
                            prórroga, se tendrá en cuenta el resultado del partido, finalizados los 120 minutos.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Importa quién pasa de ronda por penales?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            No, sólo se tendrá en cuenta el resultado de los 120 minutos en caso de que haya empate. Si tu pronóstico fue empate, y finalizados los 120
                            minutos el partido finalizó empatado, obtendrás los puntos por ese partido, sin importar el ganador en la tanda de penalties.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>   
            <div className={style.cuadro}>
                <div className={style.subtitle}>
                    <h4>IV- Puntos Extra</h4>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Hasta cuando puedo modificar Campeón, Subcampeón, Tercer Puesto y Mejor Jugador?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Se podrán modificar hasta las 23:59 hs. del día anterior a que empiece el mundial, sin excepciones.
                            Una vez comenzado el día del partido inagural, se cerrará automaticamente la posibilidad de enviar modificaciones.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar el campeón?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Si adivinas el campeón, obtendrás 15 puntos. Deberá completarse el nombre del país tal cual figura en el presente Prode.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar el subcampeón?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                    `<Typography>
                            Si adivinas el subcampeón, obtendrás 10 puntos. Deberá completarse el nombre del país tal cual figura en el presente Prode.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(65%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar el tercer puesto?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Si adivinas el país que obtuvo el tercer puesto, obtendrás 5 puntos. Deberá completarse el nombre del país tal cual figura en el presente Prode.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(30%)'}}
                    >
                        <Typography>Cuantos puntos obtengo por adivinar el mejor jugador del mundial?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: 'transparent', backdropFilter: 'contrast(90%)'}}>
                        <Typography>
                            Si adivinas el Mejor Jugador del mundial, obtendrás 10 puntos. Deberá completarse SOLO el apellido del jugador, tal cual figura en la página de FIFA.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>    
        </div>

        <div className={style.footer}>
            <Footer />
        </div>

    </div>

  )
}

export default Rules