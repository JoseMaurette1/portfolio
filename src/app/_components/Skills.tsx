import React from "react";

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

  return (
    <div
      id="Skills"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
    >
      <h1 className="text-3xl">Skills</h1>
      <div className="flex flex-wrap justify-center items-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="m-4 transition duration-200 hover:-translate-y-1"
          >
            <img src={icon.image} alt={icon.name} width={100} height={100} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {secondaryIcons.map((icon, index) => (
          <div
            key={index}
            className="m-4 transition duration-200 hover:-translate-y-1"
          >
            <img src={icon.image} alt={icon.name} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
