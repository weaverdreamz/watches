import { CART_ACTION_TYPES } from "./carttype";

export const setCart = (mycart)=>{

    return {type:CART_ACTION_TYPES.DISPLAY_CART, payload:mycart}
}