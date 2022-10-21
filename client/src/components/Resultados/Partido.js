import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { putGamePenalties, putGameResult } from '../../redux/actions';
import style from './Partido.module.css';
import { useAuth0 } from "@auth0/auth0-react";


function Partido({id, date, hour, stadium, group, penalties, img1, team1, team2, img2, localResult, awayResult, isModify, setIsModify}) {

    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const [width, setWidth] = useState(window.innerWidth);
    
    const [goals, setGoals] = useState({
        localResult: localResult || null,
        awayResult: awayResult || null
    })

    useEffect(() => {
      setGoals({
        localResult: localResult || null,
        awayResult: awayResult || null
      })
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };



    function handleChangeGoalsLocal(e) {
        e.preventDefault();
        comprueba(e);
        setGoals({
            ...goals,
            localResult: parseInt(e.target.value)
        })
        if(e.target.value === '' || goals.awayResult === '' || goals.awayResult === null){
            const resultado1 = {
                id: id,
                localResult: null,
                awayResult: null
            }
            dispatch(putGameResult(resultado1, setIsModify))
        }
        else {
            const resultado = {
                id: id,
                localResult: parseInt(e.target.value),
                awayResult: goals.awayResult
            }
            dispatch(putGameResult(resultado, setIsModify))
        }
    }

    function handleChangeGoalsAway(e) {
        e.preventDefault();
        comprueba(e);
        setGoals({
            ...goals,
            awayResult: parseInt(e.target.value)
        })
        if(e.target.value === '' || goals.localResult === '' || goals.localResult === null){
            const resultado1 = {
                id: id,
                localResult: null,
                awayResult: null
            }
            dispatch(putGameResult(resultado1, setIsModify))
        }
        else {
            const resultado = {
                id: id,
                localResult: goals.localResult,
                awayResult: parseInt(e.target.value)
            }
            dispatch(putGameResult(resultado, setIsModify))
        }
    }

    function handleCheckLocal() {
        const penaltiesLocal = {
            id: id,
            penalties: 'local'
        }
        dispatch(putGamePenalties(penaltiesLocal, setIsModify));
        setIsModify(!isModify)
    }

    function handleCheckAway() {
            const penaltiesAway = {
                id: id,
                penalties: 'away'
            }
            dispatch(putGamePenalties(penaltiesAway, setIsModify))
            setIsModify(!isModify)
    }

    function comprueba(e){
        e.target.value = e.target.value.trim();
        if(e.target.value.includes('.')){
          e.target.value = null
        }
        if(e.target.value < 0){
          e.target.value = 0;
        }
        else if(e.target.value > 9){
          let stringNumber = e.target.value[0];
          e.target.value = parseInt(stringNumber);
        }
    }
          

    if(isAuthenticated) {

        return (
            <div className={style.all}>
                <div>
                    <span className={style.date}>
                        {width > 800 ? date : date.slice(-5)}
                    </span>
                </div>
                <div className={style.hour}>
                    <span className={style.hour}>
                        {hour}
                    </span>
                </div>
                <div className={width > 800 ? style.stadium : style.none2}>
                    <span className={style.stadium}>
                        {stadium}
                    </span>
                </div>
                <div className={style.flag}>
                    <img    src={img1}
                            alt=''
                            className={style.flag}
                    />
                </div>
                <div>
                    <span className={style.team1}>
                        {team1}
                    </span>
                </div>
                <div className={style.goals}>
                     { (group === 'Octavos de Final' || group === "Cuartos de Final" || group === 'Semifinales' || group === "Final y Tercer Puesto") &&
                      localResult === awayResult && localResult !== null ?
                      <input    type='radio' 
                                defaultChecked={penalties === 'local' ? true : false} 
                                name={id}
                                onClick={handleCheckLocal} /> :
                      null
                    }
                    <input  type='number'
                            min='0'
                            max='9'
                            maxLength="2"
                            pattern="[0-9(\-)]"
                            defaultValue={localResult} 
                            name='localResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsLocal}
                            className={style.input1}
                            disabled={!team1 || !team2} />  
  
                </div>
                <div className={style.goals}>
                    <input  type='number'
                            min= '0'
                            max='9'
                            maxLength="1"
                            pattern="[0-9(\-)]"
                            defaultValue={awayResult} 
                            name='awayResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsAway}
                            className={style.input2}
                            disabled={!team1 || !team2} />  
                    { (group === 'Octavos de Final' || group === "Cuartos de Final" || group === 'Semifinales' || group === "Final y Tercer Puesto") &&
                       localResult === awayResult && localResult !== null ?
                      <input    type='radio' 
                                defaultChecked={penalties === 'away' ? true : false}  
                                name={id} 
                                onClick={handleCheckAway} /> :
                      null
                    }                   
                </div>
                <div className={style.team}>
                    <span className={style.team2}>
                         {team2}
                    </span>
                </div>
                <div className={style.flag}>
                    <img    src={img2}
                            alt=''
                            className={style.flag}
                    />
                </div>

            </div>
        )
    }

    
}

export default Partido