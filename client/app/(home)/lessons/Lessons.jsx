"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Optional for GitHub flavored markdown
import rehypeRaw from "rehype-raw"; // Optional if you want to allow raw HTML
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Icon for the copy button
import CheckIcon from "@mui/icons-material/Check"; // Icon for showing after copying
import Image from "next/image";

export default function Lessons({ lessons }) {
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null); // Track the active lesson
  const [copiedCodeIndices, setCopiedCodeIndices] = useState([]); // Track copied status for individual code blocks

  // Set the first lesson as default content
  useEffect(() => {
    if (lessons.length > 0) {
      // Find the lesson with the title "Introduction"
      const introLesson = lessons.find((lesson) => lesson.title === "Introduction");
  
      if (introLesson) {
        // If "Introduction" exists, set it as the default content
        setSelectedContent(introLesson.content);
        setActiveLesson(introLesson.title);
      } else {
        // Otherwise, fallback to the first lesson in the list
        setSelectedContent(lessons[0].content);
        setActiveLesson(lessons[0].title);
      }
    }
  }, [lessons]);

  const handleItemClick = (lesson) => {
    setSelectedContent(lesson.content);
    setActiveLesson(lesson.title); // Update the active lesson
  };

  // Function to copy code to clipboard and track copied status for each block
  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);

    setCopiedCodeIndices((prev) => [...prev, index]); // Mark the current code block as copied

    setTimeout(() => {
      setCopiedCodeIndices((prev) => prev.filter((i) => i !== index)); // Reset after 3 seconds for that block
    }, 5000);
  };

  const lessonOrder = [
    "Introduction",
    "웹개발 기초",
    "HTML",
    "CSS",
    "JavaScript",
    "프로젝트 1",
    "React",
    "Next.js",
    "프로젝트 2",
    "GraphQL",
    "MongoDB",
    "프로젝트 3",
    // ... other lesson titles in the desired order
  ];

  let codeBlockIndex = 0; // Initialize an index to track code blocks

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "220px",
          position: "fixed",
          top: "60px",
          left: 0,
          height: "100vh",
          backgroundColor: "#f0f0f0",
          overflowY: "auto",
          marginTop: "25px",
          display: "flex", // Make the sidebar a flex container
          flexDirection: "column",
          alignItems: "center", // Center the ListItem horizontally
        }}
      >
        <List sx={{ width: "100%" }}>
              {lessonOrder.map((title) => {
          const lesson = lessons.find((lesson) => lesson.title === title);
          return lesson ? (
            <ListItem
              button
              key={lesson.title}
              onClick={() => handleItemClick(lesson)}
              sx={{
                backgroundColor:
                  activeLesson === lesson.title ? "#ffffff" : "inherit",
                textAlign: "left",
                margin: "6px 15px",
                borderRadius: "30px",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#ece9e6",
                },
              }}
            >
              <ListItemText
                primary={lesson.title}
                sx={{ fontSize: "0.7rem", textAlign: "left", marginLeft: "10px" }}
              />
            </ListItem>
          ) : null; // Ignore if lesson is not found
        })}
        </List>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          marginLeft: "250px",
          marginTop: "120px",
          padding: "1rem",
        }}
      >
        {selectedContent ? (
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
                    }} // Apply Noto Sans
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
                    }} // Apply Noto Sans
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
                h4: ({ node, ...props }) => (
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontFamily: "Noto Sans, sans-serif",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      fontSize: "19px",
                      fontWeight: "bold",
                    }} // Apply Noto Sans
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => {
                  if (node.children[0].tagName === "img") {
                    const image = node.children[0];
                    console.log(image);
                    return (
                      <Box
                        className="image"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <Image
                          src={`/images${image.properties.src}`}
                          alt={image.properties.alt}
                          width={600}
                          height={400}
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
                      }} // Apply Noto Sans with space between paragraphs
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
                    }} // Apply Noto Sans
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
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || ""); // Detect language from markdown
                  const codeFont = `'Fira Code', 'Fira Mono', 'Courier New', Courier, monospace`;
                  const currentIndex = codeBlockIndex++; // Increment index for each code block

                  return !inline && match ? (
                    <Box sx={{ position: "relative" }}>
                      {/* Copy button */}
                      <IconButton
                        onClick={() =>
                          handleCopyCode(String(children).trim(), currentIndex)
                        }
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          width: "25px", // Make the icon smaller
                          height: "25px", // Make the icon smaller
                          zIndex: 1,
                          color: copiedCodeIndices.includes(currentIndex)
                            ? "#4caf50"
                            : "#fff", // Change color for the copied block
                          "&:hover": {
                            color: "#4caf50", // Hover effect for the icon
                          },
                        }}
                      >
                        {copiedCodeIndices.includes(currentIndex) ? (
                          <CheckIcon />
                        ) : (
                          <ContentCopyIcon />
                        )}
                      </IconButton>
                      <SyntaxHighlighter
                        style={darcula}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).trim()}
                      </SyntaxHighlighter>
                    </Box>
                  ) : (
                    <code
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: "2px 4px",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: codeFont, // Apply the same monospaced font as block code
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                hr: () => (
                  <hr style={{ marginTop: "50px", marginBottom: "15px" }} /> // Add margin above and below the horizontal line
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
                blockquote: ({ node, ...props }) => (
                  <Box
                    sx={{
                      borderLeft: "4px solid #ddd",
                      paddingLeft: "16px",
                      margin: "1.5em 0",
                      color: "#555",
                      fontStyle: "italic",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Noto Sans, sans-serif",
                        fontSize: "18px",
                      }}
                      {...props}
                    />
                  </Box>
                ),
              }}
            />
          </Box>
        ) : (
          <Typography variant="h5" sx={{ fontFamily: "Noto Sans, sans-serif" }}>
            Lesson을 선택해주세요.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
