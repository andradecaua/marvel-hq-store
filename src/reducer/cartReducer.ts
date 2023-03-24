import { createAction, createReducer, PrepareAction } from "@reduxjs/toolkit";
import { typeHq } from "../types/typeshq";

const cartInitialState: typeHq[] = []

export const incrementItemToCart = createAction('cart/increment', (hq: typeHq) => {return {payload: hq}})
const decrementItemToCart = createAction('cart/decrement')


const cartReducer = createReducer(cartInitialState, (builder) => {
    builder
        .addCase(incrementItemToCart, 
            (state, action) => {
                if(action.payload !== undefined)
                {
                    const hq = action.payload as typeHq
                    state.push(hq)
                    return state
                }
        })
        .addCase(decrementItemToCart, 
            (state, action) => {
                if(action.payload !== undefined)
                {
                    const hq = action.payload as typeHq
                    state.splice(state.indexOf(hq), 1)
                }
        })
})

export {cartReducer}