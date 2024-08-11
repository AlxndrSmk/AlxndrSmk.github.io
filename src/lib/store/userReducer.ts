import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  User } from "../types/types";
import { RootState } from "./store";

interface UserState {
  user: User | null;
  userFriends: User[];
  userFrensFriends: User[];
  totalFriends: number;
  totalFrensFriends: number;
  newFrensCount: number;
}

const initialState: UserState = {
  user: null,
  userFriends: [],
  userFrensFriends: [],
  totalFriends: 0,
  totalFrensFriends: 0,
  newFrensCount: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetch(state, action: PayloadAction<User | null>) {
      state.user = { ...state.user, ...action.payload, balance: (+(action?.payload?.balance || 0)) || +(state.user?.balance || 0) } as User;
    },
    setUserFriends(state, action: PayloadAction<User[]>) {
      state.userFriends = action.payload;
    },
    setUserFrensFriends(state, action: PayloadAction<User[]>) {
      state.userFrensFriends = action.payload;
    },
    setTotalFriends(state, action: PayloadAction<number>) {
      state.totalFriends = +action.payload || 0;
    },
    setTotalFrensFriends(state, action: PayloadAction<number>) {
      state.totalFrensFriends = +action.payload || 0;
    },
    setNewFrensCount(state, action: PayloadAction<number>) {
      state.newFrensCount = +action.payload || 0;
    },
  },
});

export const {
  fetch,
  setUserFriends,
  setTotalFriends,
  setUserFrensFriends,
  setTotalFrensFriends,
  setNewFrensCount,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user?.user;
export const selectUserFriends = (state: RootState) => state.user?.userFriends;
export const selectTotalFriends = (state: RootState) =>
  state.user?.totalFriends;
export const selectUserFrensFriends = (state: RootState) =>
  state.user?.userFrensFriends;
export const selectTotalFrensFriends = (state: RootState) =>
  state.user?.totalFrensFriends;
export const selectNewFrensCount = (state: RootState) =>
  state.user?.newFrensCount;

export default userSlice.reducer;
