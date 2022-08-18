import React from "react";

import noteHeaderStyles from "./NoteHeader.module.css";
import colors from "../../themes/colors";
import NoteSortButton from "../NoteSortButton";

const NoteHeader = ({ isUncertain, sortUp, setSortUp, hide }) => {
    const color = isUncertain ? "Yellow" : "Green";

    return (
        <div
            className={noteHeaderStyles.header}
            style={{
                backgroundColor: colors.static[`primary${color}100`],
                height: hide ? "1.6rem" : "3.2rem",
                justifyContent: hide ? "center" : "space-between",
            }}>
            <h2
                className={`${hide ? "fs-400" : "fs-600"}`}
                style={{ color: colors.dark.neutral100 }}>
                {isUncertain ? "Uncertain" : "Certain"}
            </h2>
            {!hide && <NoteSortButton sortUp={sortUp} setSortUp={setSortUp} />}
        </div>
    );
};

export default NoteHeader;
