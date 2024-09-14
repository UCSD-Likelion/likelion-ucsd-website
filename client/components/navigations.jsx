import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navigations() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", cursor: "pointer", color: "black" }}
        >
          Likelion UCSD
        </Typography>
      </Link>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/">
          <Typography variant="h6">Home</Typography>
        </Link>
        <Link href="/about">
          <Typography variant="h6">About</Typography>
        </Link>
        <Link href="/events">
          <Typography variant="h6">Events</Typography>
        </Link>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Box>
  );
}
