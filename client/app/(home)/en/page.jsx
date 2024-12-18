"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectNav from "../../../components/project-naven";

export default function Home() {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
          backgroundColor: theme.palette.primary.background,
          backgroundImage: "url(/images/likelion_logo.png)",
          backgroundSize: "33.33%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        })}
      >
        <Typography
          variant="h1"
          sx={(theme) => ({
            color: theme.palette.primary.white,
            fontWeight: "bold",
          })}
        >
          Welcome To
        </Typography>
        <Typography
          variant="h1"
          sx={(theme) => ({
            color: theme.palette.primary.white,
            fontWeight: "bold",
          })}
        >
          Likelion UCSD
        </Typography>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
          backgroundColor: theme.palette.primary.background,
          color: theme.palette.primary.white,
        })}
      >
        <Typography variant="h2">What is UCSD Likelion?</Typography>
        <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#ffc600"}}>“Turning my ideas into reality with my own hands.”</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
          UCSD Likelion is a university startup and Korean
          </Typography>
          <Typography variant="h4">
           programming club open to all UCSD students.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
          backgroundColor: theme.palette.primary.background,
          color: theme.palette.primary.white,
        })}
      >
        <Typography variant="h2">How UCSD Likelion Operates</Typography>
        <Typography variant="h4">
        UCSD Likelion students are divided into two teams.
        </Typography>
        <ProjectNav />
      </Box>
    </>
  );
}
