import React, { useState } from "react";

import useTheme from "../../themes/useTheme";
import noteTextStyles from "./NoteText.module.css";

const onClick = (setCopy, text) => {
    setCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        setCopy(false);
    }, 1000);
};

const NoteText = ({ text }) => {
    const [copy, setCopy] = useState(false);
    const [theme] = useTheme();

    return (
        <div
            className={`fs-400 ${noteTextStyles.container}`}
            onClick={() => onClick(setCopy, text)}>
            <p
                className={noteTextStyles.text}
                style={{ color: theme.neutral100 }}>
                {text}
            </p>
            <i
                className={`${
                    copy ? "bi bi-clipboard-fill" : "bi bi-clipboard"
                } ${noteTextStyles.icon}`}
                style={{ color: theme.neutral50 }}
            />
        </div>
    );
};

export default NoteText;
