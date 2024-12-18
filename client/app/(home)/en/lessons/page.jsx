// This is a server component by default
import fs from 'fs';
import path from 'path';
import Lessons from './Lessons';

// Server-side function to fetch markdown files
async function getLessons() {
  const lessonsDirectory = path.join(process.cwd(), 'public/blogen');
  const filenames = fs.readdirSync(lessonsDirectory);

  const lessons = filenames.map((filename) => {
    const filePath = path.join(lessonsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');

    return {
      title: filename.replace('.md', ''), // Remove the .md extension for the title
      content,
    };
  });

  return lessons;
}

// Server Component rendering the client component
export default async function LessonsPage() {
  const lessons = await getLessons(); // Fetch markdown files

  return <Lessons lessons={lessons} />;
}