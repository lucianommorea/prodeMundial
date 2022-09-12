const { Router } = require('express');
const { postTeam, putTeam, getAllTeams, getTeamById, getTeamsBygroup} = require('../controllers/teamsControllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post('/', async function (req, res){
    const {id, name, img, group} = req.body;
    if (!id || !name || !img || !group ) {
        res.status(404).send({error: "Parameters needed to create the team were not received"})
    }
    try {
        let newTeam = await postTeam(id, name, img, group)
        res.status(200).send(newTeam)
    } 
    catch (error) {
        console.log('Error postGameRoute', error)
    }
})

router.get("/", async function(req, res){
    try {
        const teams = await getAllTeams();
        res.status(200).send(teams);
    }
    catch (error) {
        console.log('Error getAllTeamsRoute', error)
    }
});

router.get("/team/:id", async function(req, res){
    const {id} = req.params
    try {
        const team = await getTeamById(id);
        res.status(200).send(team);
    }
    catch (error) {
        console.log('Error getTeamByIdRoutes', error)
    }
});

router.get("/group/:group", async function(req, res){
    const {group} = req.params
    try {
        const groupsTeam = await getTeamsBygroup(group);
        res.status(200).send(groupsTeam);
    }
    catch (error) {
        console.log('Error getTeamsBygroupRoutes', error)
    }
});

router.put('/team/:id', async (req,res) => {
    const {id} = req.params
    // const {goalsFA, goalsCO} = req.query
    const {goalsFA, goalsCO} = req.body
    try {
        // if(name){
        //     const nameActivity = await getActivityByName(name)
        //     if(nameActivity){
        //         res.status(200).send(nameActivity)
        //     }
        //     else{
        //         res.status(404).send('Activity not found')
        //     }
        // }
        // else{
        let putGoalsTeam = await putTeam(id, goalsFA, goalsCO)
        res.status(200).send(putGoalsTeam)
        // }
    } catch (error) {
        console.log('Error putTeamRoute' + error)
    }
})


module.exports = router