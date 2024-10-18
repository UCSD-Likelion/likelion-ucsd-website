"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional GitHub flavored markdown
import rehypeRaw from "rehype-raw"; // Optional if you want to allow raw HTML
import Image from "next/image";

export default function Projects({ projects }) {
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Set the first project as default content
  useEffect(() => {
    if (projects.length > 0) {
      // Default to the first project
      setSelectedContent(projects[0].content);
      setActiveProject(projects[0].title);
    }
  }, [projects]);

  const handleItemClick = (project) => {
    setSelectedContent(project.content);
    setActiveProject(project.title);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        marginLeft: "-270px",
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
        <Box>
          {/* Render project titles */}
          {projects.map((project) => (
            <div key={project.title} onClick={() => handleItemClick(project)}>
              <Typography
                variant="h5"
                sx={{
                  cursor: 'pointer',
                  fontWeight: activeProject === project.title ? 'bold' : 'normal',
                  color: activeProject === project.title ? 'blue' : 'black',
                }}
              >
                {project.title}
              </Typography>
            </div>
          ))}
        </Box>
        {/* Display selected project content */}
        <ReactMarkdown
          children={selectedContent}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </Box>
    </Box>
  );
}
