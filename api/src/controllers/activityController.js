const {Country, Activity} = require('../db');

async function postActivity(name, difficult, duration, season, countries) {
  
        try {
            const newActivity = await Activity.create({
                name,
                difficult,
                duration, 
                season
            })
            let countriesSelect = await Country.findAll({
                where: {
                    name: countries
                }
            })
            return newActivity.addCountry(countriesSelect)
        }
        catch (error) {
            console.log('Error postActivity', error)
        }
    }


async function getAllActivities() {    
   try{
        let activities = await Activity.findAll({
            include: [Country]
        })
        return activities
    }
    catch(error) {
        console.log('Error en getAllActivities', error)
    }
}


module.exports = {
    postActivity,
    getAllActivities,
}
