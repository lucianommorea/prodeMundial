import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Partido.module.css';


function Partido({id, date, hour, stadium, group, position, penalties, img1, team1, team2, img2, id1, id2, setIsModify, isModify, teams2, games2, localResult, awayResult}) {

    const game = useSelector(state=> state.game);
 
    const [goals, setGoals] = useState({
        localResult: localResult > -1 ? localResult : null,
        awayResult: awayResult > -1 ? awayResult : null
    })
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    function restartOctavos () {
        if (group === 'A') {
                games2[48].local = null;
                games2[48].localResult = null;
                games2[48].awayResult = null;
                if(games2[57].local){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
                  games2[57].local = null;
                }
                if(games2[60].away){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].away = null;
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }           
                games2[51].away = null;
                games2[51].localResult = null;
                games2[51].awayResult = null;
                if(games2[59].away){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
                  games2[59].away = null;
                }
                if(games2[61].away){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].away = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
            }
        else if (group === 'B') {
                games2[51].local = null;
                games2[51].localResult = null;
                games2[51].awayResult = null;
                if(games2[59].away){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
                  games2[59].away = null;
                }
                if(games2[61].away){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].away = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
                games2[48].away = null;
                games2[48].localResult = null;
                games2[48].awayResult = null;
                if(games2[57].local){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
                  games2[57].local = null;
                }
                if(games2[60].away){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].away = null;
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }            
        }
        else if (group === 'C') {
                games2[49].local = null;
                games2[49].localResult = null;
                games2[49].awayResult = null;
                if(games2[57].away){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
                  games2[57].away = null;
                }
                if(games2[60].away){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].away = null;                 
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
                games2[50].away = null;
                games2[50].localResult = null;
                games2[50].awayResult = null;
                if(games2[59].local){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
                  games2[59].local = null;
                }
                if(games2[61].away){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].away = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
        }
        else if (group === 'D') {
                games2[50].local = null;
                games2[50].localResult = null;
                games2[50].awayResult = null;
                if(games2[59].local){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
                  games2[59].local = null;
                }
                if(games2[61].away){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].away = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
                games2[49].away = null;
                games2[49].localResult = null;
                games2[49].awayResult = null;
                if(games2[57].away){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
                  games2[57].away = null;
                }
                if(games2[60].away){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].away = null;                 
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
        }
        else if (group === 'E') {
                games2[52].local = null;
                games2[52].localResult = null;
                games2[52].awayResult = null;
                if(games2[56].local){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
                  games2[56].local = null;
                }
                if(games2[60].local){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].local = null;    
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
                games2[54].away = null;
                games2[54].localResult = null;
                games2[54].awayResult = null;
                if(games2[58].local){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
                  games2[58].local = null;
                }
                if(games2[61].local){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].local = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
        }
        else if (game.group === 'F') {
                games2[54].local = null;
                games2[54].localResult = null;
                games2[54].awayResult = null;
                if(games2[58].local){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
                  games2[58].local = null;
                }
                if(games2[61].local){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].local = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
                games2[52].away = null;
                games2[52].localResult = null;
                games2[52].awayResult = null;
                if(games2[56].local){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
                  games2[56].local = null;
                }
                if(games2[60].local){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].local = null;    
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
        }
        else if (group === 'G') {
                games2[53].local = null;
                games2[53].localResult = null;
                games2[53].awayResult = null;
                if(games2[56].away){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
                  games2[56].away = null;
                }
                if(games2[60].local){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].local = null;
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
                games2[55].away = null;
                games2[55].localResult = null;
                games2[55].awayResult = null;
                if(games2[58].away){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
                  games2[58].away = null;
                }
                if(games2[61].local){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].local = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
        }
        else if (group === 'H') {
                games2[55].local = null;
                games2[55].localResult = null;
                games2[55].awayResult = null;
                if(games2[58].away){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
                  games2[58].away = null;
                }
                if(games2[61].local){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
                  games2[61].local = null;
                }
                if(games2[62].away){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].away = null;
                  games2[63].away = null;
                }
                games2[53].away = null;
                games2[53].localResult = null;
                games2[53].awayResult = null;
                if(games2[56].away){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
                  games2[56].away = null;
                }
                if(games2[60].local){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].local = null;
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }
        }
    }


    function handleChangeGoalsLocal(e) {
        e.preventDefault();
        comprueba(e);
        if(e.target.value !== '') {
            var localResultado = parseInt(e.target.value);
        }
        setGoals({
            ...goals,
            localResult: localResultado
        })
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);
        
        let teamsGroup = teams2.filter(team=>team.group === group);

        let prevLocalResult = localResult;
        let prevAwayResult = awayResult;

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
            var flag = true;
        }

        
        if(id > 0 && id < 49) {
            let prevGoalsF = teams2[localIndice][position][0];
            let prevGoalsC = teams2[localIndice][position][1];
            if( localResultado === undefined || typeof goals.awayResult !== 'number'){
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

            if (group === 'A') {

                if(games2[48].local !== teamsGroup[0]) {
                  games2[48].local = teamsGroup[0];
                  games2[48].localResult = null;
                  games2[48].awayResult = null;
                  if(games2[57].local){
                    games2[57].localResult = null;
                    games2[57].awayResult = null;
                    games2[57].local = null;
                  }
                  if(games2[60].away){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].away = null;
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }            
                }

                if(games2[51].away !== teamsGroup[1]) {
                    games2[51].away = teamsGroup[1];
                    games2[51].localResult = null;
                    games2[51].awayResult = null;
                    if(games2[59].away){
                      games2[59].localResult = null;
                      games2[59].awayResult = null;
                      games2[59].away = null;
                    }
                    if(games2[61].away){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].away = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                }
            }
            else if (group === 'B') {
                
                if(games2[51].local !== teamsGroup[0]) {
                    games2[51].local = teamsGroup[0];
                    games2[51].localResult = null;
                    games2[51].awayResult = null;
                    if(games2[59].away){
                      games2[59].localResult = null;
                      games2[59].awayResult = null;
                      games2[59].away = null;
                    }
                    if(games2[61].away){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].away = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                }

                if(games2[48].away !== teamsGroup[1]) {
                    games2[48].away = teamsGroup[1];
                    games2[48].localResult = null;
                    games2[48].awayResult = null;
                    if(games2[57].local){
                      games2[57].localResult = null;
                      games2[57].awayResult = null;
                      games2[57].local = null;
                    }
                    if(games2[60].away){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].away = null;
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }            
                }
            }
            else if (group === 'C') {

                if(games2[49].local !== teamsGroup[0]) {
                    games2[49].local = teamsGroup[0];
                    games2[49].localResult = null;
                    games2[49].awayResult = null;
                    if(games2[57].away){
                      games2[57].localResult = null;
                      games2[57].awayResult = null;
                      games2[57].away = null;
                    }
                    if(games2[60].away){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].away = null;                 
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                }

                if(games2[50].away !== teamsGroup[1]) {
                    games2[50].away = teamsGroup[1];
                    games2[50].localResult = null;
                    games2[50].awayResult = null;
                    if(games2[59].local){
                      games2[59].localResult = null;
                      games2[59].awayResult = null;
                      games2[59].local = null;
                    }
                    if(games2[61].away){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].away = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                  }
            }
            else if (group === 'D') {

                if(games2[50].local !== teamsGroup[0]) {
                    games2[50].local = teamsGroup[0];
                    games2[50].localResult = null;
                    games2[50].awayResult = null;
                    if(games2[59].local){
                      games2[59].localResult = null;
                      games2[59].awayResult = null;
                      games2[59].local = null;
                    }
                    if(games2[61].away){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].away = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                }

                if(games2[49].away !== teamsGroup[1]) {
                    games2[49].away = teamsGroup[1];
                    games2[49].localResult = null;
                    games2[49].awayResult = null;
                    if(games2[57].away){
                      games2[57].localResult = null;
                      games2[57].awayResult = null;
                      games2[57].away = null;
                    }
                    if(games2[60].away){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].away = null;                 
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                  }
            }
            else if (group === 'E') {

                if(games2[52].local !== teamsGroup[0]) {
                    games2[52].local = teamsGroup[0];
                    games2[52].localResult = null;
                    games2[52].awayResult = null;
                    if(games2[56].local){
                      games2[56].localResult = null;
                      games2[56].awayResult = null;
                      games2[56].local = null;
                    }
                    if(games2[60].local){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].local = null;    
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                }

                if(games2[54].away !== teamsGroup[1]) {
                    games2[54].away = teamsGroup[1];
                    games2[54].localResult = null;
                    games2[54].awayResult = null;
                    if(games2[58].local){
                      games2[58].localResult = null;
                      games2[58].awayResult = null;
                      games2[58].local = null;
                    }
                    if(games2[61].local){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].local = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                  }
            }
            else if (group === 'F') {
                
                if(games2[54].local !== teamsGroup[0]) {
                    games2[54].local = teamsGroup[0];
                    games2[54].localResult = null;
                    games2[54].awayResult = null;
                    if(games2[58].local){
                      games2[58].localResult = null;
                      games2[58].awayResult = null;
                      games2[58].local = null;
                    }
                    if(games2[61].local){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].local = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                }

                if(games2[52].away !== teamsGroup[1]) {
                    games2[52].away = teamsGroup[1];
                    games2[52].localResult = null;
                    games2[52].awayResult = null;
                    if(games2[56].local){
                      games2[56].localResult = null;
                      games2[56].awayResult = null;
                      games2[56].local = null;
                    }
                    if(games2[60].local){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].local = null;    
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                }
            }
            else if (group === 'G') {

                if(games2[53].local !== teamsGroup[0]) {
                    games2[53].local = teamsGroup[0];
                    games2[53].localResult = null;
                    games2[53].awayResult = null;
                    if(games2[56].away){
                      games2[56].localResult = null;
                      games2[56].awayResult = null;
                      games2[56].away = null;
                    }
                    if(games2[60].local){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].local = null;
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                }

                if(games2[55].away !== teamsGroup[1]) {
                    games2[55].away = teamsGroup[1];
                    games2[55].localResult = null;
                    games2[55].awayResult = null;
                    if(games2[58].away){
                      games2[58].localResult = null;
                      games2[58].awayResult = null;
                      games2[58].away = null;
                    }
                    if(games2[61].local){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].local = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                  }
            }
            else if (group === 'H') {

                if(games2[55].local !== teamsGroup[0]) {
                    games2[55].local = teamsGroup[0];
                    games2[55].localResult = null;
                    games2[55].awayResult = null;
                    if(games2[58].away){
                      games2[58].localResult = null;
                      games2[58].awayResult = null;
                      games2[58].away = null;
                    }
                    if(games2[61].local){
                      games2[61].localResult = null;
                      games2[61].awayResult = null;
                      games2[61].local = null;
                    }
                    if(games2[62].away){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].away = null;
                      games2[63].away = null;
                    }
                }

                if(games2[53].away !== teamsGroup[1]) {
                    games2[53].away = teamsGroup[1];
                    games2[53].localResult = null;
                    games2[53].awayResult = null;
                    if(games2[56].away){
                      games2[56].localResult = null;
                      games2[56].awayResult = null;
                      games2[56].away = null;
                    }
                    if(games2[60].local){
                      games2[60].localResult = null;
                      games2[60].awayResult = null;
                      games2[60].local = null;
                    }
                    if(games2[62].local){
                      games2[62].localResult = null;
                      games2[62].awayResult = null;
                      games2[63].localResult = null;
                      games2[63].awayResult = null;
                      games2[62].local = null;
                      games2[63].local = null;
                    }
                  }
            }
            flag = false
        }
        if(flag){
            restartOctavos();
            flag = false
        }

        if(games2[id-1].penalties) games2[id-1].penalties = null   

        if(id === 49) {
          if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
            games2[57].localResult = null;
            games2[57].awayResult = null;
            games2[57].local = null;
          }
          else if(localResultado > goals.awayResult){
            if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                games2[57].localResult = null;
                games2[57].awayResult = null;
            }
            games2[57].local = games2[48].local;
          }
          else if(localResultado < goals.awayResult){
            if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[57].localResult = null;
                games2[57].awayResult = null;
            }
            games2[57].local = games2[48].away;
          }
          if(games2[60].away){
            games2[60].localResult = null;
            games2[60].awayResult = null;
            games2[60].away = null;                 
          }
          if(games2[62].local){
            games2[62].localResult = null;
            games2[62].awayResult = null;
            games2[63].localResult = null;
            games2[63].awayResult = null;
            games2[62].local = null;
            games2[63].local = null;
          }
        }
        if(id === 50) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[57].localResult = null;
              games2[57].awayResult = null;
              games2[57].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
              }
              games2[57].away = games2[49].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
              }
              games2[57].away = games2[49].away;
            }
            if(games2[60].away){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].away = null;                 
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 51) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[59].localResult = null;
              games2[59].awayResult = null;
              games2[59].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].local = games2[50].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].local = games2[50].away;
            }
            if(games2[61].away){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 52) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[59].localResult = null;
              games2[59].awayResult = null;
              games2[59].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].away = games2[51].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].away = games2[51].away;
            }
            if(games2[61].away){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 53) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[56].localResult = null;
              games2[56].awayResult = null;
              games2[56].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].local = games2[52].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].local = games2[52].away;
            }
            if(games2[60].local){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;    
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 54) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[56].localResult = null;
              games2[56].awayResult = null;
              games2[56].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].away = games2[53].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].away = games2[53].away;
            }
            if(games2[60].local){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 55) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[58].localResult = null;
              games2[58].awayResult = null;
              games2[58].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
              }
              games2[58].local = games2[54].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
              }
              games2[58].local = games2[54].away;
            }
            if(games2[61].local){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 56) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[58].localResult = null;
              games2[58].awayResult = null;
              games2[58].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
              }
              games2[58].away = games2[55].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[58].localResult = null;
                  games2[58].awayResult = null;
              }
              games2[58].away = games2[55].away;
            }
            if(games2[61].local){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 57) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].local = games2[56].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].local = games2[56].away;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 58) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].away = games2[57].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].away = games2[57].away;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 59) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].local = games2[58].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].local = games2[58].away;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 60) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].away = games2[59].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].away = games2[59].away;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 61) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResultt === null || localResultado === null  || goals.awayResult === undefined || localResultado === undefined){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
              }
              games2[62].local = games2[60].away;
              games2[63].local = games2[60].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[62].localResult = null;
                games2[62].awayResult = null;
                games2[63].localResult = null;
                games2[63].awayResult = null;
              }
              games2[62].local = games2[60].local;
              games2[63].local = games2[60].away;
            }
          }
          if(id === 62) {
            if(parseInt(goals.awayResult) === parseInt(localResultado) || goals.awayResult === null || localResultado === null || goals.awayResult === undefined || localResultado === undefined){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
            else if(localResultado > goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
              }
              games2[62].away = games2[61].away;
              games2[63].away = games2[61].local;
            }
            else if(localResultado < goals.awayResult){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[62].localResult = null;
                games2[62].awayResult = null;
                games2[63].localResult = null;
                games2[63].awayResult = null;
              }
              games2[62].away = games2[61].local;
              games2[63].away = games2[61].away;
            }
          }

          games2[id-1].localResult = localResultado;
          games2[id-1].awayResult = goals.awayResult;

          setIsModify(!isModify)
    }
        


    async function handleChangeGoalsAway(e) {
        e.preventDefault()
        comprueba(e);
        if(e.target.value !== '') {
            var awayResultado = parseInt(e.target.value);
        }
        setGoals({
            ...goals,
            awayResult: awayResultado 
        });
        let localIndice = teams2.findIndex(e=>e.id===id1);
        let awayIndice = teams2.findIndex(e=>e.id===id2);

        let teamsGroup = teams2.filter(team=>team.group === group);

        let prevLocalResult = localResult;
        let prevAwayResult = awayResult;

        if((id > 0 && id < 49) && teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
            var flag = true;
        }
        
        
        if(id > 0 && id < 49) {
            let prevGoalsF = teams2[localIndice][position][0];
            let prevGoalsC = teams2[localIndice][position][1];


            if( awayResultado === undefined || typeof goals.localResult !== 'number'){
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
            if (group === 'A') {

              if(games2[48].local !== teamsGroup[0]) {
                games2[48].local = teamsGroup[0];
                games2[48].localResult = null;
                games2[48].awayResult = null;
                if(games2[57].local){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
                  games2[57].local = null;
                }
                if(games2[60].away){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
                  games2[60].away = null;
                }
                if(games2[62].local){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
                  games2[62].local = null;
                  games2[63].local = null;
                }            
              }

              if(games2[51].away !== teamsGroup[1]) {
                  games2[51].away = teamsGroup[1];
                  games2[51].localResult = null;
                  games2[51].awayResult = null;
                  if(games2[59].away){
                    games2[59].localResult = null;
                    games2[59].awayResult = null;
                    games2[59].away = null;
                  }
                  if(games2[61].away){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].away = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
              }
          }
          else if (group === 'B') {
              
              if(games2[51].local !== teamsGroup[0]) {
                  games2[51].local = teamsGroup[0];
                  games2[51].localResult = null;
                  games2[51].awayResult = null;
                  if(games2[59].away){
                    games2[59].localResult = null;
                    games2[59].awayResult = null;
                    games2[59].away = null;
                  }
                  if(games2[61].away){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].away = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
              }

              if(games2[48].away !== teamsGroup[1]) {
                  games2[48].away = teamsGroup[1];
                  games2[48].localResult = null;
                  games2[48].awayResult = null;
                  if(games2[57].local){
                    games2[57].localResult = null;
                    games2[57].awayResult = null;
                    games2[57].local = null;
                  }
                  if(games2[60].away){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].away = null;
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }            
              }
          }
          else if (group === 'C') {

              if(games2[49].local !== teamsGroup[0]) {
                  games2[49].local = teamsGroup[0];
                  games2[49].localResult = null;
                  games2[49].awayResult = null;
                  if(games2[57].away){
                    games2[57].localResult = null;
                    games2[57].awayResult = null;
                    games2[57].away = null;
                  }
                  if(games2[60].away){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].away = null;                 
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
              }

              if(games2[50].away !== teamsGroup[1]) {
                  games2[50].away = teamsGroup[1];
                  games2[50].localResult = null;
                  games2[50].awayResult = null;
                  if(games2[59].local){
                    games2[59].localResult = null;
                    games2[59].awayResult = null;
                    games2[59].local = null;
                  }
                  if(games2[61].away){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].away = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
                }
          }
          else if (group === 'D') {

              if(games2[50].local !== teamsGroup[0]) {
                  games2[50].local = teamsGroup[0];
                  games2[50].localResult = null;
                  games2[50].awayResult = null;
                  if(games2[59].local){
                    games2[59].localResult = null;
                    games2[59].awayResult = null;
                    games2[59].local = null;
                  }
                  if(games2[61].away){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].away = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
              }

              if(games2[49].away !== teamsGroup[1]) {
                  games2[49].away = teamsGroup[1];
                  games2[49].localResult = null;
                  games2[49].awayResult = null;
                  if(games2[57].away){
                    games2[57].localResult = null;
                    games2[57].awayResult = null;
                    games2[57].away = null;
                  }
                  if(games2[60].away){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].away = null;                 
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
                }
          }
          else if (group === 'E') {

              if(games2[52].local !== teamsGroup[0]) {
                  games2[52].local = teamsGroup[0];
                  games2[52].localResult = null;
                  games2[52].awayResult = null;
                  if(games2[56].local){
                    games2[56].localResult = null;
                    games2[56].awayResult = null;
                    games2[56].local = null;
                  }
                  if(games2[60].local){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].local = null;    
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
              }

              if(games2[54].away !== teamsGroup[1]) {
                  games2[54].away = teamsGroup[1];
                  games2[54].localResult = null;
                  games2[54].awayResult = null;
                  if(games2[58].local){
                    games2[58].localResult = null;
                    games2[58].awayResult = null;
                    games2[58].local = null;
                  }
                  if(games2[61].local){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].local = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
                }
          }
          else if (group === 'F') {
              
              if(games2[54].local !== teamsGroup[0]) {
                  games2[54].local = teamsGroup[0];
                  games2[54].localResult = null;
                  games2[54].awayResult = null;
                  if(games2[58].local){
                    games2[58].localResult = null;
                    games2[58].awayResult = null;
                    games2[58].local = null;
                  }
                  if(games2[61].local){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].local = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
              }

              if(games2[52].away !== teamsGroup[1]) {
                  games2[52].away = teamsGroup[1];
                  games2[52].localResult = null;
                  games2[52].awayResult = null;
                  if(games2[56].local){
                    games2[56].localResult = null;
                    games2[56].awayResult = null;
                    games2[56].local = null;
                  }
                  if(games2[60].local){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].local = null;    
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
              }
          }
          else if (group === 'G') {

              if(games2[53].local !== teamsGroup[0]) {
                  games2[53].local = teamsGroup[0];
                  games2[53].localResult = null;
                  games2[53].awayResult = null;
                  if(games2[56].away){
                    games2[56].localResult = null;
                    games2[56].awayResult = null;
                    games2[56].away = null;
                  }
                  if(games2[60].local){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].local = null;
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
              }

              if(games2[55].away !== teamsGroup[1]) {
                  games2[55].away = teamsGroup[1];
                  games2[55].localResult = null;
                  games2[55].awayResult = null;
                  if(games2[58].away){
                    games2[58].localResult = null;
                    games2[58].awayResult = null;
                    games2[58].away = null;
                  }
                  if(games2[61].local){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].local = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
                }
          }
          else if (group === 'H') {

              if(games2[55].local !== teamsGroup[0]) {
                  games2[55].local = teamsGroup[0];
                  games2[55].localResult = null;
                  games2[55].awayResult = null;
                  if(games2[58].away){
                    games2[58].localResult = null;
                    games2[58].awayResult = null;
                    games2[58].away = null;
                  }
                  if(games2[61].local){
                    games2[61].localResult = null;
                    games2[61].awayResult = null;
                    games2[61].local = null;
                  }
                  if(games2[62].away){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].away = null;
                    games2[63].away = null;
                  }
              }

              if(games2[53].away !== teamsGroup[1]) {
                  games2[53].away = teamsGroup[1];
                  games2[53].localResult = null;
                  games2[53].awayResult = null;
                  if(games2[56].away){
                    games2[56].localResult = null;
                    games2[56].awayResult = null;
                    games2[56].away = null;
                  }
                  if(games2[60].local){
                    games2[60].localResult = null;
                    games2[60].awayResult = null;
                    games2[60].local = null;
                  }
                  if(games2[62].local){
                    games2[62].localResult = null;
                    games2[62].awayResult = null;
                    games2[63].localResult = null;
                    games2[63].awayResult = null;
                    games2[62].local = null;
                    games2[63].local = null;
                  }
                }
            }
            flag = false
        }
        if(flag){
            restartOctavos();
            flag = false
        }

        if(games2[id-1].penalties) games2[id-1].penalties = null   

        if(id === 49) {
          if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
            if(prevLocalResult === prevAwayResult && prevLocalResult !== null && prevLocalResult !== undefined){

            }
            else {
              games2[57].localResult = null;
              games2[57].awayResult = null;
              games2[57].local = null;
            }
          }
          else if(goals.localResult > awayResultado){
            if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                games2[57].localResult = null;
                games2[57].awayResult = null;
            }
            games2[57].local = games2[48].local;
          }
          else if(goals.localResult < awayResultado){
            if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[57].localResult = null;
                games2[57].awayResult = null;
            }
            games2[57].local = games2[48].away;
          }
          if(games2[60].away){
            games2[60].localResult = null;
            games2[60].awayResult = null;
            games2[60].away = null;                 
          }
          if(games2[62].local){
            games2[62].localResult = null;
            games2[62].awayResult = null;
            games2[63].localResult = null;
            games2[63].awayResult = null;
            games2[62].local = null;
            games2[63].local = null;
          }
        }
        if(id === 50) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[57].localResult = null;
              games2[57].awayResult = null;
              games2[57].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
              }
              games2[57].away = games2[49].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[57].localResult = null;
                  games2[57].awayResult = null;
              }
              games2[57].away = games2[49].away;
            }
            if(games2[60].away){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].away = null;                 
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 51) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
                games2[59].localResult = null;
                games2[59].awayResult = null;
                games2[59].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].local = games2[50].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].local = games2[50].away;
            }
            if(games2[61].away){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 52) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
                games2[59].localResult = null;
                games2[59].awayResult = null;
                games2[59].away = null;
              }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].away = games2[51].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[59].localResult = null;
                  games2[59].awayResult = null;
              }
              games2[59].away = games2[51].away;
            }
            if(games2[61].away){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 53) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[56].localResult = null;
              games2[56].awayResult = null;
              games2[56].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].local = games2[52].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].local = games2[52].away;
            }
            if(games2[60].local){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;    
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 54) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[56].localResult = null;
              games2[56].awayResult = null;
              games2[56].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].away = games2[53].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[56].localResult = null;
                  games2[56].awayResult = null;
              }
              games2[56].away = games2[53].away;
            }
            if(games2[60].local){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 55) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
                games2[58].localResult = null;
                games2[58].awayResult = null;
                games2[58].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                games2[58].localResult = null;
                games2[58].awayResult = null;
              }
              games2[58].local = games2[54].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[58].localResult = null;
                games2[58].awayResult = null;
              }
              games2[58].local = games2[54].away;
            }
            if(games2[61].local){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 56) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
                games2[58].localResult = null;
                games2[58].awayResult = null;
                games2[58].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                games2[58].localResult = null;
                games2[58].awayResult = null;
              }
              games2[58].away = games2[55].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[58].localResult = null;
                games2[58].awayResult = null;
              }
              games2[58].away = games2[55].away;
            }
            if(games2[61].local){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 57) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].local = games2[56].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].local = games2[56].away;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 58) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[60].localResult = null;
              games2[60].awayResult = null;
              games2[60].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].away = games2[57].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[60].localResult = null;
                  games2[60].awayResult = null;
              }
              games2[60].away = games2[57].away;
            }
            if(games2[62].local){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
          }
          if(id === 59) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].local = games2[58].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].local = games2[58].away;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 60) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[61].localResult = null;
              games2[61].awayResult = null;
              games2[61].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].away = games2[59].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  games2[61].localResult = null;
                  games2[61].awayResult = null;
              }
              games2[61].away = games2[59].away;
            }
            if(games2[62].away){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
          }
          if(id === 61) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].local = null;
              games2[63].local = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
              }
              games2[62].local = games2[60].away;
              games2[63].local = games2[60].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[62].localResult = null;
                games2[62].awayResult = null;
                games2[63].localResult = null;
                games2[63].awayResult = null;
              }
              games2[62].local = games2[60].local;
              games2[63].local = games2[60].away;
            }
          }
          if(id === 62) {
            if(parseInt(goals.localResult) === parseInt(awayResultado) || goals.localResult === null || awayResultado === null || goals.localResult === undefined || awayResultado === undefined){
              games2[62].localResult = null;
              games2[62].awayResult = null;
              games2[63].localResult = null;
              games2[63].awayResult = null;
              games2[62].away = null;
              games2[63].away = null;
            }
            else if(goals.localResult > awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  games2[62].localResult = null;
                  games2[62].awayResult = null;
                  games2[63].localResult = null;
                  games2[63].awayResult = null;
              }
              games2[62].away = games2[61].away;
              games2[63].away = games2[61].local;
            }
            else if(goals.localResult < awayResultado){
              if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                games2[62].localResult = null;
                games2[62].awayResult = null;
                games2[63].localResult = null;
                games2[63].awayResult = null;
              }
              games2[62].away = games2[61].local;
              games2[63].away = games2[61].away;
            }
          }

        games2[id-1].localResult = goals.localResult;
        games2[id-1].awayResult = awayResultado;

        setIsModify(!isModify)
    }



    function handleCheckLocal() {
      if(id === 49) {
          games2[57].local = games2[48].local;
      }
      if(id === 50) {
          games2[57].away = games2[49].local;
      }
      if(id === 51) {
          games2[59].local = games2[50].local;
      }
      if(id === 52) {
        games2[59].away = games2[51].local;
      }
      if(id === 53) {
        games2[56].local = games2[52].local;
      }
      if(id === 54) {
        games2[56].away = games2[53].local;
      }
      if(id === 55) {
        games2[58].local = games2[54].local;
      }
      if(id === 56) {
        games2[58].away = games2[55].local;
      }
      if(id === 57) {
        games2[60].local = games2[56].local;
      }
      if(id === 58) {
        games2[60].away = games2[57].local;
      }
      if(id === 59) {
        games2[61].local = games2[58].local;
      }
      if(id === 60) {
        games2[61].away = games2[59].local;
      }
      if(id === 61) {
        games2[62].local = games2[60].away;
        games2[63].local = games2[60].local;
      }
      if(id === 62) {
          games2[62].away = games2[61].away;
          games2[63].away = games2[61].local;
      }
      games2[id-1].penalties = 'local';
      setIsModify(!isModify)
    }

    function handleCheckAway() {
      if(id === 49) {
        games2[57].local = games2[48].away;
      }
      if(id === 50) {
          games2[57].away = games2[49].away;
      }
      if(id === 51) {
          games2[59].local = games2[50].away;
      }
      if(id === 52) {
        games2[59].away = games2[51].away;
      }
      if(id === 53) {
        games2[56].local = games2[52].away;
      }
      if(id === 54) {
        games2[56].away = games2[53].away;
      }
      if(id === 55) {
        games2[58].local = games2[54].away;
      }
      if(id === 56) {
        games2[58].away = games2[55].away;
      }
      if(id === 57) {
        games2[60].local = games2[56].away;
      }
      if(id === 58) {
        games2[60].away = games2[57].away;
      }
      if(id === 59) {
        games2[61].local = games2[58].away;
      }
      if(id === 60) {
        games2[61].away = games2[59].away;
      }
      if(id === 61) {
        games2[62].local = games2[60].local;
        games2[63].local = games2[60].away;
      }
      if(id === 62) {
          games2[62].away = games2[61].local;
          games2[63].away = games2[61].away;
      }
      games2[id-1].penalties = 'away';
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

    // let date = dateNow();
        
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
                      localResult === awayResult && localResult !== null && awayResult !== null && localResult !== undefined && awayResult !== undefined ?
                      <input    type='radio' 
                                defaultChecked={penalties === 'local' ? true : false} 
                                name={id}
                                onClick={handleCheckLocal} /> :
                      null
                    }
                    <input  type='number'
                            min='0'
                            max='9'
                            maxLength="1"
                            // pattern="[0-9(\-)]"
                            pattern="^[0-9]+"
                            defaultValue={localResult} 
                            name='localResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsLocal}
                            className={style.input1}
                            disabled={!team1 || !team2 || localResult || localResult === 0} />  
  
                </div>
                <div className={style.goals}>
                    <input  type='number'
                            min= '0'
                            max='9'
                            maxLength="1"
                            // pattern="[0-9(\-)]"
                            pattern="^[0-9]+"
                            defaultValue={awayResult} 
                            name='awayResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsAway}
                            className={style.input2}
                            disabled={!team1 || !team2 || awayResult || awayResult === 0} />  
                    { (group === 'Octavos de Final' || group === "Cuartos de Final" || group === 'Semifinales' || group === "Final y Tercer Puesto") &&
                        localResult === awayResult && localResult !== null && awayResult !== null && localResult !== undefined && awayResult !== undefined ?
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


export default Partido