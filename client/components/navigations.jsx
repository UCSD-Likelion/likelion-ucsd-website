"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigations() {
  const router = useRouter();
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
      <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link
          href="/lessons"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="h6">Lessons</Typography>
        </Link>
        <Link href="/about" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h6">About</Typography>
        </Link>
        <Link
          href="/projects"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="h6">Projects</Typography>
        </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
