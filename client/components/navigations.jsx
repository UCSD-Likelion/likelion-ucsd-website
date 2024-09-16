"use client";

import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LikeLionLogo from "../assets/images/likelion-logo.png";

const MenuBox = styled(Box)({
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
    color: "white",
    backgroundColor: "#1976d2",
    transition: "all 0.3s ease-in-out",
  },
  "&.active": {
    color: "blue",
    fontWeight: "bold",
  },
});

export default function Navigations() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
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
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image
            src={LikeLionLogo}
            alt="Likelion UCSD Logo"
            width={55}
            height={50}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", cursor: "pointer", color: "black" }}
          >
            Likelion UCSD
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
        <Link href="/about" style={{ textDecoration: "none", color: "black" }}>
          <MenuBox className={pathname === "/about" ? "active" : ""}>
            <Typography variant="h6">About</Typography>
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
