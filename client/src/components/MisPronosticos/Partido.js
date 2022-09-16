import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIdGame, putUserResult } from '../../redux/actions';
import style from './Partido.module.css';


function Partido({id, date, hour, stadium, group, position, penalties, img1, team1, team2, img2, id1, id2, setIsModify, isModify, teams2, setTeams2, games2}) {

    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.user);
    const game = useSelector(state=> state.game);
 
    const [goals, setGoals] = useState({
        localResult: userInfo.userResults[id-1][0],
        awayResult: userInfo.userResults[id-1][1]
    })

    useEffect(() => {
        if(id > 0 && id < 49)
      dispatch(getIdGame(id))
    }, [dispatch, id])

    useEffect(() => {
        handleResult();
        // assignOctavos();
    }, [])
    


    // function restartOctavos () {
    //     if (game.group === 'A') {
    //             games2[0].local = null;
    //             games2[0].localResult = null;
    //             games2[0].awayResult = null;
    //             games2[3].away = null;
    //             games2[3].localResult = null;
    //             games2[3].awayResult = null;
    //         }
    //     else if (game.group === 'B') {
    //             games2[3].local = null;
    //             games2[3].localResult = null;
    //             games2[3].awayResult = null;
    //             games2[0].away = null;
    //             games2[0].localResult = null;
    //             games2[0].awayResult = null;
    //     }
    //     else if (game.group === 'C') {
    //             games2[1].local = null;
    //             games2[1].localResult = null;
    //             games2[1].awayResult = null;
    //             games2[2].away = null;
    //             games2[2].localResult = null;
    //             games2[2].awayResult = null;
    //     }
    //     else if (game.group === 'D') {
    //             games2[2].local = null;
    //             games2[2].localResult = null;
    //             games2[2].awayResult = null;
    //             games2[1].away = null;
    //             games2[1].localResult = null;
    //             games2[1].awayResult = null;
    //     }
    //     else if (game.group === 'E') {
    //             games2[4].local = null;
    //             games2[4].localResult = null;
    //             games2[4].awayResult = null;
    //             games2[6].away = null;
    //             games2[6].localResult = null;
    //             games2[6].awayResult = null;
    //     }
    //     else if (game.group === 'F') {
    //             games2[6].local = null;
    //             games2[6].localResult = null;
    //             games2[6].awayResult = null;
    //             games2[4].away = null;
    //             games2[4].localResult = null;
    //             games2[4].awayResult = null;
    //     }
    //     else if (game.group === 'G') {
    //             games2[5].local = null;
    //             games2[5].localResult = null;
    //             games2[5].awayResult = null;
    //             games2[7].away = null;
    //             games2[7].localResult = null;
    //             games2[7].awayResult = null;
    //     }
    //     else if (game.group === 'H') {
    //             games2[7].local = null;
    //             games2[7].localResult = null;
    //             games2[7].awayResult = null;
    //             games2[5].away = null;
    //             games2[5].localResult = null;
    //             games2[5].awayResult = null;
    //     }
    // }

    // function assignOctavos () {
    //     let teamsA = teams2.filter(team => team.group === 'A');
    //     let teamsB = teams2.filter(team => team.group === 'B');
    //     let teamsC = teams2.filter(team => team.group === 'C');
    //     let teamsD = teams2.filter(team => team.group === 'D');
    //     let teamsE = teams2.filter(team => team.group === 'E');
    //     let teamsF = teams2.filter(team => team.group === 'F');
    //     let teamsG = teams2.filter(team => team.group === 'G');
    //     let teamsH = teams2.filter(team => team.group === 'H');
    //     if(teamsA[0].totalGames === 3 && teamsA[1].totalGames === 3 && teamsA[2].totalGames === 3 && teamsA[3].totalGames === 3) {
    //         teamsA.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[0].local = teamsA[0];
    //         games2[3].away = teamsA[1];
    //     }
    //     if(teamsB[0].totalGames === 3 && teamsB[1].totalGames === 3 && teamsB[2].totalGames === 3 && teamsB[3].totalGames === 3) {
    //         teamsB.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[3].local = teamsB[0];
    //         games2[0].away = teamsB[1];
    //     }
    //     if(teamsC[0].totalGames === 3 && teamsC[1].totalGames === 3 && teamsC[2].totalGames === 3 && teamsC[3].totalGames === 3) {
    //         teamsC.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[1].local = teamsC[0];
    //         games2[2].away = teamsC[1];
    //     }
    //     if(teamsD[0].totalGames === 3 && teamsD[1].totalGames === 3 && teamsD[2].totalGames === 3 && teamsD[3].totalGames === 3) {
    //         teamsD.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[2].local = teamsD[0];
    //         games2[1].away = teamsD[1];
    //     }
    //     if(teamsE[0].totalGames === 3 && teamsE[1].totalGames === 3 && teamsE[2].totalGames === 3 && teamsE[3].totalGames === 3) {
    //         teamsE.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[4].local = teamsE[0];
    //         games2[6].away = teamsE[1];
    //     }
    //     if(teamsF[0].totalGames === 3 && teamsF[1].totalGames === 3 && teamsF[2].totalGames === 3 && teamsF[3].totalGames === 3) {
    //         teamsF.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[6].local = teamsF[0];
    //         games2[4].away = teamsF[1];
    //     }
    //     if(teamsG[0].totalGames === 3 && teamsG[1].totalGames === 3 && teamsG[2].totalGames === 3 && teamsG[3].totalGames === 3) {
    //         teamsG.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[5].local = teamsG[0];
    //         games2[7].away = teamsG[1];
    //     }
    //     if(teamsH[0].totalGames === 3 && teamsH[1].totalGames === 3 && teamsH[2].totalGames === 3 && teamsH[3].totalGames === 3) {
    //         teamsH.sort(function (a, b) {
    //             if (a.points > b.points) {
    //               return -1;
    //             }
    //             if (a.points < b.points) {
    //               return 1;
    //             }
    //             if (a.points === b.points){
    //               if (a.difGoals > b.difGoals) {
    //                 return -1;
    //               }
    //               if (a.difGoals < b.difGoals) {
    //                 return 1;
    //               }
    //               if (a.difGoals === b.difGoals) {
    //                 if (a.goalsF > b.goalsF) {
    //                   return -1;
    //                 }
    //                 if (a.goalsF < b.goalsF) {
    //                   return 1;
    //                 }
    //                 if (a.goalsF === b.goalsF) {
    //                   if (a.name > b.name) {
    //                     return -1;
    //                   }
    //                   if (a.name < b.name) {
    //                     return 1;
    //                   }
    //                   return 0;
    //                 }
    //               }
    //             }
    //         })
    //         games2[7].local = teamsH[0];
    //         games2[5].away = teamsH[1];
    //     }
    // }


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
        // if(teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
        //     teamsGroup.sort(function (a, b) {
        //         if (a.points > b.points) {
        //           return -1;
        //         }
        //         if (a.points < b.points) {
        //           return 1;
        //         }
        //         if (a.points === b.points){
        //           if (a.difGoals > b.difGoals) {
        //             return -1;
        //           }
        //           if (a.difGoals < b.difGoals) {
        //             return 1;
        //           }
        //           if (a.difGoals === b.difGoals) {
        //             if (a.goalsF > b.goalsF) {
        //               return -1;
        //             }
        //             if (a.goalsF < b.goalsF) {
        //               return 1;
        //             }
        //             if (a.goalsF === b.goalsF) {
        //               if (a.name > b.name) {
        //                 return -1;
        //               }
        //               if (a.name < b.name) {
        //                 return 1;
        //               }
        //               return 0;
        //             }
        //           }
        //         }
        //     })
        //     if (game.group === 'A') {

        //         if(games2[0].local !== teamsGroup[0]) {
        //           games2[0].local = teamsGroup[0];
        //           games2[0].localResult = null;
        //           games2[0].awayResult = null;
        //         }

        //         if(games2[3].away !== teamsGroup[1]) {
        //             games2[3].away = teamsGroup[1];
        //             games2[3].localResult = null;
        //             games2[3].awayResult = null;
        //         }

        //     }
        //     else if (game.group === 'B') {
                
        //         if(games2[3].local !== teamsGroup[0]) {
        //             games2[3].local = teamsGroup[0];
        //             games2[3].localResult = null;
        //             games2[3].awayResult = null;
        //         }

        //         if(games2[0].away !== teamsGroup[1]) {
        //             games2[0].away = teamsGroup[1];
        //             games2[0].localResult = null;
        //             games2[0].awayResult = null;
        //         }
        //     }
        //     else if (game.group === 'C') {

        //         if(games2[1].local !== teamsGroup[0]) {
        //             games2[1].local = teamsGroup[0];
        //             games2[1].localResult = null;
        //             games2[1].awayResult = null;
        //         }

        //         if(games2[2].away !== teamsGroup[1]) {
        //             games2[2].away = teamsGroup[1];
        //             games2[2].localResult = null;
        //             games2[2].awayResult = null;
        //           }

        //     }
        //     else if (game.group === 'D') {

        //         if(games2[2].local !== teamsGroup[0]) {
        //             games2[2].local = teamsGroup[0];
        //             games2[2].localResult = null;
        //             games2[2].awayResult = null;
        //         }

        //         if(games2[1].away !== teamsGroup[1]) {
        //             games2[1].away = teamsGroup[1];
        //             games2[1].localResult = null;
        //             games2[1].awayResult = null;
        //           }

        //     }
        //     else if (game.group === 'E') {

        //         if(games2[4].local !== teamsGroup[0]) {
        //             games2[4].local = teamsGroup[0];
        //             games2[4].localResult = null;
        //             games2[4].awayResult = null;
        //         }

        //         if(games2[6].away !== teamsGroup[1]) {
        //             games2[6].away = teamsGroup[1];
        //             games2[6].localResult = null;
        //             games2[6].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'F') {
                
        //         if(games2[6].local !== teamsGroup[0]) {
        //             games2[6].local = teamsGroup[0];
        //             games2[6].localResult = null;
        //             games2[6].awayResult = null;
        //         }

        //         if(games2[4].away !== teamsGroup[1]) {
        //             games2[4].away = teamsGroup[1];
        //             games2[4].localResult = null;
        //             games2[4].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'G') {

        //         if(games2[5].local !== teamsGroup[0]) {
        //             games2[5].local = teamsGroup[0];
        //             games2[5].localResult = null;
        //             games2[5].awayResult = null;
        //         }

        //         if(games2[7].away !== teamsGroup[1]) {
        //             games2[7].away = teamsGroup[1];
        //             games2[7].localResult = null;
        //             games2[7].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'H') {

        //         if(games2[7].local !== teamsGroup[0]) {
        //             games2[7].local = teamsGroup[0];
        //             games2[7].localResult = null;
        //             games2[7].awayResult = null;
        //         }

        //         if(games2[5].away !== teamsGroup[1]) {
        //             games2[5].away = teamsGroup[1];
        //             games2[5].localResult = null;
        //             games2[5].awayResult = null;
        //           }
        //     }
        //     flag = false
        // }
        // if(flag){
        //     restartOctavos();
        //     flag = false
        // }
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

        // let teamsGroup = teams2.filter(team=>team.group === group);

        // if(teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
        //     var flag = true;
        // }
        
        
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
        // if(teamsGroup[0].totalGames === 3 && teamsGroup[1].totalGames === 3 && teamsGroup[2].totalGames === 3 && teamsGroup[3].totalGames === 3){
        //     teamsGroup.sort(function (a, b) {
        //         if (a.points > b.points) {
        //           return -1;
        //         }
        //         if (a.points < b.points) {
        //           return 1;
        //         }
        //         if (a.points === b.points){
        //           if (a.difGoals > b.difGoals) {
        //             return -1;
        //           }
        //           if (a.difGoals < b.difGoals) {
        //             return 1;
        //           }
        //           if (a.difGoals === b.difGoals) {
        //             if (a.goalsF > b.goalsF) {
        //               return -1;
        //             }
        //             if (a.goalsF < b.goalsF) {
        //               return 1;
        //             }
        //             if (a.goalsF === b.goalsF) {
        //               if (a.name > b.name) {
        //                 return -1;
        //               }
        //               if (a.name < b.name) {
        //                 return 1;
        //               }
        //               return 0;
        //             }
        //           }
        //         }
        //     })
        //     if (game.group === 'A') {

        //         if(games2[0].local !== teamsGroup[0]) {
        //           games2[0].local = teamsGroup[0];
        //           games2[0].localResult = null;
        //           games2[0].awayResult = null;
        //         }

        //         if(games2[3].away !== teamsGroup[1]) {
        //             games2[3].away = teamsGroup[1];
        //             games2[3].localResult = null;
        //             games2[3].awayResult = null;
        //         }

        //     }
        //     else if (game.group === 'B') {
                
        //         if(games2[3].local !== teamsGroup[0]) {
        //             games2[3].local = teamsGroup[0];
        //             games2[3].localResult = null;
        //             games2[3].awayResult = null;
        //         }

        //         if(games2[0].away !== teamsGroup[1]) {
        //             games2[0].away = teamsGroup[1];
        //             games2[0].localResult = null;
        //             games2[0].awayResult = null;
        //         }
        //     }
        //     else if (game.group === 'C') {

        //         if(games2[1].local !== teamsGroup[0]) {
        //             games2[1].local = teamsGroup[0];
        //             games2[1].localResult = null;
        //             games2[1].awayResult = null;
        //         }

        //         if(games2[2].away !== teamsGroup[1]) {
        //             games2[2].away = teamsGroup[1];
        //             games2[2].localResult = null;
        //             games2[2].awayResult = null;
        //           }

        //     }
        //     else if (game.group === 'D') {

        //         if(games2[2].local !== teamsGroup[0]) {
        //             games2[2].local = teamsGroup[0];
        //             games2[2].localResult = null;
        //             games2[2].awayResult = null;
        //         }

        //         if(games2[1].away !== teamsGroup[1]) {
        //             games2[1].away = teamsGroup[1];
        //             games2[1].localResult = null;
        //             games2[1].awayResult = null;
        //           }

        //     }
        //     else if (game.group === 'E') {

        //         if(games2[4].local !== teamsGroup[0]) {
        //             games2[4].local = teamsGroup[0];
        //             games2[4].localResult = null;
        //             games2[4].awayResult = null;
        //         }

        //         if(games2[6].away !== teamsGroup[1]) {
        //             games2[6].away = teamsGroup[1];
        //             games2[6].localResult = null;
        //             games2[6].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'F') {
                
        //         if(games2[6].local !== teamsGroup[0]) {
        //             games2[6].local = teamsGroup[0];
        //             games2[6].localResult = null;
        //             games2[6].awayResult = null;
        //         }

        //         if(games2[4].away !== teamsGroup[1]) {
        //             games2[4].away = teamsGroup[1];
        //             games2[4].localResult = null;
        //             games2[4].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'G') {

        //         if(games2[5].local !== teamsGroup[0]) {
        //             games2[5].local = teamsGroup[0];
        //             games2[5].localResult = null;
        //             games2[5].awayResult = null;
        //         }

        //         if(games2[7].away !== teamsGroup[1]) {
        //             games2[7].away = teamsGroup[1];
        //             games2[7].localResult = null;
        //             games2[7].awayResult = null;
        //           }
        //     }
        //     else if (game.group === 'H') {

        //         if(games2[7].local !== teamsGroup[0]) {
        //             games2[7].local = teamsGroup[0];
        //             games2[7].localResult = null;
        //             games2[7].awayResult = null;
        //         }

        //         if(games2[5].away !== teamsGroup[1]) {
        //             games2[5].away = teamsGroup[1];
        //             games2[5].localResult = null;
        //             games2[5].awayResult = null;
        //           }
        //     }
        //     flag = false
        // }
        // if(flag){
        //     restartOctavos();
        //     flag = false
        // }
        let resultado={
            idGame: id,
            localGoals: goals.localResult,
            awayGoals: awayResultado
        }
        dispatch(putUserResult(userInfo.sub, resultado))
        setIsModify(!isModify)
    }


        // function handleCheckLocal() {
        // const penaltiesLocal = {
        //     id: id,
        //     penalties: 'local'
        // }
        // console.log(penaltiesLocal)
        // dispatch(putGamePenalties(penaltiesLocal, setIsModify))
        // }

        // function handleCheckAway() {
        //     const penaltiesAway = {
        //         id: id,
        //         penalties: 'away'
        //     }
        //     dispatch(putGamePenalties(penaltiesAway, setIsModify))
        //     }
        
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
                     {/* { (group === 'Octavos de Final' || group === "Cuartos de Final" || group === 'Semifinales' || group === "Final y Tercer Puesto") &&
                      localResult === awayResult && localResult !== null ?
                      <input    type='radio' 
                                defaultChecked={penalties === 'local' ? true : false} 
                                name={id}
                                onClick={handleCheckLocal} /> :
                      null
                    } */}
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
                            disabled={!team1 || !team2} />  
  
                </div>
                <div className={style.goals}>
                    <input  type='number'
                            min= '0'
                            max='9'
                            maxLength="1"
                            pattern="[0-9(\-)]"
                            defaultValue={goals.awayResult} 
                            // defaultValue={userInfo.userResults[id-1][1]} 
                            name='awayResult' 
                            autoComplete='off'
                            onChange={handleChangeGoalsAway}
                            className={style.input2}
                            disabled={!team1 || !team2} />  
                    {/* { (group === 'Octavos de Final' || group === "Cuartos de Final" || group === 'Semifinales' || group === "Final y Tercer Puesto") &&
                       localResult === awayResult && localResult !== null ?
                      <input    type='radio' 
                                defaultChecked={penalties === 'away' ? true : false}  
                                name={id} 
                                onClick={handleCheckAway} /> :
                      null
                    }                    */}
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