import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../../../components/Spinner";
import Divider from "../../../components/Divider";
import Page from "../Page";

import colors from "../../themes/colors";
import { selectPageIds, selectPageStatus } from "../pagesSlice";
import { selectMain } from "../../notes/notesSlice";
import pagesListStyles from "./PagesList.module.css";
import useTheme from "../../themes/useTheme";

const PagesList = ({ hide }) => {
    const [theme] = useTheme();
    const pageStatus = useSelector(selectPageStatus);
    const pageIds = useSelector(selectPageIds);
    const main = useSelector(selectMain);

    let color;
    if (main === "Certain") color = colors.static.primaryGreen100;
    else if (main === "Uncertain") color = colors.static.primaryYellow100;
    else color = colors.static.primaryBlue100;

    return (
        <div
            className={pagesListStyles.container}
            style={{ backgroundColor: theme.neutral5 }}>
            <Spinner hide={pageStatus === "fulfilled"} color={color} />
            {pageStatus === "fulfilled" && (
                <ul className={pagesListStyles.list}>
                    <li>
                        <Divider />
                    </li>
                    {pageIds.map((pageId) => (
                        <li key={pageId}>
                            <Page pageId={pageId} hide={hide} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default React.memo(PagesList);
