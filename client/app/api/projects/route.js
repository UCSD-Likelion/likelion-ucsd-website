import dbConnect from "../../../lib/mongodb";
import Project from "../../../models/Projects";

export const GET = async (req, res) => {
  try {
    await dbConnect();
    const projects = await Projects.find();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "❌ Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const POST = async (req, res) => {
  const { name, description, content } = await req.json();

  console.log(req.body);

  if (!name || !description || !content) {
    return new Response(JSON.stringify({ message: "Please fill all fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await dbConnect();
    const newProject = new Project({
      name,
      description,
      content,
    });
    await newProject.save();
    return new Response(
      JSON.stringify({ message: "Project created successfully", newProject }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "❌ Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
