import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import Divider from "../../../components/Divider";
import Note from "../Note";

import colors from "../../themes/colors";
import notesListStyles from "./NotesList.module.css";
import { selectNoteIdsByStatus, selectNoteStatus } from "../notesSlice";
import Spinner from "../../../components/Spinner";

const onScroll = (setScroll) => {
    const top = document.querySelector(
        `.${notesListStyles.container}`
    ).scrollTop;
    const outOfView =
        document.querySelector(`.${notesListStyles.container}`).scrollHeight -
        document.querySelector(`.${notesListStyles.container}`).clientHeight;
    setScroll((top / outOfView) * 100);
};

const NotesList = ({ setScroll, sortUp, status }) => {
    const selectNoteIds = useCallback(selectNoteIdsByStatus, []);
    const noteIds = useSelector((state) => selectNoteIds(state, status));
    const sortedIds = sortUp ? [...noteIds].reverse() : [...noteIds];
    const noteStatus = useSelector(selectNoteStatus);

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
                    onScroll={() => onScroll(setScroll)}>
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
