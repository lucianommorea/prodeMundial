import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putUserResult, putUserOctavos, getGroupGames, getGroupTeams } from '../../redux/actions';
import style from './Partido.module.css';
import Loading from '../Loading/LoadingComponent';
import { useAuth0 } from "@auth0/auth0-react";


function Partido({id, date, hour, stadium, group, position, img1, team1, team2, img2, id1, id2, setIsModify, isModify, teams2, localResult, awayResult, loading, setLoading}) {

    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.user);
    const { isAuthenticated, isLoading } = useAuth0();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const [goals, setGoals] = useState({
        localResult: userInfo ? userInfo.userResults[id-1][0] : null,
        awayResult: userInfo ? userInfo.userResults[id-1][1] : null
    })

    useEffect(() => {
        // if(isAuthenticated){
        //     setGoals({
        //                 localResult: userInfo.userResults[id-1][0],
        //                 awayResult: userInfo.userResults[id-1][1]
        //             });
        // }
        handleResult();
        dispatch(getGroupGames(group, setLoading));
        // dispatch(getGroupTeams(group, setLoading));
        // eslint-disable-next-line
    }, [])
    

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

    async function handleChangeGoalsLocal(e) {
        e.preventDefault();
        comprueba(e);
        if(e.target.value !== '') {
            var localResultado = parseInt(e.target.value);
        }
        if(e.target.value === ''){
            localResultado = null;
        }
        setGoals({
            ...goals,
            localResult: localResultado
        })
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);
        
        let teamsGroup = teams2.filter(team=>team.group === group);

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){

            if(group === "A"){
                let octavos1 = {
                    position: 1,
                    team: null
                }
                let octavos2 = {
                    position: 2,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "B"){
                let octavos1 = {
                    position: 3,
                    team: null
                }
                let octavos2 = {
                    position: 4,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "C"){
                let octavos1 = {
                    position: 5,
                    team: null
                }
                let octavos2 = {
                    position: 6,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "D"){
                let octavos1 = {
                    position: 7,
                    team: null
                }
                let octavos2 = {
                    position: 8,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "E"){
                let octavos1 = {
                    position: 9,
                    team: null
                }
                let octavos2 = {
                    position: 10,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "F"){
                let octavos1 = {
                    position: 11,
                    team: null
                }
                let octavos2 = {
                    position: 12,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "G"){
                let octavos1 = {
                    position: 13,
                    team: null
                }
                let octavos2 = {
                    position: 14,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "H"){
                let octavos1 = {
                    position: 15,
                    team: null
                }
                let octavos2 = {
                    position: 16,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
        }
        
        if(id > 0 && id < 49) {
            let prevGoalsF = teams2[localIndice][position][0];
            let prevGoalsC = teams2[localIndice][position][1];

            if( localResultado === null || typeof goals.awayResult !== 'number'){

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

            else if(localResultado === goals.awayResult){

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
                teams2[localIndice][position] = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice][position] = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado > goals.awayResult){

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
                teams2[localIndice][position] = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice][position] = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
            else if(localResultado < goals.awayResult){

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
                teams2[localIndice][position] = [localResultado, goals.awayResult];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + localResultado;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + goals.awayResult;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + localResultado - goals.awayResult;
                teams2[awayIndice][position] = [goals.awayResult, localResultado];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + goals.awayResult;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + localResultado;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + goals.awayResult - localResultado;
            }
        }

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){

            teamsGroup.sort(function (a, b) {
                if (a.points > b.points) {
                  return -1;
                }
                if (a.points < b.points) {
                  return 1;
                }
                else {
                  if (a.difGoals > b.difGoals) {
                    return -1;
                  }
                  if (a.difGoals < b.difGoals) {
                    return 1;
                  }
                  else {
                    if (a.goalsF > b.goalsF) {
                      return -1;
                    }
                    if (a.goalsF < b.goalsF) {
                      return 1;
                    }
                    else {
                      if (a.name > b.name) {
                        return -1;
                      }
                      if (a.name < b.name) {
                        return 1;
                      }
                      return 0;
                    }
                  }
                } 
            })

            if(group === "A"){
                let octavos1 = {
                    position: 1,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 2,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "B"){
                let octavos1 = {
                    position: 3,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 4,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "C"){
                let octavos1 = {
                    position: 5,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 6,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "D"){
                let octavos1 = {
                    position: 7,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 8,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "E"){
                let octavos1 = {
                    position: 9,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 10,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "F"){
                let octavos1 = {
                    position: 11,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 12,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "G"){
                let octavos1 = {
                    position: 13,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 14,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "H"){
                let octavos1 = {
                    position: 15,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 16,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
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
        e.preventDefault();
        comprueba(e);
        if(e.target.value !== '') {
            var awayResultado = parseInt(e.target.value);
        }
        if(e.target.value === ''){
            awayResultado = null;
        }
        setGoals({
            ...goals,
            awayResult: awayResultado 
        });
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);

        let teamsGroup = teams2.filter(team=>team.group === group);

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){

            if(group === "A"){
                let octavos1 = {
                    position: 1,
                    team: null
                }
                let octavos2 = {
                    position: 2,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "B"){
                let octavos1 = {
                    position: 3,
                    team: null
                }
                let octavos2 = {
                    position: 4,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "C"){
                let octavos1 = {
                    position: 5,
                    team: null
                }
                let octavos2 = {
                    position: 6,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "D"){
                let octavos1 = {
                    position: 7,
                    team: null
                }
                let octavos2 = {
                    position: 8,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "E"){
                let octavos1 = {
                    position: 9,
                    team: null
                }
                let octavos2 = {
                    position: 10,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "F"){
                let octavos1 = {
                    position: 11,
                    team: null
                }
                let octavos2 = {
                    position: 12,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "G"){
                let octavos1 = {
                    position: 13,
                    team: null
                }
                let octavos2 = {
                    position: 14,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "H"){
                let octavos1 = {
                    position: 15,
                    team: null
                }
                let octavos2 = {
                    position: 16,
                    team: null
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
        }
        
        
        if(id > 0 && id < 49) {
            let prevGoalsF = teams2[localIndice][position][0];
            let prevGoalsC = teams2[localIndice][position][1];


            if( awayResultado === null || typeof goals.localResult !== 'number'){
                // awayResultado = null;
                // goals.localResult = null;
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

            else if(awayResultado === goals.localResult){
                if (teams2[localIndice][position][0] === null || teams2[localIndice][position][1] === null) {
                    teams2[localIndice].totalGames += 1;
                    teams2[localIndice].draws += 1;
                    teams2[localIndice].points += 1;
                    teams2[awayIndice].totalGames += 1;
                    teams2[awayIndice].draws += 1;
                    teams2[awayIndice].points += 1;

                }
                if (teams2[localIndice][position][0] > teams2[localIndice][position][1]) {
                    teams2[localIndice][position] += 1;
                    teams2[localIndice].wins -= 1;
                    teams2[localIndice].points -= 2;
                    teams2[awayIndice][position] += 1;
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

                teams2[localIndice][position] = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice][position] = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado > goals.localResult){
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
                teams2[localIndice][position] = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice][position] = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
            else if(awayResultado < goals.localResult){
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
                    teams2[awayIndice].wins -= 1;
                    teams2[awayIndice].loses += 1;
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
                teams2[localIndice][position] = [goals.localResult, awayResultado];
                teams2[localIndice].goalsF = teams2[localIndice].goalsF - prevGoalsF + goals.localResult;
                teams2[localIndice].goalsC = teams2[localIndice].goalsC - prevGoalsC + awayResultado;
                teams2[localIndice].difGoals = teams2[localIndice].difGoals - prevGoalsF + prevGoalsC + goals.localResult - awayResultado;
                teams2[awayIndice][position] = [awayResultado, goals.localResult];
                teams2[awayIndice].goalsF = teams2[awayIndice].goalsF - prevGoalsC + awayResultado;
                teams2[awayIndice].goalsC = teams2[awayIndice].goalsC - prevGoalsF + goals.localResult;
                teams2[awayIndice].difGoals = teams2[awayIndice].difGoals - prevGoalsC + prevGoalsF + awayResultado - goals.localResult;
            }
        }

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){

            teamsGroup.sort(function (a, b) {
                if (a.points > b.points) {
                  return -1;
                }
                if (a.points < b.points) {
                  return 1;
                }
                else {
                  if (a.difGoals > b.difGoals) {
                    return -1;
                  }
                  if (a.difGoals < b.difGoals) {
                    return 1;
                  }
                  else {
                    if (a.goalsF > b.goalsF) {
                      return -1;
                    }
                    if (a.goalsF < b.goalsF) {
                      return 1;
                    }
                    else {
                      if (a.name > b.name) {
                        return -1;
                      }
                      if (a.name < b.name) {
                        return 1;
                      }
                      return 0;
                    }
                  }
                } 
            })

            if(group === "A"){
                let octavos1 = {
                    position: 1,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 2,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "B"){
                let octavos1 = {
                    position: 3,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 4,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "C"){
                let octavos1 = {
                    position: 5,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 6,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "D"){
                let octavos1 = {
                    position: 7,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 8,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "E"){
                let octavos1 = {
                    position: 9,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 10,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "F"){
                let octavos1 = {
                    position: 11,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 12,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "G"){
                let octavos1 = {
                    position: 13,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 14,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
            }
            if(group === "H"){
                let octavos1 = {
                    position: 15,
                    team: teamsGroup[0].name
                }
                let octavos2 = {
                    position: 16,
                    team: teamsGroup[1].name
                }
                await dispatch(putUserOctavos(userInfo.sub, octavos1));
                await dispatch(putUserOctavos(userInfo.sub, octavos2));
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
          


    let fecha = new Date()
    // let dateGrupos = new Date("2022, 10, 14");
    // let dateOctavos = new Date("2022, 09, 19");
    // let dateCuartos = new Date("2022, 09, 19");
    // let dateSemis = new Date("2022, 09, 19");
    // let dateFinales = new Date("2022, 09, 19");
    let dateGrupos = new Date("2022, 11, 20");
    let dateOctavos = new Date("2022, 12, 03");
    let dateCuartos = new Date("2022, 12, 09");
    let dateSemis = new Date("2022, 12, 13");
    let dateFinales = new Date("2022, 12, 17");
        
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