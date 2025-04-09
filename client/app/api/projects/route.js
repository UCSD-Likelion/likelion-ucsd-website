import dbConnect from "../../../lib/mongodb";
import Project from "../../../models/Projects";

export const GET = async (req, res) => {
  try {
    await dbConnect();
    const projects = await Project.find();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Connection failed", error: error.message }),
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
      JSON.stringify({ message: "Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const DELETE = async (req, res) => {
  const { id } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "Please provide an ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await dbConnect();
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({ message: "Project deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const PUT = async (req, res) => {
  const { id, name, description, content } = await req.json();

  if (!id || !name || !description || !content) {
    return new Response(JSON.stringify({ message: "Please fill all fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await dbConnect();
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, description, content },
      { new: true }
    );
    if (!updatedProject) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({
        message: "Project updated successfully",
        updatedProject,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
