import { CART_ACTION_TYPES } from "./carttype";

export const setCart = (cartitems,cartcount,carttotal)=>{

    return {type:CART_ACTION_TYPES.DISPLAY_CART, payload:{cartItems:cartitems, cartCount:cartcount, cartTotal:carttotal}}
}