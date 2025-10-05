"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Tea{
  id: number,
  name: string,
  price: number,
  image: string,
  description : string
}

interface TeaCart{
  id: number,
  name: string,
  price: number,
  image: string,
  description : string,
  quantity : number
}

export interface CounterState {
  value: number;
  cart : TeaCart[],
}
const initialState: CounterState = {
  value: 0,
  cart : [],
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{tea : Tea}>) => {
      const {id, name, price, image, description} = action.payload.tea;
      const existing = state.cart.find((tea) => tea.id === id)
      if(existing) existing.quantity++;
      else state.cart.push({id, name, price, image, description, quantity : 1})
      state.value++;
    },
    removeItem: (state, action: PayloadAction<{tea : Tea}>) => {
      const {id, name, price, image, description} = action.payload.tea;
      const existing = state.cart.find(tea => tea.id === id);
      if(existing){
        state.cart = state.cart.filter(tea => tea.id !== id);
        state.value -= existing.quantity;
      }
    },
    updateQuantity: (state, action : PayloadAction<{tea: Tea, quantity : number}>) => {
      const {id, name, price, image, description} = action.payload.tea;
      const existing = state.cart.find((tea) => tea.id == id);
      
      if(!existing) return
      if(action.payload.quantity == 1){
        state.value += action.payload.quantity;
        existing.quantity++;
      } else if(action.payload.quantity == -1){
        if(existing.quantity >= 2){
          state.value--;
          existing.quantity--;
        } else {
          state.cart = state.cart.filter(tea => tea.id !== id);
          state.value -= existing.quantity;
        }
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateQuantity } = CounterSlice.actions;
export default CounterSlice.reducer;