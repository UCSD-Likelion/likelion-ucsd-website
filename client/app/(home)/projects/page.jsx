import React from "react";
import { Box, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        px: "1rem",
        py: "1rem",
      }}
    >
      <Typography variant="h1">Projects</Typography>
    </Box>
  );
}
