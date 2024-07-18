import { createSelector } from "reselect";

const latestProductSlice = (state)=>state.latest;

export const latestProductSelector = createSelector(

    [latestProductSlice],
    (latestProductOutput)=>latestProductOutput.latestProduct.reduce((acc, product)=>{

        const {title, items} = product;
        acc[title.toLowerCase()] = items;
        return acc;

    },{})
)

const ourProductSlice = (store)=>store.latest;

export const ourProductSelector = createSelector(
    [ourProductSlice],
    (ourProductOutput)=> ourProductOutput.ourProduct.reduce((acc, products)=>{

        const{title, items} = products;
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
)