import React from "react";
import ReactDOM from "react-dom";

import PageHeader from "../PageHeader";
import PagesList from "../PagesList/PagesList";
import PageAddBox from "../PageAddBox";

import colors from "../../themes/colors";
import pageWindowStyles from "./PageWindow.module.css";
import useTheme from "../../themes/useTheme";

const PageWindow = ({ hide }) => {
    const [theme] = useTheme();
    return ReactDOM.createPortal(
        <div
            className={pageWindowStyles.container}
            style={{ backgroundColor: colors.light.neutral75 }}
            onClick={() => hide(false)}>
            <div
                className={pageWindowStyles.modal}
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: theme.inverse100 }}>
                <PageHeader />
                <PagesList hide={hide} />
                <PageAddBox />
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default PageWindow;
