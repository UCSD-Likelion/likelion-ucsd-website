"use client";

import React, { useState, useEffect } from "react";
import Projects from "../../../components/Projects";
import { Alert } from "@mui/material";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        console.log(data);
        setProjects(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
    console.log(loading);
  }, []);

  return (
    <>
      {!loading && projects.length === 0 && (
        <Alert severity="info">No projects found.</Alert>
      )}

      <Projects projects={projects} loading={loading} />
    </>
  );
}
