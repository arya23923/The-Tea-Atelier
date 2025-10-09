"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from './features/CounterState/CounterSlice';

export const loadCartFromLocalStorage = (): CounterState => {
  try {
    const stored = localStorage.getItem("cartState");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
  return { value: 0, cart: [] };
};

export const saveCartToLocalStorage = (state: CounterState) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

export const makeStore = () => {
  const preloadedState =
    typeof window !== "undefined"
      ? { counter: loadCartFromLocalStorage() }
      : undefined;

  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState,
  });

  if (typeof window !== "undefined") {
    store.subscribe(() => {
      saveCartToLocalStorage(store.getState().counter);
    });
  }

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<ReturnType<typeof makeStore>["dispatch"]>;



