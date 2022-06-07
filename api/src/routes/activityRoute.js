const { Router } = require('express');
const { postActivity, getAllActivities, getActivityByName } = require('../controllers/activityController')
const { Country, Activity } = require('../db');
// const Activity = require('../models/Activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


router.post('/', async function (req, res){
    const {name, difficult, duration, season, countries} = req.body;
    if (!name || !difficult || !duration || !season || !countries) {
        res.status(404).send({error: "Parameters needed to create the activity were not received"})
    }

    let nameExists = await Activity.findOne({
        where: {
            name: name
        }
    })
    if(nameExists) res.status(404).send({error: "That activity already exists"})
    if(difficult !== '1' && difficult !== '2' && difficult !== '3' && difficult !== '4' && difficult !== '5') res.status(404).send({error: "Difficult must be a number between 1 and 5"})
    if(isNaN(duration)) res.status(404).send({error: "Duration must be a number"})
    if(season !== 'Summer' && season !== 'Autumn' && season !== 'Winter' && season !== 'Spring') res.status(404).send({error: "That's not an existing season"})
    let countriesSelect = await Country.findAll({
        where: {
            name: countries
        }
    })
    if(countriesSelect.length === 0) res.status(404).send({error: "That country does not exist"})
    try {
        let newActivity = await postActivity(name, difficult, duration, season, countries)
        res.status(200).send(newActivity)
    } 
    catch (error) {
        console.log('Error postActivity', error)
    }
})

router.get('/', async (req,res) => {
    const {name} = req.query
    try {
        if(name){
            const nameActivity = await getActivityByName(name)
            if(nameActivity){
                res.status(200).send(nameActivity)
            }
            else{
                res.status(404).send('Activity not found')
            }
        }
        else{
        let getActivities = await getAllActivities()
        res.status(200).send(getActivities)
        }
    } catch (error) {
        console.log('Error getActivities' + error)
    }
})




module.exports = router