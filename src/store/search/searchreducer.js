import { SEARCH_ACTION_TYPES } from "./searchtype";

const INITIAL_STATE = {
    displaySearch:0,
}

export const searchReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;


    switch(type){

        case SEARCH_ACTION_TYPES.SET_DISPLAY_SEARCH:
            return{
                ...state,
                displaySearch:payload
            }
        default:
            return state

        
    }




}