import React from "react";
import useTheme from "../../features/themes/useTheme";

import verticalDividerStyles from "./VerticalDivider.module.css";

const VerticalDivider = () => {
    const [theme] = useTheme();
    return (
        <div
            className={verticalDividerStyles.divider}
            style={{ backgroundColor: theme.neutral25 }}></div>
    );
};

export default VerticalDivider;
