import { SEARCH_ACTION_TYPES } from "./searchtype";

export const setSearch = (displaysearch)=>{

    return ({type:SEARCH_ACTION_TYPES.SET_DISPLAY_SEARCH, payload:displaysearch})

}