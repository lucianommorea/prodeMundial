import axios from "axios";

// RUTAS user - users
export const sendUserInfo = (user) => axios.post(`/user`, user);
export const putUserInfo = (sub, modify) => axios.put(`/user/${sub}`, modify);
export const putUserResult = (sub, modify) => axios.put(`/user/result/${sub}`, modify);
export const getAllUsers = () => axios.get('/users');
export const getUserId = (sub) => axios.get(`/user/${sub}`);
export const getUserId2 = (sub) => axios.get(`/user/${sub}`);
export const getUsersRanking = (page) => axios.get(`/users/ranking?page=${page}&limit=10`);
export const getAllUsersRanking = () => axios.get('/users/allRanking');
export const getTopFive = () => axios.get('/users/topFive');
export const putUserOctavos = (sub, modify) => axios.put(`/user/octavos/${sub}`, modify);
export const getAllUsersNoAdmin = (page) => axios.get(`/users/all?page=${page}&limit=10&admin=false&all=true`);
export const getAllAdmins = (page) => axios.get(`/users/all?page=${page}&limit=16&admin=true`);
export const getSearchUsers = (page, search) => axios.get(`/users/all?page=${page}&limit=10&search=${search}&admin=false`);

// RUTAS GAMES
export const putGameLocalTeam = (id, modify) => axios.put(`/game/local/${id}`, modify);
export const putGameAwayTeam = (id, modify) => axios.put(`/game/away/${id}`, modify);
export const putGameResult = (modify) => axios.put(`/games/result`, modify);
export const putGamePenalties = (modify) => axios.put(`/games/penalties`, modify);
export const getAllGames = () => axios.get(`/games/`);
export const getIdGame = (id) => axios.get(`/games?id=${id}`);
export const getGroupGames = (group) => axios.get(`/games/group/${group}`);

//RUTAS TEAMS
export const getAllTeams = () => axios.get(`/teams`);
export const getIdTeam = (id) => axios.get(`/teams/team/${id}`);
export const getGroupTeams = (group) => axios.get(`/teams/group/${group}`);
export const putIdTeam = (id, modify) => axios.put(`/teams/team/${id}`, modify);

// RUTAS WORLDCUP
export const getWorldCup = () => axios.get(`/worldcup`);
export const putChampion = (modify) => axios.put(`/worldcup/first`, modify);
export const putSecond = (modify) => axios.put(`/worldcup/second`, modify);
export const putThird = (modify) => axios.put(`/worldcup/third`, modify);
export const putBestPlayer = (modify) => axios.put(`/worldcup/bestplayer`, modify);
export const putOctavosTeam = (position, modify) => axios.put(`/worldcup/octavos/${position}`, modify);
