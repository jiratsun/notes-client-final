import React from "react";
import { useSelector } from "react-redux";

import Divider from "../../../components/Divider";
import Note from "../Note";

import notesListStyles from "./NotesList.module.css";
import { selectNoteIds, selectNoteStatus } from "../notesSlice";

const onScroll = (setScroll) => {
    const top = document.querySelector(
        `.${notesListStyles.container}`
    ).scrollTop;
    const outOfView =
        document.querySelector(`.${notesListStyles.container}`).scrollHeight -
        document.querySelector(`.${notesListStyles.container}`).clientHeight;
    setScroll((top / outOfView) * 100);
};

const NotesList = ({ setScroll, isUncertain, sortUp }) => {
    const noteIds = useSelector(selectNoteIds);
    const sortedIds = sortUp ? [...noteIds].reverse() : [...noteIds];
    const noteStatus = useSelector(selectNoteStatus);


    return (
        <ul
            className={notesListStyles.container}
            onScroll={() => onScroll(setScroll)}>
            <li>
                <Divider />
            </li>
            {noteStatus === "fulfilled" &&
                sortedIds.map((noteId) => (
                    <li key={noteId}>
                        <Note noteId={noteId} isUncertain={isUncertain} />
                    </li>
                ))}
        </ul>
    );
};

export default React.memo(NotesList);
