import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const themeSlice = createSlice({
  name: "@@theme/switch",
  initialState: Theme.LIGHT,
  reducers: { setTheme: (_, action: PayloadAction<Theme>) => action.payload },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
