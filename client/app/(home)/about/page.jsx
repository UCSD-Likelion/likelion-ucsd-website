import React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">About</Typography>
    </Box>
  );
}
