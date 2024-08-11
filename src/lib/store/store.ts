import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import drawerReducer from './drawerReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    drawers: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
