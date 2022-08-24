import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import NoteInfo from "../../features/notes/NoteInfo";
import Logo from "../Logo";
import PageDisplay from "../../features/pages/PageDisplay/PageDisplay";

import {
    selectLatestDate,
    selectNumberOfNotes,
} from "../../features/notes/notesSlice";
import colors from "../../features/themes/colors";
import useTheme from "../../features/themes/useTheme";
import headerStyles from "./Header.module.css";
import {
    editPage,
    selectCurrentNoUpdateDate,
    selectCurrentPageId,
} from "../../features/pages/pagesSlice";
import PageWindow from "../../features/pages/PageWindow/PageWindow";

const Header = () => {
    const [theme] = useTheme();
    const [showModal, setShowModal] = useState(false);
    const numberOfNotes = useSelector(selectNumberOfNotes);
    const currentPageId = useSelector(selectCurrentPageId);
    const latestDate = new Date(useSelector(selectLatestDate));
    const noUpdateDate = new Date(useSelector(selectCurrentNoUpdateDate));
    const dispatch = useDispatch();

    return (
        <div className={headerStyles.container}>
            <NoteInfo
                height={"2rem"}
                width={"2px"}
                color={theme.neutral75}
                gap={"1.2rem"}
                left={<Logo />}
                right={<PageDisplay show={setShowModal} />}
            />
            {showModal && <PageWindow hide={setShowModal} />}
            <div className={headerStyles.container}>
                <NoteInfo
                    height={"1.2rem"}
                    width={"2px"}
                    color={theme.neutral75}
                    gap={"0.8rem"}
                    left={
                        <h3
                            className="fs-700 fw-light"
                            style={{ color: theme.neutral100 }}>
                            Total Notes
                        </h3>
                    }
                    right={
                        <h1
                            className="fs-500 fw-bold"
                            style={{
                                color: theme.neutral100,
                            }}>{`${numberOfNotes} Entries`}</h1>
                    }
                />
                <NoteInfo
                    height={"1.2rem"}
                    width={"2px"}
                    color={theme.neutral75}
                    gap={"0.8rem"}
                    left={
                        <h3
                            className="fs-700 fw-light"
                            style={{ color: theme.neutral100 }}>
                            Last Updated
                        </h3>
                    }
                    right={
                        <h1
                            className="fs-500 fw-bold"
                            style={{ color: theme.neutral100 }}>{`${
                            noUpdateDate > latestDate
                                ? noUpdateDate.toLocaleString()
                                : latestDate.toLocaleString()
                        }`}</h1>
                    }
                />
                <button
                    className={headerStyles.btn}
                    style={{
                        backgroundColor: colors.static.primaryBlue100,
                        color: colors.dark.neutral100,
                    }}
                    onClick={() =>
                        dispatch(
                            editPage({
                                pageId: currentPageId,
                                update: { noUpdateDate: new Date() },
                            })
                        )
                    }>
                    <h2 className="fs-600 fw-bold">No Update</h2>
                </button>
            </div>
        </div>
    );
};

export default Header;
