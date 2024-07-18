import { LATESTPRODUCT_ACTION_TYPES } from "./latestproducttype";

const INITIAL_STATE = {
    latestProduct:[],
    ourProduct:[],
}

export const latestProductReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){

        case LATESTPRODUCT_ACTION_TYPES.LATEST_PRODUCT:
            return{
                ...state,
                ...payload
            }
        default:
            return state

    }

    
}