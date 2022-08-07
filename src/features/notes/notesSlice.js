import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter();

const initialState = notesAdapter.getInitialState({
    status: "idle",
    error: null,
});

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
});

export default notesSlice.reducer;
