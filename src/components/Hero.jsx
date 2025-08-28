/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import myVideo from '../assets/Road_Junction.mp4';

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the counter section is visible
    triggerOnce: false,
  });

  // Start counting when the section is in view
  if (inView && !counterOn) setCounterOn(true);
  if (!inView && counterOn) setCounterOn(false);

  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          src={myVideo} 
          autoPlay 
          muted 
          loop 
          className="h-full w-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10"></div>
      </div>

      {/* Content */}
      <div className="absolute left-1/2 top-35 flex flex-col items-center text-center 
                      -translate-x-1/2 px-4 sm:px-6 md:px-8 space-y-6 w-full max-w-5xl">

        {/* Build With Us Badge */}
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full 
                          hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Build With Us</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-bold leading-snug sm:leading-tight max-w-4xl px-2 text-balance"
        >
          <span className="text-gray-50">We Help Create </span>
          <span className="text-blue-600 relative inline-block">
            Your Dream Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
          <span className="text-gray-50"> And Many More</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl 
                     mt-2 max-w-3xl px-4"
        >
          At Goli Properties, we provide genuine, litigation-free residential, 
          commercial, and industrial lands at affordable prices.
        </motion.p>

        {/* Counters */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 text-center">
          {/* Lands Counter */}
          <div className="flex flex-col items-center">
            <motion.h5 className="text-3xl sm:text-5xl font-bold flex items-center text-blue-300">
              {counterOn && <CountUp start={0} end={1000} duration={3} />}<span className="ml-1">+</span>
            </motion.h5>
            <h6 className="text-xs sm:text-lg text-gray-50">Lands</h6>
          </div>

          {/* Clients Counter */}
          <div className="flex flex-col items-center">
            <motion.h5 className="text-3xl sm:text-5xl font-bold flex items-center text-blue-300">
              {counterOn && <CountUp start={0} end={500} duration={3} />}<span className="ml-1">+</span>
            </motion.h5>
            <h6 className="text-xs sm:text-lg text-gray-50">Happy Clients</h6>
          </div>

          {/* Projects Completed Counter */}
          <div className="flex flex-col items-center">
            <motion.h5 className="text-3xl sm:text-5xl font-bold flex items-center text-blue-300">
              {counterOn && <CountUp start={0} end={250} duration={3} />}<span className="ml-1">+</span>
            </motion.h5>
            <h6 className="text-xs sm:text-lg text-gray-50">Projects Completed</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
