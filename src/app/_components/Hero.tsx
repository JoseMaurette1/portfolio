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
        <h3 className="text-lg pb-4">Hi, my name is</h3>
        <h1 className="pb-2 text-5xl ">Jose Maurette.</h1>
        <h2 className="pb-4 text-gray-400 text-2xl">I build Websites</h2>
        <p className="text-gray-400">
          I am a Senior at Florida International University Specializing in
          Front End Development with the use of React, Next.js, and TypeScript.
        </p>
      </div>
      <div className="pt-5">
        <Button
          variant="contained"
          size="medium"
          endIcon={<DownloadIcon />}
          className="self-start bg-[#464343] hover:bg-[#353535]"
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Hero;
