import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserState {
  isOpenDrawerDailyReward: boolean;
  isOpenDrawerInvite: boolean;
  isOpenDrawerCopyRefLink: boolean;
  isOpenDrawerForNewFrens: boolean;
  isOpenDrawerHalving: boolean;
  isOpenDrawerNotification: boolean;
  isOpenDrawerMinerInfo: boolean;
  isOpenDrawerStake: boolean;
  isShowCoinAnimation: boolean;
  selectedCoin: string;
}

const initialState: UserState = {
  isOpenDrawerDailyReward: false,
  isOpenDrawerInvite: false,
  isOpenDrawerCopyRefLink: false,
  isOpenDrawerForNewFrens: false,
  isOpenDrawerHalving: false,
  isOpenDrawerNotification: false,
  isOpenDrawerMinerInfo: false,
  isOpenDrawerStake: false,
  isShowCoinAnimation: false,
  selectedCoin: 'gold-coin',
};

export const drawerSlice = createSlice({
  name: 'drawers',
  initialState,
  reducers: {
    setIsOpenDrawerDailyReward(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerDailyReward = action.payload;
    },
    setIsOpenDrawerInvite(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerInvite = action.payload;
    },
    setIsOpenDrawerCopyRefLink(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerCopyRefLink = action.payload;
    },
    setIsOpenDrawerForNewFrens(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerForNewFrens = action.payload;
    },
    setIsOpenDrawerHalving(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerHalving = action.payload;
    },
    setIsOpenDrawerNotification(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerNotification = action.payload;
    },
    setIsOpenDrawerMinerInfo(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerMinerInfo = action.payload;
    },
    setIsOpenDrawerStake(state, action: PayloadAction<boolean>) {
      state.isOpenDrawerStake = action.payload;
    },
    setIsShowCoinAnimation(state, action: PayloadAction<boolean>) {
      state.isShowCoinAnimation = action.payload;
    },
    setSelectedCoin(state, action: PayloadAction<string>) {
      state.selectedCoin = action.payload;
    },
  },
});

export const {
  setIsOpenDrawerDailyReward,
  setIsOpenDrawerInvite,
  setIsOpenDrawerCopyRefLink,
  setIsOpenDrawerForNewFrens,
  setIsOpenDrawerHalving,
  setIsOpenDrawerNotification,
  setIsOpenDrawerMinerInfo,
  setIsOpenDrawerStake,
  setIsShowCoinAnimation,
  setSelectedCoin,
} = drawerSlice.actions;
export const getIsOpenDrawerInvite = (state: RootState) =>
  state.drawers.isOpenDrawerInvite;
export const getIsOpenDrawerDailyReward = (state: RootState) =>
  state.drawers.isOpenDrawerDailyReward;
export const getIsOpenDrawerCopyRefLink = (state: RootState) =>
  state.drawers.isOpenDrawerCopyRefLink;
export const getIsOpenDrawerForNewFrens = (state: RootState) =>
  state.drawers.isOpenDrawerForNewFrens;
export const getIsOpenDrawerHalving = (state: RootState) =>
  state.drawers.isOpenDrawerHalving;
export const getIsOpenDrawerNotification = (state: RootState) =>
  state.drawers.isOpenDrawerNotification;
export const getIsOpenDrawerMinerInfo = (state: RootState) =>
  state.drawers.isOpenDrawerMinerInfo;
export const getIsOpenDrawerStake = (state: RootState) =>
  state.drawers.isOpenDrawerStake;
export const getIsShowCoinAnimation = (state: RootState) =>
  state.drawers.isShowCoinAnimation;
export const getSelectedCoin = (state: RootState) => state.drawers.selectedCoin;

export default drawerSlice.reducer;
