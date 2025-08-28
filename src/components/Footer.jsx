/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Career", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-900 text-gray-300 pt-16 pb-10"
    >
      <div className="section-container">
        {/* Top Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14"
        >
          {/* Brand Info */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            className="lg:col-span-4"
          >
            <div className="flex items-start gap-2 mb-6 cursor-pointer">
              <img
                className="w-56 h-14 object-contain"
                src="Goli_Logo_sm.png"
                alt="Goli Properties Logo"
              />
            </div>

            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base"
            >
              Goli Properties is a fully integrated, duly registered company
              specializing in high-quality residential property development,
              construction, management, and consultancy.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              className="flex gap-4"
            >
              {[
                { Icon: FaFacebookF, color: "hover:bg-blue-600" },
                { Icon: FaTwitter, color: "hover:bg-sky-400" },
                { Icon: FaLinkedinIn, color: "hover:bg-blue-700" },
              ].map(({ Icon, color }, i) => (
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors ${color} hover:text-white`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  variants={fadeIn("up", 0.2 * (index + 1))}
                >
                  <h3 className="text-lg font-semibold mb-4 text-white capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, i) => (
                      <motion.li
                        key={i}
                        variants={fadeIn("up", 0.1 * (i + 1))}
                      >
                        <motion.a
                          whileHover={{ x: 6 }}
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-700 mt-12 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <motion.p variants={fadeIn("right", 1.0)}>
              © {new Date().getFullYear()} Goli Properties & Investment. All
              rights reserved.
            </motion.p>
            <motion.p variants={fadeIn("left", 1.0)}>
              Built with ❤️ by <span className="text-white">Kojo Akyer</span>.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
