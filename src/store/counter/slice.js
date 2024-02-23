import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  performCounterReset: () => {}
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },
    ...middlewareActions
  },
});

export const { increment, decrement, reset, addAmount, performCounterReset } = counterSlice.actions;

export default counterSlice.reducer;
