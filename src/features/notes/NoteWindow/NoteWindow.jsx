import React, { useEffect, useRef, useState } from "react";

import ScrollProgressBar from "../../../components/ScrollProgressBar";
import NoteHeader from "../NoteHeader";
import NotesList from "../NotesList";

import noteWindowStyles from "./NoteWindow.module.css";
import useTheme from "../../themes/useTheme";

const NoteWindow = ({ status }) => {
    const [scroll, setScroll] = useState(0);
    const [sortUp, setSortUp] = useState(false);
    const prevScroll = useRef(0);
    const [theme] = useTheme();

    useEffect(() => {
        prevScroll.current = scroll;
    }, [scroll]);

    const scrollChange = scroll - prevScroll.current;
    const isUncertain = status === "uncertain";

    return (
        <div
            className={noteWindowStyles.container}
            style={{ backgroundColor: theme.neutral5 }}>
            <NoteHeader
                isUncertain={isUncertain}
                sortUp={sortUp}
                setSortUp={setSortUp}
                hide={scrollChange > 0}
            />
            {status === "current" ? (
                <></>
            ) : (
                <NotesList
                    setScroll={setScroll}
                    isUncertain={isUncertain}
                    sortUp={sortUp}
                />
            )}
            <ScrollProgressBar
                color={isUncertain ? "Yellow" : "Green"}
                scrollPercentage={scroll}
            />
        </div>
    );
};

export default NoteWindow;
