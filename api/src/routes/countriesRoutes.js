const { Router } = require('express');
const { getAllCountries, getCountryByName } = require('../controllers/countriesControllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get("/", async function(req, res){
    const {name} = req.query
    try {
        if(name){
            const nameCountries = await getCountryByName(name)
            if(nameCountries.length !== 0){
                res.status(200).send(nameCountries)
            }
            else{
                res.status(404).send('Countries not found')
            }
        }
        else{
            const allCountries = await getAllCountries()
            if(allCountries){
                res.status(200).send(allCountries)         
            }
            else{
                res.status(404).send('Countries not found')
            }
        }
    } catch (error) {
        console.log('Error getCountries', error)
    }
});



module.exports = router