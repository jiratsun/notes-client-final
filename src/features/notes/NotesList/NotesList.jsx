import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "./Note";

import { fetchNotes, selectNoteIds, selectNoteStatus } from "./notesSlice";

const NotesList = () => {
    const dispatch = useDispatch();
    const noteIds = useSelector(selectNoteIds);
    const noteStatus = useSelector(selectNoteStatus);

    useEffect(() => {
        if (noteStatus === "idle") dispatch(fetchNotes("test0"));
    }, [dispatch, noteStatus]);

    return (
        <div>
            <ul>
                {noteIds.map((id) => (
                    <li key={id}>
                        <Note id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
