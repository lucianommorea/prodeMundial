const {Team, User, Game} = require('../db');
const {Op} = require('sequelize');
const { paginate } = require('./generalControllers');

async function getAllUsers(){

    try {
        let allUsers = await User.findAll()

        return allUsers
    }
    
    catch (error){
        console.log('Error in getAllUsers', error)
    }
}

async function getUsersRanking(){

    try {
        let allUsers = await User.findAll({
            order: [
                ['totalPoints', 'DESC'],
                ['name', 'DESC'],
            ],     
        })

        allUsers.forEach((e, i) => e.myPosition =  i + 1)

        return allUsers
    }
    
    catch (error){
        console.log('Error in getAllUsers', error)
    }
}

const getTopFive = async (req, res, next)=>{
    
    try {
        const topFive = await User.findAll({
            where:{
                statusDeleted: false,
                statusBanned: false
            },
            order: [
                ['totalPoints', 'DESC'],
                ['name', 'DESC'],
            ],
            limit: 5
        })
        
        topFive.forEach((e, i) => e.dataValues.myPosition = i + 1)

        res.send (topFive)

    } catch (error) {
        next(error)
    }
}

const getUsers = async (req, res, next) =>{
    
    const { page, limit, admin, all, search} = req.query
    
    try {
        let condition = all === "true" ? {} : {
            statusDeleted: false,
            statusBanned: false
        }

        if (admin === "true") {
            condition = {
                ...condition,
                statusAdmin: true
            }
        }

        if (admin === "false") {
            condition = {
                ...condition,
                statusAdmin: false
            }
        }

        if (search) {
            condition = {
                ...condition,
                email: {[Op.iLike]: `%${search}%`}
            }
        }

        const allUsers = await User.findAll({
            where: condition,
            order: ['name'],
        })

        res.send (paginate(parseInt(limit), parseInt(page), allUsers))

    } catch (error) {
        next(error)
    }
 }


async function updatePoints(user, idGame, localGoals, awayGoals) {
            let prevPoints = user.points[idGame-1]
            if(prevPoints === undefined) prevPoints = 0;
            if (user.userResults[idGame-1][0] === null || user.userResults[idGame-1][1] === null) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = null;
                await user.update({points: newPoints}) 
            }
            else if (localGoals === null || awayGoals === null) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = null;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
            }
            else if (parseInt(localGoals) === user.userResults[idGame-1][0] && parseInt(awayGoals) === user.userResults[idGame-1][1]) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 5;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 5)}) 
                return
            }
            else if (localGoals > awayGoals && user.userResults[idGame-1][0] > user.userResults[idGame-1][1]) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 3;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 3)}) 
            }
            else if (localGoals === awayGoals && user.userResults[idGame-1][0] === user.userResults[idGame-1][1]) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 3;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 3)}) 
            } 
            else if (localGoals < awayGoals && user.userResults[idGame-1][0] < user.userResults[idGame-1][1]){
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 3;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 3)}) 
            } 
            else {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 0;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
            }
}

async function putUsersPoints(idGame, localGoals, awayGoals) {
    
    try {
        const users = await User.findAll() 

        for(let i = 0; i < users.length; i++) {
            await updatePoints(users[i], idGame, localGoals, awayGoals)
        }

        await getUsersRanking()
        
        return users

    } catch (error) {
        console.log('error in putUsersPoints', error)
    }
}

async function updatePointsChampion(user, champion) {
    let prevPoints = user.points[64];
    let pointsTotal = user.totalPoints;
    if(prevPoints === undefined) prevPoints = 0;
    if(user.first === null || user.first.toLowerCase() !== champion.toLowerCase()) {
        let newPoints = [...user.points];   
        newPoints[64] = 0;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
    }
    if(user.first.toLowerCase() === champion.toLowerCase()){
        let newPoints = [...user.points];   
        newPoints[64] = 15;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 15)}) 
    }
};

async function putUsersChampions(champion) {
    
    try {
        const users = await User.findAll() 
        for(let i = 0; i < users.length; i++) {
            await updatePointsChampion(users[i], champion)
        }
        await getUsersRanking();     
        return users

    } catch (error) {
        console.log('error in putUsersChampions', error)
    }
};

