import React, { useReducer } from "react";
import { useSelector } from "react-redux";

import TextInput from "../../../components/TextInput";
import NoteFavoriteButton from "../NoteFavoriteButton";
import NoteText from "../NoteText";
import NoteButtons from "../NoteButtons";
import NoteEditButtons from "../NoteEditButtons";

import { selectNoteById } from "../notesSlice";
import noteStyles from "./Note.module.css";
import useTheme from "../../themes/useTheme";
import VerticalDivider from "../../../components/VerticalDivider";

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

const Note = ({ noteId }) => {
    const note = useSelector((state) => selectNoteById(state, noteId));
    const [theme] = useTheme();
    const [state, dispatch] = useReducer(reducer, {
        isEditing: false,
        updatedTitle: note.title,
        updatedComment: note.comment,
    });

    return (
        <div className={noteStyles.container}>
            <NoteFavoriteButton isFavorite={note.isFavorite} noteId={note.id} />
            <VerticalDivider />
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
            <VerticalDivider />
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
            <VerticalDivider />
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
                />
            )}
        </div>
    );
};

export default Note;
