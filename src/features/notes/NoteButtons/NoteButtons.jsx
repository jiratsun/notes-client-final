import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "../../../components/IconButton";

import { editNote } from "../notesSlice";
import colors from "../../themes/colors";
import noteButtonsStyles from "./NoteButtons.module.css";
import NoteDeleteButton from "../NoteDeleteButton";

const onUpdateClick = (dispatch, collectionName, noteId, update) => {
    dispatch(editNote({ collectionName, noteId, update }));
};

const NoteButtons = ({ noteId, onEditClick }) => {
    const dispatch = useDispatch();

    return (
        <div className={noteButtonsStyles.container}>
            <IconButton
                size="1.6rem"
                icon="bi bi-pen"
                iconColor={colors.light.neutral100}
                backgroundColor={colors.static.neutralGray}
                onClick={onEditClick}
            />
            <IconButton
                size="1.6rem"
                icon="bi bi-bookmark-dash"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryYellow100}
                onClick={() =>
                    onUpdateClick(dispatch, "test0", noteId, {
                        isCertain: false,
                    })
                }
            />
            <IconButton
                size="1.6rem"
                icon="bi bi-play"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryBlue100}
                onClick={() =>
                    onUpdateClick(dispatch, "test0", noteId, {
                        isCurrent: true,
                        currentDate: new Date(),
                    })
                }
            />
            <NoteDeleteButton noteId={noteId} />
        </div>
    );
};

export default NoteButtons;
