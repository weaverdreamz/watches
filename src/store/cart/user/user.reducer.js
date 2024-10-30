import { USER_ACTION_TYPES } from "./user.type";

const CURRENT_STATE = {
    myusers:false
}

export const userReducer = (state=CURRENT_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.AUTH_USER:
            return{
                ...state,
                myusers:payload
            }
        
        default:
            return state
    }

}