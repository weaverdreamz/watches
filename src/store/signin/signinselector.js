import { createSelector } from "reselect";

const signinSlice = (state)=>state.signin;

export const signinSelector = createSelector(
    [signinSlice],
    (signinSelect)=>signinSelect.signinValue
)