import { GET_USER_INFO, PUT_USER_INFO, PUT_USER_RESULT, SEND_USER_INFO} from "../actions/actionTypes"

export default function user (state = {}, action){
    switch(action.type){
        case SEND_USER_INFO:
            return action.payload
        case GET_USER_INFO:
            return action.payload
        case PUT_USER_RESULT:
            return action.payload
        case PUT_USER_INFO:
            return action.payload
        default:
            return state            
    }
}