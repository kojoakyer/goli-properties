import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PurposeSection from '../components/PurposeSection'
import FeaturesSection from '../components/FeatureSection'
import ScheduleSection from '../components/ScheduleSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import AvailableLands from '../components/AvailableLands'


const tabs = [
  {
    label:"AFIENYA",
    content: "The name itself, Grace City, holds a special meaning as it represents a connection of diasporas.By purchasing a plot at Grace City, clients not only get to enjoy the breathtaking surroundings, but also become part of a community that celebrates and embraces the diverse heritage and cultural connections. It’s an opportunity to be a part of a vibrant and inclusive community.",
    price: "GHS 150,000 / plot",
    images: [
      {
        id: 1,
       img: "AFI.jpg"
      },
      {
        id: 2,
        img:"SH.jpeg"
      },
      {
        id: 3,
       img: "PRAM.jpeg"
      }
    ]
  },
  {
    label:"PRAMPRAM",
    content: "Imagine waking up to stunning vistas every morning and enjoying the tranquility of nature right at your doorstep.Purchasing a plot at “The View” offers you the opportunity to create your dream home in a picturesque setting. Whether you’re looking for a peaceful retreat or a place to build your forever home, “The View” has it all. Don’t miss out on this chance to own a piece of paradise! ",
    price: "GHS 350,000 / plot",
    // images:["PRAM.jpeg","AFI.jpg","SH.jpeg"]
      images: [
      {
        id: 1,
       img: "AFI.jpg"
      },
      {
        id: 2,
        img:"SH.jpeg"
      },
      {
        id: 3,
       img: "PRAM.jpeg"
      }
    ]
  },
  {
    label:"SHAI HILLS",
    content: " “Blackstar” is a powerful term that reminds us of the prestigious heroes of Africa and the incredible achievements they’ve made for the continent.By purchasing a plot at Blackstar Village, clients not only get to enjoy the beauty of the surroundings, but also become part of a community that seeks to connect Africa and contribute to its growth. It’s an opportunity to be a part of something bigger and make a positive impact.",
    price: "GHS 100,000 / plot",
      images: [
      {
        id: 1,
       img: "AFI.jpg"
      },
      {
        id: 2,
        img:"SH.jpeg"
      },
      {
        id: 3,
       img: "PRAM.jpeg"
      }
    ]
    // images:["SH.jpeg","SH.jpeg","PRAM.jpeg","AFI.jpg"]
  },
]


const Home = () => {
  return (
    
    <main className=' overflow-hidden'>
        <div>
          <Hero/>
          <PurposeSection/>
          <FeaturesSection/>
          <ScheduleSection/>
          <ServicesSection/>
          <AvailableLands
            tabs={tabs}
            defaultActiveIndex={0}
            onTabChange={(index)=> console.log(index)}
            customesStyle={{
              activeTab : {backgroundColor : '#3171DE', color:"white"},
              header:{borderBottom:'2px solid #3171DE'}
          }}
          />
          <TestimonialsSection/>
        </div>
    </main>
  )
}

export default Home