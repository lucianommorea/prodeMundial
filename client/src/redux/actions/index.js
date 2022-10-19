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
    PUT_GAME_PENALTIES,
    GET_USERS_RANKING,
    PUT_USER_OCTAVOS,
    GET_WORLD_CUP,
    PUT_CHAMPION,
    PUT_SECOND,
    PUT_THIRD,
    PUT_BEST_PLAYER,
    PUT_OCTAVOS_TEAM,
    GET_TOP_FIVE,
    GET_ALL_USERS_RANKING,
    GET_USER_INFO2,
    GET_ALL_USERS_NOADMIN,
    GET_ALL_ADMINS,
    GET_SEARCH_USERS,
    TOGGLE_DARKMODE,
    CLEAN_GAMES,
    CLEAN_TEAMS
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

export const putUserInfo = (sub, modify, setLoading, setIsModify) => async (dispatch) => {
    try {
      const {data} = await api.putUserInfo(sub, modify);
      dispatch({ type: PUT_USER_INFO, payload: data})
      setLoading && setLoading(false);
      setIsModify && setIsModify(prevState => !prevState);
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

export const putUserOctavos = (sub, modify) => async (dispatch) => {
  try {
    const {data} = await api.putUserOctavos(sub, modify);
    dispatch({ type: PUT_USER_OCTAVOS, payload: data})
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

export const getUsersRanking = (page, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.getUsersRanking(page);
    dispatch({ type: GET_USERS_RANKING, payload: data });
        setLoading && setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllUsersRanking = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsersRanking();
    dispatch({ type: GET_ALL_USERS_RANKING, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllUsersNoAdmin = (page) => async (dispatch) => {
  try {
    const { data } = await api.getAllUsersNoAdmin(page);
    dispatch({ type: GET_ALL_USERS_NOADMIN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllAdmins = (page) => async (dispatch) => {
  try {
    const { data } = await api.getAllAdmins(page);
    dispatch({ type: GET_ALL_ADMINS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchUsers = (page, search) => async (dispatch) => {
  try {
    const { data } = await api.getSearchUsers(page, search);
    dispatch({ type: GET_SEARCH_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTopFive = () => async (dispatch) => {
  try {
    const { data } = await api.getTopFive();
    dispatch({ type: GET_TOP_FIVE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserId = (sub, setLoading) => async (dispatch) => {
    try {
      const { data } = await api.getUserId(sub);
      dispatch({ type: GET_USER_INFO, payload: data });
      setLoading && setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
};

export const getUserId2 = (sub, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.getUserId(sub);
    dispatch({ type: GET_USER_INFO2, payload: data });
    setLoading && setLoading(false);
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
  
export const getAllGames = (setLoading) => async (dispatch) => {
    try {
      const { data } = await api.getAllGames();
      dispatch({ type: GET_ALL_GAMES, payload: data });
      setLoading && setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
};

export const getIdGame = (id, setLoading) => async (dispatch) => {
    try {
      const { data } = await api.getIdGame(id);
      dispatch({ type: GET_ID_GAME, payload: data });
      setLoading && setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
};

export const getGroupGames = (group, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.getGroupGames(group);
    dispatch({ type: GET_GROUP_GAMES, payload: data });
    setLoading && setLoading(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const cleanGames = () => {
  return { type: CLEAN_GAMES };
};

export const cleanTeams = () => {
  return { type: CLEAN_TEAMS };
};

export const getAllTeams = () => async (dispatch) => {
    try {
      const { data } = await api.getAllTeams();
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

export const getGroupTeams = (group, setLoading) => async (dispatch) => {
    try {
      const { data } = await api.getGroupTeams(group);
      dispatch({ type: GET_GROUP_TEAMS, payload: data });
      setLoading && setLoading(false);
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

export const getWorldCup = () => async (dispatch) => {
  try {
    const { data } = await api.getWorldCup();
    dispatch({ type: GET_WORLD_CUP, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const putChampion = (modify) => async (dispatch) => {
  try {
    const { data } = await api.putChampion(modify);
    dispatch({ type: PUT_CHAMPION, payload: data})
    // setLoading && setLoading(false);
    // setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};

export const putSecond = (modify) => async (dispatch) => {
  try {
    const { data } = await api.putSecond(modify);
    dispatch({ type: PUT_SECOND, payload: data})
    // setLoading && setLoading(false);
    // setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};

export const putThird = (modify) => async (dispatch) => {
  try {
    const { data } = await api.putThird(modify);
    dispatch({ type: PUT_THIRD, payload: data})
    // setLoading && setLoading(false);
    // setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};

export const putBestPlayer = (modify) => async (dispatch) => {
  try {
    const { data } = await api.putBestPlayer(modify);
    dispatch({ type: PUT_BEST_PLAYER, payload: data})
    // setLoading && setLoading(false);
    // setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};

export const putOctavosTeam = (position, modify) => async (dispatch) => {
  try {
    const { data } = await api.putOctavosTeam(position, modify);
    dispatch({ type: PUT_OCTAVOS_TEAM, payload: data})
    // setLoading && setLoading(false);
    // setIsModify && setIsModify(prevState => !prevState);
  } catch (error) {
    console.log(error.message);
  }
};


export const toggleDarkmode = () => {
  return { type: TOGGLE_DARKMODE, payload: null };
};
