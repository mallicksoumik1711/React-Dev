import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

const themeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
