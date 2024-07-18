import { compose, legacy_createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import { rootReducer } from "./rootreducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {

    key:'root',
    storage,
    whitelist:[]
    
}

const reducerPersist = persistReducer(persistConfig, rootReducer);
const middleware = [process.env.NODE_ENV!=='development' && logger].filter(Boolean);
const enhanceComposer = compose(applyMiddleware(...middleware));
export const store = legacy_createStore(reducerPersist, undefined, enhanceComposer);
export const persistor = persistStore(store);
