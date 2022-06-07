const {Country, Activity} = require('../../db');

async function getContinentCountries(cont){

    try{
        let continentCountries = await Country.findAll({
            where: {continents: cont},
            include: [Activity]
        });
        
        return continentCountries;
    } 
    catch (error){
        console.log('Error en getContinentCountries', error)
    }
}

module.exports = {
    getContinentCountries
}
