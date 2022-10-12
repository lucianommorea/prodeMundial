import { GET_ALL_USERS, GET_ALL_USERS_RANKING, GET_USERS_RANKING} from "../actions/actionTypes"

export default function users (state = [], action){
    switch(action.type){
        case GET_ALL_USERS:
            return action.payload;
        case GET_USERS_RANKING:
            return action.payload.results;
        case GET_ALL_USERS_RANKING:
            return action.payload;
        default:
            return state            
    }
}