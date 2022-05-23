const axios = require('axios');
const {Country, Activity} = require('../db');
const {Op} = require('sequelize')

async function getAllCountries(){
    try{
            let countries = (await axios('https://restcountries.com/v3.1/all')).data.map(country=> ({
                id: country.cca3,
                name: country.name.common,
                img: country.flags.png,
                continents: country.continents[0],
                capital: country.capital ? country.capital[0] : 'Undefined capital city',
                subregion: country.subregion ? country.subregion : 'Undefined Subregion',
                area: country.area,
                population: country.population
        }))

        await Country.bulkCreate(countries);  
        console.log("Countries cargados en DB correctamente")
    } 
    catch (error){
        console.log('Error en getAllCountries', error)
    }
}

async function getAllCountriesFromDB() {
    try{
        let countriesDB = await Country.findAll({
            include: [Activity]
        })
        return countriesDB
    }
    catch(error) {
       console.log('Error en getAllCountriesFromDB', error)
    }
}

async function getCountryByName(name) {
    try {
        const countryName = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${name}%`
                }
            }
        }) 
        return countryName
    } catch (error) {
        console.log('error en getCountryByName', error)
    }
}

module.exports = {
    getAllCountries,
    getAllCountriesFromDB,
    getCountryByName
}