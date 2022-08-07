import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "../features/themes/themesSlice";
import notesReducer from "../features/notes/notesSlice";

export const store = configureStore({
    reducer: { theme: themesReducer, notes: notesReducer },
});
