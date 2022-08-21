import React, { useState, useReducer } from "react";
import { useSelector } from "react-redux";

import TextInput from "../../../components/TextInput";
import NoteFavoriteButton from "../NoteFavoriteButton";
import NoteText from "../NoteText";
import NoteButtons from "../NoteButtons";
import NoteEditButtons from "../NoteEditButtons";
import Divider from "../../../components/Divider";

import colors from "../../themes/colors";
import { selectNoteById } from "../notesSlice";
import noteStyles from "./Note.module.css";
import useTheme from "../../themes/useTheme";
import VerticalDivider from "../../../components/VerticalDivider";
import NoteTooltip from "../NoteTooltip";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "cancel":
            return {
                isEditing: false,
                updatedTitle: payload.oldTitle,
                updatedComment: payload.oldComment,
            };
        case "undo":
            return {
                isEditing: state.isEditing,
                updatedTitle: payload.oldTitle,
                updatedComment: payload.oldComment,
            };
        case "edit":
            return {
                ...state,
                isEditing: true,
            };
        case "confirm":
            return {
                ...state,
                isEditing: false,
            };
        case "title":
            return { ...state, updatedTitle: payload };
        case "comment":
            return { ...state, updatedComment: payload };
        default:
            return state;
    }
};

const onMouseEnter = (setHover, setShow) => {
    setHover(setTimeout(() => setShow(true), 2000));
};

const onMouseLeave = (hover, setShow) => {
    clearTimeout(hover);
    setShow(false);
};

const Note = ({ noteId }) => {
    const note = useSelector((state) => selectNoteById(state, noteId));
    const [hover, setHover] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [theme] = useTheme();
    const [state, dispatch] = useReducer(reducer, {
        isEditing: false,
        updatedTitle: note.title,
        updatedComment: note.comment,
    });

    return (
        <>
            <div
                className={noteStyles.container}
                style={{
                    backgroundColor: note.isCurrent
                        ? colors.static.primaryBlue10
                        : "transparent",
                }}
                onMouseEnter={() => onMouseEnter(setHover, setShowTooltip)}
                onMouseLeave={() => onMouseLeave(hover, setShowTooltip)}>
                <NoteFavoriteButton
                    isFavorite={note.isFavorite}
                    noteId={note.id}
                />
                <VerticalDivider color={theme.neutral25} />
                {state.isEditing ? (
                    <TextInput
                        value={state.updatedTitle}
                        setValue={(value) =>
                            dispatch({ type: "title", payload: value })
                        }
                        backgroundColor={theme.neutral5}
                    />
                ) : (
                    <NoteText text={note.title} />
                )}
                <VerticalDivider color={theme.neutral25} />
                {state.isEditing ? (
                    <TextInput
                        value={state.updatedComment}
                        setValue={(value) =>
                            dispatch({ type: "comment", payload: value })
                        }
                        backgroundColor={theme.neutral5}
                    />
                ) : (
                    <NoteText text={note.comment} />
                )}
                <VerticalDivider color={theme.neutral25} />
                {state.isEditing ? (
                    <NoteEditButtons
                        noteId={noteId}
                        onCancelClick={() =>
                            dispatch({
                                type: "cancel",
                                payload: {
                                    oldTitle: note.title,
                                    oldComment: note.comment,
                                },
                            })
                        }
                        onUndoClick={() =>
                            dispatch({
                                type: "undo",
                                payload: {
                                    oldTitle: note.title,
                                    oldComment: note.comment,
                                },
                            })
                        }
                        onConfirmClick={() => dispatch({ type: "confirm" })}
                        state={state}
                    />
                ) : (
                    <NoteButtons
                        noteId={noteId}
                        onEditClick={() => dispatch({ type: "edit" })}
                        isCertain={note.isCertain}
                    />
                )}
                <NoteTooltip
                    show={showTooltip}
                    info={{
                        "Edit Date": new Date(note.editDate).toLocaleString(),
                        "Insert Date": new Date(
                            note.insertDate
                        ).toLocaleString(),
                    }}
                    backgroundColor={
                        note.isCertain
                            ? colors.static.primaryGreen100
                            : colors.static.primaryYellow100
                    }
                />
            </div>
            <Divider />
        </>
    );
};

export default Note;
