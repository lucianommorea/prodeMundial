import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { putGameResult } from '../../redux/actions';
import style from './Partido.module.css';
import { useAuth0 } from "@auth0/auth0-react";


function Partido({id, date, hour, stadium, img1, team1, team2, img2, localResult, awayResult, setIsModify}) {

    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch()
    const [goals, setGoals] = useState({
        localResult: localResult || null,
        awayResult: awayResult || null
    })
   


    function handleChangeGoalsLocal(e) {
        e.preventDefault()
        setGoals({
            ...goals,
            localResult: e.target.value
        })
        if(e.target.value === '' || goals.awayResult === null){
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
                localResult: e.target.value,
                awayResult: goals.awayResult
            }
            dispatch(putGameResult(resultado, setIsModify))
            console.log('send')
        }
    }

    function handleChangeGoalsAway(e) {
        e.preventDefault()
        setGoals({
            ...goals,
            awayResult: e.target.value
        })
        if(e.target.value === '' || goals.localResult === null){
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
                awayResult: e.target.value
            }
            dispatch(putGameResult(resultado, setIsModify))
            console.log('send')
        }
    }

    // function handleSendResult(e) {
    //     e.preventDefault()
    //     const resultado = {
    //         id: id,
    //         localResult: goals.localResult,
    //         awayResult: goals.awayResult
    //     }
    //     dispatch(putGameResult(resultado, setIsModify))
    //     setGoals({  localResult:'',
    //                 awayResult:''})
    // }
    // var numInput = document.querySelector('input');

    // numInput.addEventListener('input', function(){
    //     // Let's match only digits.
    //     var num = this.value.match(/^\d+$/);
    //     if (num === null) {
    //         // If we have no match, value will be empty.
    //         this.value = "";
    //     }
    // }, false)

    if(isAuthenticated) {

        return (
            <div className={style.all}>
                <div>
                    <span className={style.date}>
                        {date}
                    </span>
                </div>
                <div className={style.hour}>
                    <span className={style.hour}>
                        {hour}
                    </span>
                </div>
                <div className={style.stadium}>
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
                    <input  type='number'
                            min='0'
                            max='9'
                            maxLength="2"
                            pattern="[0-9(\-)]"
                            defaultValue={localResult} 
                            name='localResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsLocal}
                            className={style.input}
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
                            className={style.input}
                            disabled={!team1 || !team2} />  
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