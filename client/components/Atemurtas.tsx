import Image from "next/image";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
type Props = {};

function Atemurtas({}: Props) {
  const [text, count] = useTypewriter({
    words: ["< Hi, I'm ALİ TEMURTAŞ />", "< Fullstack Developer />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <h1>
        <span>{text}</span> <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Atemurtas;
