import React from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuEarth } from "react-icons/lu";
import { FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className='bg-white h-[50vh] w-full flex-col md:flex-row flex justify-center md:mt-[10vh] mt-[30vh] mb-[33vh] gap-[10vw]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Contact Form Section */}
      <motion.div
        className='flex justify-center items-center flex-col'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="flex text-3xl md:text-5xl mt-5 gap-2"
            style={{ color: 'rgba(35, 33, 33, 0.99)', fontFamily: 'Assistant', fontWeight: 500 }}>
          <MdOutlineMarkEmailUnread className='text-emerald-500' />Get in Touch!
        </h1>

        <form
          action=""
          style={{ boxShadow: '0 2px 6px rgba(11, 224, 156, 0.5)' }}
          className='h-[50vh] border-2 border-emerald-100 mt-5 px-4 py-5 flex justify-center align-center flex-col gap-5 w-[50vh] flex items-center justify-center'
        >
          <input
            type="email"
            className='h-[7vh] w-[40vh] border-2 border-black-300'
            placeholder='Enter your email here'
          />
          <textarea
            className="border-2 border-black w-[40vh]"
            name="user_message"
            rows="5"
            placeholder='Enter your text here'
          ></textarea>
          <button
            className="bg-emerald-500 text-white w-40 rounded-full h-[6vh] hover:scale-105 duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Connect-via Section */}
      <motion.div
        className='flex flex-col items-center'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1
          className="flex text-3xl md:text-5xl mt-5 gap-2"
          style={{ color: 'rgba(35, 33, 33, 0.99)', fontFamily: 'Assistant', fontWeight: 500 }}
        >
          <LuEarth className='text-emerald-500' />Connect-via
        </h1>

        <div className='gap-5 flex mt-10'>
          {/* Icons retain existing hover animations */}
          <a href="tel:+91 7818037130"
             className="h-10 w-10 bg-emerald-200 rounded-full inline-flex items-center justify-center text-black hover:-translate-y-1 duration-200 ease-in-out">
            <FiPhoneCall className="text-emerald-800" size={24} />
          </a>
          <a href="mailto:satigaurav809@gmail.com"
             className="h-10 w-10 bg-emerald-200 rounded-full inline-flex items-center justify-center text-black hover:-translate-y-1 duration-200 ease-in-out">
            <MdOutlineMarkEmailUnread className="text-emerald-800" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gaurav-sati-124a05307/"
             className="h-10 w-10 bg-emerald-200 rounded-full inline-flex items-center justify-center text-black hover:-translate-y-1 duration-200 ease-in-out">
            <FiLinkedin className="text-emerald-800" size={24} />
          </a>
          <a href="https://wa.me/7818037130"
             className="h-10 w-10 bg-emerald-200 rounded-full inline-flex items-center justify-center text-black hover:-translate-y-1 duration-200 ease-in-out">
            <PiWhatsappLogo className="text-emerald-800" size={24} />
          </a>
        </div>

        <h2 className='text-l mt-10 flex gap-2' style={{ fontFamily: 'poppins' }}>
          <FaCode className='text-emerald-500' size={28} />Developed by Gaurav.
        </h2>
        <h2 className='text-md mt-2' style={{ fontFamily: 'poppins' }}>All Rights Reserved</h2>
      </motion.div>
    </motion.div>
  )
}

export default Footer;
