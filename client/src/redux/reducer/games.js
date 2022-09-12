import { GET_ALL_GAMES, GET_GROUP_GAMES} from "../actions/actionTypes"

export default function games (state = [], action){
    switch(action.type){
        case GET_ALL_GAMES:
            return action.payload;
        case GET_GROUP_GAMES:
            return action.payload
        default:
            return state            
    }
}