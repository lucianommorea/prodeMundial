const {Worldcup} = require('../db');
const { putUsersOctavos } = require('./usersControllers');


async function postWorldCup(id) {
    
        try {
            const newWorldCup = await Worldcup.create({
                id
            })
            return newWorldCup
        }
        catch (error) {
            console.log('Error postWorldCup', error)
        }
}

async function putChampion(id, champion) {
  
    try {
        const updatedWorldCup = await Worldcup.findOne({
          where: {
              id: id
          }
        });
        await updatedWorldCup.update({first: champion}); 
        return updatedWorldCup;
    }
    catch (error) {
        console.log('Error putChampion', error)
    }
}

async function putSecond(id, second) {
  
    try {
        const updatedWorldCup = await Worldcup.findOne({
          where: {
              id: id
          }
        });
        await updatedWorldCup.update({second: second}); 
        return updatedWorldCup;
    }
    catch (error) {
        console.log('Error putSecond', error)
    }
}

async function putThird(id, third) {
  
    try {
        const updatedWorldCup = await Worldcup.findOne({
          where: {
              id: id
          }
        });
        await updatedWorldCup.update({third: third}); 
        return updatedWorldCup;
    }
    catch (error) {
        console.log('Error putThird', error)
    }
}

async function putBestPlayer(id, bestPlayer) {
  
    try {
        const updatedWorldCup = await Worldcup.findOne({
          where: {
              id: id
          }
        });
        await updatedWorldCup.update({bestPlayer: bestPlayer}); 
        return updatedWorldCup;
    }
    catch (error) {
        console.log('Error putBestPlayer', error)
    }
}

async function putOctavosTeam(id, position, team, team2) {
  
    try {
        const updatedWorldCup = await Worldcup.findOne({
          where: {
              id: id
          }
        });
        let newOctavos = [...updatedWorldCup.octavos];
        newOctavos[position-1] = team
        newOctavos[position] = team2
        // if(team === null) {
        //     newOctavos[position] = team
        // }
        await updatedWorldCup.update({octavos: newOctavos}); 
        await putUsersOctavos(position, team, team2);
        return updatedWorldCup;
    }
    catch (error) {
        console.log('Error putOctavosTeam', error)
    }
}

async function getWorldCup(id){

    try {
        let worldCup = await Worldcup.findOne({
            where: {
                id: id
            }
          });

        return worldCup
    }
    
    catch (error){
        console.log('Error in getWorldCup', error)
    }
}


const createWC = async () => {

    try {
        await postWorldCup(1);
        console.log("WorldCup created");
      } catch (error) {
        console.log(error.message);
      }
}


module.exports = {
    postWorldCup,
    putChampion,
    putSecond,
    putThird,
    putBestPlayer,
    putOctavosTeam,
    getWorldCup,
    createWC
}