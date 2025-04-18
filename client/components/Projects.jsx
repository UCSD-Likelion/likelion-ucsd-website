"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CircularProgress,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional GitHub flavored markdown
import rehypeRaw from "rehype-raw"; // Optional if you want to allow raw HTML
import Image from "next/image";

export default function Projects({ projects, loading }) {
  const [selectedContent, setSelectedContent] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  const handleItemClick = (project) => {
    setSelectedContent(project.content);
    setActiveProject(project.title);
  };

  useEffect(() => {
    // Set the content for the first project by default
    if (projects.length > 0) {
      setSelectedContent(projects[0].content);
      setActiveProject(projects[0].title);
    }
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        marginTop: "40px",
        padding: "1rem",
      }}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Typography variant="h2" sx={{ marginTop: "5rem" }}>
              Project Archive
            </Typography>
            <Typography variant="h5">
              멋쟁이사자처럼 UCSD가 그동안 진행한 프로젝트들을 소개합니다.
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card>
                  <CardActionArea onClick={() => handleItemClick(project)}>
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
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ marginTop: 6 }}>
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
              a: ({ node, ...props }) => (
                <Typography
                  variant="body1"
                  component="a"
                  href={props.href}
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security measure
                  sx={{
                    color: "#3a62ac",
                    textDecoration: "underline",
                    fontFamily: "Noto Sans, sans-serif",
                    fontSize: "18px",
                  }}
                  {...props}
                />
              ),
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
              pre: ({ node, ...props }) => (
                <pre
                  style={{
                    backgroundColor: "#282c34",
                    padding: "10px",
                    borderRadius: "8px",
                    color: "#fff",
                    overflow: "auto",
                    fontSize: "15px",
                    fontFamily: "Noto Sans, sans-serif",
                  }}
                  {...props}
                />
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
