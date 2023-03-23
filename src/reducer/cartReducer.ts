import { createAction, createReducer } from "@reduxjs/toolkit";
import { typeHq } from "../types/typeshq";

const cartInitialState: typeHq[] = []

export const incrementItemToCart = createAction('cart/increment')
const decrementItemToCart = createAction('cart/decrement')

const cartReducer = createReducer(cartInitialState, (builder) => {
    builder
        .addCase(incrementItemToCart, 
            (state, action) => {
                if(action.payload !== undefined)
                {
                    const hq = action.payload as typeHq
                    state.push(hq)
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