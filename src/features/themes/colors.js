const staticYellow = "#E2C044";
const staticBlue = "#3C91E6";
const staticGreen = "#4BB084";
const lightNeutral = "#373325";
const darkNeutral = "#FFFFFF";

const colors = {
    static: {
        primaryYellow100: staticYellow,
        primaryYellow10: staticYellow + "1A",
        primaryBlue100: staticBlue,
        primaryBlue10: staticBlue + "1A",
        primaryGreen100: staticGreen,
        primaryGreen10: staticGreen + "1A",
        errorRed: "#E24444",
        neutralGray: "#CDCCC8",
    },
    light: {
        neutral100: lightNeutral,
        neutral75: lightNeutral + "BF",
        neutral50: lightNeutral + "80",
        neutral25: lightNeutral + "40",
        neutral10: lightNeutral + "1A",
        neutral5: lightNeutral + "0D",
        inverse100: darkNeutral,
        scroll: "#E1E0DE",
        spinner: "#F5F5F4",
    },
    dark: {
        neutral100: darkNeutral,
        neutral75: darkNeutral + "BF",
        neutral50: darkNeutral + "80",
        neutral25: darkNeutral + "40",
        neutral10: darkNeutral + "1A",
        neutral5: darkNeutral + "0D",
        inverse100: lightNeutral,
        scroll: "#555246",
        spinner: "#413D30",
    },
};

export default colors;
