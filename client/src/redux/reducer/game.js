import { GET_ID_GAME, PUT_GAME_AWAY_TEAM, PUT_GAME_LOCAL_TEAM, PUT_GAME_RESULT} from "../actions/actionTypes"

export default function game (state = {}, action){
    switch(action.type){
        case GET_ID_GAME:
            return action.payload
        case PUT_GAME_AWAY_TEAM:
            return action.payload
        case PUT_GAME_LOCAL_TEAM:
            return action.payload
        case PUT_GAME_RESULT:
            return action.payload
        default:
            return state            
    }
}