import React, { useRef, useState, useEffect } from "react";

const Hero = () => {
  return (
    <div
      id={"Home"}
      className={
        " h-100 sm:h-128  px-4 sm:px-20 bg-hero  bg-no-repeat bg-cover bg-center bg-fixed mb-0 sm:mb-24 mt-4 sm:mt-16 sm:bg-hero-none sm:bg-hero-img  "
      }
    >
      <div className="container mx-auto text-white font-nunito flex  h-full  place-content-center flex-col content-center text-left gap-2">
        <h1 className="text-white text-lg sm:text-4xl font-nunito text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Digital Supply Chain Management
        </h1>
        <div className={"text-sm sm:text-base"}>
          <p>Blockchain-powered technology</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
