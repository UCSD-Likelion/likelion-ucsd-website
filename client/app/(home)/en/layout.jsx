import React from "react";
import Navigations from "../../../components/navigationsen";
import { Box, Divider, ThemeProvider } from "@mui/material";
import { theme } from "../../../theme";

export const metadata = {
  title: "Likelion UCSD | Home",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Navigations />
        <Divider />
        {children}
      </Box>
    </ThemeProvider>
  );
}
