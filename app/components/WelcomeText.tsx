"use client";
import Typewriter from "typewriter-effect";

export const WelcomeText = () => {
  return (
    <Typewriter
      options={{
        strings: ["Fullstack Developer", "Tech Enthusiast", "Cloud Architect"],
        autoStart: true,
        loop: true,
        cursorClassName: "text-4xl md:text-6xl",
        wrapperClassName:
          "bg-gradient-to-r from-violet-500 via-pink-500  to-rose-600 bg-clip-text text-transparent text-3xl md:text-6xl",
      }}
    />
  );
};
