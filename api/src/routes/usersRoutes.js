const { Router } = require('express');
const { paginate } = require('../controllers/generalControllers');
const { getAllUsers, getUsersRanking, putUsersPoints, getTopFive, getUsers } = require('../controllers/usersControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get("/", async function(req, res){
    try {
            const allUsers = await getUsersRanking()
            if(allUsers){
                res.status(200).send(allUsers)         
            }
            else{
                res.status(404).send('Users not found')
            }
    } catch (error) {
        console.log('Error getAllUsersRoute', error)
    }
});

router.get("/all", getUsers)

router.get("/ranking", async function(req, res){

    const { page, limit } = req.query 

    try {
            const allUsersRanking = await getUsersRanking()
            if(allUsersRanking){
                res.status(200).send(paginate(parseInt(limit), parseInt(page), allUsersRanking))    
            }
            else{
                res.status(404).send('Users not found')
            }
    } catch (error) {
        console.log('Error getAllUsersRoute', error)
    }
});

router.get("/allRanking", async function(req, res){

    try {
            const allUsersRanking = await getUsersRanking()
            if(allUsersRanking){
                res.status(200).send(allUsersRanking)    
            }
            else{
                res.status(404).send('Users not found')
            }
    } catch (error) {
        console.log('Error getAllUsersRoute', error)
    }
});

router.get("/topFive", getTopFive)

router.put("/", async function(req, res){
    const {idGame, localGoals, awayGoals} = req.body
    try {
            const allUsers = await putUsersPoints(idGame, localGoals, awayGoals)
            if(allUsers){
                res.status(200).send(allUsers)         
            }
            else{
                res.status(404).send('Users not found')
            }
    } catch (error) {
        console.log('Error putAllUsersRoute', error)
    }
});



module.exports = router