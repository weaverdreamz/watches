import { VIEWCART_ACTION_TYPES } from "./viewcart.type";

export const setViewCart = (vcart)=>{
    return({type:VIEWCART_ACTION_TYPES.VIEW_CART, payload:vcart})
}