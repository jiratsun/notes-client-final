import React from "react";

import colors from "../../themes/colors";
import noteSortButtonStyles from "./NoteSortButton.module.css";

const NoteSortButton = ({ sortUp, setSortUp }) => {
    return (
        <button
            className={noteSortButtonStyles.btn}
            onClick={() => setSortUp((prev) => !prev)}>
            <i
                className={`${sortUp ? "bi bi-sort-up" : "bi bi-sort-down"} ${
                    noteSortButtonStyles.icon
                }`}
                style={{
                    color: colors.dark.neutral100,
                }}
            />
        </button>
    );
};

export default NoteSortButton;
