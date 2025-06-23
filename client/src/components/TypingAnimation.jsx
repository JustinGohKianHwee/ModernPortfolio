"use client";

import Typewriter from "typewriter-effect";

export default function TypingAnimation() {
  return (
    <span className="font-poppins-semibold text-4xl text-white inline-block md:text-6xl">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I am a Software Engineer.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I am an ML Engineer.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I am a Research Engineer.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I am a Data Scientist.")
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
      />
    </span>
  );
}
