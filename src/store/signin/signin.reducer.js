import { SIGNIN_ACTION_TYPES } from "./signin.type";

const INITIAL_STATE = {
    visibleSignIn:0
}

export const signinReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){
        case SIGNIN_ACTION_TYPES.DISPLAY_SIGNIN:
            return{
                ...state,
                visibleSignIn:payload
            }
        
        default:
            return state
    }

}