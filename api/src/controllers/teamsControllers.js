const {Game, Team} = require('../db');
// const {Op} = require('sequelize')
const axios = require('axios');


async function postTeam(id, name, img, group) {
  
    try {
        const newTeam = await Team.create({
            id,
            name,
            img,
            group
        })
        return newTeam
    }
    catch (error) {
        console.log('Error postTeam', error)
    }
}

async function updateGoals(id){
    const team = await Team.findByPk(id)

    team.update({difGoals: team.goalsF - team.goalsC})
}

async function putTeam(id, goalsFA, goalsCO, position) {
  
    try {
        const team = await Team.findByPk(id)
        if(goalsFA !== null) goalsFA = parseInt(goalsFA)
        if(goalsCO !== null) goalsCO = parseInt(goalsCO)
        
        // if (goalsFA === '' && typeof goalsCO === 'number') return
        // if (goalsCO === '' && typeof goalsFA === 'number') return
        if (goalsFA === null && goalsCO === null) {
            if (team[position][0] === null) {
                return 
            }
            if (team[position][0] > team[position][1]) {
                return (team.update({
                    totalGames: team.totalGames - 1,
                    wins: team.wins - 1, 
                    points: team.points - 3,
                    goalsF: team.goalsF - team[position][0],
                    goalsC: team.goalsC - team[position][1],
                    [position]: null})
                )}
            if (team[position][0] < team[position][1]) {
                return (team.update({
                    totalGames: team.totalGames - 1,
                    loses: team.loses - 1, 
                    goalsF: team.goalsF - team[position][0],
                    goalsC: team.goalsC - team[position][1],
                    [position]: null})
                )}    
            if (team[position][0] === team[position][1]) {
                return (team.update({
                    totalGames: team.totalGames - 1,
                    draws: team.draws - 1,
                    points: team.points - 1,
                    goalsF: team.goalsF - team[position][0],
                    goalsC: team.goalsC - team[position][1],
                    [position]: null})
                )}    
        }
        if (goalsFA === goalsCO) {
            if (team[position] === null) {
                return (team.update({
                    totalGames: team.totalGames + 1,
                    draws: team.draws + 1, 
                    points: team.points + 1,
                    goalsF: team.goalsF + goalsFA,
                    goalsC: team.goalsC + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] > team[position][1]) {
                return (team.update({
                    wins: team.wins - 1, 
                    draws: team.draws + 1,
                    points: team.points -2,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] < team[position][1]) {
                return (team.update({
                    loses: team.loses - 1, 
                    draws: team.draws + 1,
                    points: team.points + 1,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}    
            if (team[position][0] === team[position][1]) {
                return (team.update({
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}    
        }
        if (goalsFA > goalsCO) {
            if (team[position] === null) {
                return (team.update({
                    totalGames: team.totalGames + 1,
                    wins: team.wins + 1, 
                    points: team.points + 3,
                    goalsF: team.goalsF + goalsFA,
                    goalsC: team.goalsC + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] > team[position][1]) {
                return (team.update({
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] < team[position][1]) {
                return (team.update({
                    loses: team.loses - 1, 
                    wins: team.wins + 1,
                    points: team.points + 3,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}    
            if (team[position][0] === team[position][1]) {
                return (team.update({
                    draws: team.draws - 1, 
                    wins: team.wins + 1,
                    points: team.points + 2,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}    
        }
        if (goalsFA < goalsCO) {
            if (team[position] === null) {
                return (team.update({
                    totalGames: team.totalGames + 1,
                    loses: team.loses + 1, 
                    goalsF: team.goalsF + goalsFA,
                    goalsC: team.goalsC + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] > team[position][1]) {
                return (team.update({
                    loses: team.loses + 1, 
                    wins: team.wins - 1,
                    points: team.points - 3,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}
            if (team[position][0] < team[position][1]) {
                return (team.update({
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO, 
                    [position]: [goalsFA, goalsCO]})
                )}   
            if (team[position][0] === team[position][1]) {
                return (team.update({
                    draws: team.draws - 1, 
                    loses: team.loses + 1,
                    points: team.points - 1,
                    goalsF: team.goalsF - team[position][0] + goalsFA,
                    goalsC: team.goalsC - team[position][1] + goalsCO,
                    [position]: [goalsFA, goalsCO]})
                )}    
        }
        
    
    }
    catch (error) {
        console.log('Error putTeam', error)
    }
}

async function getAllTeams() {    
    try{
         let allTeams = await Team.findAll({
             include: [Game]
         })
         return allTeams
     }
     catch(error) {
         console.log('Error in getAllTeams', error)
     }
 }
 
 
function getTeamById(id) {
     try{
         const teamId = Team.findOne({  
             where: {
                 id: id
             },
             include: [Game]          
         }) 
         return teamId
     } catch (error) {
             console.log('Error in getTeamById', error)
     }
}

function getTeamsBygroup(group) {
    try{
        const teamsGroup = Team.findAll({  
            where: {
                group: group
            },
            include: [Game],
            order: [
                ['points', 'DESC'],
                ['difGoals', 'DESC'],
                ['goalsF', 'DESC'],
                ['goalsC', 'DESC'],
            ],         
        }) 
        return teamsGroup
    } catch (error) {
            console.log('Error in getTeamsBygroup', error)
    }
}

const populateTeams = async () => {
    const teams = [
        {   
            id: "QAT",
            name: "Qatar",
            img: "https://flagcdn.com/qa.svg",
            group: "A"
        },
        {   
            id: "ECU",
            name: "Ecuador",
            img: "https://flagcdn.com/ec.svg",
            group: "A"
        },
        {   
            id: "SEN",
            name: "Senegal",
            img: "https://flagcdn.com/sn.svg",
            group: "A"
        },
        {   
            id: "NED",
            name: "Paises Bajos",
            img: "https://flagcdn.com/nl.svg",
            group: "A"
        },
        {   
            id: "ENG",
            name: "Inglaterra",
            img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
            group: "B"
        },
        {   
            id: "IRN",
            name: "Irán",
            img: "https://flagcdn.com/ir.svg",
            group: "B"
        },
        {   
            id: "USA",
            name: "Estados Unidos",
            img: "https://flagcdn.com/us.svg",
            group: "B"
        },
        {   
            id: "WAL",
            name: "Gales",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
            group: "B"
        },
        {   
            id: "ARG",
            name: "Argentina",
            img: "https://flagcdn.com/ar.svg",
            group: "C"
        },
        {   
            id: "KSA",
            name: "Arabia Saudita",
            img: "https://flagcdn.com/sa.svg",
            group: "C"
        },
        {   
            id: "MEX",
            name: "Mexico",
            img: "https://flagcdn.com/mx.svg",
            group: "C"
        },
        {   
            id: "POL",
            name: "Polonia",
            img: "https://flagcdn.com/pl.svg",
            group: "C"
        },
        {   
            id: "FRA",
            name: "Francia",
            img: "https://flagcdn.com/fr.svg",
            group: "D"
        },
        {   
            id: "DEN",
            name: "Dinamarca",
            img: "https://flagcdn.com/dk.svg",
            group: "D"
        },
        {   
            id: "TUN",
            name: "Tunez",
            img: "https://flagcdn.com/tn.svg",
            group: "D"
        },
        {   
            id: "AUS",
            name: "Australia",
            img: "https://flagcdn.com/au.svg",
            group: "D"
        },
        {   
            id: "ESP",
            name: "España",
            img: "https://flagcdn.com/es.svg",
            group: "E"
        },
        {   
            id: "GER",
            name: "Alemania",
            img: "https://flagcdn.com/de.svg",
            group: "E"
        },
        {   
            id: "JPN",
            name: "Japón",
            img: "https://flagcdn.com/jp.svg",
            group: "E"
        },
        {   
            id: "CRC",
            name: "Costa Rica",
            img: "https://flagcdn.com/cr.svg",
            group: "E"
        },
        {   
            id: "BEL",
            name: "Bélgica",
            img: "https://flagcdn.com/be.svg",
            group: "F"
        },
        {   
            id: "CAN",
            name: "Canadá",
            img: "https://flagcdn.com/ca.svg",
            group: "F"
        },
        {   
            id: "MAR",
            name: "Marruecos",
            img: "https://flagcdn.com/ma.svg",
            group: "F"
        },
        {   
            id: "CRO",
            name: "Croacia",
            img: "https://flagcdn.com/hr.svg",
            group: "F"
        },
        {   
            id: "BRA",
            name: "Brasil",
            img: "https://flagcdn.com/br.svg",
            group: "G"
        },
        {   
            id: "SRB",
            name: "Serbia",
            img: "https://flagcdn.com/rs.svg",
            group: "G"
        },
        {   
            id: "SUI",
            name: "Suiza",
            img: "https://flagcdn.com/ch.svg",
            group: "G"
        },
        {   
            id: "CMR",
            name: "Camerún",
            img: "https://flagcdn.com/cm.svg",
            group: "G"
        },
        {   
            id: "POR",
            name: "Portugal",
            img: "https://flagcdn.com/pt.svg",
            group: "H"
        },
        {   
            id: "GHA",
            name: "Ghana",
            img: "https://flagcdn.com/gh.svg",
            group: "H"
        },
        {   
            id: "URU",
            name: "Uruguay",
            img: "https://flagcdn.com/uy.svg",
            group: "H"
        },
        {   
            id: "KOR",
            name: "Corea del Sur",
            img: "https://flagcdn.com/kr.svg",
            group: "H"
        }
    ]
    try {
        await Team.bulkCreate(teams);
    
        console.log("DB Teams populated correctly");
      } catch (error) {
        console.log(error.message);
      }
}

module.exports = {
    postTeam,
    putTeam,
    getAllTeams,
    getTeamById,
    getTeamsBygroup,
    populateTeams,
    updateGoals
}