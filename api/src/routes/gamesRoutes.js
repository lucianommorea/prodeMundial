const { Router } = require('express');
const { postGame, putGame, putLocalTeamGame, putAwayTeamGame, putGameResult, getAllGames, getGameById, getGroupGames } = require('../controllers/gamesControllers')
// const { Game, Team } = require('../db');
// // const Activity = require('../models/Activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


router.post('/', async function (req, res){
    const {id, stadium, date, local, away, position, group} = req.body;
    if (!id || !stadium || !date || position) {
        res.status(404).send({error: "Parameters needed to create the game were not received"})
    }
    
    try {
        let newGame = await postGame(id, stadium, date, position, group, local, away)
        res.status(200).send(newGame)
    } 
    catch (error) {
        console.log('Error postGame', error)
    }
})

router.put('/teams/:id', async (req,res) => {
    const {id} = req.params
    const {local, away} = req.body
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
        let setTeamsGame = await putGame(id, local, away)
        res.status(200).send(setTeamsGame)
        // }
    } catch (error) {
        console.log('Error putGame' + error)
    }
})

router.put('/local/:id', async (req,res) => {
    const {id} = req.params
    const {local} = req.body
    try {
        let setLocalTeamGame = await putLocalTeamGame(id, local)
        res.status(200).send(setLocalTeamGame)
        // }
    } catch (error) {
        console.log('Error putGameLocal' + error)
    }
})

router.put('/away/:id', async (req,res) => {
    const {id} = req.params
    const {away} = req.body
    try {
        let setAwayTeamGame = await putAwayTeamGame(id, away)
        res.status(200).send(setAwayTeamGame)
        // }
    } catch (error) {
        console.log('Error putGameAway' + error)
    }
})

router.put('/result', async (req,res) => {
    const {id, localResult, awayResult} = req.body
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
        let putGameResultado = await putGameResult(id, localResult, awayResult)
        res.status(200).send(putGameResultado)
        // }
    } catch (error) {
        console.log('Error putGameResult' + error)
    }
})


router.get('/', async (req,res) => {
    const {id} = req.query
    try {
        if(id){
            const idGame = await getGameById(id)
            if(idGame){
                res.status(200).send(idGame)
            }
            else{
                res.status(404).send('Game not found')
            }
        }
        else{
        let getGames = await getAllGames()
        res.status(200).send(getGames)
        }
    } catch (error) {
        console.log('Error getGames' + error)
    }
})

router.get('/group/:group', async (req,res) => {
    const {group} = req.params
    try {
        if(group){
            const groupGames = await getGroupGames(group)
            if(groupGames){
                res.status(200).send(groupGames)
            }
            else{
                res.status(404).send('Games not found')
            }
        }
        else{
            res.status(404).send('Games not found')
        }
    } catch (error) {
        console.log('Error getGames' + error)
    }
})



module.exports = router