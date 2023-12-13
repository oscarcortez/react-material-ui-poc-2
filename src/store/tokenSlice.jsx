import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: '',
  },
  reducers: {
    setter: (state, action) => {
      state.value = action.payload;
      console.log('updated state: ', state.value);
    },
  },
})

export const { setter } = tokenSlice.actions;

export default tokenSlice.reducer;