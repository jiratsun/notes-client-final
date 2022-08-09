import React from "react";

import colors from "../../themes/colors";
import noteFavoriteButtonStyles from "./NoteFavoriteButton.module.css";

const NoteFavoriteButton = ({ isFavorite, onClick }) => {
    return (
        <button className={noteFavoriteButtonStyles.btn} onClick={onClick}>
            <i
                className={`${
                    isFavorite
                        ? "bi bi-bookmark-star-fill"
                        : "bi bi-bookmark-star"
                } ${noteFavoriteButtonStyles.icon}`}
                style={{
                    color: colors.light.neutral100,
                }}
            />
        </button>
    );
};

export default NoteFavoriteButton;
