import React from "react";

import colors from "../../features/themes/colors";
import useTheme from "../../features/themes/useTheme";
import scrollProgressBarStyles from "./ScrollProgressBar.module.css";

const ScrollProgressBar = ({ color, scrollPercentage }) => {
    const [theme] = useTheme();
    return (
        <div
            className={scrollProgressBarStyles.bar}
            style={{
                backgroundColor: theme.scroll,
            }}>
            <div
                className={scrollProgressBarStyles.progress}
                style={{
                    backgroundColor: colors.static[`primary${color}100`],
                    width: `${scrollPercentage}%`,
                }}></div>
        </div>
    );
};

export default ScrollProgressBar;
