import { useReducer } from "react";
import {createContext} from 'react';

export const SearchContext = createContext({

    displaySearch:false,
    setDisplaySearch: ()=>{

    }
})


export const SEARCH_ACTION_TYPES = {
    SET_SEARCH_ACTION:'SET_ACTION_SEARCH'
}

const searchReducer = (state, action)=>{

    const {type, payload} = action;

    switch(type){
        case SEARCH_ACTION_TYPES.SET_SEARCH_ACTION:
            return{
                ...state,
                displaySearch:payload
            }

        default:
             throw new Error(`an error occured in searchReducer`)
    }

}

const INITIAL_STATE = {
    displaySearch:false
}


export const SearchProvider = ({children})=>{
    const [{displaySearch}, dispatch] = useReducer(searchReducer, INITIAL_STATE)

    const setDisplaySearch = (searchvalue)=>{

        dispatch({type:SEARCH_ACTION_TYPES.SET_SEARCH_ACTION, payload:searchvalue})

    }
    const value = {displaySearch, setDisplaySearch}
    return(

        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>

    )
}