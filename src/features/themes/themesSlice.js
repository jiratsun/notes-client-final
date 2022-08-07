import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

export const themesSlice = createSlice({
    name: "themes",
    initialState,
    reducers: {
        toggleTheme(state, _) {
            return state === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = themesSlice.actions;

export const selectTheme = (state) => state.theme;

export default themesSlice.reducer;
