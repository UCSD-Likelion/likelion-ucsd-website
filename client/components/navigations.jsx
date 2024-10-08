"use client";

import React from "react";
import { Box, Typography, Button, styled, Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LikeLionLogo from "../public/images/likelion-logo.png";

const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  ":hover": {
    color: theme.palette.primary.orange,
    transition: "all 0.3s ease-in-out",
  },
  "&.active": {
    color: theme.palette.primary.orange,
    fontWeight: "bold",
  },
}));

export default function Navigations() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Box
      sx={{
        position: "fixed", // Fix the navbar to the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Make sure the navbar is on top of other content
        backgroundColor: "white", // Optional: Add background color to the navbar
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better visibility
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image
            src={LikeLionLogo}
            alt="Likelion UCSD Logo"
            width={55}
            height={50}
          />
          <Typography variant="h4" sx={{ cursor: "pointer", color: "black" }}>
            Likelion UCSD test
          </Typography>
        </Box>
      </Link>
      <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link
          href="/lessons"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuBox className={pathname === "/lessons" ? "active" : ""}>
            <Typography variant="h6">Lessons</Typography>
          </MenuBox>
        </Link>

        <Link
          href="/projects"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuBox className={pathname === "/projects" ? "active" : ""}>
            <Typography variant="h6">Projects</Typography>
          </MenuBox>
        </Link>
      </Box>
    </Box>
  );
}
