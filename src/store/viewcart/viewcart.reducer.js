import { VIEWCART_ACTION_TYPES } from "./viewcart.type";

const INITIAL_STATE={
    view:0,
}

export const viewCartReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action;

    switch(type){
        case VIEWCART_ACTION_TYPES.VIEW_CART:
            return{
                ...state,
                view:payload
            }

        default:
            return state;
    }
}