import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
  name: "point",
  initialState: {
    value: 0,
  },
  reducers: {
    pointAddition: (state, action) => {
      state.value += action.payload;
    },
    pointReset: (state) => {
      state = 0;
    },
  },
});

export const { pointAddition } = pointSlice.actions;

export default pointSlice.reducer;
