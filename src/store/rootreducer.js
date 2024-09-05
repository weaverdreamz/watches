import { combineReducers } from "redux";
import { searchReducer } from "./search/searchreducer";
import { CartReducer } from "./cart/cartreducer";
import { signinReducer } from "./signin/signin.reducer";
import { latestProductReducer } from "./latestproduct/latestproductreducer";
import { mobileMenuReducer } from "./mobilemenu/mobilemenu.reducer";
import { twoReducer } from "./two/two.reducer";



export const rootReducer = combineReducers({
    search: searchReducer,
    cart: CartReducer,
    yourssignin: signinReducer,
    latest: latestProductReducer,
    mobileMenu: mobileMenuReducer,
    two:twoReducer,

})