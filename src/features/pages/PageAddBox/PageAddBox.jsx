import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../../../components/IconButton";
import NoteInput from "../../notes/NoteInput/NoteInput";

import colors from "../../themes/colors";
import { createPage, selectCollectionNames } from "../pagesSlice";
import pageAddBoxStyles from "./PageAddBox.module.css";

const PageAddBox = () => {
    const [pageName, setPageName] = useState("");
    const [error, setError] = useState(null);
    const collectionNames = useSelector(selectCollectionNames);
    const dispatch = useDispatch();

    return (
        <div className={pageAddBoxStyles.container}>
            <NoteInput
                type="Name"
                value={pageName}
                setValue={(value) => {
                    setPageName(value);
                    setError(null);
                }}
                error={error}
            />
            <IconButton
                size="2.3rem"
                icon="bi bi-plus-lg"
                iconColor={colors.dark.neutral100}
                backgroundColor={colors.static.primaryGreen100}
                onClick={() => {
                    if (collectionNames.has(pageName.trim()))
                        setError("Page Duplicated");
                    else if (pageName === "") setError("Name Required");
                    else {
                        dispatch(createPage({ pageName: pageName.trim() }));
                        setPageName("");
                    }
                }}
            />
        </div>
    );
};

export default PageAddBox;
