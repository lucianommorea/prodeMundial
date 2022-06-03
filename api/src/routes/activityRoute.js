const { Router } = require('express');
const { postActivity, getAllActivities } = require('../controllers/activityController')
const { Country } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


router.post('/', async function (req, res){
    const {name, difficult, duration, season, countries} = req.body;
    if (!name || !difficult || !duration || !season || !countries) {
        res.status(404).send({error: "No se recibieron los parámetros necesarios para crear la actividad"})
    }
    let countriesSelect = await Country.findAll({
        where: {
            name: countries
        }
    })
    if(countriesSelect.length === 0) res.status(404).send({error: "No existe ese pais"})
    try {
        let newActivity = await postActivity(name, difficult, duration, season, countries)
        res.status(200).send(newActivity)
    } 
    catch (error) {
        console.log('Error postActivity', error)
    }
})

router.get('/', async (req,res) => {
    try {
        let getActivities = await getAllActivities()
        res.status(200).send(getActivities)
    } catch (error) {
        console.log('Error getActivities' + error)
    }
})
module.exports = router