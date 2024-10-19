"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional GitHub flavored markdown
import rehypeRaw from "rehype-raw"; // Optional if you want to allow raw HTML
import Image from "next/image";
import styles from './Projects.module.css'; 
import CloseIcon from '@mui/icons-material/Close';

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
    title: "P2",
    description: "P2",
    imageUrl: "P2",
    linkTo: "Project2.md",
  },
  {
    id: 3,
    title: "P3",
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
    const response = await fetch(`blog2/${linkTo}`); // Adjust the path based on your setup
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

  useEffect(() => {
    // Set the content for the first project by default
    if (projectBoxes.length > 0) {
      fetchMarkdownContent(projectBoxes[0].linkTo);
      setActiveProject(projectBoxes[0].title);
    }
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        marginLeft: "-270px",
        marginRight: "-500px",
        marginTop: "80px",
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
        <Box sx={{ flexGrow: 1, padding: 4, marginLeft: "-270px", marginTop: "80px", padding: "1rem" }}>
          <Box sx={{ maxWidth: "1000px", margin: "0 auto", paddingBottom: "180px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: "1rem", py: "1rem" }}>
              <Typography variant="h1" sx={{ marginTop: 12, marginBottom: 8 }}>Projects</Typography>
              {projectBoxes.map((project) => (
                <div 
                  key={project.id} 
                  className={styles.bubble} 
                  // style={{
                  //   top: `${Math.random() * 400}px`, 
                  //   left: `${Math.random() * 800}px` 
                  // }} 
                  onClick={() => handleItemClick(project)}
                >
                  <Card className={styles.card}>
                    <CardMedia component="img" height="140" image={project.imageUrl} alt={project.title} />
                    <CardContent>
                      <Typography variant="h5">{project.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
            {showDetail && (
              <Box className={styles.detailCard}>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 16 }}>
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
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}