import React from "react";
import { useDispatch } from "react-redux";

import noteFavoriteButtonStyles from "./NoteFavoriteButton.module.css";
import { editNote } from "../notesSlice";
import useTheme from "../../themes/useTheme";

const onClick = (dispatch, collectionName, noteId, update) => {
    dispatch(editNote({ collectionName, noteId, update }));
};

const NoteFavoriteButton = ({ isFavorite, noteId }) => {
    const [theme] = useTheme();
    const dispatch = useDispatch();

    return (
        <button
            className={noteFavoriteButtonStyles.btn}
            onClick={() =>
                onClick(dispatch, "test0", noteId, { isFavorite: !isFavorite })
            }>
            <i
                className={`${
                    isFavorite
                        ? "bi bi-bookmark-star-fill"
                        : "bi bi-bookmark-star"
                } ${noteFavoriteButtonStyles.icon}`}
                style={{
                    color: theme.neutral100,
                }}
            />
        </button>
    );
};

export default NoteFavoriteButton;
