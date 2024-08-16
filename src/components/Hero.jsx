import React from 'react'

import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <main className="flex items-center flex-col justify-center h-screen w-full">
        <div className="flex flex-col items-center justify-center leading-none">
          <motion.h1 className="text-[4rem] text-white font-bold m-0 p-0" initial={{ y: -100, opacity: 0}} whileInView={{ y: 0, opacity: 1}} transition={{duration: 0.9}} viewport={{once: true}}>Zentra</motion.h1>
          <motion.h1 className="text-[4rem] font-bold opacity-40 text-gray-300 m-0 p-0" initial={{ y: 100, opacity: 0}} whileInView={{ y: 0, opacity: 1}} transition={{duration: 0.9}} viewport={{once: true}}>Health</motion.h1>
        </div>
      <video className="w-full h-screen absolute z-[-1] object-cover" autoPlay muted loop src="/bgzh.mp4"/>
    </main>
  );
};

export default Hero;