import React, { useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center items-center bg-slate-950 w-full xl:h-screen px-[100px]"
    >
      <div className="text-3xl py-8">
        <h2 className="sm:text-6xl font-extrabold bg-gradient-to-r from-violet-700 to-blue-600 rounded-xl p-4 ">
          About
        </h2>
      </div>

      <div className="bg-gradient-to-l from-pink-800 to-cyan-600 p-[50px] rounded-lg flex items-center justify-center h-full">
        <h2 className="sm:text-2xl">
          I create amazing web-applications with JavaScript, HTML, and CSS.
          Tailwind CSS makes them look sleek.
          <span className="text-black">React.js</span> and Redux add fun
          features, and Framer Motion brings in cool animations. Come check out
          my portfolio!
        </h2>
      </div>
    </motion.div>
  );
};

export default About;
