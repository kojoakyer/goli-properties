
import './App.css'

import Home from './pages/Home'
import { Routes, Route } from "react-router";

import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer';
import { FaWhatsappSquare } from "react-icons/fa";
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';



function App() {
  

  return (
    <div className='relative'>
    <div className=' overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />

      </Routes>

      <Footer/>
    </div>
    <div className="fixed right-0 bottom-50 p-3" style={{zIndex:"6", left:'initial'}}>
      <a href='https://api.whatsapp.com/send?phone=233541131110' target='_blank' >
        <FaWhatsappSquare className='cursor-pointer text-green-500 font-bold  w-12 h-12' />
      </a>
    </div>
   </div>
    
  )
}

export default App
