"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const icons = [
    {
      name: "Email",
      image: "/gmail.svg",
      href: "mailto:josemaurette1234@gmail.com",
    },
    {
      name: "LinkedIn",
      image: "/linkedin.svg",
      href: "https://www.linkedin.com/in/josemaurette/",
    },
    {
      name: "GitHub",
      image: "/github-white.svg",
      href: "https://github.com/JoseMaurette1",
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="Contact"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl pb-4" variants={itemVariants}>
        Contact
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center items-center"
        variants={itemVariants}
      >
        {icons.map((icon, index) => (
          <motion.a
            target="_blank"
            className="mx-4 hover:text-gray-400"
            key={index}
            href={icon.href}
            variants={iconVariants}
            whileHover="hover"
          >
            <Image src={icon.image} alt={icon.name} width={50} height={50} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
