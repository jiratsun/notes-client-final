import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";

import server from "../../apis/server";

const notesAdapter = createEntityAdapter({
    sortComparer: (a, b) => -a.insertDate.localeCompare(b.insertDate),
});

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

export const editNote = createAsyncThunk(
    "notes/editNote",
    async ({ collectionName, noteId, update }) => {
        const { data } = await server.patch(`/notes/${noteId}`, update, {
            params: { collectionName },
        });
        return data;
    }
);

export const removeNote = createAsyncThunk(
    "notes/removeNote",
    async ({ collectionName, noteId }) => {
        await server.delete(`/notes/${noteId}`, { params: { collectionName } });
        return noteId;
    }
);

export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({ collectionName, note }) => {
        const { data } = await server.post("/notes", note, {
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
            })
            .addCase(editNote.fulfilled, (state, action) => {
                notesAdapter.setOne(state, action.payload);
            })
            .addCase(removeNote.fulfilled, (state, action) => {
                notesAdapter.removeOne(state, action.payload);
            })
            .addCase(createNote.fulfilled, (state, action) => {
                notesAdapter.addOne(state, action.payload);
            });
    },
});

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds,
} = notesAdapter.getSelectors((state) => state.notes);

export const selectNoteStatus = (state) => state.notes.status;
export const selectNoteError = (state) => state.notes.error;

export const selectNoteIdsByStatus = createSelector(
    [selectAllNotes, (_, status) => status],
    (notes, status) => {
        const filteredNotes = notes.filter((note) =>
            status === "Certain" ? note.isCertain : !note.isCertain
        );
        return filteredNotes.map((note) => note.id);
    }
);

export const selectCurrentNoteIds = createSelector(selectAllNotes, (notes) => {
    const sortedCurrentNotes = notes
        .filter((note) => note.currentDate)
        .sort((a, b) => a.currentDate.localeCompare(b.currentDate));
    return sortedCurrentNotes.map((note) => note.id);
});

export default notesSlice.reducer;
