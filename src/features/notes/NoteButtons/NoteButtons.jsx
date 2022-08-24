import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../../../components/IconButton";
import NoteDeleteButton from "../NoteDeleteButton";

import { editNote } from "../notesSlice";
import colors from "../../themes/colors";
import noteButtonsStyles from "./NoteButtons.module.css";
import { selectCurrentCollection } from "../../pages/pagesSlice";

const onUpdateClick = (dispatch, collectionName, noteId, update) => {
    dispatch(editNote({ collectionName, noteId, update }));
};

const NoteButtons = ({ noteId, onEditClick, isCertain }) => {
    const dispatch = useDispatch();
    const currentCollection = useSelector(selectCurrentCollection);

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
                icon={`bi bi-bookmark-${isCertain ? "dash" : "plus"}`}
                iconColor={colors.dark.neutral100}
                backgroundColor={
                    colors.static[`primary${isCertain ? "Yellow" : "Green"}100`]
                }
                onClick={() =>
                    onUpdateClick(dispatch, currentCollection, noteId, {
                        isCertain: !isCertain,
                    })
                }
            />
            <IconButton
                size="1.6rem"
                icon="bi bi-play"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryBlue100}
                onClick={() =>
                    onUpdateClick(dispatch, currentCollection, noteId, {
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
