"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const icons = [
    {
      name: "React",
      image: "/react.svg",
    },
    {
      name: "Next.js",
      image: "/nextjs.svg",
    },
    {
      name: "TypeScript",
      image: "/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.svg",
    },
    {
      name: "Vite",
      image: "/vite.svg",
    },
  ];

  const secondaryIcons = [
    {
      name: "Node",
      image: "/node.svg",
    },
    {
      name: "HTML",
      image: "/html.svg",
    },
    {
      name: "CSS",
      image: "/css.svg",
    },
    {
      name: "Git",
      image: "/git.svg",
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

  return (
    <motion.div
      id="Skills"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl" variants={itemVariants}>
        Skills
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center items-center"
        variants={itemVariants}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="m-4 transition duration-200 hover:-translate-y-1"
          >
            <Image src={icon.image} alt={icon.name} width={100} height={100} />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center items-center"
        variants={itemVariants}
      >
        {secondaryIcons.map((icon, index) => (
          <div
            key={index}
            className="m-4 transition duration-200 hover:-translate-y-1"
          >
            <Image src={icon.image} alt={icon.name} width={100} height={100} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
