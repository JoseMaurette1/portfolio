"use client";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const paths = [
    { name: "About", path: "#Hero" },
    { name: "Projects", path: "#Projects" },
    { name: "Skills", path: "#Skills" },
    { name: "Contact", path: "#Contact" },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#a3a3a3", // Gray-400 in hex
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center shadow-md pt-5 pb-5"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {paths.map((path, index) => (
        <motion.a
          className="mx-4 hover:text-gray-400"
          key={index}
          href={path.path}
          variants={linkVariants}
          whileHover="hover"
        >
          {path.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Navbar;
