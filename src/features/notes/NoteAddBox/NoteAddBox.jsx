import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NoteInput from "../NoteInput/NoteInput";

import colors from "../../themes/colors";
import noteAddBoxStyles from "./NoteAddBox.module.css";
import { createNote, selectTitles } from "../notesSlice";
import { selectCurrentCollection } from "../../pages/pagesSlice";

const create = (dispatch, collectionName, note, setTitle, setComment) => {
    dispatch(createNote({ collectionName, note }));
    setTitle("");
    setComment("");
};

const NoteAddBox = () => {
    const titles = useSelector(selectTitles);
    const currentCollection = useSelector(selectCurrentCollection);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    return (
        <div className={noteAddBoxStyles.container}>
            <NoteInput
                type="Title"
                value={title}
                setValue={(value) => {
                    setTitle(value);
                    setError(null);
                }}
                error={error}
            />
            <button
                className={`${noteAddBoxStyles.btn} fs-300 fw-bold`}
                style={{
                    backgroundColor: colors.static.primaryGreen100,
                    color: colors.dark.neutral100,
                }}
                onClick={() => {
                    if (titles.has(title.trim())) setError("Title Duplicated");
                    else if (title === "") setError("Title Required");
                    else
                        create(
                            dispatch,
                            currentCollection,
                            {
                                title: title.trim(),
                                comment: comment.trim(),
                                isCertain: true,
                            },
                            setTitle,
                            setComment
                        );
                }}>
                Certain
            </button>
            <NoteInput type="Comment" value={comment} setValue={setComment} />
            <button
                className={`${noteAddBoxStyles.btn} fs-300 fw-bold`}
                style={{
                    backgroundColor: colors.static.primaryYellow100,
                    color: colors.dark.neutral100,
                }}
                onClick={() => {
                    if (titles.has(title)) setError("Title Duplicated");
                    else if (title === "") setError("Title Required");
                    else
                        create(
                            dispatch,
                            currentCollection,
                            {
                                title: title.trim(),
                                comment: comment.trim(),
                                isCertain: false,
                            },
                            setTitle,
                            setComment
                        );
                }}>
                Uncertain
            </button>
        </div>
    );
};

export default NoteAddBox;
