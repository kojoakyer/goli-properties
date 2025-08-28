import scheduleImage from '../assets/about-img.jpg'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-20 md:py-28"
    >
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-between gap-16 md:gap-24">
        
        {/* Left side - Image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="About Goli Property" 
            className="w-full h-auto rounded-2xl shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          {/* Decorative overlay */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-100 rounded-full -z-10 blur-2xl opacity-50"></div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold tracking-wide uppercase"
          >
            Get to know us
          </motion.span>
          
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-4xl md:text-5xl font-extrabold text-navy-900 mt-4 mb-6 leading-snug"
          >
            We Are Goli Property <br/> & Investment Ltd
          </motion.h2>
          
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 text-lg leading-relaxed mb-8"
          >
            We are committed to delivering unmatched expertise, exceptional service, 
            and attention to detail in the real estate market across Ghana and beyond. 
            Whether it’s acquiring land, building your dream home, or investing on the 
            African continent — we turn visions into reality. <br/><br/>
            Construction may feel stressful to many, but to us at Royal Kingdom Estate, 
            it’s a labour of love. Your challenges inspire us to bring out our very best.
          </motion.p>
          
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="/about-us" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            Learn More
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
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleSection
