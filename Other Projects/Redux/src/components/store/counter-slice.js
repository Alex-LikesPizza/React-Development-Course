import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Counter",
  initialState: { amount: 0, visibility: true},
  reducer: {
    increment(state){
      state.amount++;
    },
    decrement(state){
      state.amount--;
    },
    toggle(state){
      state.visibility = !state.visibility;
    },
  }
});
export default slice;