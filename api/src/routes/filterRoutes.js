const { Router } = require('express');
const { getDescCountries, getAscCountries} = require('../controllers/FilterControllers/alphabeticFilters')
const { getAscPopulation, getDescPopulation} = require('../controllers/FilterControllers/populationControllers')
const { getContinentCountries } = require('../controllers/FilterControllers/continentsController')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/desc", async function(req, res){
    try {
        const desc = await getDescCountries();
        res.status(200).send(desc);
    }
    catch (error) {
        console.log('Error descRoutes', error)
    }
});

router.get("/asc", async function(req, res){
    try {
        const asc = await getAscCountries();
        res.status(200).send(asc);
    }
    catch (error) {
        console.log('Error ascRoutes', error)
    }
});

router.get("/populationdesc", async function(req, res){
    try {
        const desc = await getDescPopulation();
        res.status(200).send(desc);
    }
    catch (error) {
        console.log('Error popDescRoutes', error)
    }
});

router.get("/populationasc", async function(req, res){
    try {
        const asc = await getAscPopulation();
        res.status(200).send(asc);
    }
    catch (error) {
        console.log('Error popAscRoutes', error)
    }
});

router.get("/:continents", async function(req, res){

    const {continents} = req.params
    try {
        const continentCountries = await getContinentCountries(continents);
        res.status(200).send(continentCountries);
    }
    catch (error) {
        console.log('Error continents', error)
    }
});


module.exports = router