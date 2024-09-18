import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectNav from "../../components/project-nav";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          flexDirection: "column",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
        }}
      >
        <Typography variant="h1">Welcome To</Typography>
        <Typography variant="h1">Likelion UCSD</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
        }}
      >
        <Typography variant="h2">UCSD 멋쟁이사자처럼이란?</Typography>
        <Typography variant="h4">"내 아이디어는 내 손으로 실천한다"</Typography>
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
            UCSD 멋쟁이사자처럼은 UCSD 학생이라면 누구나 참여할 수 있는 대학생
          </Typography>
          <Typography variant="h4">
            창업 동아리이자 한인 프로그래밍 동아리입니다.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          py: "2rem",
          px: "2rem",
        }}
      >
        <Typography variant="h2">UCSD 멋쟁이사자처럼의 운영 방식</Typography>
        <Typography variant="h4">
          UCSD 멋사 학생들은 두가지 팀으로 나뉘어집니다
        </Typography>
        <ProjectNav />
      </Box>
    </>
  );
}
