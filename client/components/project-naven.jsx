"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Card, CardContent } from "@mui/material";
import Image from "next/image";
import BeginnerProjectImage from "../public/images/beginner-project-image.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

export default function ProjectNav() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={(theme) => ({
            fontFamily: "var(--font-gmarket)",
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.primary.yellow,
            },
          })}
        >
          <Tab
            label={
              <Typography variant="h6" sx={{ color: "white" }}>
                Beginner Project Team
              </Typography>
            }
          />
          <Tab
            label={
              <Typography variant="h6" sx={{ color: "white" }}>
                Project Team
              </Typography>
            }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 0 0.5rem 0 rgba(0, 0, 0, 0.1)",
            maxWidth: "45rem",
            margin: "0 auto",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
            UCSD Likelion has a team dedicated to non-CS majors, focusing on basic web projects. The Likelion leadership teaches team members the fundamentals of web programming, which they use to carry out web projects.
            </Typography>
            <Image
              src={BeginnerProjectImage}
              alt="Beginner Project Image"
              style={{ width: "60%", height: "auto" }}
            />
          </CardContent>
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "0.75rem",
            boxShadow: "0 0 0.5rem 0 rgba(0, 0, 0, 0.1)",
            maxWidth: "40rem",
            margin: "0 auto",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
            UCSD Likelion also has a team for members with prior experience in web development. Over the course of a semester, team members complete a web project under the guidance of Likelion leaders, collaborating with their teammates to bring the project to completion.
            </Typography>
          </CardContent>
        </Card>
      </CustomTabPanel>
    </Box>
  );
}
