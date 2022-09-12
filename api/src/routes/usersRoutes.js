const { Router } = require('express');
const { getAllUsers } = require('../controllers/usersControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get("/", async function(req, res){
    try {
            const allUsers = await getAllUsers()
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