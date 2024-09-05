import { TWO_ACTION_TYPES } from "./two.type";

export const setTwo = (two)=>{

    return({type:TWO_ACTION_TYPES.EITHER_TWO, payload:two})
}