
const colors = (themeName) => {
    switch (themeName) {
        case "black":
            return black;

        case "standard":
            return standard;

        case "blue":
            return blue;

        default:
            return standard;
    };
};

const base = {
    breakpoints: {
        mobileMax: "719px",
    },
};

const black = {
    background: "#eee",
    primary: "#839788",
    secondary: "#000000",
    textPrimary: "#EEE0CB",
    textSecondary: "#EEE0CB",
    special: "#000000",
};

const standard = {
    background: "#eee",
    primary: "#0C120C",
    secondary: "#6D7275",
    textPrimary: "#C7D6D5",
    textSecondary: "#ECEBF3",
    special: "#C20114",
};

const blue = {
    background: "#eee",
    primary: "#605F5E",
    secondary: "#0A2463",
    textPrimary: "#E2E2E2",
    textSecondary: "#E2E2E2",
    special: "#FB3640",
};

const Theme = (themeName) => ({
    ...base,
    colors: colors(themeName),
});

export default Theme;
