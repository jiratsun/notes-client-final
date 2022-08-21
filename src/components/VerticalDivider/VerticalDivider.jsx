import React from "react";

import verticalDividerStyles from "./VerticalDivider.module.css";

const VerticalDivider = ({ height, width, color }) => {
    return (
        <div
            className={verticalDividerStyles.divider}
            style={{
                backgroundColor: color,
                height,
                width,
            }}></div>
    );
};

VerticalDivider.defaultProps = {
    height: "16px",
    width: "2px",
};

export default VerticalDivider;
