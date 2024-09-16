import React from "react";
import Navigations from "../../components/navigations";
import { Divider, ThemeProvider } from "@mui/material";
import { theme } from "../../theme";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigations />
      <Divider />
      {children}
    </ThemeProvider>
  );
}
