import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../thunks/imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});
