import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      console.log("Removing item with ID:", action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
