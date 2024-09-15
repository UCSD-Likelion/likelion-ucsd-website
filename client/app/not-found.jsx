import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page Not Found</Typography>
      <Link href="/">
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "fit-content",
            padding: "0.5rem 1rem",
            marginTop: "1rem",
          }}
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
