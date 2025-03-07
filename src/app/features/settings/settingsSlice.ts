import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettings } from "../../../interfaces";

export interface ISettingsState {
  settings: ISettings;
}

const initialState: ISettingsState = {
  settings: {
    name: "",
    address: "",
    email: "",
    facebook: "",
    instagram: "",
    logo: "",
    phone: "",
    tiktok: "",
    twitter: "",
    youtube: "",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addSettings: (state, action: PayloadAction<{ settings: ISettings }>) => {
      state.settings = action.payload.settings;
    },
  },
});

export const { addSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
