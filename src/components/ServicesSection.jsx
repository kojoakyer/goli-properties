/* eslint-disable no-unused-vars */
import scheduleImage from '../assets/whatwedo.jpg'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    { description: "Land Acquisition" },
    { description: "General Construction" },
    { description: "Facilities Management" },
    { description: "Project Management" },
    { description: "Architectural Engineering" }
  ]

  return (
    <motion.section 
      id="services"
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-6 py-20 md:py-28"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">
        
        {/* Left Content */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold tracking-wide uppercase"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-4xl md:text-5xl font-extrabold text-navy-900 mt-3 mb-6 leading-tight"
          >
            What We Offer
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 text-lg leading-relaxed mb-10"
          >
            We provide seamless property solutions — from land acquisition and 
            construction to rentals and investment opportunities. Our transparent 
            processes and personalized guidance ensure you find the perfect place 
            to call home or grow your portfolio.
          </motion.p>
          
          <motion.ul className="grid gap-4 mb-10">
            {services.map((service, index) => (
              <motion.li 
                key={index}
                variants={fadeIn('up', 0.2 * (index + 1))}
                whileHover={{ scale: 1.05, x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 text-gray-700 font-medium p-3 rounded-lg cursor-pointer hover:bg-orange-50 shadow-sm hover:shadow-md transition-all"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                {service.description}
              </motion.li>
            ))}
          </motion.ul>
          
          {/* <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all"
          >
            Explore more services
            <motion.svg 
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </motion.a> */}
        </motion.div>

        {/* Right Image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="Services illustration" 
            className="w-full h-auto rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default ServicesSection
