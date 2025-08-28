/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
  {
    icon: "🟣", 
    title: "Shaping Property, Creating Impact",
    description: "We act with transparency and take full responsibility in delivering the highest standards in real estate."
  },
  {
    icon: "🔴", 
    title: "In Sync With Your Property Goals",
    description: "Every decision we make is guided by quality, ensuring your expectations are not just met but exceeded."
  }
];

const PurposeSection = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-12 items-start"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-sm tracking-widest text-blue-600 font-semibold mb-3"
            >
              OWN TODAY
            </motion.div>
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            >
              Your Trusted Partner <br className="hidden md:block"/> in Real Estate.
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="mt-4 text-gray-600 text-base md:w-4/5"
            >
              At Goli Properties, we go beyond transactions. We build lasting relationships, 
              helping you make confident decisions in real estate with clarity and ease.
            </motion.p>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-5"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md"
                >
                  <span className="text-2xl">{feature.icon}</span>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-lg md:text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PurposeSection
