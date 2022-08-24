import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "../../../components/IconButton";
import Divider from "../../../components/Divider";
import TextInput from "../../../components/TextInput";
import PageDeleteButton from "../PageDeleteButton";

import colors from "../../themes/colors";
import pageStyles from "./Page.module.css";
import { changePage, editPage, selectPageById } from "../pagesSlice";
import { selectNoteStatus } from "../../notes/notesSlice";
import useTheme from "../../themes/useTheme";

const Page = ({ pageId, hide }) => {
    const dispatch = useDispatch();
    const page = useSelector((state) => selectPageById(state, pageId));
    const noteStatus = useSelector(selectNoteStatus);
    const [isEditing, setIsEditing] = useState(false);
    const [pageName, setPageName] = useState(page.pageName);
    const [theme] = useTheme();

    return (
        <>
            <div className={pageStyles.container}>
                <i
                    className={`bi bi-folder ${pageStyles.icon}`}
                    style={{ color: theme.neutral100 }}
                />
                {isEditing ? (
                    <TextInput
                        value={pageName}
                        setValue={setPageName}
                        backgroundColor={theme.neutral5}
                    />
                ) : (
                    <p
                        className="fs-400"
                        onClick={() => {
                            if (noteStatus === "fulfilled") {
                                dispatch(changePage(pageId));
                                hide(false);
                            }
                        }}
                        style={{ color: theme.neutral100 }}>
                        {page.pageName}
                    </p>
                )}
                {isEditing ? (
                    <div className={pageStyles.btns}>
                        <IconButton
                            size="1.6rem"
                            icon="bi bi-check-lg"
                            iconColor={colors.dark.neutral100}
                            backgroundColor={colors.static.primaryGreen100}
                            onClick={() => {
                                dispatch(
                                    editPage({
                                        pageId,
                                        update: { pageName: pageName.trim() },
                                    })
                                );
                                setPageName((prev) => prev.trim());
                                setIsEditing(false);
                            }}
                        />
                        <IconButton
                            size="1.6rem"
                            icon="bi bi-x-lg"
                            iconColor={colors.dark.neutral100}
                            backgroundColor={colors.static.errorRed}
                            onClick={() => {
                                setPageName(page.pageName);
                                setIsEditing(false);
                            }}
                        />
                    </div>
                ) : (
                    <div className={pageStyles.btns}>
                        <IconButton
                            size="1.6rem"
                            icon="bi bi-pen"
                            iconColor={colors.light.neutral100}
                            backgroundColor={colors.static.neutralGray}
                            onClick={(e) => setIsEditing(true)}
                        />
                        <PageDeleteButton pageId={pageId} />
                    </div>
                )}
            </div>
            <Divider />
        </>
    );
};

export default Page;
