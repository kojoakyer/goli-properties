/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/properties", label: "Lands & Properties" },
    { href: "/contact-us", label: "Contact Us" },
  ]

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false) // scrolling down
      } else {
        setShowNavbar(true) // scrolling up
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Animation variants for mobile links
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  }

  return (
    <motion.nav 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      animate={showNavbar ? "show" : { y: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        
        {/* Logo */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <a href="/#home">
           <img 
            className="w-44 h-auto object-contain transition-transform hover:scale-105" 
            src="Goli_Logo_sm.png" 
            alt="Logo" 
          />
          </a>
         
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-7 w-7 text-gray-700" />
          ) : (
            <HiMenu className="h-7 w-7 text-gray-700" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div 
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium tracking-wide relative group
                ${activeLink === link.href ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 
                ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a 
          href="/contact-us"
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 text-sm font-medium transition-all shadow-sm hover:shadow-lg"
        >
          Get in touch
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  custom={index}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-base font-medium px-2 py-2 rounded-lg transition 
                    ${activeLink === link.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a 
                href="/contact-us"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all shadow-md"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
