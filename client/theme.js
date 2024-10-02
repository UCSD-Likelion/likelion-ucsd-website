"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      secondary: "#fff",
      background: "#012A4D",
      white: "#fff",
    },
  },
  typography: {
    fontFamily: "var(--font-gmarket)",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
});
