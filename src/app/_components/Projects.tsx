"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsinfo = [
    {
      name: "Macrotrue",
      image: "/macrotrue.svg",
      href: "https://Macrotrue.vercel.app/",
      description:
        "Front-end App that allows recommends users 3 daily meals based on their caloric needs in order to reach their goal physique.",
      stack: [
        "/react.svg",
        "/nextjs.svg",
        "/typescript.svg",
        "/tailwind.svg",
        "/shadcn.svg",
      ],
    },
    {
      name: "Always",
      image: "/always.svg",
      href: "https://alwaysv1.vercel.app",
      description:
        "Designed and Developed a full-stack workout tracking app that allows users to log exercises, sets, and reps, leveraging PostgreSQL and Prisma for structured data storage.",
      stack: [
        "/react.svg",
        "/nextjs.svg",
        "/typescript.svg",
        "/tailwind.svg",
        "/shadcn.svg",
      ],
    },
    {
      name: "Portfolio",
      image: "/portfolio.svg",
      href: "https://github.com/JoseMaurette1",
      description:
        "Personal Dev Portfolio to showcase Projects, Skills and Resume.",
      stack: [
        "/react.svg",
        "/nextjs.svg",
        "/typescript.svg",
        "/tailwind.svg",
        "/materialui.svg",
      ],
    },
    {
      name: "TrailTales",
      image: "/trails.svg",
      href: "https://trailtales.vercel.app/",
      description:
        "Lead Developer for interactive Web app that allowed 50+ users to discover and bookmark Hiking Trails.",
      stack: [
        "/react.svg",
        "/nextjs.svg",
        "/typescript.svg",
        "/tailwind.svg",
        "/shadcn.svg",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const boxVariants = {
    hover: {
      y: -10,
      scale: 1.1,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="Projects"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl" variants={itemVariants}>
        Projects
      </motion.h1>
      <div className="pb-4 pt-8 w-full flex flex-col items-center space-y-8">
        {projectsinfo.map((project, index) => (
          <motion.div
            key={index}
            className="md:flex-row md:space-x-8 flex flex-col items-center space-x-12"
            variants={itemVariants}
          >
            {/* Project Box */}
            <motion.div
              style={{
                width: 300,
                height: 300,
                backgroundColor: "#434343",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              variants={boxVariants}
              whileHover="hover"
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
                {project.name === "Macrotrue" ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={150}
                    height={150}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={150}
                    height={150}
                  />
                )}
                <h1 className="text-2xl pt-2">{project.name}</h1>
              </a>
            </motion.div>

            {/* Project Stack and Description */}
            <motion.div
              className="flex flex-col space-y-4 max-w-md"
              variants={itemVariants}
            >
              <p className="text-xl">{project.description}</p>
              <h2 className="text-xl font-semibold">Tech Stack:</h2>
              <div>
                <div className="flex flex-wrap space-x-3 ">
                  {project.stack.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt="Tech Stack"
                      width={50}
                      height={50}
                      className="transition duration-200 hover:-translate-y-1"
                    />
                  ))}
                </div>
              </div>
              <div></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
