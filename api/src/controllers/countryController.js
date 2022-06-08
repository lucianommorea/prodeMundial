const {Country, Activity} = require('../db');


async function getCountryById(id) {
    try {
        id= id.toUpperCase();
        let countryFound = await Country.findByPk(id, {
            include: [Activity]
        })
        return countryFound
    } catch (error) {
        console.log('Error in getCountryById', error)
    }
}

module.exports = {
    getCountryById
}