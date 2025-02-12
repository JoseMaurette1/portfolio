"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { DownloadIcon } from "@radix-ui/react-icons";

const Hero = () => {
  const [text, setText] = useState("I Build Websites");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const phrases = [
    "Software Engineer",
    "I Solve Problems",
    "Front End Developer",
  ];
  useEffect(() => {
    const currentPhrase = phrases[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length <= 2) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, phrases]);
  return (
    <div
      id="Hero"
      className="flex flex-col justify-center items-center min-h-screen max-w-md mx-auto"
    >
      <div className="flex items-center justify-center pb-10">
        <Image src={"/avatar.svg"} alt="pfp" width={200} height={200} />
      </div>
      <div className="text-start">
        <h3 className="pb-2 tracking-tighter">Hi, my name is</h3>
        <h1 className="pb-2 text-5xl font-extrabold tracking-tighter">
          Jose Maurette.
        </h1>
        {/* <h3 className="pb-4 text-gray-400 text-2xl">I build Websites</h3> */}
        <h3 className="pb-4 text-blue-400 text-2xl tracking-tighter">{text}</h3>
        <p className="text-gray-400 tracking-tighter">
          I am a Senior at Florida International University Specializing in
          Front End Development with the use of React, Next.js, and TypeScript.
        </p>
      </div>
      <div className="pt-10">
        <a href="/Resume.pdf" download>
          <Button
            variant="contained"
            size="large"
            endIcon={<DownloadIcon />}
            className="self-start bg-blue-500 hover:bg-[#353535] py-2 px-4 rounded"
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
