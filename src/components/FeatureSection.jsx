/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "Discover everything you need to make your dream home a reality."
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "We help you refine the details and move closer to your dream home."
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Our team executes with speed and precision to deliver results."
    }
  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Section Header */}
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          How can we help you?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 text-lg"
        >
          Making Real Estate <span className="font-semibold text-blue-600">Simple</span> and <span className="font-semibold text-orange-500">Seamless</span>.
        </motion.p>
      </motion.div>
      
      {/* Features Grid */}
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center"
          >
            {/* Icon Circle */}
            <div 
              className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center text-4xl shadow-md`}
              style={{ 
                background: index === 0 
                  ? 'linear-gradient(135deg, #F1EFFD, #E0DCFA)' 
                  : index === 1 
                  ? 'linear-gradient(135deg, #FFE7E7, #FFD6D6)' 
                  : 'linear-gradient(135deg, #FFF3E4, #FFE2C7)'
              }}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-16"
      >
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
        >
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/40 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default FeaturesSection;
