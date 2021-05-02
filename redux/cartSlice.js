/* eslint-disable no-return-assign */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const isExistItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (!isExistItem) {
        state.cartItems = [...state.cartItems, payload];
      } else {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: (item.quantity += payload.quantity) };
          } else {
            return item;
          }
        });
      }
      state.totalAmount += payload.price;
      state.totalItems += 1;
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount -= payload.price * payload.quantity;
      state.totalItems -= payload.quantity;
    },

    addItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.totalAmount += payload.price;
      state.totalItems += 1;
    },

    subtractItemQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      if (subItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== subItem.id
        );
      } else {
        subItem.quantity -= 1;
      }
      state.totalAmount -= subItem.price;
      state.totalItems -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} = cartSlice.actions;

export const selectItems = (state) => state.cart.cartItems;
export const selectAmount = (state) => state.cart.totalAmount;
export const selectTotalItems = (state) => state.cart.totalItems;

export default cartSlice.reducer;
