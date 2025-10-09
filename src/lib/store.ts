"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "./features/CounterState/CounterSlice";

// Load cart state from localStorage
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

// Save cart state to localStorage
export const saveCartToLocalStorage = (state: CounterState) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// Factory function that creates a new store instance
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

export const store = makeStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
