"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  GlobalStyles,
} from "@mui/material";

const MdxEditorComponent = dynamic(
  () => import("../../../../components/editor-component"),
  {
    ssr: false,
  }
);

const initialMarkdown = `# Hello world\n\nWrite your project details here...`;

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const editorRef = useRef(null);

  const handleSubmit = () => {
    const markdown = editorRef.current?.getMarkdown?.() || "";
    const projectData = {
      title,
      description,
      markdown,
    };

    console.log("Submitting project:", projectData);
    // TODO: Send to API or store in database
  };

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          ".mdx-editor-content blockquote": {
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[50],
            padding: theme.spacing(2),
            fontStyle: "italic",
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.text.secondary,
            margin: theme.spacing(2, 0),
            transition: "background-color 0.3s ease",
          },
        })}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          paddingTop: 12,
          gap: 3,
          minHeight: "80vh",
          justifyContent: "center", // vertical centering
          px: 2, // horizontal padding on small screens
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Archive a Project
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              gap: 3,
            }}
          >
            <TextField
              label="Project Title *"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              label="One-line Description *"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Project Details:
              </Typography>
              <MdxEditorComponent
                markdown={initialMarkdown}
                editorRef={editorRef}
              />
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit Project
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
