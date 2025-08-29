/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "I have had great interactions to date with Danny and the team from Royal Kingdom Estate. Their customer services are on point and set them apart from other developers. The most important aspect of my experience is the established element of trust; that I am working with a reputable, honest and highly skilled group of individuals.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "I always wanted land, and I wasn’t waiting for America to give me 40 acres and a mule. I’m ready to reclaim my own land in the motherland, that has always been my vision. While searching, I was lucky to come across RKE who have become family and business partners. They do most of the leg work for me while protecting my vision and interests. God definitely connected me. I did my due diligence and everything looked legit. I am now a proud land owner at Blackstar village.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "I reached out to RKE last year because I wanted to purchase some plots. We did get the plots, it was an amazing process from start to finish. They answered all my questions, put me in contact with the right people, and also installed confidence in me with regards to purchasing property in Ghana. I’m ready to begin my building process and I have all my documents intact. The professionalism and responsiveness from the whole team made my experience with them wonderful.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I am relocating up in Aburi with Royal Kingdom Estate! And I’m telling you this is the place to be! The greenery, the fresh air, and the people there are so kind! I was in Ghana for over a month looking all over for land, and of course I had to be cautious. I saw some lands in capecoast that I almost got but my daughter told me about RKE. When I stepped a foot at Grace City phase 4, I knew that’s where I wanted to be. And I trust them. My family and I got 12 plots and we’re looking forward to building.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I reached out to RKE last year because I wanted to purchase some plots. We did get the plots, it was an amazing process from start to finish. They answered all my questions, put me in contact with the right people, and also installed confidence in me with regards to purchasing property in Ghana. I’m ready to begin my building process and I have all my documents intact. The professionalism and responsiveness from the whole team made my experience with them wonderful.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "I am relocating up in Aburi with Royal Kingdom Estate! And I’m telling you this is the place to be! The greenery, the fresh air, and the people there are so kind! I was in Ghana for over a month looking all over for land, and of course I had to be cautious. I saw some lands in capecoast that I almost got but my daughter told me about RKE. When I stepped a foot at Grace City phase 4, I knew that’s where I wanted to be. And I trust them. My family and I got 12 plots and we’re looking forward to building.",
  },
];

const TestimonialsSection = () => {
  return (
    <motion.section 
      id="testimonials" 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="relative py-16 px-4  mx-auto"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-white [background-image:radial-gradient(#d1d5db_2px,transparent_2px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="relative text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Our Clients Are Saying
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Stories from satisfied homeowners.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative "
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col border border-gray-100"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-blue-100 shadow-sm"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-blue-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3 text-gray-800"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600 leading-relaxed"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors bg-white shadow-md"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors bg-white shadow-md"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
