import React from "react";
import Navigations from "../../components/navigations";
import { Box, Divider, ThemeProvider, Grid } from "@mui/material";
import { theme } from "../../theme";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Grid item xs={12} style={{ position: "sticky", top: 0, zIndex: 2000 }}>
          <Navigations />
        </Grid>
        <Divider />
        <Grid
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box component="main" minHeight="100vh">
            {children}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
