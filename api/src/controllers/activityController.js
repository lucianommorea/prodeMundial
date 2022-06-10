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
        console.log('Error in getAllActivities', error)
    }
}


function getActivityByName(name) {
    try{
        const activityName = Activity.findOne({  
            where: {
                name: name
            },
            include: [Country]          
        }) 
        return activityName
    } catch (error) {
            console.log('Error in getActivityByName', error)
    }
    

    
}


module.exports = {
    postActivity,
    getAllActivities,
    getActivityByName
}
