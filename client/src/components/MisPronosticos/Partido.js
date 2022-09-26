import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putUserResult, getGroupTeams, getGroupGames } from '../../redux/actions';
import style from './Partido.module.css';
import Loading from '../Loading/LoadingComponent';
import { useAuth0 } from "@auth0/auth0-react";


function Partido({id, date, hour, stadium, group, position, img1, team1, team2, img2, id1, id2, setIsModify, isModify, teams2, localResult, awayResult, loading, setLoading}) {

    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.user);
    const { isAuthenticated, isLoading } = useAuth0();

 
    const [goals, setGoals] = useState({
        localResult: userInfo ? userInfo.userResults[id-1][0] : null,
        awayResult: userInfo ? userInfo.userResults[id-1][1] : null
    })


    // useEffect(() => {
    //     if(id > 0 && id < 49){
    //         dispatch(getIdGame(id, setLoading);
    //     }
    // }, [dispatch, id])

    useEffect(() => {
        // if(isAuthenticated){
        //     setGoals({
        //                 localResult: userInfo.userResults[id-1][0],
        //                 awayResult: userInfo.userResults[id-1][1]
        //             });
        // }
        handleResult();
        dispatch(getGroupGames(group, setLoading));
        dispatch(getGroupTeams(group, setLoading));
    }, [userInfo])
    


    function handleResult() {

        if(id > 0 && id < 49) {
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2); 

        let prevGoalsF = teams2[localIndice][position][0];
        let prevGoalsC = teams2[localIndice][position][1];

        if( goals.localResult === null || goals.awayResult === null){
            if (teams2[localIndice][position][0] === null || teams2[localIndice][position][1] === null) {
                
            }
            else if (teams2[localIndice][position][0] > teams2[localIndice][position][1]) {
                teams2[localIndice].totalGames -= 1;
                teams2[localIndice].wins -= 1 ;
                teams2[localIndice].points -= 3;
                teams2[awayIndice].totalGames -= 1;
                teams2[awayIndice].loses -= 1;
            }
            else if (teams2[localIndice][position][0] < teams2[localIndice][position][1]) {
                teams2[localIndice].totalGames -= 1;
                teams2[localIndice].loses -= 1 ;
                teams2[awayIndice].totalGames -= 1;
                teams2[awayIndice].wins -= 1;
                teams2[awayIndice].points -= 3;
            }
            else if (teams2[localIndice][position][0] === teams2[localIndice][position][1]) {
                teams2[localIndice].totalGames -= 1;
                teams2[localIndice].draws -= 1 ;
                teams2[localIndice].points -= 1 ;
                teams2[awayIndice].totalGames -= 1;
                teams2[awayIndice].draws -= 1;
                teams2[awayIndice].points -= 1;
            }
            teams2[localIndice][position] = [null, null];
            teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
            teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
            teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
            teams2[awayIndice][position] = [null, null];
            teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
            teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
            teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
        }

        else if(goals.localResult === goals.awayResult){
            if (teams2[localIndice][position][0] === null || teams2[localIndice][position][1] === null) {
                teams2[localIndice].totalGames += 1;
                teams2[localIndice].draws += 1;
                teams2[localIndice].points += 1;
                teams2[awayIndice].totalGames += 1;
                teams2[awayIndice].draws += 1;
                teams2[awayIndice].points += 1;

            }
            if (teams2[localIndice][position][0] > teams2[localIndice][position][1]) {
                teams2[localIndice].draws += 1;
                teams2[localIndice].wins -= 1;
                teams2[localIndice].points -= 2;
                teams2[awayIndice].draws += 1;
                teams2[awayIndice].loses -= 1
                teams2[awayIndice].points += 1;
            }
            if (teams2[localIndice][position][0] < teams2[localIndice][position][1]) {
                teams2[localIndice].draws += 1;
                teams2[localIndice].loses -= 1;
                teams2[localIndice].points += 1;
                teams2[awayIndice].draws += 1;
                teams2[awayIndice].wins -= 1;
                teams2[awayIndice].points -= 2;
            }
            if (teams2[localIndice][position][0] === teams2[localIndice][position][1]) {

            }
            teams2[localIndice][position] = [goals.localResult, goals.awayResult];
            teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
            teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
            teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - goals.awayResult;
            teams2[awayIndice][position] = [goals.awayResult, goals.localResult];
            teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
            teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
            teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - goals.localResult;
        }
        else if(goals.localResult > goals.awayResult){
            if (teams2[localIndice][position][0] === null || teams2[localIndice][position][1] === null) {
                teams2[localIndice].totalGames += 1;
                teams2[localIndice].wins += 1;
                teams2[localIndice].points += 3;
                teams2[awayIndice].totalGames += 1;
                teams2[awayIndice].loses += 1;
            }
            else if (teams2[localIndice][position][0] > teams2[localIndice][position][1]) {

            }
            else if (teams2[localIndice][position][0] < teams2[localIndice][position][1]) {
                teams2[localIndice].loses -= 1;
                teams2[localIndice].wins += 1;
                teams2[localIndice].points += 3;
                teams2[awayIndice].loses += 1;
                teams2[awayIndice].wins -= 1;
                teams2[awayIndice].points -= 3;
            }
            else if (teams2[localIndice][position][0] === teams2[localIndice][position][1]) {
                teams2[localIndice].draws -= 1;
                teams2[localIndice].wins += 1;
                teams2[localIndice].points += 2;
                teams2[awayIndice].draws -= 1;
                teams2[awayIndice].loses += 1;
                teams2[awayIndice].points -= 1;
            }
            teams2[localIndice][position] = [goals.localResult, goals.awayResult];
            teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
            teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
            teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - goals.awayResult;
            teams2[awayIndice][position] = [goals.awayResult, goals.localResult];
            teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
            teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
            teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - goals.localResult;
        }
        else if(goals.localResult < goals.awayResult){
            if (teams2[localIndice][position][0] === null || teams2[localIndice][position][1] === null) {
                teams2[localIndice].totalGames += 1;
                teams2[localIndice].loses += 1;
                teams2[awayIndice].totalGames += 1;
                teams2[awayIndice].wins += 1;
                teams2[awayIndice].points += 3;
            }
            else if (teams2[localIndice][position][0] > teams2[localIndice][position][1]) {
                teams2[localIndice].loses += 1;
                teams2[localIndice].wins -= 1;
                teams2[localIndice].points -= 3;
                teams2[awayIndice].wins += 1;
                teams2[awayIndice].loses -= 1;
                teams2[awayIndice].points += 3;
            }
            else if (teams2[localIndice][position][0] < teams2[localIndice][position][1]) {

            }
            else if (teams2[localIndice][position][0] === teams2[localIndice][position][1]) {
                teams2[localIndice].draws -= 1;
                teams2[localIndice].loses += 1;
                teams2[localIndice].points -= 1;
                teams2[awayIndice].draws -= 1;
                teams2[awayIndice].wins += 1;
                teams2[awayIndice].points += 2;
            }
            teams2[localIndice][position] = [goals.localResult, goals.awayResult];
            teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
            teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
            teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - goals.awayResult;
            teams2[awayIndice][position] = [goals.awayResult, goals.localResult];
            teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
            teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
            teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - goals.localResult;
        }
        }
    }

    function handleChangeGoalsLocal(e) {
        e.preventDefault()
        if(e.target.value !== '') {
            var localResultado = parseInt(e.target.value);
        }
        setGoals({
            ...goals,
            localResult: localResultado
        })
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);
        
        // let teamsGroup = teams2.filter(team=>team.group === group);

        // if(teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
        //     var flag = true;
        // }
        
        if(id > 0 && id < 17) {
            let prevGoalsF = teams2[localIndice].game1[0];
            let prevGoalsC = teams2[localIndice].game1[1];
            if( localResultado === undefined || typeof goals.awayResult !== 'number'){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game1 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game1 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(localResultado === goals.awayResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {

                }
                teams2[localIndice].game1 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game1 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado > goals.awayResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {

                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game1 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game1 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado < goals.awayResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {

                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game1 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game1 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
        }
        if(id > 16 && id < 33) {
            let prevGoalsF = teams2[localIndice].game2[0];
            let prevGoalsC = teams2[localIndice].game2[1];
            if( localResultado === undefined || typeof goals.awayResult !== 'number'){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game2 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game2 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(localResultado === goals.awayResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {

                }
                teams2[localIndice].game2 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game2 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado > goals.awayResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {

                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game2 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game2 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado < goals.awayResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {

                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game2 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game2 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
        }
        if(id > 32 && id < 49) {
            let prevGoalsF = teams2[localIndice].game3[0];
            let prevGoalsC = teams2[localIndice].game3[1];
            if( localResultado === undefined || typeof goals.awayResult !== 'number'){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game3 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game3 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(localResultado === goals.awayResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {

                }
                teams2[localIndice].game3 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game3 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado > goals.awayResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {

                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game3 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game3 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado < goals.awayResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {

                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game3 = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice].game3 = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
        }

        let resultado={
            idGame: id,
            localGoals: localResultado,
            awayGoals: goals.awayResult
        }
        dispatch(putUserResult(userInfo.sub, resultado))
        setIsModify(!isModify)
    }
        


    async function handleChangeGoalsAway(e) {
        e.preventDefault()
        if(e.target.value !== '') {
            var awayResultado = parseInt(e.target.value);
        }
        setGoals({
            ...goals,
            awayResult: awayResultado 
        });
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);
        
        
        if(id > 0 && id < 17) {
            let prevGoalsF = teams2[localIndice].game1[0];
            let prevGoalsC = teams2[localIndice].game1[1];


            if( awayResultado === undefined || typeof goals.localResult !== 'number'){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game1 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game1 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(awayResultado === goals.localResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {

                }

                teams2[localIndice].game1 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game1 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado > goals.localResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {

                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game1 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game1 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado < goals.localResult){
                if (teams2[localIndice].game1[0] === null || teams2[localIndice].game1[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game1[0] > teams2[localIndice].game1[1]) {

                }
                else if (teams2[localIndice].game1[0] < teams2[localIndice].game1[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game1[0] === teams2[localIndice].game1[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game1 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game1 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
        }
        if(id > 16 && id < 33) {
            let prevGoalsF = teams2[localIndice].game2[0];
            let prevGoalsC = teams2[localIndice].game2[1];
            if( awayResultado === undefined || typeof goals.localResult !== 'number'){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game2 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game2 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(awayResultado === goals.localResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {

                }

                teams2[localIndice].game2 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game2 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado > goals.localResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {

                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game2 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game2 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado < goals.localResult){
                if (teams2[localIndice].game2[0] === null || teams2[localIndice].game2[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game2[0] > teams2[localIndice].game2[1]) {

                }
                else if (teams2[localIndice].game2[0] < teams2[localIndice].game2[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game2[0] === teams2[localIndice].game2[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game2 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game2 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
        }
        if(id > 32 && id < 49) {
            let prevGoalsF = teams2[localIndice].game3[0];
            let prevGoalsC = teams2[localIndice].game3[1];
            if( awayResultado === undefined || typeof goals.localResult !== 'number'){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].wins -= 1 ;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].loses -= 1;
                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].loses -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].totalGames -= 1;
                    teams2[localIndice].draws -= 1 ;
                    teams2[localIndice].points -= 1 ;
                    teams2[awayIndice].totalGames -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game3 = [null, null];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC;
                teams2[awayIndice].game3 = [null, null];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF;
            }

            else if(awayResultado === goals.localResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].loses -= 1
                    teams2[awayIndice].points += 1;
                }
                if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].points -= 2;
                }
                if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {

                }

                teams2[localIndice].game3 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game3 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado > goals.localResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].loses += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 3;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].loses -= 1;
                    teams2[awayIndice].points += 3;
                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {

                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].loses += 1;
                    teams2[localIndice].points -= 1;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].wins += 1;
                    teams2[awayIndice].points += 2;
                }
                teams2[localIndice].game3 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game3 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado < goals.localResult){
                if (teams2[localIndice].game3[0] === null || teams2[localIndice].game3[1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].loses += 1;
                }
                else if (teams2[localIndice].game3[0] > teams2[localIndice].game3[1]) {

                }
                else if (teams2[localIndice].game3[0] < teams2[localIndice].game3[1]) {
                    teams2[localIndice].loses -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 3;
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 3;
                }
                else if (teams2[localIndice].game3[0] === teams2[localIndice].game3[1]) {
                    teams2[localIndice].draws -= 1;
                    teams2[localIndice].wins += 1;
                    teams2[localIndice].points += 2;
                    teams2[awayIndice].draws -= 1;
                    teams2[awayIndice].loses += 1;
                    teams2[awayIndice].points -= 1;
                }
                teams2[localIndice].game3 = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice].game3 = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
        }
        let resultado={
            idGame: id,
            localGoals: goals.localResult,
            awayGoals: awayResultado
        }
        dispatch(putUserResult(userInfo.sub, resultado))
        setIsModify(!isModify)
    }


    let fecha = new Date()
    // let dateGrupos = new Date("2022, 09, 19");
    // let dateOctavos = new Date("2022, 09, 19");
    // let dateCuartos = new Date("2022, 09, 19");
    // let dateSemis = new Date("2022, 09, 19");
    // let dateFinales = new Date("2022, 09, 19");
    let dateGrupos = new Date("2022, 11, 20");
    let dateOctavos = new Date("2022, 11, 29");
    let dateCuartos = new Date("2022, 12, 04");
    let dateSemis = new Date("2022, 12, 04");
    let dateFinales = new Date("2022, 12, 04");
        
    if(loading) {
        return <Loading />
      }
    if(isLoading) {
        return <Loading />
      }
    else if (isAuthenticated) {   
        return (
            <>
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
                            defaultValue={goals.localResult} 
                            name='localResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsLocal}
                            className={style.input1}
                            disabled={!team1 || !team2
                             || (group === "Octavos de Final" && fecha > dateOctavos)
                             || (group === "Cuartos de Final" && fecha > dateCuartos)
                             || (group === "Semifinales" && fecha > dateSemis)
                             || (group === "Final y Tercer Puesto" && fecha > dateFinales)
                             || ((group === "A" || group === "B" ||  group === "C" || group === "D" || 
                                group === "E" || group === "F" ||  group === "G" || group === "H") && fecha > dateGrupos) } />  
  
                </div>
                <div className={style.goals}>
                    <input  type='number'
                            min= '0'
                            max='9'
                            maxLength="1"
                            pattern="[0-9(\-)]"
                            defaultValue={goals.awayResult} 
                            name='awayResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsAway}
                            className={style.input2}
                            disabled={!team1 || !team2
                                    || (group === "Octavos de Final" && fecha > dateOctavos)
                                    || (group === "Cuartos de Final" && fecha > dateCuartos)
                                    || (group === "Semifinales" && fecha > dateSemis)
                                    || (group === "Final y Tercer Puesto" && fecha > dateFinales)
                                    || ((group === "A" || group === "B" ||  group === "C" || group === "D" || 
                                    group === "E" || group === "F" ||  group === "G" || group === "H") && fecha > dateGrupos) } />  
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
            { localResult !== null && awayResult !== null ?
            <div className={!userInfo.points[id-1] ? style.all2 : style.all3}>


                <div className={style.points}>
                    <span className={style.team2}>
                         Puntos: {userInfo.points[id-1] ? userInfo.points[id-1] : 0}
                    </span>
                </div>

                <div className={style.flag}>

                </div>
                <div>

                </div>

                <div className={style.goals1}>

                    <span >
                         {localResult}
                    </span>  
  
                </div>
                <div className={style.goals1}>
                    <span >
                         {awayResult}
                    </span>  
                </div>
                <div className={style.team}>

                </div>
                <div className={style.flag}>

                </div>
            </div> :
            null
            }
            </>
        )
        }
    }


export default Partido