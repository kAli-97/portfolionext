import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Atemurtas({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "< Hi, I'm ALİ TEMURTAŞ />",
      "< Information Systems Engineer />",
      "< Full-Stack Developer />",
      "< Lifelong Learner />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/xx.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span> <Cursor cursorColor="#FFFFFF" />
        </h1>
        <Link href="#about">
          <button className="btn">About</button>
        </Link>
        <Link href="#experience">
          <button className="btn">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="btn">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="btn">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Atemurtas;
