"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional GitHub flavored markdown
import rehypeRaw from "rehype-raw"; // Optional if you want to allow raw HTML
import Image from "next/image";
import styles from "./Projects.module.css";
import CloseIcon from "@mui/icons-material/Close";

// Projects data
const projectBoxes = [
  {
    id: 1,
    title: "UCSD Classual",
    description: "Course Visualizer specialized for UCSD",
    imageUrl: "images/classual.png",
    linkTo: "Classual.md",
  },
  {
    id: 2,
    title: "Project 2 --------",
    description: "P2",
    imageUrl: "P2",
    linkTo: "Project2.md",
  },
  {
    id: 3,
    title: "Project 3 --------",
    description: "",
    imageUrl: "",
    linkTo: "",
  },
];

export default function Projects({ projects }) {
  const [selectedContent, setSelectedContent] = useState("");
  const [activeProject, setActiveProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const fetchMarkdownContent = async (linkTo) => {
    const response = await fetch(`blog2/${linkTo}`);
    if (response.ok) {
      const content = await response.text();
      setSelectedContent(content);
    } else {
      setSelectedContent("Content not found.");
    }
  };

  const handleItemClick = (project) => {
    fetchMarkdownContent(project.linkTo);
    setActiveProject(project.title);
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
    setSelectedContent("");
    setActiveProject(null);
  };

  const animations = [
    "float1",
    "float2",
    "float3",
    "float1",
    "float2",
    "float3",
  ];

  useEffect(() => {
    // Set the content for the first project by default
    if (projectBoxes.length > 0) {
      fetchMarkdownContent(projectBoxes[0].linkTo);
      setActiveProject(projectBoxes[0].title);
    }
  }, []);

  return (
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
        backgroundImage: "url(/images/likelion-logo.png)",
        backgroundSize: "25%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      })}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
          paddingBottom: "180px",
        }}
      >
        <Box
          sx={{ flexGrow: 1, padding: 4, marginTop: "350px", padding: "1rem" }}
        >
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
              paddingBottom: "180px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: "1rem",
                py: "1rem",
              }}
            >
              <Typography
                variant="h1"
                sx={{ color: "white", marginTop: "10rem" }}
              >
                Projects
              </Typography>

              {projectBoxes.map((project, index) => (
                <div
                  key={project.id}
                  className={`${styles.bubble} ${
                    styles[animations[index % animations.length]]
                  }`}
                  onClick={() => handleItemClick(project)}
                >
                  <Card className={styles.card}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.imageUrl}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
            {showDetail && (
              <Box
                className={styles.detailCard}
                sx={{
                  marginTop: "40px",
                  width: "80%",
                  maxWidth: "800px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
              >
                <IconButton
                  onClick={handleClose}
                  sx={{ position: "absolute", top: 16, right: 16 }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h4">{activeProject}</Typography>
                <ReactMarkdown
                  children={selectedContent}
                  remarkPlugins={[remarkGfm]} // Optional GitHub flavor
                  rehypePlugins={[rehypeRaw]} // Optional if you're using HTML in markdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                          fontFamily: "Noto Sans, sans-serif",
                          color: "#162548",
                        }}
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          fontFamily: "Noto Sans, sans-serif",
                          marginTop: "2.5rem",
                          marginBottom: "1rem",
                          fontWeight: "bold",
                          fontSize: "32px",
                        }}
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontFamily: "Noto Sans, sans-serif",
                          marginTop: "2.2rem",
                          marginBottom: "1rem",
                          fontWeight: "bold",
                          fontSize: "24px",
                        }} // Apply Noto Sans
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => {
                      if (node.children[0]?.tagName === "img") {
                        const image = node.children[0];
                        return (
                          <Box
                            className="image"
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              marginBottom: "1rem",
                              width: "100%",
                            }}
                          >
                            <Image
                              src={`/images${image.properties.src}`}
                              alt={image.properties.alt}
                              width={1000}
                              height={600}
                              style={{
                                borderRadius: "8px",
                                height: "auto",
                                width: "80%",
                              }}
                            />
                          </Box>
                        );
                      }
                      return (
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{
                            fontFamily: "Noto Sans, sans-serif",
                            marginBottom: "0.7rem",
                            fontSize: "18px",
                          }}
                          {...props}
                        />
                      );
                    },
                    li: ({ node, ...props }) => (
                      <li
                        style={{
                          marginBottom: "0.4rem",
                          fontFamily: "Noto Sans, sans-serif",
                          marginLeft: "-15px",
                          lineHeight: "1.5",
                          fontSize: "18px",
                        }}
                      >
                        {props.children}
                      </li>
                    ),
                    hr: () => (
                      <hr style={{ marginTop: "50px", marginBottom: "15px" }} />
                    ),
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
