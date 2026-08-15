import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.value += 1;
    },
    decrementCounter: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
