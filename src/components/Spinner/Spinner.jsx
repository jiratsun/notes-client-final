import React, { useEffect, useState } from "react";

import useTheme from "../../features/themes/useTheme";
import spinnerStyles from "./Spinner.module.css";

const Spinner = ({ hide, color }) => {
    const [theme] = useTheme();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (hide) setTimeout(() => setVisible(false), 300);
        else setVisible(true);
    }, [hide, setVisible]);

    return (
        visible && (
            <div
                className={`${spinnerStyles.container}`}
                style={{
                    backgroundColor: theme.spinner,
                    opacity: hide ? "0" : "1",
                }}>
                <svg
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 37 37"
                    fill={color}
                    xmlns="http://www.w3.org/2000/svg">
                    <g className={spinnerStyles.spinner}>
                        <path d="M13.3867 35.4321C11.1034 34.8203 8.96303 33.7648 7.0877 32.3258C5.21238 30.8868 3.63885 29.0925 2.45695 27.0454C1.27506 24.9983 0.50794 22.7385 0.199403 20.3949C-0.109134 18.0513 0.0469512 15.6699 0.658746 13.3867C1.27054 11.1034 2.32606 8.96303 3.76505 7.0877C5.20404 5.21238 6.99831 3.63885 9.04541 2.45695C11.0925 1.27506 13.3524 0.50794 15.6959 0.199403C18.0395 -0.109134 20.4209 0.0469514 22.7042 0.658746L13.3867 35.4321Z" />
                        <path d="M22.1251 0.513887C24.4738 1.06043 26.6886 2.07331 28.6383 3.49239C30.5879 4.91147 32.2325 6.70781 33.4744 8.77477C34.7164 10.8417 35.5304 13.1372 35.868 15.5248C36.2057 17.9124 36.0602 20.3435 35.4402 22.6738C34.8201 25.0041 33.7382 27.1861 32.2586 29.0902C30.779 30.9943 28.9318 32.5816 26.8269 33.7581C24.7219 34.9345 22.4021 35.6759 20.005 35.9385C17.608 36.201 15.1826 35.9792 12.8729 35.2863L14.0109 31.4933C15.8124 32.0338 17.7042 32.2068 19.5739 32.002C21.4436 31.7972 23.2531 31.2189 24.895 30.3013C26.5368 29.3837 27.9776 28.1455 29.1317 26.6603C30.2858 25.1752 31.1297 23.4732 31.6133 21.6556C32.097 19.838 32.2105 17.9417 31.9471 16.0793C31.6837 14.217 31.0488 12.4265 30.08 10.8143C29.1113 9.20209 27.8285 7.80094 26.3078 6.69406C24.7871 5.58718 23.0595 4.79714 21.2276 4.37083L22.1251 0.513887Z" />
                    </g>
                </svg>
            </div>
        )
    );
};

export default Spinner;
