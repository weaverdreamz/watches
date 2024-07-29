import { createSelector } from "reselect";

const signInSlice = (state)=>state.yourssignin

export const signInSelector = createSelector(
    [signInSlice],
    (signinOutput)=>signinOutput.visibleSignIn
)