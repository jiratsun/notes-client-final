import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NoteWindow from "./features/notes/NoteWindow";

import { fetchNotes, selectNoteStatus } from "./features/notes/notesSlice";

const App = () => {
    const dispatch = useDispatch();
    const noteStatus = useSelector(selectNoteStatus);

    useEffect(() => {
        if (noteStatus === "idle") dispatch(fetchNotes("test0"));
    }, [dispatch, noteStatus]);

    return (
        <div className="App">
            <NoteWindow status="uncertain" />
            <NoteWindow status="certain" />
        </div>
    );
};

export default App;
