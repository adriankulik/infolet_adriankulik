import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    cartAddition: (state, action) => {
      state.value += action.payload;
    },
    cartReset: (state) => {
      state = 0;
    },
  },
});

export const { cartAddition, cartReset } = cartSlice.actions;

export default cartSlice.reducer;
