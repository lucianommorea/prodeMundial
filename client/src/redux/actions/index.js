import {
    SEND_USER_INFO,
    GET_ALL_USERS,
    GET_USER_INFO,
    PUT_USER_INFO,
    PUT_USER_RESULT,
    PUT_GAME_LOCAL_TEAM,
    PUT_GAME_AWAY_TEAM,
    PUT_GAME_RESULT,
    GET_ALL_GAMES,
    GET_ID_GAME,
    GET_GROUP_GAMES,
    GET_ALL_TEAMS,
    GET_ID_TEAM,
    GET_GROUP_TEAMS,
    PUT_ID_TEAM,
    PUT_GAME_PENALTIES
  } from "./actionTypes";

  
import * as api from "../api";

export const sendUserInfo = (user) => async (dispatch) => {
    try {
      const { data } = await api.sendUserInfo(user);
      dispatch({ type: SEND_USER_INFO, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const putUserInfo = (sub, modify) => async (dispatch) => {
    try {
      const {data} = await api.putUserInfo(sub, modify);
      dispatch({ type: PUT_USER_INFO, payload: data})
    //   setLoading && setLoading(false);
    //   setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};

export const putUserResult = (sub, modify) => async (dispatch) => {
    try {
      const { data } = await api.putUserResult(sub, modify);
      dispatch({ type: PUT_USER_RESULT, payload: data})
    //   setLoading && setLoading(false);
    //   setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
      const { data } = await api.getAllUsers();
      dispatch({ type: GET_ALL_USERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getUserId = (sub) => async (dispatch) => {
    try {
      const { data } = await api.getUserId(sub);
      dispatch({ type: GET_USER_INFO, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  
export const putGameLocalTeam = (id, modify) => async (dispatch) => {
    try {
      const { data } = await api.putUserResult(id, modify);
      dispatch({ type: PUT_GAME_LOCAL_TEAM, payload: data})
    //   setLoading && setLoading(false);
    //   setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};

export const putGameAwayTeam = (id, modify) => async (dispatch) => {
    try {
      const { data } = await api.putUserResult(id, modify);
      dispatch({ type: PUT_GAME_AWAY_TEAM, payload: data})
    //   setLoading && setLoading(false);
    //   setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};

export const putGameResult = (modify, setIsModify) => async (dispatch) => {
    try {
      const { data } = await api.putGameResult(modify);
      dispatch({ type: PUT_GAME_RESULT, payload: data})
      // setLoading && setLoading(false);
      setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};

export const putGamePenalties = (modify, setIsModify) => async (dispatch) => {
  try {
    const { data } = await api.putGamePenalties(modify);
    dispatch({ type: PUT_GAME_PENALTIES, payload: data})
    // setLoading && setLoading(false);
    setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};
  
export const getAllGames = () => async (dispatch) => {
    try {
      const { data } = await api.getAllGames();
      dispatch({ type: GET_ALL_GAMES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getIdGame = (id) => async (dispatch) => {
    try {
      const { data } = await api.getIdGame(id);
      dispatch({ type: GET_ID_GAME, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getGroupGames = (group) => async (dispatch) => {
  try {
    const { data } = await api.getGroupGames(group);
    dispatch({ type: GET_GROUP_GAMES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTeams = () => async (dispatch) => {
    try {
      const { data } = await api.getAllGames();
      dispatch({ type: GET_ALL_TEAMS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getIdTeam = (id) => async (dispatch) => {
    try {
      const { data } = await api.getIdTeam(id);
      dispatch({ type: GET_ID_TEAM, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const getGroupTeams = (group) => async (dispatch) => {
    try {
      const { data } = await api.getGroupTeams(group);
      dispatch({ type: GET_GROUP_TEAMS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};


export const putIdTeam = (id, modify) => async (dispatch) => {
    try {
      const { data } = await api.putIdTeam(id, modify);
      dispatch({ type: PUT_ID_TEAM, payload: data})
    //   setLoading && setLoading(false);
    //   setIsModify && setIsModify(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
};
