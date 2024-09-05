import { MOBILEMENU_ACTION_TYPES } from "./mobilemenu.type";

export const setMobileMenu = (mobilenmenu)=>{
    return{type:MOBILEMENU_ACTION_TYPES.SHOWMOBILE, payload:mobilenmenu}
}