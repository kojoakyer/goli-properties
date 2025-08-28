/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { 
  HomeIcon, 
  Building2Icon, 
  WrenchIcon, 
  UsersIcon 
} from "lucide-react";
// import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Residential Development",
    description:
      "We design and develop modern, sustainable homes tailored for comfort, security, and long-term value.",
    icon: <HomeIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Commercial Projects",
    description:
      "From office spaces to retail complexes, we create high-quality developments that fuel business growth.",
    icon: <Building2Icon className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Construction & Consultancy",
    description:
      "We offer expert construction and project management services, ensuring projects are delivered on time and within budget.",
    icon: <WrenchIcon className="w-10 h-10 text-orange-600" />,
  },
  {
    title: "Property Management",
    description:
      "Our property management team provides full-service care, making sure your investments remain profitable and stress-free.",
    icon: <UsersIcon className="w-10 h-10 text-purple-600" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Goli Properties, we specialize in delivering world-class real
            estate solutions – from development and construction to management
            and consultancy.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * (index + 1))}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make Your Move?
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            Whether you're looking to invest, build, or manage your property,
            Goli Properties is here to make it seamless and successful.
          </p>
          {/* <Button
            size="lg"
            className="bg-white text-orange-600 font-semibold hover:bg-gray-100"
          >
            Contact Us Today
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
