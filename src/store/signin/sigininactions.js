import { SIGNIN_ACTION_TYPES } from "./signintype";

export const yoursSignin = (yourssignin)=>{
    return{type:SIGNIN_ACTION_TYPES.DISPLAY_SIGNIN, payload:yourssignin}
}