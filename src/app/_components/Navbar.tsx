import React from "react";

const Navbar = () => {
  const paths = [
    { name: "About", path: "#Hero" },
    { name: "Projects", path: "#Projects" },
    { name: "Skills", path: "#Skills" },
    { name: "Contact", path: "#Contact" },
  ];

  return (
    <div className="flex justify-center items-center shadow-md pt-5 pb-5">
      {paths.map((path, index) => (
        <a className="mx-4 hover:text-gray-400" key={index} href={path.path}>
          {path.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
