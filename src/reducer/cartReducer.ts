import { createAction, createReducer} from "@reduxjs/toolkit";
import {typeHq } from "../types/typeshq";

const cartInitialState: typeHq[] = []

export const incrementItemToCart = createAction('cart/increment', (hq: typeHq) => {return {payload: hq}})
export const decrementItemToCart = createAction('cart/decrement', (hq: typeHq) => {return {payload: hq}})
export const incrrementQuantToItem = createAction('cart/incrementQuant', (hq: typeHq) => {return {payload: hq}})

const cartReducer = createReducer(cartInitialState, (builder) => {
    builder
        .addCase(incrrementQuantToItem,
            (state, action) => {
                
            })
        .addCase(incrementItemToCart, 
            (state, action) => {
                console.log(state)
                if(action.payload !== undefined)
                {
                    const hq = action.payload as typeHq
                    hq.quant = 1;
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
                    return state
                }
        })
})

export {cartReducer}