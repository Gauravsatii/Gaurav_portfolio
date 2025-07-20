import React from 'react'
import profile from '../assets/profile.jpg';
import Download_button from './Download_button'
import Profile_navigator from './Profile_navigator';
import { motion } from 'framer-motion';
import { FaAnglesDown } from "react-icons/fa6";
const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="bg-white-800 h-[80vh] w-full flex justify-center items-center flex-col"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-28 sm:w-40 md:w-48 aspect-square p-4 rounded-full"
      >
        <img src={profile} alt="" className="w-full h-full object-cover rounded-full" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl mt-5"
        style={{ color: 'rgba(35, 33, 33, 1)', fontFamily: 'Literata, serif', fontWeight: 500 }}
      >
        Gaurav
      </motion.h1>

      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-5 text-xl font-bebas"
        style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 26, fontWeight: 100, color: '#049f75ff' }}
      >
        THINK &nbsp; DESIGN &nbsp; CODE &nbsp; OPTIMISE
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Download_button />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <Profile_navigator />
      </motion.div>
      <motion.h2
  animate={{
    y: [0,-10, 0, 10, 0],  // Up -> Center -> Down -> Center
  }}
  transition={{
    duration: 2,
    delay: 1,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
  className='flex items-center justify-center mt-20 gap-2 text-[#00000066]'
  style={{ fontFamily: 'poppins' }}
>
  Scroll <FaAnglesDown className='text-[#00000066]' />
</motion.h2>

    </motion.div>


  )
}

export default Home;
