import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";

import server from "../../apis/server";

const pagesAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.pageName.localeCompare(b.pageName),
});

const initialState = pagesAdapter.getInitialState({
    status: "idle",
    error: null,
    currentPageId: null,
});

export const fetchPages = createAsyncThunk("pages/fetchPages", async () => {
    const { data } = await server.get("/pages");
    return data;
});

export const editPage = createAsyncThunk(
    "pages/editPage",
    async ({ pageId, update }) => {
        const { data } = await server.patch(`/pages/${pageId}`, update);
        return data;
    }
);

export const removePage = createAsyncThunk(
    "pages/removePage",
    async (pageId) => {
        await server.delete(`/pages/${pageId}`);
        return pageId;
    }
);

export const createPage = createAsyncThunk("pages/createPage", async (page) => {
    const { data } = await server.post("/pages", page);
    return data;
});

export const pagesSlice = createSlice({
    name: "pages",
    initialState,
    reducers: {
        changePage(state, action) {
            const page = action.payload;
            state.currentPageId = page;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPages.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchPages.fulfilled, (state, action) => {
                state.status = "fulfilled";
                pagesAdapter.upsertMany(state, action.payload);
                state.currentPageId = state.ids[0];
            })
            .addCase(fetchPages.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            })
            .addCase(editPage.fulfilled, (state, action) => {
                pagesAdapter.setOne(state, action.payload);
            })
            .addCase(removePage.fulfilled, (state, action) => {
                pagesAdapter.removeOne(state, action.payload);
            })
            .addCase(createPage.fulfilled, (state, action) => {
                pagesAdapter.addOne(state, action.payload);
            });
    },
});

export const { changePage } = pagesSlice.actions;

export const {
    selectAll: selectAllPages,
    selectById: selectPageById,
    selectIds: selectPageIds,
} = pagesAdapter.getSelectors((state) => state.pages);

export const selectPageStatus = (state) => state.pages.status;
export const selectPageError = (state) => state.pages.error;
export const selectCurrentPageId = (state) => state.pages.currentPageId;
export const selectCurrentCollection = (state) =>
    state.pages.entities[state.pages.currentPageId]?.collectionName;
export const selectCurrentPage = (state) =>
    state.pages.entities[state.pages.currentPageId]?.pageName;
export const selectCurrentNoUpdateDate = (state) =>
    state.pages.entities[state.pages.currentPageId]?.noUpdateDate;

export const selectCollectionNames = createSelector(
    selectAllPages,
    (pages) => new Set(pages.map((page) => page.collectionName))
);

export default pagesSlice.reducer;
