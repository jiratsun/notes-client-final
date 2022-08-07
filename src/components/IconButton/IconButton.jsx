import React from "react";
import iconButtonStyles from "./IconButton.module.css";

const IconButton = ({ size, icon, iconColor, backgroundColor, onClick }) => {
    return (
        <button
            className={iconButtonStyles.btn}
            style={{
                width: size,
                height: size,
                fontSize: size,
                backgroundColor,
            }}
            onClick={onClick}>
            <i
                className={`${icon} ${iconButtonStyles.icon}`}
                style={{ color: iconColor }}
            />
        </button>
    );
};

export default IconButton;
