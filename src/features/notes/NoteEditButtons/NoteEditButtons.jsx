import React from "react";
import { useDispatch } from "react-redux";

import IconButton from "../../../components/IconButton";

import { editNote } from "../notesSlice";
import colors from "../../themes/colors";
import noteEditButtonsStyles from "./NoteEditButtons.module.css";

const onEditConfirmClick = (
    dispatch,
    collectionName,
    noteId,
    update,
    onConfirmClick
) => {
    dispatch(editNote({ collectionName, noteId, update }));
    onConfirmClick();
};

const NoteEditButtons = ({
    noteId,
    onCancelClick,
    onUndoClick,
    onConfirmClick,
    state: { updatedTitle, updatedComment },
}) => {
    const dispatch = useDispatch();

    return (
        <div className={noteEditButtonsStyles.container}>
            <IconButton
                size="1.6rem"
                icon="bi bi-x-lg"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.errorRed}
                onClick={onCancelClick}
            />
            <IconButton
                size="1.6rem"
                icon="bi bi-arrow-counterclockwise"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryBlue100}
                onClick={onUndoClick}
            />
            <IconButton
                size="1.6rem"
                icon="bi bi-check-lg"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryGreen100}
                onClick={() =>
                    onEditConfirmClick(
                        dispatch,
                        "test0",
                        noteId,
                        {
                            title: updatedTitle,
                            comment: updatedComment,
                            editDate: new Date(),
                        },
                        onConfirmClick
                    )
                }
            />
        </div>
    );
};

export default NoteEditButtons;
