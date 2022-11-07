const { Router } = require('express');
const { putUsersChampions, putUsersSecond, putUsersThird, putUsersBestPlayer, putUsersOctavos } = require('../controllers/usersControllers');
const { getWorldCup, putChampion, putSecond, putThird, putBestPlayer, putOctavosTeam } = require('../controllers/worldcupControllers');

// const { Game, Team } = require('../db');
// Importar todos los routers;


const router = Router();


router.put('/first', async (req,res) => {
    const {first} = req.body
    try {
        let worldCup = await putChampion(1, first);
        await putUsersChampions(first);
        res.status(200).send(worldCup);

    } catch (error) {
        console.log('Error putChampionRoute' + error)
    }
});

router.put('/second', async (req,res) => {
    const {second} = req.body
    try {
        let worldCup = await putSecond(1, second);
        await putUsersSecond(second);
        res.status(200).send(worldCup);

    } catch (error) {
        console.log('Error putSecondRoute' + error)
    }
});

router.put('/third', async (req,res) => {
    const {third} = req.body
    try {
        let worldCup = await putThird(1, third);
        await putUsersThird(third);
        res.status(200).send(worldCup);

    } catch (error) {
        console.log('Error putThirdRoute' + error)
    }
});

router.put('/bestplayer', async (req,res) => {
    const {bestPlayer} = req.body
    try {
        let worldCup = await putBestPlayer(1, bestPlayer);
        await putUsersBestPlayer(bestPlayer);
        res.status(200).send(worldCup);

    } catch (error) {
        console.log('Error putBestPlayerRoute' + error)
    }
});

// router.put('/octavos/:position', async (req,res) => {
//     const {position} = req.params
//     const {team, team2} = req.body
//     try {
//         if(position > 16){
//             res.status(404).send({error: "Position cannot be greatest than 16"})
//         }
//         let worldCup = await putOctavosTeam(1, position, team, team2);
//         // await putUsersOctavos(position, team, team2);
//         res.status(200).send(worldCup)

//     } catch (error) {
//         console.log('Error putOctavosRoute' + error)
//     }
// })

router.get("/", async function(req, res){
    try {
        const worldCup = await getWorldCup(1);
        res.status(200).send(worldCup);
    }
    catch (error) {
        console.log('Error getWorldCupRoute', error)
    }
});



module.exports = router