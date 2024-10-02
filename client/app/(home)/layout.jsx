import React from "react";
import Navigations from "../../components/navigations";
import { Box, Divider, ThemeProvider } from "@mui/material";
import { theme } from "../../theme";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Navigations />
        <Divider />
        {children}
      </Box>
    </ThemeProvider>
  );
}
