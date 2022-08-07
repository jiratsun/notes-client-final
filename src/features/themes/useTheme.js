import { useDispatch, useSelector } from "react-redux";

import { selectTheme, toggleTheme } from "./themesSlice";
import colors from "./colors";

const useTheme = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleTheme());
    };

    return [colors[theme], toggle];
};

export default useTheme;
