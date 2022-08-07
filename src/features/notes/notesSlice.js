import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";

import server from "../../apis/server";

const notesAdapter = createEntityAdapter();

const initialState = notesAdapter.getInitialState({
    status: "idle",
    error: null,
});

export const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async (collectionName) => {
        const { data } = await server.get("/notes", {
            params: { collectionName },
        });
        return data;
    }
);

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = "fulfilled";
                notesAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    },
});

export default notesSlice.reducer;
