import React from "react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex items-center flex-col justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center leading-none">
        <motion.h1
          className="text-[4rem] md:text-[5rem] text-[#ECFFFD] font-bold"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Zentra
        </motion.h1>
        <motion.h1
          className="text-[4rem] md:text-[5rem] font-medium text-[#ECFFFD]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Health
        </motion.h1>
      </div>
      <div className="w-[25px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start mt-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-[0.50rem] h-[0.50rem] rounded-full bg-secondary mb-[0.30rem]"
        />
      </div>
      <video
        className="w-full h-screen absolute z-[-1] object-cover"
        autoPlay
        muted
        loop
        src="/bgzh.mp4"
      />
    </main>
  );
};

export default Hero;
