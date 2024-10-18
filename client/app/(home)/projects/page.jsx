// Import necessary modules
import fs from 'fs';
import path from 'path';
import { Box, Typography, Stack, Card, CardMedia, CardContent } from "@mui/material";
import Link from 'next/link';
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
    description: "",
    imageUrl: "",
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

// Main page component
export default async function ProjectsPage() {
  const projects = await getProjects(); // Fetch markdown files

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: "1rem", py: "1rem" }}>
      <Typography variant="h1" sx={{ marginTop: 12, marginBottom: 4 }}>Projects</Typography>
      <Stack spacing={2} direction="row" flexWrap="wrap" justifyContent="center">
        {projectBoxes.map((project) => (
          <Link key={project.id} href={`/projects/${project.linkTo}`} passHref legacyBehavior>
            <Card sx={{ width: 300, margin: 1, cursor: 'pointer' }} target="_blank" rel="noopener noreferrer">
              <CardMedia component="img" height="140" image={project.imageUrl} alt={project.title} />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
              </CardContent>
            </Card>
          </Link>
          ))}
      </Stack>
    <Projects projects={projects} /> 
    </Box>
  );
}
