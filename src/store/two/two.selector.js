import { createSelector } from "reselect";

const twoSlice = (state)=>state.two;

export const twoSelector = createSelector(
    [twoSlice],
    (twoSlice)=>twoSlice.displayTwo
)