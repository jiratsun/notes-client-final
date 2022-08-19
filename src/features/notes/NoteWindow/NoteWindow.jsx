import React, { useEffect, useRef, useState } from "react";

import ScrollProgressBar from "../../../components/ScrollProgressBar";
import NoteHeader from "../NoteHeader";
import NotesList from "../NotesList";
import CurrentNotesList from "../CurrentNotesList/CurrentNotesList";

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

    let color;
    switch (status) {
        case "Certain":
            color = "Green";
            break;
        case "Uncertain":
            color = "Yellow";
            break;
        case "Current":
            color = "Blue";
            break;
        default:
            break;
    }

    return (
        <div
            className={noteWindowStyles.container}
            style={{ backgroundColor: theme.neutral5 }}>
            <NoteHeader
                status={status}
                sortUp={sortUp}
                setSortUp={setSortUp}
                hide={scrollChange > 0}
                color={color}
            />
            {status === "Current" ? (
                <CurrentNotesList setScroll={setScroll} sortUp={sortUp} />
            ) : (
                <NotesList
                    setScroll={setScroll}
                    sortUp={sortUp}
                    status={status}
                />
            )}
            <div className={noteWindowStyles.bar}>
                <ScrollProgressBar color={color} scrollPercentage={scroll} />
            </div>
        </div>
    );
};

export default NoteWindow;
