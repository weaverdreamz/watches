import { createSelector } from "reselect";

const userHold = (state)=>state.users;

export const usersSelector = createSelector(

    [userHold],
    (usersSlice)=>usersSlice.myusers

)

