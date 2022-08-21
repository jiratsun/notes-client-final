import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import Divider from "../../../components/Divider";
import Note from "../Note";
import Spinner from "../../../components/Spinner";

import colors from "../../themes/colors";
import notesListStyles from "./NotesList.module.css";
import { selectNoteIdsByStatus, selectNoteStatus } from "../notesSlice";

const onScroll = (setScroll, { current }) => {
    const top = current.scrollTop;
    const outOfView = current.scrollHeight - current.clientHeight;
    setScroll((top / outOfView) * 100);
};

const NotesList = ({ setScroll, sortUp, status }) => {
    const selectNoteIds = useCallback(selectNoteIdsByStatus, []);
    const noteIds = useSelector((state) => selectNoteIds(state, status));
    const sortedIds = sortUp ? [...noteIds].reverse() : [...noteIds];
    const noteStatus = useSelector(selectNoteStatus);
    const listRef = useRef();

    return (
        <>
            <Spinner
                hide={noteStatus === "fulfilled"}
                color={
                    colors.static[
                        `primary${status === "Certain" ? "Green" : "Yellow"}100`
                    ]
                }
            />
            {noteStatus === "fulfilled" && (
                <ul
                    className={notesListStyles.container}
                    onScroll={() => onScroll(setScroll, listRef)}
                    ref={listRef}>
                    <li>
                        <Divider />
                    </li>
                    {sortedIds.map((noteId) => (
                        <li key={noteId}>
                            <Note noteId={noteId} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default React.memo(NotesList);
