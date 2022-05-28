const {Country, Activity} = require('../db');

async function postActivity(name, difficult, duration, season, countries) {
  
        try {
            let countriesSelect = await Country.findAll({
                where: {
                    name: countries
                }
            })
            const newActivity = await Activity.create({
                name,
                difficult,
                duration, 
                season
            })
            return newActivity.addCountry(countriesSelect)
        }
        catch (error) {
            console.log('Error postActivity', error)
        }
    }


// async function getAllActivities() {
//     try{
   
//     }
//     catch(error) {
//     }
// }

module.exports = {
    postActivity
}
