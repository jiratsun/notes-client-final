import React from "react";

import useTheme from "../../features/themes/useTheme";
import dividerStyles from "./Divider.module.css";

const Divider = () => {
    const [theme] = useTheme();
    return (
        <div
            className={dividerStyles.divider}
            style={{ backgroundColor: theme.neutral10 }}></div>
    );
};

export default Divider;
