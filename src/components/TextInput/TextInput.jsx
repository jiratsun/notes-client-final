import React from "react";

import useTheme from "../../features/themes/useTheme";
import textInputStyles from "./TextInput.module.css";

const TextInput = ({ value, setValue, backgroundColor }) => {
    const [theme] = useTheme();

    return (
        <input
            className={`fs-400 ${textInputStyles.input}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            style={{ color: theme.neutral100, backgroundColor }}
        />
    );
};

export default TextInput;
