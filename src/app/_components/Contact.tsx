import React from "react";
import Image from "next/image";

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
      href: "https://www.linkedin.com/in/jose-maurette-parada-4a7bb3254/",
    },
    {
      name: "GitHub",
      image: "/github-white.svg",
      href: "https://github.com/JoseMaurette1",
    },
  ];
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center mx-auto min-h-[50vh]"
    >
      <h1 className="text-3xl pb-4">Contact</h1>
      <div className="flex flex-wrap justify-center items-center">
        {icons.map((icon, index) => (
          <a
            target="_blank"
            className="mx-4 hover:text-gray-400"
            key={index}
            href={icon.href}
          >
            <Image src={icon.image} alt={icon.name} width={50} height={50} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
