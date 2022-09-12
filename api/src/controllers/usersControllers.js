const {Team, User, Game} = require('../db');
// const {Op} = require('sequelize')

async function getAllUsers(){

    try {
        let allUsers = await User.findAll()

        return allUsers
    }
    
    catch (error){
        console.log('Error in getAllUsers', error)
    }
}


async function updatePoints(user, idGame, localGoals, awayGoals) {
            let prevPoints = user.points[idGame-1]
            if(prevPoints === undefined) prevPoints = 0;
            if (user.userResults[idGame-1][0] === null || user.userResults[idGame-1][1] === null) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 0;
                await user.update({points: newPoints}) 
            }
            else if (localGoals === user.userResults[idGame-1][0] && awayGoals === user.userResults[idGame-1][1]) {
                let newPoints = [...user.points];   
                newPoints[idGame-1] = 5;
                let pointsTotal = user.totalPoints
                await user.update({points: newPoints, totalPoints: (pointsTotal - prevPoints + 5)}) 
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
            updatePoints(users[i], idGame, localGoals, awayGoals)
        }
        
        return users

    } catch (error) {
        console.log('error in putUsersPoints', error)
    }
}

module.exports = {
    getAllUsers,
    putUsersPoints
}