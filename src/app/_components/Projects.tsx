import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

const Projects = () => {
  const projectsinfo = [
    {
      name: "Always",
      image: "/always.svg",
      href: "",
      description: "Website to track my own personal workouts.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS, Shadcn UI"],
    },
    {
      name: "Portfolio",
      image: "/portfolio.svg",
      href: "https://github.com/JoseMaurette1",
      description: "Personal Portfolio Website created to showcase my work.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS, Material UI"],
    },
    {
      name: "TrailTales",
      image: "/trails.svg",
      href: "https://trailtales.vercel.app/",
      description:
        "Lead Developer and Creator for TrailTales, a hiking app made during my Junior Year for a School Project.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS, Shadcn UI"],
    },
  ];
  return (
    <div
      id="Projects"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
    >
      <h1 className="text-3xl">Projects</h1>
      <div className="pb-4 pt-8">
        <Stack direction="row" spacing={4}>
          {projectsinfo.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: 400,
                height: 400,
                backgroundColor: "#434343",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.1)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                },
                "& a": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                "& h1, & p": {
                  textAlign: "center",
                },
              }}
            >
              <a
                target="_blank"
                href={project.href}
                className="pb-2 max-w-lg mx-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={100}
                  height={100}
                />
                <h1 className="text-2xl pt-2">{project.name}</h1>
                <p className="text-lg pt-2">{project.stack.join(", ")}</p>
                <p className="pt-2">{project.description}</p>
              </a>
            </Box>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Projects;
