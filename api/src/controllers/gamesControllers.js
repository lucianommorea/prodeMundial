const {Game, Team} = require('../db');
const { putTeam, updateGoals } = require('./teamsControllers');
const { putUsersPoints } = require('./usersControllers');

async function postGame(id, stadium, date, position, group, local, away) {
    
        if(!local || !away) {
            const newGame2 = await Game.create({
                id,
                stadium,
                date,
                local,
                group,
                away,
                position   
            })
            return newGame2
        }

        try {
            const newGame = await Game.create({
                id,
                stadium,
                date,
                local,
                away,
                position, 
                group
            })
            let localTeam = await Team.findOne({
                where: {
                    id: local
                }
            })
            await newGame.addTeam(localTeam)
            let awayTeam = await Team.findOne({
                where: {
                    id: away
                }
            })
            await newGame.addTeam(awayTeam)
            return newGame
        }
        catch (error) {
            console.log('Error postGame', error)
        }
}

async function putGame(id, local, away) {
  
    try {
        const updatedGame = await Game.findOne({
          where: {
              id: id
          }
        });
        let localTeam = await Team.findOne({
            where: {
                id: local
            }
        });
        await updatedGame.addTeam(localTeam);
        await updatedGame.update({local: localTeam.id});
        let awayTeam = await Team.findOne({
            where: {
                id: away
            }
        });
        await updatedGame.addTeam(awayTeam);
        await updatedGame.update({away: awayTeam.id});
        return updatedGame;
    }
    catch (error) {
        console.log('Error putGame', error)
    }
}

async function putLocalTeamGame(id, local) {
  
  try {
      const updatedGame = await Game.findOne({
        where: {
            id: id
        }
      });

      let localTeam = await Team.findOne({
          where: {
              id: local
          }
      });
      
      let prevLocalTeam = await Team.findOne({
        where: {
            id: updatedGame.local
        }
      });

      if (prevLocalTeam !== localTeam) {
        await updatedGame.removeTeam(prevLocalTeam);
        if(localTeam) {
          await updatedGame.addTeam(localTeam);
          await updatedGame.update({local: localTeam.id});
        } else {
          await updatedGame.update({local: null});
        }
      } 
        return updatedGame;
      
      // if (prevLocalTeam) {
      //   await updatedGame.removeTeam(prevLocalTeam)
      // }
      // await updatedGame.addTeam(localTeam);
      // await updatedGame.update({local: localTeam.id});
      // return updatedGame;
  }
  catch (error) {
      console.log('Error putLocalGame', error)
  }
}

async function putAwayTeamGame(id, away) {
  
  try {
      const updatedGame = await Game.findOne({
        where: {
            id: id
        }
      });
      let awayTeam = await Team.findOne({
          where: {
              id: away
          }
      });
      let prevAwayTeam = await Team.findOne({
        where: {
            id: updatedGame.away
        }
      });

      if (prevAwayTeam !== awayTeam) {
        await updatedGame.removeTeam(prevAwayTeam);
        if(awayTeam) {
          await updatedGame.addTeam(awayTeam);
          await updatedGame.update({away: awayTeam.id});
        } else {
          await updatedGame.update({away: null});
        }
      } 
        return updatedGame;
      // if (prevAwayTeam) {
      //   await updatedGame.removeTeam(prevAwayTeam)
      // }
      // await updatedGame.addTeam(awayTeam);
      // await updatedGame.update({away: awayTeam.id});
      // return updatedGame;
  }
  catch (error) {
      console.log('Error putAwayGame', error)
  }
}

