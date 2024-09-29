import { createSelector } from "reselect";


const viewCartSlice = (state)=>state.viewCarts;

export const viewCartSelector = createSelector(
    [viewCartSlice],
    (viewCartValue)=>viewCartValue.view
)
