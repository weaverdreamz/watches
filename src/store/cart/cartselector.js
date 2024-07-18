import { createSelector } from "reselect";

const cartSlice = (state)=>state.cart;

export const cartSelector = createSelector(
    [cartSlice],
    (cartSelect)=>cartSelect.cartItems
)