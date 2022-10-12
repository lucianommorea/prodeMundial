const { Router } = require('express');
const { getUserById, postUser, putUserInfo, putUserResult, putUserOctavos } = require('../controllers/userControllers');


const router = Router()


// router.post('/', async function (req, res){
//     const {sub, name, nickname, email, picture} = req.body;
//     if (!sub || !name || !nickname || !email || !picture) {
//         res.status(404).send({error: "Parameters needed to create user were not received"})
//     }
    
//     try {
//         let newUser = await postUser(sub, name, nickname, email, picture)
//         res.status(200).send(newUser)
//     } 
//     catch (error) {
//         console.log('Error postGameRoute', error)
//     }
// })

router.post('/', postUser)

router.put('/:sub', putUserInfo)

router.put('/result/:sub', async function (req, res){
    const {sub} = req.params;
    const {idGame, localGoals, awayGoals} = req.body;
    if (!sub || !idGame) {
        res.status(404).send({error: "Parameters needed to modify user were not received"})
    }
    
    try {
        let changeUser = await putUserResult(sub, idGame, localGoals, awayGoals)
        res.status(200).send(changeUser)
    } 
    catch (error) {
        console.log('Error putUserResultRoute', error)
    }
})

router.put('/octavos/:sub', async function (req, res){
    const {sub} = req.params;
    const {position, team} = req.body;
    if (!position) {
        res.status(404).send({error: "Parameters needed to modify userOctavos were not received"})
    }
    if (position > 16){
        res.status(404).send({error: "Position cannot be greatest than 16"})
    }
    
    try {
        let changeUserOctavos = await putUserOctavos(sub, position, team)
        res.status(200).send(changeUserOctavos)
    } 
    catch (error) {
        console.log('Error putUserOctavosRoute', error)
    }
})


router.get('/:sub', async function(req,res){
    const {sub} = req.params;
    try {
       let userSub = await getUserById(sub)
       if(userSub) res.status(200).send(userSub)
       else res.status(404).send('User not found')
    } catch (error) {
        console.log('Error in getUserByIdRoute', error)
    }
})

module.exports = router
