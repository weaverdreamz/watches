import { SIGNIN_ACTION_TYPES } from "./signintype";

const INITIAL_STATE = {
    signinValue:0
}

export const signinReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action

    switch(type){
        case SIGNIN_ACTION_TYPES.DISPLAY_SIGNIN:
            return{
                ...state,
                signinValue:payload
            }
            
        default:
            return state
    }

}