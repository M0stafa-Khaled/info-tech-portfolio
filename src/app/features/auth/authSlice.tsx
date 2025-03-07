import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SessionService from "../../../utils/SessionService";
import { IUser } from "../../../interfaces";

export interface IAuthState {
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  isAuthenticated: !!SessionService.getToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        // role: "admin" | "employee";
        data: IUser;
      }>
    ) => {
      state.isAuthenticated = true;
      SessionService.setUser(action.payload.data);
      SessionService.setToken(action.payload.token);
      // SessionService.setRole(action.payload.role, 1);
    },

    logout: (state) => {
      state.isAuthenticated = false;
      SessionService.clearAll();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
