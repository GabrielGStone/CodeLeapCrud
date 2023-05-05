import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  token: string | null;
}

const initialState: InitialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { actions, reducer } = authSlice;
