import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NoteWindow from "./features/notes/NoteWindow";
import Header from "./components/Header/Header";
import NoteAddBox from "./features/notes/NoteAddBox/NoteAddBox";

import {
    fetchNotes,
    selectMain,
    selectNoteStatus,
} from "./features/notes/notesSlice";
import appStyles from "./App.module.css";
import useTheme from "./features/themes/useTheme";
import {
    selectCurrentCollection,
    selectPageStatus,
} from "./features/pages/pagesSlice";

const App = () => {
    const [theme] = useTheme();
    const dispatch = useDispatch();
    const noteStatus = useSelector(selectNoteStatus);
    const pageStatus = useSelector(selectPageStatus);
    const main = useSelector(selectMain);
    const currentCollection = useSelector(selectCurrentCollection);

    useEffect(() => {
        if (noteStatus === "idle" && pageStatus === "fulfilled")
            dispatch(fetchNotes(currentCollection));
    }, [dispatch, noteStatus, currentCollection, pageStatus]);

    return (
        <div
            className={`${appStyles.app} ${appStyles[main]}`}
            style={{ backgroundColor: theme.inverse100 }}>
            <Header />
            <NoteWindow status="Uncertain" />
            <NoteWindow status="Certain" />
            <NoteWindow status="Current" />
            <NoteAddBox />
        </div>
    );
};

export default App;
