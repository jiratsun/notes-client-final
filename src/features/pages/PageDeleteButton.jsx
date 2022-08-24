import React, { useState } from "react";
import { useDispatch } from "react-redux";

import IconButton from "../../components/IconButton";

import colors from "../themes/colors";
import { removePage } from "../pages/pagesSlice";

const onFirstClick = (setConfirm) => {
    setConfirm(true);
    setTimeout(() => {
        setConfirm(false);
    }, 1000);
};

const onConfirmClick = (dispatch, pageId) => {
    dispatch(removePage(pageId));
};

const PageDeleteButton = ({ pageId }) => {
    const [confirm, setConfirm] = useState(false);
    const dispatch = useDispatch();

    return confirm ? (
        <IconButton
            size="1.6rem"
            icon="bi bi-check-lg"
            iconColor={colors.dark.neutral100}
            backgroundColor={colors.static.errorRed}
            onClick={() => onConfirmClick(dispatch, pageId)}
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

export default PageDeleteButton;
