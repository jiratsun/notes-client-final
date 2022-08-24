import React from "react";
import { useSelector } from "react-redux";

import { selectMain } from "../../notes/notesSlice";
import colors from "../../themes/colors";
import pageHeaderStyles from "./PageHeader.module.css";

const PageHeader = () => {
    const main = useSelector(selectMain);

    let color;
    if (main === "Certain") color = colors.static.primaryGreen100;
    else if (main === "Uncertain") color = colors.static.primaryYellow100;
    else color = colors.static.primaryBlue100;

    return (
        <div
            className={pageHeaderStyles.header}
            style={{ backgroundColor: color }}>
            <h2
                className="fs-600 fw-bold"
                style={{ color: colors.dark.neutral100 }}>
                Pages
            </h2>
        </div>
    );
};

export default PageHeader;
