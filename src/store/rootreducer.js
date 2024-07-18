import { combineReducers } from "redux";
import { searchReducer } from "./search/searchreducer";
import { CartReducer } from "./cart/cartreducer";
import { signinReducer } from "./signin/signinreducer";
import { latestProductReducer } from "./latestproduct/latestproductreducer";


export const rootReducer = combineReducers({
    search:searchReducer,
    cart:CartReducer,
    signin:signinReducer,
    latest:latestProductReducer,
})