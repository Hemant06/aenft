import { createTheme } from "@mui/material";
import typography from "./typography";

export const theme = createTheme({
  typography,
  overrides: {
    MuiTextField: {
      root: {
        "& .MuiInputBase": {
          "& .MuiOutlinedInput": {
            color: "red !important", // Your desired color here
          },
        },
      },
    },
  },
  palette: {
    Primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#de0d0d",
    },
    success: {
      main: "#2e7d32",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              // background: "#0052FF",
              // color: "#ffff",
              padding: "11px 17px",
              fontSize: "16px",
              fontFamily: "Poppins ,sans-serif",
              borderRadius: "4px",
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              color: "#fff",
              borderRadius: "20px",
              textTransform: "none",
            }),
        }),
      },
    },
  },
});
