import { TWO_ACTION_TYPES } from "./two.type";

const INITIAL_STATE ={
    displayTwo:0
}

export const twoReducer = (state=INITIAL_STATE, action={})=>{

    const {type, payload} = action;

    switch(type){

        case TWO_ACTION_TYPES.EITHER_TWO:
            return{
                ...state,
                displayTwo:payload,
            }

        default:
            return state

    }

}