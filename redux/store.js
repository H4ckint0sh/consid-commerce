import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import themeReducer from './themeSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});