async function putGameResult(id, localGoals, awayGoals) {
  
    try {
        let game = await Game.findOne({
          where: {
              id: id
          }
        });

        let prevLocalResult = game.localResult;
        let prevAwayResult = game.awayResult;

        if(game.group === 'A' || game.group === 'B' || game.group === 'C' || game.group === 'D' || 
           game.group === 'E' || game.group === 'F' || game.group === 'G' || game.group === 'H') {

            if (localGoals === '' || awayGoals === '') {
              await game.update({localResult: null, awayResult: null})
              // await putTeam(game.local, null, null, game.position)
              // await putTeam(game.away, null, null, game.position)
              // await updateGoals(game.local)
              // await updateGoals(game.away)
              // await putUsersPoints(id, null, null)
            }
            
            await game.update({localResult: localGoals, awayResult: awayGoals})    
    
            await putTeam(game.local, localGoals, awayGoals, game.position)
            await putTeam(game.away, awayGoals, localGoals, game.position)
            await updateGoals(game.local)
            await updateGoals(game.away)
            await putUsersPoints(id, localGoals, awayGoals)
    
            let teams = await Team.findAll({
              where: {
                group: game.group
              },
                order: [
                  ['points', 'DESC'],
                ],  
            })
    
            if (teams[0].totalGames === 3 && teams[1].totalGames === 3 && teams[2].totalGames === 3 && teams[3].totalGames === 3) {
              
              if (game.group === 'A') {
                putLocalTeamGame(49, teams[0].id);
                putGameResult(49, '', '');
                putGameResult(58, '', '');
                putLocalTeamGame(58, null);
                putGameResult(61, '', '');
                putAwayTeamGame(61, null);
                putGameResult(63, '', '');
                putLocalTeamGame(63, null);
                putGameResult(64, '', '');
                putLocalTeamGame(64, null);

                putAwayTeamGame(52, teams[1].id)
                putGameResult(52, '', '');
                putGameResult(60, '', '');
                putAwayTeamGame(60, null);
                putGameResult(62, '', '');
                putAwayTeamGame(62, null);
                putGameResult(63, '', '');
                putAwayTeamGame(63, null);
                putGameResult(64, '', '');
                putAwayTeamGame(64, null);
              }
              if (game.group === 'B') {

                putLocalTeamGame(52, teams[0].id);
                putGameResult(52, '', '');
                putGameResult(60, '', '');
                putAwayTeamGame(60, null);
                putGameResult(62, '', '');
                putAwayTeamGame(62, null);
                putGameResult(63, '', '');
                putAwayTeamGame(63, null);
                putGameResult(64, '', '');
                putAwayTeamGame(64, null);

                putAwayTeamGame(49, teams[1].id)
                putGameResult(49, '', '');
                putGameResult(58, '', '');
                putLocalTeamGame(58, null);
                putGameResult(61, '', '');
                putAwayTeamGame(61, null);
                putGameResult(63, '', '');
                putLocalTeamGame(63, null);
                putGameResult(64, '', '');
                putLocalTeamGame(64, null);
              }
              if (game.group === 'C') {
                putLocalTeamGame(50, teams[0].id);
                putGameResult(50, '', '')
                putGameResult(58, '', '')
                putAwayTeamGame(58, null);
                putGameResult(61, '', '')
                putAwayTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);

                putAwayTeamGame(51, teams[1].id)
                putGameResult(51, '', '')
                putGameResult(60, '', '')
                putLocalTeamGame(60, null);
                putGameResult(62, '', '')
                putAwayTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null); 
              }
              if (game.group === 'D') {
                putLocalTeamGame(51, teams[0].id);
                putGameResult(51, '', '')
                putGameResult(60, '', '')
                putLocalTeamGame(60, null);
                putGameResult(62, '', '')
                putAwayTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);                

                putAwayTeamGame(50, teams[1].id)
                putGameResult(50, '', '')
                putGameResult(58, '', '')
                putAwayTeamGame(58, null);
                putGameResult(61, '', '')
                putAwayTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
              if (game.group === 'E') {
                putLocalTeamGame(53, teams[0].id);
                putGameResult(53, '', '')
                putGameResult(57, '', '')
                putLocalTeamGame(57, null)
                putGameResult(61, '', '')
                putLocalTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);

                putAwayTeamGame(55, teams[1].id)
                putGameResult(55, '', '')
                putGameResult(59, '', '')
                putLocalTeamGame(59, null);
                putGameResult(62, '', '')
                putLocalTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
              if (game.group === 'F') {
                putLocalTeamGame(55, teams[0].id);
                putGameResult(55, '', '')
                putGameResult(59, '', '')
                putLocalTeamGame(59, null);
                putGameResult(62, '', '')
                putLocalTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);

                putAwayTeamGame(53, teams[1].id)
                putGameResult(53, '', '')
                putGameResult(57, '', '')
                putLocalTeamGame(57, null)
                putGameResult(61, '', '')
                putLocalTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
              if (game.group === 'G') {
                putLocalTeamGame(54, teams[0].id);
                putGameResult(54, '', '');
                putGameResult(57, '', '');
                putAwayTeamGame(57, null);
                putGameResult(61, '', '');
                putLocalTeamGame(61, null);
                putGameResult(63, '', '');
                putLocalTeamGame(63, null);
                putGameResult(64, '', '');
                putLocalTeamGame(64, null);

                putAwayTeamGame(56, teams[1].id)
              }
              if (game.group === 'H') {
                putLocalTeamGame(56, teams[0].id);
                putGameResult(56, '', '')
                putGameResult(59, '', '')
                putAwayTeamGame(59, null);
                putGameResult(62, '', '')
                putLocalTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);

                putAwayTeamGame(54, teams[1].id)
                putGameResult(54, '', '');
                putGameResult(57, '', '');
                putAwayTeamGame(57, null);
                putGameResult(61, '', '');
                putLocalTeamGame(61, null);
                putGameResult(63, '', '');
                putLocalTeamGame(63, null);
                putGameResult(64, '', '');
                putLocalTeamGame(64, null);

              }
            }

            else if (teams[0].totalGames !== 3 || teams[1].totalGames !== 3 || teams[2].totalGames !== 3 || teams[3].totalGames !== 3) {
              
              if (game.group === 'A') {
                putLocalTeamGame(49, null);
                putAwayTeamGame(52, null)
              }
              if (game.group === 'B') {
                putLocalTeamGame(52, null);
                putAwayTeamGame(49, null)
              }
              if (game.group === 'C') {
                putLocalTeamGame(50, null);
                putAwayTeamGame(51, null)
              }
              if (game.group === 'D') {
                putLocalTeamGame(51, null);
                putAwayTeamGame(50, null)
              }
              if (game.group === 'E') {
                putLocalTeamGame(53, null);
                putAwayTeamGame(55, null)
              }
              if (game.group === 'F') {
                putLocalTeamGame(55, null);
                putAwayTeamGame(53, null)
              }
              if (game.group === 'G') {
                putLocalTeamGame(54, null);
                putAwayTeamGame(56, null)
              }
              if (game.group === 'H') {
                putLocalTeamGame(56, null);
                putAwayTeamGame(54, null)
              }
            }
    
            return game

          }
          if (game.group === 'Octavos de Final') {

            if (localGoals === '' || awayGoals === '') {
              await game.update({localResult: null, awayResult: null})
            }

            if (game.id === 49) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) { 
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                    putGameResult(58, '', '')
                    putGameResult(61, '', '')
                    putAwayTeamGame(61, null);
                    putGameResult(63, '', '')
                    putLocalTeamGame(63, null);
                    putGameResult(64, '', '')
                    putLocalTeamGame(64, null);
                }
                putLocalTeamGame(58, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(58, '', '')
                  putGameResult(61, '', '')
                  putAwayTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
              }
                putLocalTeamGame(58, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                  putGameResult(58, '', '')
                  putLocalTeamGame(58, null)
                  putGameResult(61, '', '')
                  putAwayTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
              }
            }
            if (game.id === 50) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(58, '', '')
                  putGameResult(61, '', '') 
                  putAwayTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(58, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(58, '', '')
                  putGameResult(61, '', '')
                  putAwayTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(58, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                  putGameResult(58, '', '');
                  putAwayTeamGame(58, null);
                  putGameResult(61, '', '');
                  putAwayTeamGame(61, null);
                  putGameResult(63, '', '');
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '');
                  putLocalTeamGame(64, null);
              }
            }
            if (game.id === 51) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(60, '', '')
                  putGameResult(62, '', '')
                  putAwayTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(60, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(60, '', '')
                  putGameResult(62, '', '')
                  putAwayTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(60, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(60, '', '')
                putLocalTeamGame(60, null)
                putGameResult(62, '', '')
                putAwayTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            if (game.id === 52) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(60, '', '')
                  putGameResult(62, '', '')
                  putAwayTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(60, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(60, '', '')
                  putGameResult(62, '', '')
                  putAwayTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(60, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(60, '', '')
                putAwayTeamGame(60, null)
                putGameResult(62, '', '')
                putAwayTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            if (game.id === 53) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(57, '', '')
                  putGameResult(61, '', '')
                  putLocalTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putLocalTeamGame(57, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(57, '', '')
                  putGameResult(61, '', '')
                  putLocalTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putLocalTeamGame(57, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(57, '', '');
                putLocalTeamGame(57, null)
                putGameResult(61, '', '')
                putLocalTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
            }
            if (game.id === 54) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(57, '', '')
                  putGameResult(61, '', '')
                  putLocalTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(57, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(57, '', '')
                  putGameResult(61, '', '')
                  putLocalTeamGame(61, null);
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(57, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(57, '', '')
                putAwayTeamGame(57, null)
                putGameResult(61, '', '')
                putLocalTeamGame(61, null);
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
            }
            if (game.id === 55 ) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(59, '', '')
                  putGameResult(62, '', '')
                  putLocalTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(59, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(59, '', '')
                  putGameResult(62, '', '')
                  putLocalTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(59, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(59, '', '')
                putLocalTeamGame(59, null)
                putGameResult(62, '', '')
                putLocalTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            if (game.id === 56) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(59, '', '')
                  putGameResult(62, '', '')
                  putLocalTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(59, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(59, '', '')
                  putGameResult(62, '', '')
                  putLocalTeamGame(62, null);
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(59, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(59, '', '')
                putAwayTeamGame(59, null)
                putGameResult(62, '', '')
                putLocalTeamGame(62, null);
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            await game.update({localResult: localGoals, awayResult: awayGoals}) 
          }

          if (game.group === 'Cuartos de Final') {

            if (localGoals === '' || awayGoals === '') {
              await game.update({localResult: null, awayResult: null})
            }

            else if (game.id === 57) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(61, '', '')
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putLocalTeamGame(61, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(61, '', '')
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putLocalTeamGame(61, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(61, '', '')
                putLocalTeamGame(61, null)
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
            }
            if (game.id === 58) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(61, '', '')
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(61, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(61, '', '')
                  putGameResult(63, '', '')
                  putLocalTeamGame(63, null);
                  putGameResult(64, '', '')
                  putLocalTeamGame(64, null);
                }
                putAwayTeamGame(61, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(61, '', '')
                putAwayTeamGame(61, null)
                putGameResult(63, '', '')
                putLocalTeamGame(63, null);
                putGameResult(64, '', '')
                putLocalTeamGame(64, null);
              }
            }
            if (game.id === 59) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(62, '', '')
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(62, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(62, '', '')
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putLocalTeamGame(62, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(62, '', '')
                putLocalTeamGame(62, null)
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            if (game.id === 60) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(62, '', '')
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(62, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(62, '', '')
                  putGameResult(63, '', '')
                  putAwayTeamGame(63, null);
                  putGameResult(64, '', '')
                  putAwayTeamGame(64, null);
                }
                putAwayTeamGame(62, game.away)
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(62, '', '');
                putAwayTeamGame(62, null)
                putGameResult(63, '', '')
                putAwayTeamGame(63, null);
                putGameResult(64, '', '')
                putAwayTeamGame(64, null);
              }
            }
            await game.update({localResult: localGoals, awayResult: awayGoals}) 
          }

          if (game.group === 'Semifinales') {
            
            if (localGoals === '' || awayGoals === '') {
              await game.update({localResult: null, awayResult: null})
            }

            else if (game.id === 61) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(63, '', '')
                  putGameResult(64, '', '')
                }
                putLocalTeamGame(63, game.away);
                putLocalTeamGame(64, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(63, '', '')
                  putGameResult(64, '', '')
                }
                putLocalTeamGame(63, game.local)
                putLocalTeamGame(64, game.away);
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(63, '', '')
                putGameResult(64, '', '')
                putLocalTeamGame(63, null)
                putLocalTeamGame(64, null);
              }
            }
            if (game.id === 62) {
              if(localGoals > awayGoals || (localGoals !== '' && localGoals === awayGoals)) {
                if(prevLocalResult === prevAwayResult || prevLocalResult < prevAwayResult){
                  putGameResult(63, '', '')
                  putGameResult(64, '', '')
                }
                putAwayTeamGame(63, game.away);
                putAwayTeamGame(64, game.local);
              } 
              if (awayGoals > localGoals){
                if(prevLocalResult === prevAwayResult || prevLocalResult > prevAwayResult){
                  putGameResult(63, '', '')
                  putGameResult(64, '', '')
                }
                putAwayTeamGame(63, game.local)
                putAwayTeamGame(64, game.away);
              }
              if (localGoals === '' || awayGoals === ''){
                putGameResult(63, '', '')
                putGameResult(64, '', '')
                putAwayTeamGame(63, null)
                putAwayTeamGame(64, null);
              }
            }
            await game.update({localResult: localGoals, awayResult: awayGoals})
          }

          if (game.group === 'Final y Tercer Puesto') {
            
            if (localGoals === '' || awayGoals === '') {
              await game.update({localResult: null, awayResult: null})
            } else {
              await game.update({localResult: localGoals, awayResult: awayGoals})
            }

          }

        
    }
    catch (error) {
        console.log('Error putGameResult', error)
    }
}


async function getAllGames() {    
   try{
        let games = await Game.findAll({
            include: [Team],
            order: ["id"],
        })
        return games
    }
    catch(error) {
        console.log('Error in getAllGames', error)
    }
}

async function getGroupGames(group) {
  try{
      const groupGames = await Game.findAll({  
          where: {
              group: group
          },
          include: [Team],
            order: [
              ['id', 'ASC'],
            ],             
      }) 

      return groupGames
  } catch (error) {
          console.log('Error in getGameById', error)
  }
}


async function getGameById(id) {
    try{
        const gameId = await Game.findOne({  
            where: {
                id: id
            },
            include: [Team]          
        }) 

        return gameId
    } catch (error) {
            console.log('Error in getGameById', error)
    }
}

const populateGames = async () => {
    const games = [
    {
        id: 1,
        stadium: "Al Bayt Stadium",
        date: "2022/11/20 13:00:00.59",
        local: "QAT",
        away: "ECU",
        position: 'game1',
        group: 'A'
    },
    {
        id: 2,
        stadium: "Khalifa Inernational Stadium",
        date: "2022/11/21 10:00:00.59",
        local: "ENG",
        away: "IRN",
        position: 'game1',
        group: 'B',
      },
      {
        id: 3,
        stadium: "Al Thumama Stadium",
        date: "2022/11/21 13:00:00.59",
        local: "SEN",
        away: "NED",
        position: 'game1',
        group: 'A',
      },
      {
        id: 4,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/21 16:00:00.59",
        local: "USA",
        away: "WAL",
        position: 'game1',
        group: 'B',
      },
      {
        id: 5,
        stadium: "Lusail Stadium",
        date: "2022/11/22 07:00:00.59",
        local: "ARG",
        away: "KSA",
        position: 'game1',
        group: 'C',
      },
      {
        id: 6,
        stadium: "Education City Stadium",
        date: "2022/11/22 10:00:00.59",
        local: "DEN",
        away: "TUN",
        position: 'game1',
        group: 'D',
      },
      {
        id: 7,
        stadium: "Stadium 974",
        date: "2022/11/22 13:00:00.59",
        local: "MEX",
        away: "POL",
        position: 'game1',
        group: 'C',
      },
      {
        id: 8,
        stadium: "Al Janoub Stadium",
        date: "2022/11/22 16:00:00.59",
        local: "FRA",
        away: "AUS",
        position: 'game1',
        group: 'D',
      },
      {
        id: 9,
        stadium: "Al Bayt Stadium",
        date: "2022/11/23 07:00:00.59",
        local: "MAR",
        away: "CRO",
        position: 'game1',
        group: 'F',
      },
      {
        id: 10,
        stadium: "Khalifa International Stadium",
        date: "2022/11/23 10:00:00.59",
        local: "GER",
        away: "JPN",
        position: 'game1',
        group: 'E',
      },
      {
        id: 11,
        stadium: "Al Thumama Stadium",
        date: "2022/11/23 13:00:00.59",
        local: "ESP",
        away: "CRC",
        position: 'game1',
        group: 'E',
      },
      {
        id: 12,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/23 16:00:00.59",
        local: "BEL",
        away: "CAN",
        position: 'game1',
        group: 'F',
      },
      {
        id: 13,
        stadium: "Al Janoub Stadium",
        date: "2022/11/24 07:00:00.59",
        local: "SUI",
        away: "CMR",
        position: 'game1',
        group: 'G',
      },
      {
        id: 14,
        stadium: "Education City Stadium",
        date: "2022/11/24 10:00:00.59",
        local: "URU",
        away: "KOR",
        position: 'game1',
        group: 'H',
      },
      {
        id: 15,
        stadium: "Stadium 974",
        date: "2022/11/24 13:00:00.59",
        local: "POR",
        away: "GHA",
        position: 'game1',
        group: 'H',
      },
      {
        id: 16,
        stadium: "Lusail Stadium",
        date: "2022/11/24 16:00:00.59",
        local: "BRA",
        away: "SRB",
        position: 'game1',
        group: 'G',
      },
      {
        id: 17,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/25 07:00:00.59",
        local: "WAL",
        away: "IRN",
        position: 'game2',
        group: 'B',
      },
      {
        id: 18,
        stadium: "Al Thumama Stadium",
        date: "2022/11/25 10:00:00.59",
        local: "QAT",
        away: "SEN",
        position: 'game2',
        group: 'A',
      },
      {
        id: 19,
        stadium: "Khalifa International Stadium",
        date: "2022/11/25 13:00:00.59",
        local: "NED",
        away: "ECU",
        position: 'game2',
        group: 'A',
      },
      {
        id: 20,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/25 16:00:00.59",
        local: "ENG",
        away: "USA",
        position: 'game2',
        group: 'B',
      },
      {
        id: 21,
        stadium: "Al Janoub Stadium",
        date: "2022/11/26 07:00:00.59",
        local: "TUN",
        away: "AUS",
        position: 'game2',
        group: 'D',
      },
      {
        id: 22,
        stadium: "Education City Stadium",
        date: "2022/11/26 10:00:00.59",
        local: "POL",
        away: "KSA",
        position: 'game2',
        group: 'C',
      },
      {
        id: 23,
        stadium: "Stadium 974",
        date: "2022/11/26 13:00:00.59",
        local: "FRA",
        away: "DEN",
        position: 'game2',
        group: 'D',
      },
      {
        id: 24,
        stadium: "Lusail Stadium",
        date: "2022/11/26 16:00:00.59",
        local: "ARG",
        away: "MEX",
        position: 'game2',
        group: 'C',
      },
      {
        id: 25,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/27 07:00:00.59",
        local: "JPN",
        away: "CRC",
        position: 'game2',
        group: 'E',
      },
      {
        id: 26,
        stadium: "Al Thumama Stadium",
        date: "2022/11/27 10:00:00.59",
        local: "BEL",
        away: "MAR",
        position: 'game2',
        group: 'F',
      },
      {
        id: 27,
        stadium: "Khalifa International Stadium",
        date: "2022/11/27 13:00:00.59",
        local: "CRO",
        away: "CAN",
        position: 'game2',
        group: 'F',
      },
      {
        id: 28,
        stadium: "Al Bayt Stadium",
        date: "2022/11/27 16:00:00.59",
        local: "ESP",
        away: "GER",
        position: 'game2',
        group: 'E',
      },
      {
        id: 29,
        stadium: "Al Janoub Stadium",
        date: "2022/11/28 07:00:00.59",
        local: "CMR",
        away: "SRB",
        position: 'game2',
        group: 'G',
      },
      {
        id: 30,
        stadium: "Education City Stadium",
        date: "2022/11/28 10:00:00.59",
        local: "KOR",
        away: "GHA",
        position: 'game2',
        group: 'H',
      },
      {
        id: 31,
        stadium: "Stadium 974",
        date: "2022/11/28 13:00:00.59",
        local: "BRA",
        away: "SUI",
        position: 'game2',
        group: 'G',
      },
      {
        id: 32,
        stadium: "Lusail Stadium",
        date: "2022/11/28 16:00:00.59",
        local: "POR",
        away: "URU",
        position: 'game2',
        group: 'H',
      },
      {
        id: 33,
        stadium: "Al Bayt Stadium",
        date: "2022/11/29 12:00:00.59",
        local: "NED",
        away: "QAT",
        position: 'game3',
        group: 'A',
      },
      {
        id: 34,
        stadium: "Khalifa International Stadium",
        date: "2022/11/29 12:00:00.59",
        local: "ECU",
        away: "SEN",
        position: 'game3',
        group: 'A',
      },
      {
        id: 35,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/11/29 16:00:00.59",
        local: "WAL",
        away: "ENG",
        position: 'game3',
        group: 'B',
      },
      {
        id: 36,
        stadium: "Al Thumama Stadium",
        date: "2022/11/29 16:00:00.59",
        local: "IRN",
        away: "USA",
        position: 'game3',
        group: 'B',
      },
      {
        id: 37,
        stadium: "Al Janoub Stadium",
        date: "2022/11/30 12:00:00.59",
        local: "AUS",
        away: "DEN",
        position: 'game3',
        group: 'D',
      },
      {
        id: 38,
        stadium: "Education City Stadium",
        date: "2022/11/30 12:00:00.59",
        local: "TUN",
        away: "FRA",
        position: 'game3',
        group: 'D',
      },
      {
        id: 39,
        stadium: "Stadium 974",
        date: "2022/11/30 16:00:00.59",
        local: "POL",
        away: "ARG",
        position: 'game3',
        group: 'C',
      },
      {
        id: 40,
        stadium: "Lusail Stadium",
        date: "2022/11/30 16:00:00.59",
        local: "KSA",
        away: "MEX",
        position: 'game3',
        group: 'C',
      },
      {
        id: 41,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/12/01 12:00:00.59",
        local: "CRO",
        away: "BEL",
        position: 'game3',
        group: 'F',
      },
      {
        id: 42,
        stadium: "Al Thumama Stadium",
        date: "2022/12/01 12:00:00.59",
        local: "CAN",
        away: "MAR",
        position: 'game3',
        group: 'F',
      },
      {
        id: 43,
        stadium: "Khalifa International Stadium",
        date: "2022/12/01 16:00:00.59",
        local: "JPN",
        away: "ESP",
        position: 'game3',
        group: 'E',
      },
      {
        id: 44,
        stadium: "Al Bayt Stadium",
        date: "2022/12/01 16:00:00.59",
        local: "CRC",
        away: "GER",
        position: 'game3',
        group: 'E',
      },
      {
        id: 45,
        stadium: "Al Janoub Stadium",
        date: "2022/12/02 12:00:00.59",
        local: "GHA",
        away: "URU",
        position: 'game3',
        group: 'H',
      },
      {
        id: 46,
        stadium: "Education City Stadium",
        date: "2022/12/02 12:00:00.59",
        local: "KOR",
        away: "POR",
        position: 'game3',
        group: 'H',
      },
      {
        id: 47,
        stadium: "Stadium 974",
        date: "2022/12/02 16:00:00.59",
        local: "SRB",
        away: "SUI",
        position: 'game3',
        group: 'G',
      },
      {
        id: 48,
        stadium: "Lusail Stadium",
        date: "2022/12/02 16:00:00.59",
        local: "CMR",
        away: "BRA",
        position: 'game3',
        group: 'G',
      },
      {
        id: 49,
        stadium: "Khalifa International Stadium",
        date: "2022/12/03 12:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 50,
        stadium: "Ahmad Bin Ali Stadium",
        date: "2022/12/03 16:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 51,
        stadium: "Al Thumama Stadium",
        date: "2022/12/04 12:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 52,
        stadium: "Al Bayt Stadium",
        date: "2022/12/04 16:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 53,
        stadium: "Al Janoub Stadium",
        date: "2022/12/05 12:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 54,
        stadium: "Stadium 974",
        date: "2022/12/05 16:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 55,
        stadium: "Education City Stadium",
        date: "2022/12/06 12:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 56,
        stadium: "Lusail Stadium",
        date: "2022/12/06 16:00:00.59",
        position: 'Octavos de Final',
        group: 'Octavos de Final',
      },
      {
        id: 57,
        stadium: "Education City Stadium",
        date: "2022/12/09 12:00:00.59",
        position: 'Cuartos de Final',
        group: 'Cuartos de Final',
      },
      {
        id: 58,
        stadium: "Lusail Stadium",
        date: "2022/12/09 16:00:00.59",
        position: 'Cuartos de Final',
        group: 'Cuartos de Final',
      },
      {
        id: 59,
        stadium: "Al Thumama Stadium",
        date: "2022/12/10 12:00:00.59",
        position: 'Cuartos de Final',
        group: 'Cuartos de Final',
      },
      {
        id: 60,
        stadium: "Al Bayt Stadium",
        date: "2022/12/10 16:00:00.59",
        position: 'Cuartos de Final',
        group: 'Cuartos de Final',
      },
      {
        id: 61,
        stadium: "Lusail Stadium",
        date: "2022/12/13 16:00:00.59",
        position: 'Semifinales',
        group: 'Semifinales',
      },
      {
        id: 62,
        stadium: "Al Bayt Stadium",
        date: "2022/12/14 16:00:00.59",
        position: 'Semifinales',
        group: 'Semifinales',
      },
      {
        id: 63,
        stadium: "Khalifa International Stadium",
        date: "2022/12/17 12:00:00.59",
        position: 'Final y Tercer Puesto',
        group: 'Final y Tercer Puesto',
      },
      {
        id: 64,
        stadium: "Lusail Stadium",
        date: "2022/12/18 12:00:00.59",
        position: 'Final y Tercer Puesto',
        group: 'Final y Tercer Puesto',
      }
    ]
    try {

        // await Game.bulkCreate(games);
        postGame(games[0].id, games[0].stadium, games[0].date, games[0].position, games[0].group, games[0].local, games[0].away);
        postGame(games[1].id, games[1].stadium, games[1].date, games[1].position, games[1].group, games[1].local, games[1].away);
        postGame(games[2].id, games[2].stadium, games[2].date, games[2].position, games[2].group, games[2].local, games[2].away);
        postGame(games[3].id, games[3].stadium, games[3].date, games[3].position, games[3].group, games[3].local, games[3].away);
        postGame(games[4].id, games[4].stadium, games[4].date, games[4].position, games[4].group, games[4].local, games[4].away);
        postGame(games[5].id, games[5].stadium, games[5].date, games[5].position, games[5].group, games[5].local, games[5].away);
        postGame(games[6].id, games[6].stadium, games[6].date, games[6].position, games[6].group, games[6].local, games[6].away);
        postGame(games[7].id, games[7].stadium, games[7].date, games[7].position, games[7].group, games[7].local, games[7].away);
        postGame(games[8].id, games[8].stadium, games[8].date, games[8].position, games[8].group, games[8].local, games[8].away);
        postGame(games[9].id, games[9].stadium, games[9].date, games[9].position, games[9].group, games[9].local, games[9].away);
        postGame(games[10].id, games[10].stadium, games[10].date, games[10].position, games[10].group, games[10].local, games[10].away);
        postGame(games[11].id, games[11].stadium, games[11].date, games[11].position, games[11].group, games[11].local, games[11].away);
        postGame(games[12].id, games[12].stadium, games[12].date, games[12].position, games[12].group, games[12].local, games[12].away);
        postGame(games[13].id, games[13].stadium, games[13].date, games[13].position, games[13].group, games[13].local, games[13].away);
        postGame(games[14].id, games[14].stadium, games[14].date, games[14].position, games[14].group, games[14].local, games[14].away);
        postGame(games[15].id, games[15].stadium, games[15].date, games[15].position, games[15].group, games[15].local, games[15].away);
        postGame(games[16].id, games[16].stadium, games[16].date, games[16].position, games[16].group, games[16].local, games[16].away);
        postGame(games[17].id, games[17].stadium, games[17].date, games[17].position, games[17].group, games[17].local, games[17].away);
        postGame(games[18].id, games[18].stadium, games[18].date, games[18].position, games[18].group, games[18].local, games[18].away);
        postGame(games[19].id, games[19].stadium, games[19].date, games[19].position, games[19].group, games[19].local, games[19].away);
        postGame(games[20].id, games[20].stadium, games[20].date, games[20].position, games[20].group, games[20].local, games[20].away);
        postGame(games[21].id, games[21].stadium, games[21].date, games[21].position, games[21].group, games[21].local, games[21].away);
        postGame(games[22].id, games[22].stadium, games[22].date, games[22].position, games[22].group, games[22].local, games[22].away);
        postGame(games[23].id, games[23].stadium, games[23].date, games[23].position, games[23].group, games[23].local, games[23].away);
        postGame(games[24].id, games[24].stadium, games[24].date, games[24].position, games[24].group, games[24].local, games[24].away);
        postGame(games[25].id, games[25].stadium, games[25].date, games[25].position, games[25].group, games[25].local, games[25].away);
        postGame(games[26].id, games[26].stadium, games[26].date, games[26].position, games[26].group, games[26].local, games[26].away);
        postGame(games[27].id, games[27].stadium, games[27].date, games[27].position, games[27].group, games[27].local, games[27].away);
        postGame(games[28].id, games[28].stadium, games[28].date, games[28].position, games[28].group, games[28].local, games[28].away);
        postGame(games[29].id, games[29].stadium, games[29].date, games[29].position, games[29].group, games[29].local, games[29].away);
        postGame(games[30].id, games[30].stadium, games[30].date, games[30].position, games[30].group, games[30].local, games[30].away);
        postGame(games[31].id, games[31].stadium, games[31].date, games[31].position, games[31].group, games[31].local, games[31].away);
        postGame(games[32].id, games[32].stadium, games[32].date, games[32].position, games[32].group, games[32].local, games[32].away);
        postGame(games[33].id, games[33].stadium, games[33].date, games[33].position, games[33].group, games[33].local, games[33].away);
        postGame(games[34].id, games[34].stadium, games[34].date, games[34].position, games[34].group, games[34].local, games[34].away);
        postGame(games[35].id, games[35].stadium, games[35].date, games[35].position, games[35].group, games[35].local, games[35].away);
        postGame(games[36].id, games[36].stadium, games[36].date, games[36].position, games[36].group, games[36].local, games[36].away);
        postGame(games[37].id, games[37].stadium, games[37].date, games[37].position, games[37].group, games[37].local, games[37].away);
        postGame(games[38].id, games[38].stadium, games[38].date, games[38].position, games[38].group, games[38].local, games[38].away);
        postGame(games[39].id, games[39].stadium, games[39].date, games[39].position, games[39].group, games[39].local, games[39].away);
        postGame(games[40].id, games[40].stadium, games[40].date, games[40].position, games[40].group, games[40].local, games[40].away);
        postGame(games[41].id, games[41].stadium, games[41].date, games[41].position, games[41].group, games[41].local, games[41].away);
        postGame(games[42].id, games[42].stadium, games[42].date, games[42].position, games[42].group, games[42].local, games[42].away);
        postGame(games[43].id, games[43].stadium, games[43].date, games[43].position, games[43].group, games[43].local, games[43].away);
        postGame(games[44].id, games[44].stadium, games[44].date, games[44].position, games[44].group, games[44].local, games[44].away);
        postGame(games[45].id, games[45].stadium, games[45].date, games[45].position, games[45].group, games[45].local, games[45].away);
        postGame(games[46].id, games[46].stadium, games[46].date, games[46].position, games[46].group, games[46].local, games[46].away);
        postGame(games[47].id, games[47].stadium, games[47].date, games[47].position, games[47].group, games[47].local, games[47].away);
        postGame(games[48].id, games[48].stadium, games[48].date, games[48].position, games[48].group);
        // postGame(games[48].id, games[48].stadium, games[48].date, games[48].position, games[48].local, games[48].away, games[48].group);
        postGame(games[49].id, games[49].stadium, games[49].date, games[49].position, games[49].group);
        postGame(games[50].id, games[50].stadium, games[50].date, games[50].position, games[50].group);
        postGame(games[51].id, games[51].stadium, games[51].date, games[51].position, games[51].group);
        postGame(games[52].id, games[52].stadium, games[52].date, games[52].position, games[52].group);
        postGame(games[53].id, games[53].stadium, games[53].date, games[53].position, games[53].group);
        postGame(games[54].id, games[54].stadium, games[54].date, games[54].position, games[54].group);
        postGame(games[55].id, games[55].stadium, games[55].date, games[55].position, games[55].group);
        postGame(games[56].id, games[56].stadium, games[56].date, games[56].position, games[56].group);
        postGame(games[57].id, games[57].stadium, games[57].date, games[57].position, games[57].group);
        postGame(games[58].id, games[58].stadium, games[58].date, games[58].position, games[58].group);
        postGame(games[59].id, games[59].stadium, games[59].date, games[59].position, games[59].group);
        postGame(games[60].id, games[60].stadium, games[60].date, games[60].position, games[60].group);
        postGame(games[61].id, games[61].stadium, games[61].date, games[61].position, games[61].group);
        postGame(games[62].id, games[62].stadium, games[62].date, games[62].position, games[62].group);
        postGame(games[63].id, games[63].stadium, games[63].date, games[63].position, games[63].group);

        // putGameResult(1, 2, 1);
        // putGameResult(2, 1, 1);
        // putGameResult(3, 3, 1);
        // putGameResult(4, 1, 2);
        // putGameResult(5, 2, 1);
        // putGameResult(6, 1, 1);
        // putGameResult(7, 3, 1);
        // putGameResult(8, 1, 2);
        // putGameResult(9, 2, 1);
        // putGameResult(10, 1, 1);
        // putGameResult(11, 3, 1);
        // putGameResult(12, 1, 2);
        // putGameResult(13, 2, 1);
        // putGameResult(14, 1, 1);
        // putGameResult(15, 3, 1);
        // putGameResult(16, 1, 2);
        // putGameResult(17, 2, 1);
        // putGameResult(18, 1, 1);
        // putGameResult(19, 3, 1);
        // putGameResult(20, 1, 2);
        // putGameResult(21, 2, 1);
        // putGameResult(22, 1, 1);
        // putGameResult(23, 3, 1);
        // putGameResult(24, 1, 2);
        // putGameResult(25, 2, 1);
        // putGameResult(26, 1, 1);
        // putGameResult(27, 3, 1);
        // putGameResult(28, 1, 2);
        // putGameResult(29, 2, 1);
        // putGameResult(30, 1, 1);
        // putGameResult(31, 3, 1);
        // putGameResult(32, 1, 2);
        // putGameResult(33, 2, 1);
        // putGameResult(34, 1, 1);
        // putGameResult(35, 3, 1);
        // putGameResult(36, 1, 2);
        // putGameResult(37, 2, 1);
        // putGameResult(38, 1, 1);
        // putGameResult(39, 3, 1);
        // putGameResult(40, 1, 2);
        // putGameResult(41, 2, 1);
        // putGameResult(42, 1, 1);
        // putGameResult(43, 3, 1);
        // putGameResult(44, 1, 2);
        // putGameResult(45, 2, 1);
        // putGameResult(46, 1, 1);
        // putGameResult(47, 3, 1);
        

    
        console.log("DB Games populated correctly");
      } catch (error) {
        console.log(error.message);
      }
}

module.exports = {
    postGame,
    putGame,
    putLocalTeamGame,
    putAwayTeamGame,
    putGameResult,
    getAllGames,
    getGroupGames,
    getGameById,
    populateGames
}
