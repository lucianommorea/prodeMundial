import { GET_WORLD_CUP, PUT_BEST_PLAYER, PUT_CHAMPION, PUT_OCTAVOS_TEAM, PUT_SECOND, PUT_THIRD } from "../actions/actionTypes"


export default function worldcup (state = {}, action){
    switch(action.type){
        case GET_WORLD_CUP:
            return action.payload
        case PUT_CHAMPION:
            return action.payload
        case PUT_SECOND:
            return action.payload
        case PUT_THIRD:
            return action.payload
        case PUT_BEST_PLAYER:
            return action.payload
        case PUT_OCTAVOS_TEAM:
            return action.payload
        default:
            return state            
    }
}