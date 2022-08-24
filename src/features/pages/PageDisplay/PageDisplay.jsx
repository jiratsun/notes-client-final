import React from "react";
import { useSelector } from "react-redux";
import useTheme from "../../themes/useTheme";

import { selectCurrentPage, selectPageStatus } from "../pagesSlice";
import pageDisplayStyles from "./PageDisplay.module.css";

const PageDisplay = ({ show }) => {
    const currentPage = useSelector(selectCurrentPage);
    const pageStatus = useSelector(selectPageStatus);
    const [theme] = useTheme();
    return (
        <div
            className={pageDisplayStyles.container}
            style={{ backgroundColor: theme.neutral10 }}
            onClick={() => show(true)}>
            <button className={pageDisplayStyles.btn}>
                <i
                    className={`bi bi-list ${pageDisplayStyles.icon}`}
                    style={{ color: theme.neutral100 }}
                />
            </button>
            {pageStatus === "fulfilled" && (
                <h4
                    className="fs-800 fw-bold"
                    style={{ color: theme.neutral100 }}>
                    {currentPage}
                </h4>
            )}
        </div>
    );
};

export default PageDisplay;
