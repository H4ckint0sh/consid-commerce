/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: true,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;
