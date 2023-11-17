import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (state[item.id]) {
        state[item.id].quantity += 1;
      } else {
        state[item.id] = {
          id: item.id,
          quantity: 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      if (!state[item.id]) return;
      if (state[item.id].quantity === 1) {
        delete state[item.id];
      } else {
        state[item.id].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
