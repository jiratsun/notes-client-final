import React from "react";
import { useDispatch } from "react-redux";

import NoteSortButton from "../NoteSortButton";

import noteHeaderStyles from "./NoteHeader.module.css";
import colors from "../../themes/colors";
import { swapMain } from "../notesSlice";

const NoteHeader = ({ status, sortUp, setSortUp, hide, color }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={noteHeaderStyles.header}
            style={{
                backgroundColor: colors.static[`primary${color}100`],
                height: hide ? "1.6rem" : "3.2rem",
                justifyContent: hide ? "center" : "space-between",
            }}
            onClick={() => dispatch(swapMain(status))}>
            <h2
                className={`${hide ? "fs-400" : "fs-600"} fw-bold`}
                style={{ color: colors.dark.neutral100 }}>
                {status}
            </h2>
            {!hide && <NoteSortButton sortUp={sortUp} setSortUp={setSortUp} />}
        </div>
    );
};

export default NoteHeader;
