import { SIGNIN_ACTION_TYPES } from "./signin.type";

export const SetSignIn = (sign)=>{
    return ({type:SIGNIN_ACTION_TYPES.DISPLAY_SIGNIN, payload:sign})
}