import {LATESTPRODUCT_ACTION_TYPES} from './latestproducttype';

export const setNewProduct = (newPro, Pro)=>{
    return{type:LATESTPRODUCT_ACTION_TYPES.LATEST_PRODUCT, payload:{latestProduct:newPro, ourProduct:Pro}}
}