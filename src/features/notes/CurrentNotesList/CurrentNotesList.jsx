import React, { useRef } from "react";
import { useSelector } from "react-redux";

import Divider from "../../../components/Divider";
import CurrentNote from "../CurrentNote";
import Spinner from "../../../components/Spinner";

import colors from "../../themes/colors";
import currentNotesListStyles from "./CurrentNotesList.module.css";
import { selectCurrentNoteIds, selectNoteStatus } from "../notesSlice";

const onScroll = (setScroll, { current }) => {
    const top = current.scrollTop;
    const outOfView = current.scrollHeight - current.clientHeight;
    setScroll((top / outOfView) * 100);
};

const CurrentNotesList = ({ setScroll, sortUp }) => {
    const currentNoteIds = useSelector(selectCurrentNoteIds);
    const sortedCurrentIds = sortUp
        ? [...currentNoteIds].reverse()
        : [...currentNoteIds];
    const noteStatus = useSelector(selectNoteStatus);
    const listRef = useRef();

    return (
        <>
            <Spinner
                hide={noteStatus === "fulfilled"}
                color={colors.static.primaryBlue100}
            />
            {noteStatus === "fulfilled" && (
                <ul
                    className={currentNotesListStyles.container}
                    onScroll={() => onScroll(setScroll, listRef)}
                    ref={listRef}>
                    <li>
                        <Divider />
                    </li>
                    {sortedCurrentIds.map((noteId) => (
                        <li key={noteId}>
                            <CurrentNote noteId={noteId} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default React.memo(CurrentNotesList);
