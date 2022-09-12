import { GET_ALL_TEAMS, GET_GROUP_TEAMS} from "../actions/actionTypes"

export default function teams (state = [], action){
    switch(action.type){
        case GET_ALL_TEAMS:
            return action.payload;
        case GET_GROUP_TEAMS:
            return action.payload;
        default:
            return state            
    }
}