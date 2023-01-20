import React from "react";
import { motion } from "framer-motion";

type Props = { direction?: boolean };

function Skill({ direction }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: direction ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/svelte-1.svg"
        className="rounded-full border border-white object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-1"
      />
      <div className="absolute"> asdfasd</div>
    </div>
  );
}

export default Skill;
