import { createSelector } from "reselect";

const searchSlice = (state)=>state.search;

export const searchSelector = createSelector(
    [searchSlice],
    (searchSelect)=>searchSelect.displaySearch
)