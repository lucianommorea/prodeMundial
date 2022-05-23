const {Country, Activity} = require('../../db');
const {Op} = require('sequelize')


async function getDescPopulation(){
  
    try{
        let populationDesc = await Country.findAll({
            order: [['population', 'DESC']],
            include: [Activity]
        });
        
        return populationDesc
    } 
    catch (error){
        console.log('Error en getDescPopulation', error)
    }
}

async function getAscPopulation(){

    try{
        let populationAsc = await Country.findAll({
            order: [['population', 'ASC']],
            include: [Activity]
        });
        
        return populationAsc
    } 
    catch (error){
        console.log('Error en getAscPopulation', error)
    }
}


module.exports = {
    getDescPopulation,
    getAscPopulation
}