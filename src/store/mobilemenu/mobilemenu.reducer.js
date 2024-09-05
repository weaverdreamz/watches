import { MOBILEMENU_ACTION_TYPES } from "./mobilemenu.type";

const INITIAL_STATE = {
    displaymobilemenu:0
}

export const mobileMenuReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload}  =  action;

    switch(type){
        case MOBILEMENU_ACTION_TYPES.SHOWMOBILE:
            return{
                ...state,
                displaymobilemenu:payload,
            }
        default:
            return state
    }
}