import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    changeLoaderState(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLoaderState } = loaderSlice.actions;
export const selectLoader = (state: RootState) => state.loader.isLoading;

export default loaderSlice.reducer;
