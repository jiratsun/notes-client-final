import React from "react";

import VerticalDivider from "../../../components/VerticalDivider";

import noteInfoStyles from "./NoteInfo.module.css";

const NoteInfo = ({ height, width, color, left, gap, right }) => {
    return (
        <div className={noteInfoStyles.container} style={{ gap }}>
            {left}
            <VerticalDivider height={height} width={width} color={color} />
            {right}
        </div>
    );
};

export default NoteInfo;
