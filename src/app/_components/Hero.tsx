import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { DownloadIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col justify-center items-center min-h-screen max-w-md mx-auto"
    >
      <div className="flex items-center justify-center pb-10">
        <Image src={"/avatar.svg"} alt="pfp" width={200} height={200} />
      </div>
      <div className="text-start">
        <h3 className="pb-4">Hi, my name is</h3>
        <h1 className="pb-2 text-5xl font-extrabold tracking-tighter  ">
          Jose Maurette.
        </h1>
        <h2 className="pb-4 text-gray-400 text-2xl">I build Websites</h2>
        <p className="text-gray-400">
          I am a Senior at Florida International University Specializing in
          Front End Development with the use of React, Next.js, and TypeScript.
        </p>
      </div>
      <div className="pt-10">
        <Button
          variant="contained"
          size="large"
          endIcon={<DownloadIcon />}
          className="self-start bg-blue-500 hover:bg-[#353535] py-2 px-4 rounded"
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Hero;
