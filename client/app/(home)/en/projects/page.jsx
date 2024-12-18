// Import necessary modules
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Projects from './Projects'; // Adjust the path as necessary

// Function to fetch markdown files
async function getProjects() {
  const projectDirectory = path.join(process.cwd(), 'public/blog2en');
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
  
    <Projects projects={projects} /> 
  );
}
