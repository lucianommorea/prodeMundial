const {User} = require('../db');
const { checkEmailAdmin } = require('./generalControllers');


async function postUser (req, res, next) {
    try {
            let user = await User.findByPk(req.body.sub);

            if(!user) {
                if (checkEmailAdmin(req.body)){
                    user1 = await User.create({ ...req.body, statusAdmin: true });
                }
                else{
                    user1 = await User.create(req.body);
                } 
                res.send(user1);
            }
            else {
                res.send(user);
            }

    } catch (error) {
        console.log('error in postUser', error)
    }
}

const putUserInfo = async (req, res, next) => {
    const { sub } = req.params;
    let {
      name,
      nickname,
      email,
      picture,
      statusAdmin,
      statusBanned,
      statusDeleted,
      first,
      second, 
      third,
      bestPlayer
    } = req.body;
  
    try {
  
        let userUpdated = await User.findByPk(sub);
        
        await userUpdated.update({
            name,
            nickname,
            email,
            picture,
            statusAdmin,
            statusBanned,
            statusDeleted,
            first,
            second, 
            third,
            bestPlayer
        });
  
      
      res.send(userUpdated);

    } catch (error) {
      next(error);
    }
  };

async function putUserResult(sub, idGame, localGoals, awayGoals) {
    try {
        let userUpdated = await User.findByPk(sub);

        let prevUserResults = userUpdated.userResults;

        let result = [localGoals, awayGoals]
        let newResults = [...prevUserResults]
        newResults[idGame-1] = result

        await userUpdated.update({userResults: newResults});
            
        return userUpdated
    } 
    catch (error) {
        console.log('error in putUserResult', error)
    }
}

async function putUserOctavos(sub, position, team) {
    try {
        let userUpdated = await User.findByPk(sub);

        let prevUserOctavos = userUpdated.octavos

        let newOctavos = [...prevUserOctavos]
        newOctavos[position-1] = team

        await userUpdated.update({octavos: newOctavos});
            
        return userUpdated
    } 
    catch (error) {
        console.log('error in putUserOctavos', error)
    }
}

async function getUserById(id) {
    try {
        const idUser = await User.findOne({
            where: {
                sub: id
            }
        }) 
        return idUser
    } catch (error) {
        console.log('error in getUserById', error)
    }
}

module.exports = {
    postUser,
    putUserInfo,
    putUserResult,
    getUserById,
    putUserOctavos
}