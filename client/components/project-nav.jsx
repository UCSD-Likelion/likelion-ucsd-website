"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, CustomTabPanel } from "@mui/material";

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
          sx={{
            fontFamily: "var(--font-gmarket)",
          }}
        >
          <Tab label={<Typography variant="h6">기초 프로젝트 팀</Typography>} />
          <Tab label={<Typography variant="h6">프로젝트 팀</Typography>} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6">기초 프로젝트 팀</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6">프로젝트 팀</Typography>
      </CustomTabPanel>
    </Box>
  );
}
