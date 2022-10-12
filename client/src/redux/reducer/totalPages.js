import { GET_ALL_USERS_NOADMIN, GET_SEARCH_USERS, GET_USERS_RANKING } from "../actions/actionTypes";
  
  export default function totalPages(state = 0, action) {
    switch (action.type) {
      case GET_USERS_RANKING:
        return action.payload.totalPages;
      case GET_ALL_USERS_NOADMIN:
          return action.payload.totalPages;
      case GET_SEARCH_USERS:
          return action.payload.totalPages;
      // case GET_ALL_ADMINS:
      //     return action.payload.totalPages
      default:
        return state;
    }
  }
  