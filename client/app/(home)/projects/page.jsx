// Import necessary modules
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { Box } from '@mui/material';
=======
import Link from 'next/link';
>>>>>>> 527df52 (ver2)
import Projects from './Projects'; // Adjust the path as necessary

// Function to fetch markdown files
async function getProjects() {
  const projectDirectory = path.join(process.cwd(), 'public/blog2');
  const filenames = fs.readdirSync(projectDirectory);

  const projects = filenames
    .filter(filename => filename.endsWith('.md')) // Only process .md files
    .map((filename) => {
      const filePath = path.join(projectDirectory, filename);
      const content = fs.readFileSync(filePath, 'utf8');

      return {
        title: filename.replace('.md', ''), // Remove the .md extension for the title
        content,
      };
    });

  return projects;
}



// Main page component
export default async function ProjectsPage() {
  const projects = await getProjects(); // Fetch markdown files

  return (
  
<<<<<<< HEAD
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
        py: "2rem",
        px: "2rem",
        backgroundImage: "url(/images/likelion_logo.png)",
        backgroundSize: "33.33%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Projects projects={projects} />
    </Box>
=======
    <Projects projects={projects} /> 
>>>>>>> 527df52 (ver2)
  );
}
