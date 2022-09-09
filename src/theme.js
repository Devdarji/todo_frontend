import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    typography: {
        fontFamily: "sans-serif",
        h1: {
            fontSize: "2.5rem",
        },
        h2: {
            fontSize: "1.625rem",
        },
        h3: {
            fontSize: "1.625rem",
        },
        body1: {
            fontSize: "1rem",
        },
        body2: {
            fontSize: "1rem",
        },
    },
    palette: {
        primary: {
            main: "#EC1968",
        },
        secondary: {
            main: "#0B3BA7",
        },
        popUpCloseHeader: {
            // color: "#034EA2",
            color: "#3a3b3f",
        },
    },
    components: {
        //   TextField
        MuiTextField: {
            defaultProps: {
                color: "secondary",
                fullWidth: true,
                autoComplete: "off",
            },
            styleOverrides: {
                root: {
                    "& .Mui-disabled": {
                        background: "#f6f6f6",
                        pointerEvents: "none",
                    },
                },
            },
        },
        // FormControl
        MuiFormControl: {
            defaultProps: {
                fullWidth: true,
                color: "secondary",
            },
        },
        // Menu Item
        MuiMenuItem: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#F1F9FF",
                    },
                    "&.Mui-selected": {
                        backgroundColor: "#f1f9ff",
                    },
                },
            },
        },
        // Button
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
                fullWidth: true,
                variant: "contained",
                color: "primary",
                size: "large",
            },
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    textTransform: "none",
                    padding: "14px 22px",
                },
                containedPrimary: {
                    "&:hover": {
                        backgroundColor: "var(--primary-hover)",
                    },
                },
                outlinedPrimary: {
                    backgroundColor: "var(--white)",
                    "&:hover": {
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                    },
                },
            },
        },
    },
});

export default theme;
