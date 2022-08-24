import React from "react";

import { useSelector } from "react-redux";
import { selectMain } from "../features/notes/notesSlice";
import colors from "../features/themes/colors";
import useTheme from "../features/themes/useTheme";

const Logo = () => {
    const [theme, toggleTheme] = useTheme();
    const main = useSelector(selectMain);

    let color;
    if (main === "Certain") color = colors.static.primaryGreen100;
    else if (main === "Uncertain") color = colors.static.primaryYellow100;
    else color = colors.static.primaryBlue100;

    return (
        <svg
            width="6em"
            height="1.85em"
            viewBox="0 0 120 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleTheme}>
            <g id="Circle" fill={color}>
                <path d="M40.3867 35.4321C38.1034 34.8203 35.963 33.7648 34.0877 32.3258C32.2124 30.8868 30.6389 29.0925 29.457 27.0454C28.2751 24.9983 27.5079 22.7385 27.1994 20.3949C26.8909 18.0513 27.047 15.6699 27.6587 13.3867C28.2705 11.1034 29.3261 8.96303 30.7651 7.0877C32.204 5.21238 33.9983 3.63885 36.0454 2.45695C38.0925 1.27506 40.3524 0.50794 42.6959 0.199403C45.0395 -0.109134 47.4209 0.0469514 49.7042 0.658746L40.3867 35.4321Z" />
                <path d="M49.1251 0.513887C51.4738 1.06043 53.6886 2.07331 55.6383 3.49239C57.5879 4.91147 59.2325 6.70781 60.4744 8.77477C61.7164 10.8417 62.5304 13.1372 62.868 15.5248C63.2057 17.9124 63.0602 20.3435 62.4402 22.6738C61.8201 25.0041 60.7382 27.1861 59.2586 29.0902C57.779 30.9943 55.9318 32.5816 53.8269 33.7581C51.7219 34.9345 49.4021 35.6759 47.005 35.9385C44.608 36.201 42.1826 35.9792 39.8729 35.2863L41.0109 31.4933C42.8124 32.0338 44.7042 32.2068 46.5739 32.002C48.4436 31.7972 50.2531 31.2189 51.895 30.3013C53.5368 29.3837 54.9776 28.1455 56.1317 26.6603C57.2858 25.1752 58.1297 23.4732 58.6133 21.6556C59.097 19.838 59.2105 17.9417 58.9471 16.0793C58.6837 14.217 58.0488 12.4265 57.08 10.8143C56.1113 9.20209 54.8285 7.80094 53.3078 6.69406C51.7871 5.58718 50.0595 4.79714 48.2276 4.37083L49.1251 0.513887Z" />
            </g>
            <g id="Text" fill={theme.neutral100}>
                <path d="M77.4277 31H71.9785V9.83594H65V5.30078L84.7793 5.30078V9.83594H77.4277V31Z" />
                <path d="M99.3145 31H84.5137V5.30078H99.3145V9.76562H89.9629V15.4082H98.6641V19.873H89.9629V26.5H99.3145V31Z" />

                <path d="M23.0332 31H16.1074L4.92773 11.5586H4.76953C4.81641 12.3672 4.85742 13.1816 4.89258 14.002C4.92773 14.8223 4.96289 15.6426 4.99805 16.4629C5.0332 17.2715 5.06836 18.0859 5.10352 18.9062V31H0.234375V5.30078H7.10742L18.2695 24.5488H18.3926C18.3691 23.752 18.3398 22.9609 18.3047 22.1758C18.2695 21.3906 18.2344 20.6055 18.1992 19.8203C18.1758 19.0352 18.1523 18.25 18.1289 17.4648V5.30078H23.0332V31Z" />
                <path d="M119.752 23.8633C119.752 25.3867 119.383 26.7109 118.645 27.8359C117.906 28.9609 116.828 29.8281 115.41 30.4375C114.004 31.0469 112.293 31.3516 110.277 31.3516C109.387 31.3516 108.514 31.293 107.658 31.1758C106.814 31.0586 106 30.8887 105.215 30.666C104.441 30.4316 103.703 30.1445 103 29.8047V24.7422C104.219 25.2812 105.484 25.7676 106.797 26.2012C108.109 26.6348 109.41 26.8516 110.699 26.8516C111.59 26.8516 112.305 26.7344 112.844 26.5C113.395 26.2656 113.793 25.9434 114.039 25.5332C114.285 25.123 114.408 24.6543 114.408 24.127C114.408 23.4824 114.191 22.9316 113.758 22.4746C113.324 22.0176 112.727 21.5898 111.965 21.1914C111.215 20.793 110.365 20.3652 109.416 19.9082C108.818 19.627 108.168 19.2871 107.465 18.8887C106.762 18.4785 106.094 17.9805 105.461 17.3945C104.828 16.8086 104.307 16.0996 103.896 15.2676C103.498 14.4238 103.299 13.416 103.299 12.2441C103.299 10.709 103.65 9.39648 104.354 8.30664C105.057 7.2168 106.059 6.38477 107.359 5.81055C108.672 5.22461 110.219 4.93164 112 4.93164C113.336 4.93164 114.607 5.08984 115.814 5.40625C117.033 5.71094 118.305 6.15625 119.629 6.74219L117.871 10.9785C116.688 10.498 115.627 10.1289 114.689 9.87109C113.752 9.60156 112.797 9.4668 111.824 9.4668C111.145 9.4668 110.564 9.57812 110.084 9.80078C109.604 10.0117 109.24 10.3164 108.994 10.7148C108.748 11.1016 108.625 11.5527 108.625 12.0684C108.625 12.6777 108.801 13.1934 109.152 13.6152C109.516 14.0254 110.055 14.4238 110.77 14.8105C111.496 15.1973 112.398 15.6484 113.477 16.1641C114.789 16.7852 115.908 17.4355 116.834 18.1152C117.771 18.7832 118.492 19.5742 118.996 20.4883C119.5 21.3906 119.752 22.5156 119.752 23.8633Z" />
            </g>
        </svg>
    );
};

export default Logo;
