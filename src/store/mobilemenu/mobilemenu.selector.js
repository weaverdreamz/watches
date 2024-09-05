import { createSelector } from "reselect";

const mobileMenuSlice = (state)=>state.mobileMenu

export const mobileMenuSelector = createSelector(
    [mobileMenuSlice],
    (mobileMenuOutput)=>mobileMenuOutput.displaymobilemenu
)