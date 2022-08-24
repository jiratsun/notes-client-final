import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextInput from "../../../components/TextInput";
import NoteText from "../NoteText";
import Divider from "../../../components/Divider";
import VerticalDivider from "../../../components/VerticalDivider";
import IconButton from "../../../components/IconButton";
import NoteTooltip from "../NoteTooltip";

import colors from "../../themes/colors";
import { editNote, selectNoteById } from "../notesSlice";
import currentNoteStyles from "./CurrentNote.module.css";
import useTheme from "../../themes/useTheme";
import useDebounce from "../../../hooks/useDebounce";
import { selectCurrentCollection } from "../../pages/pagesSlice";

const complete = (dispatch, collectionName, noteId) => {
    dispatch(
        editNote({
            collectionName,
            noteId,
            update: { isCurrent: false, currentDate: null, currentComment: "" },
        })
    );
};

const edit = (dispatch, collectionName, noteId, currentComment) => {
    dispatch(
        editNote({
            collectionName,
            noteId,
            update: { currentComment },
        })
    );
};

const onMouseEnter = (setHover, setShow) => {
    setHover(setTimeout(() => setShow(true), 2000));
};

const onMouseLeave = (hover, setShow) => {
    clearTimeout(hover);
    setShow(false);
};

const CurrentNote = ({ noteId }) => {
    const note = useSelector((state) => selectNoteById(state, noteId));
    const currentCollection = useSelector(selectCurrentCollection);
    const [currentComment, setCurrentComment] = useState(note.currentComment);
    const [hover, setHover] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [theme] = useTheme();
    const dispatch = useDispatch();

    useDebounce(
        () => edit(dispatch, currentCollection, noteId, currentComment),
        1500,
        [currentComment]
    );

    return (
        <>
            <div
                className={currentNoteStyles.container}
                style={{
                    backgroundColor: note.isCertain
                        ? colors.static.primaryGreen10
                        : colors.static.primaryYellow10,
                }}
                onMouseEnter={() => onMouseEnter(setHover, setShowTooltip)}
                onMouseLeave={() => onMouseLeave(hover, setShowTooltip)}>
                <NoteText text={note.title} />
                <VerticalDivider color={theme.neutral25} />
                <TextInput
                    value={currentComment}
                    setValue={setCurrentComment}
                    backgroundColor={theme.neutral5}
                />
                <VerticalDivider color={theme.neutral25} />
                <IconButton
                    size="1.6rem"
                    icon="bi bi-check-lg"
                    iconColor={colors.dark.neutral100}
                    backgroundColor={colors.static.primaryGreen100}
                    onClick={() =>
                        complete(dispatch, currentCollection, noteId)
                    }
                />
                <NoteTooltip
                    show={showTooltip}
                    info={{
                        "Add-To-Current Date": new Date(
                            note.currentDate
                        ).toLocaleString(),
                    }}
                    backgroundColor={colors.static.primaryBlue100}
                />
            </div>
            <Divider />
        </>
    );
};

export default CurrentNote;
