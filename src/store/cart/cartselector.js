import { createSelector } from "reselect";

const cartSlice = (state)=>state.cart;

export const itemsSelector = createSelector(
    [cartSlice],
    (cartitems)=>cartitems.cartItems
)
export const countSelector = createSelector(
    [cartSlice],
    (countitems)=>countitems.cartCount
)

export const totalSelector = createSelector(
    [cartSlice],
    (carttotal)=>carttotal.cartTotal

)