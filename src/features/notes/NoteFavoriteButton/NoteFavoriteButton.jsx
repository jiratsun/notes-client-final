import React from "react";
import { useDispatch } from "react-redux";

import colors from "../../themes/colors";
import noteFavoriteButtonStyles from "./NoteFavoriteButton.module.css";
import { editNote } from "../notesSlice";

const onClick = (dispatch, collectionName, noteId, update) => {
    dispatch(editNote({ collectionName, noteId, update }));
};

const NoteFavoriteButton = ({ isFavorite, noteId }) => {
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
                    color: colors.light.neutral100,
                }}
            />
        </button>
    );
};

export default NoteFavoriteButton;
