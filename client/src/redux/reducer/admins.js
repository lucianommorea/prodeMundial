import { GET_ALL_ADMINS } from "../actions/actionTypes"


export default function admins (state = [], action){
    switch(action.type){
        case GET_ALL_ADMINS:
            return action.payload.results
        default:
            return state            
    }
}