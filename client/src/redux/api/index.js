import axios from "axios";

// RUTAS user - users
export const sendUserInfo = (user) => axios.post(`/user`, user);
export const putUserInfo = (sub, modify) => axios.put(`/user/${sub}`, modify);
export const putUserResult = (sub, modify) => axios.put(`/user/result/${sub}`, modify);
export const getAllUsers = () => axios.get(`/users`);
export const getUserId = (sub) => axios.get(`/user/${sub}`);

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

