import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "../features/themes/themesSlice";
import notesReducer from "../features/notes/notesSlice";
import pagesReducer from "../features/pages/pagesSlice";

export const store = configureStore({
    reducer: { theme: themesReducer, notes: notesReducer, pages: pagesReducer },
});
