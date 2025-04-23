"use client";

import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import {
  Alert,
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  GlobalStyles,
  Snackbar,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const editorRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // Function to convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the form data
    const content = editorRef.current?.getMarkdown?.() || "";
    const base64Image = image ? await toBase64(image) : null;

    const validationErrors = {};
    const projectData = {
      title,
      description,
      content,
      thumbnail: base64Image,
    };

    if (!title.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!description.trim()) {
      validationErrors.description = "Description is required";
    }

    if (!content.trim()) {
      validationErrors.content = "Markdown content is required";
    }

    if (!base64Image) {
      validationErrors.thumbnail = "Thumbnail is required";
    }

    if (base64Image && !base64Image.startsWith("data:image/")) {
      validationErrors.thumbnail = "Invalid image format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSnack({
        open: true,
        message: "Please fill all required fields with valid data.",
        severity: "error",
      });
      return;
    }

    setErrors({});
    setLoading(true);

    console.log("Submitting project:", projectData);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Project submitted successfully");

      setSnack({
        open: true,
        message: "Project submitted successfully!",
        severity: "success",
      });

      router.push("/projects");
    } catch (e) {
      console.error("Error submitting project:", e);
      setSnack({
        open: true,
        message: "Failed to upload the project. Check your fields.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
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
          justifyContent: "center",
          px: 2,
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
              onChange={(e) => {
                if (errors.title) {
                  setErrors((prev) => ({
                    ...prev,
                    title: "",
                  }));
                }
                setTitle(e.target.value);
              }}
              error={!!errors.title}
              helperText={errors.title}
              disabled={loading}
            />
            <TextField
              label="One-line Description *"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => {
                if (errors.description) {
                  setErrors((prev) => ({
                    ...prev,
                    description: "",
                  }));
                }
                setDescription(e.target.value);
              }}
              error={!!errors.description}
              helperText={errors.description}
              disabled={loading}
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
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Project Thumbnail:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button variant="outlined" component="label">
                Choose File
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.startsWith("image/")) {
                      setImage(file);
                      setPreviewUrl(URL.createObjectURL(file));
                    }
                  }}
                  disabled={loading}
                />
              </Button>
              {image && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    {image.name}
                  </Typography>
                  <Button
                    sx={{ minWidth: "auto", ml: 1, borderRadius: "50%" }}
                    color="error"
                    onClick={() => {
                      setImage(null);
                      setPreviewUrl(null);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </Box>
              )}
            </Box>

            {previewUrl && (
              <Avatar
                alt="Project Thumbnail"
                variant="rounded"
                src={previewUrl}
                sx={{
                  width: "100%",
                  height: "auto",
                  mt: 2,
                  borderRadius: "8px",
                  alignSelf: "center",
                }}
              />
            )}

            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={loading || !title || !description || !image}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    thickness={4}
                    sx={{
                      marginRight: "3.75rem",
                      marginLeft: "3.75rem",
                    }}
                  />
                ) : (
                  "Submit Project"
                )}
              </Button>
            </Box>
          </Box>
        </Paper>
        <Snackbar
          open={snack.open}
          autoHideDuration={4000}
          onClose={() => setSnack({ ...snack, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert
            onClose={() => setSnack({ ...snack, open: false })}
            severity={snack.severity}
            sx={{ width: "100%" }}
          >
            {snack.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
