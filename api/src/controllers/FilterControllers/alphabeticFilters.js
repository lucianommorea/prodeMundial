const {Country, Activity} = require('../../db');
// const {Op} = require('sequelize')


async function getDescCountries(){
  
    try{
        let countriesDesc = await Country.findAll({
            order: [['name', 'DESC']],
            include: [Activity]
        });
        
        return countriesDesc;
    } 
    catch (error){
        console.log('Error en getDescCountries', error)
    }
}

async function getAscCountries(){

    try{
        let countriesAsc = await Country.findAll({
            order: [['name', 'ASC']],
            include: [Activity]
        });
        
        return countriesAsc;
    } 
    catch (error){
        console.log('Error en getAscCountries', error)
    }
}

module.exports = {
    getAscCountries,
    getDescCountries
}