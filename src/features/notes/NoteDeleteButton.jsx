import React, { useState } from "react";
import { useDispatch } from "react-redux";

import IconButton from "../../components/IconButton";

import colors from "../themes/colors";
import { removeNote } from "../notes/notesSlice";

const onFirstClick = (setConfirm) => {
    setConfirm(true);
    setTimeout(() => {
        setConfirm(false);
    }, 1000);
};

const onConfirmClick = (dispatch, collectionName, noteId) => {
    dispatch(removeNote({ collectionName, noteId }));
};

const NoteDeleteButton = ({ noteId }) => {
    const [confirm, setConfirm] = useState(false);
    const dispatch = useDispatch();

    return confirm ? (
        <IconButton
            size="1.6rem"
            icon="bi bi-check-lg"
            iconColor={colors.dark.neutral100}
            backgroundColor={colors.static.errorRed}
            onClick={() => onConfirmClick(dispatch, "test0", noteId)}
        />
    ) : (
        <IconButton
            size="1.6rem"
            icon="bi bi-trash3"
            iconColor={colors.dark.neutral100}
            backgroundColor={colors.static.errorRed}
            onClick={() => onFirstClick(setConfirm)}
        />
    );
};

export default NoteDeleteButton;
