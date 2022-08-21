import React from "react";

import NoteInfo from "../NoteInfo";

import colors from "../../themes/colors";
import noteTooltipStyles from "./NoteTooltip.module.css";

const left = (value) => (
    <p
        className="fs-200"
        style={{
            color: colors.dark.neutral100,
        }}>
        {value}
    </p>
);
const right = (value) => (
    <p
        className="fs-400"
        style={{
            color: colors.dark.neutral100,
        }}>
        {value}
    </p>
);

const NoteTooltip = ({ show, info, backgroundColor }) => {
    return (
        show && (
            <div
                className={noteTooltipStyles.container}
                style={{ backgroundColor }}>
                {Object.keys(info).map((key) => {
                    return (
                        <NoteInfo
                            key={key}
                            height={"1.2rem"}
                            width={"1px"}
                            color={colors.dark.neutral100}
                            gap={"0.4rem"}
                            left={left(key)}
                            right={right(info[key])}
                        />
                    );
                })}
            </div>
        )
    );
};

export default NoteTooltip;
