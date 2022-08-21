import React from "react";

import VerticalDivider from "../../../components/VerticalDivider";

import colors from "../../themes/colors";
import useTheme from "../../themes/useTheme";
import noteInputStyles from "./NoteInput.module.css";

const NoteInput = ({ type, value, setValue, error }) => {
    const [theme] = useTheme();
    return (
        <div
            className={noteInputStyles.container}
            style={{
                backgroundColor: theme.neutral5,
                border: error ? `2px solid ${colors.static.errorRed}` : "none",
            }}>
            <h1
                className="fs-500 fw-bold"
                style={{
                    color: theme.neutral100,
                }}>
                {type}
            </h1>
            <VerticalDivider
                height={"1.2rem"}
                width={"2px"}
                color={theme.neutral100}
            />
            <input
                className={`fs-400 ${noteInputStyles.input}`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    color: theme.neutral100,
                }}
            />
            <button
                className={noteInputStyles.btn}
                onClick={() => setValue("")}>
                <i
                    className={`bi bi-x-lg ${noteInputStyles.icon}`}
                    style={{
                        color: theme.neutral100,
                    }}
                />
            </button>
            {error && (
                <p
                    className={`fs-200 ${noteInputStyles.error}`}
                    style={{
                        backgroundColor: colors.static.errorRed,
                        color: colors.dark.neutral100,
                    }}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default NoteInput;
