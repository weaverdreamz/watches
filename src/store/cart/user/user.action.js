import { USER_ACTION_TYPES } from "./user.type";;

export const setUser = (users)=>{
    return {type:USER_ACTION_TYPES.AUTH_USER, payload:users}
}