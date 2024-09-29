import { CART_ACTION_TYPES } from "./carttype";

const INITIAL_STATE = {
    cartItems:[],
    cartCount:0,
    cartTotal:0
}

export const CartReducer = (state=INITIAL_STATE, action={})=>{
    const {type, payload} = action;

    switch(type){

        case CART_ACTION_TYPES.DISPLAY_CART:
            return {
                ...state,
                ...payload
            } 
        default:
            return state 
    }
}