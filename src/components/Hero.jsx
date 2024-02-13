import React from "react";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-screen sm:p-[50px] flex flex-col items-center justify-center">
      <div className="flex w-full relative top-3 justify-center items-center gap-4 lg:relative lg:top-0 md:gap-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-pink-600" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="w-1 h-[300px] bg-gradient-to-b from-pink-500"
          />
        </div>
        <div className="font-semibold flex flex-col relative top-[-50px] gap-0">
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.7, type: "tween" }}
            className="text-2xl sm:text-6xl lg:text-7xl"
          >
            Hello
          </motion.h1>
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring" }}
            className="text-2xl sm:text-5xl lg:text-7xl"
          >
            I'm Mohammed <span className="text-pink-600">Aman</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="sm:text-2xl lg:text-4xl"
          >
            I am a <span className="text-react">React.JS</span> Developer
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
