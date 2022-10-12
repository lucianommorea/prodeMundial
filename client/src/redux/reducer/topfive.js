import { GET_TOP_FIVE } from "../actions/actionTypes"

export default function topfive (state = [], action){
    switch(action.type){
        case GET_TOP_FIVE:
            return action.payload;
        default:
            return state            
    }
}