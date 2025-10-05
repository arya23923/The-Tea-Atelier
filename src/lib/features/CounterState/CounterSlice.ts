"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Tea{
  id: number,
  name: string,
  price: number,
  image: string,
  description : string,
  quantity : number
}

export interface CounterState {
  value: number;
  cart : Tea[],
}
const initialState: CounterState = {
  value: 0,
  cart : [],
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Tea>) => {
      const {id, name, price, image, description} = action.payload;
      const existing = state.cart.find((tea) => tea.id === id)
      if(existing) existing.quantity++;
      else state.cart.push({id, name, price, image, description, quantity : 1})
      state.value++;
    },
    removeItem: (state, action: PayloadAction<Tea>) => {
      const {id, name, price, image, description} = action.payload;
      const existing = state.cart.find(tea => tea.id === id);
      if(existing){
        state.cart = state.cart.filter(tea => tea.id !== id);
        state.value -= existing.quantity;
      }
    },
    updateQuantity: (state, action : PayloadAction<{id: number, quantity : number}>) => {
      const existing = state.cart.find(tea => tea.id === action.payload.id)
      if(existing){
        const difference = action.payload.quantity - existing.quantity;
        state.value += difference;
        existing.quantity = action.payload.quantity;
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateQuantity } = CounterSlice.actions;
export default CounterSlice.reducer;