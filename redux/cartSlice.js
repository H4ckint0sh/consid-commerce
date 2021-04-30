/* eslint-disable nonblock-statement-body-position */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// find index of item if item is already in cart
const getItemIndex = (state, idToFind) => {
  const ids = state.cartItems.map((item) => item.id);
  return ids.indexOf(idToFind);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) state.cartItems.push(action.payload);
      else state.cartItems[itemIndex].quantity += action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload.id);
    },

    incrementQuantity: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload.id);
      state.cartItems[itemIndex].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload.id);

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else {
        return state.cartItems.filter((item) => item.id !== action.payload.id);
      }
    },

    batchRemove: (state, action) =>
      state.cartItems.filter((item) => !action.payload.ids.includes(item.id)),

    toggleInclude: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload.id);
      state.cartItems[itemIndex].includedInSum = !state.cartItems[itemIndex]
        .includedInSum;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  batchRemove,
  toggleInclude,
} = cartSlice.actions;

export default cartSlice.reducer;
