import { GET_ID_TEAM, PUT_ID_TEAM } from "../actions/actionTypes"


export default function team (state = {}, action){
    switch(action.type){
        case GET_ID_TEAM:
            return action.payload
        case PUT_ID_TEAM:
            return action.payload
        default:
            return state            
    }
}