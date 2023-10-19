// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: ["768px", "1200px"],
  typography: {
    fontFamily: "Metropolis Regular",
  },
  styleOverrides: {
    "& .custom-box": {
      backgroundColor: "lightblue",
      padding: "16px",
      border: "2px solid #007BFF",
      borderRadius: "8px",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "200px",
          "&.MuiTabs-vertical": {
            "& .MuiTab-root": {
              marginLeft: "5px",
              "&:not(:last-of-type)": {
                marginBottom: "10px",
              },
            },
          },
          "& .MuiTabs-indicator": {
            left: 0,
            backgroundColor: "#6300DF",
            borderRadius: "8px",
            width: "5px",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: "6px 10px",
          borderRadius: "8px",
          color: "#333333",
          fontSize: "16px",
          fontWeight: "medium",
          textTransform: "initial",
          minHeight: "32px",
          alignItems: "flex-start",

          "&.Mui-selected": {
            backgroundColor: "#E0E0E0",
            color: "#333333",
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          // Apply a custom class name
          "&.custom-box": {
            backgroundColor: "lightblue",
            padding: "16px",
            border: "2px solid #007BFF",
            borderRadius: "8px",
          },
        },
      },
    },
  },
});

export default theme;