async function updatePointsSecond(user, second) {
    let prevPoints = user.points[65];
    let pointsTotal = user.totalPoints;
    if(prevPoints === undefined) prevPoints = 0;
    if(user.second === null || user.second.toLowerCase() !== second.toLowerCase()) {
        let newPoints = [...user.points];   
        newPoints[65] = 0;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
    }
    if(user.second.toLowerCase() === second.toLowerCase()){
        let newPoints = [...user.points];   
        newPoints[65] = 10;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 10)}) 
    }
};

async function putUsersSecond(second) {
    
    try {
        const users = await User.findAll() 
        for(let i = 0; i < users.length; i++) {
            await updatePointsSecond(users[i], second)
        }
        await getUsersRanking();     
        return users

    } catch (error) {
        console.log('error in putUsersSecond', error)
    }
};

async function updatePointsThird(user, third) {
    let prevPoints = user.points[66];
    let pointsTotal = user.totalPoints;
    if(prevPoints === undefined) prevPoints = 0;
    if(user.third === null || user.third.toLowerCase() !== third.toLowerCase()) {
        let newPoints = [...user.points];   
        newPoints[66] = 0;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
    }
    if(user.third.toLowerCase() === third.toLowerCase()){
        let newPoints = [...user.points];   
        newPoints[66] = 5;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 5)}) 
    }
};

async function putUsersThird(third) {
    
    try {
        const users = await User.findAll() 
        for(let i = 0; i < users.length; i++) {
            await updatePointsThird(users[i], third)
        }
        await getUsersRanking();     
        return users

    } catch (error) {
        console.log('error in putUsersThird', error)
    }
};

async function updatePointsBestPlayer(user, bestPlayer) {
    let prevPoints = user.points[67];
    let pointsTotal = user.totalPoints;
    if(prevPoints === undefined) prevPoints = 0;
    if(user.bestPlayer === null || user.bestPlayer.toLowerCase() !== bestPlayer.toLowerCase()) {
        let newPoints = [...user.points];   
        newPoints[67] = 0;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
    }
    if(user.bestPlayer.toLowerCase() === bestPlayer.toLowerCase()){
        let newPoints = [...user.points];   
        newPoints[67] = 10;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 10)}) 
    }
};

async function putUsersBestPlayer(bestPlayer) {
    
    try {
        const users = await User.findAll() 
        for(let i = 0; i < users.length; i++) {
            await updatePointsBestPlayer(users[i], bestPlayer)
        }
        await getUsersRanking();     
        return users

    } catch (error) {
        console.log('error in putUsersBestPlayer', error)
    }
};

async function updatePointsOctavos(user, position, team) {
    position = Number(position)
    let prevPoints = user.points[67+position];
    let pointsTotal = user.totalPoints;
    let team2 = team !== null ? team.toString().toLowerCase() : null
    if(prevPoints === undefined) prevPoints = 0;
    if(user.octavos[position-1] === null || team2 === null || user.octavos[position-1].toLowerCase() !== team2.toLowerCase()) {
        let newPoints = [...user.points];   
        newPoints[67+position] = 0;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints)}) 
    }
    if((user.octavos[position-1]?.toLowerCase() === team2.toLowerCase() || user.octavos[position]?.toLowerCase() === team2.toLowerCase() || user.octavos[position-2]?.toLowerCase() === team2.toLowerCase()) && team2 !== null){
        let newPoints = [...user.points];   
        newPoints[67+position] = 4;
        await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 4)}) 
    }
};

async function putUsersOctavos(position, team) {
    
    try {
        const users = await User.findAll() 
        for(let i = 0; i < users.length; i++) {
            await updatePointsOctavos(users[i], position, team)
        }
        await getUsersRanking();     
        return users

    } catch (error) {
        console.log('error in putUsersOctavos', error)
    }
};

module.exports = {
    getAllUsers,
    getUsersRanking,
    getTopFive,
    getUsers,
    putUsersPoints,
    putUsersChampions,
    putUsersSecond,
    putUsersThird,
    putUsersBestPlayer,
    putUsersOctavos
}