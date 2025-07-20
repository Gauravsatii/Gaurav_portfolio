import React from 'react'
import { DiCode } from "react-icons/di";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className='w-full flex justify-center items-center flex-col'
    >
       <motion.h1 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         viewport={{ once: true }}
         className="text-3xl md:text-5xl mt-10 text-center mb-5"
         style={{ color: 'rgba(35, 33, 33, 1)', fontFamily: 'Literata, serif', fontWeight: 500 }}
       >
         About-me
       </motion.h1>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='w-[50vh] md:w-[80vh] border-1 border-emerald-500 px-6 py-10'
        style={{ boxShadow: '3px 3px 10px rgba(85, 255, 201, 0.5)' }}
      >

       <motion.h1 
         initial={{ x: -20, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.6 }}
         viewport={{ once: true }}
         className='text-4xl'
         style={{ fontFamily:'poppins' }}
       >
         Hey! I'm <span className="text-emerald-800" style={{ fontFamily:'Literata' }}>Gaurav</span>
       </motion.h1>
       
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.8 }}
         viewport={{ once: true }}
         className='flex gap-2 mt-5'
       >
        <p className='bg-[#06D6A0] text-white rounded-full h-2vh w-[17vh] flex items-center justify-center'>Problem Solver</p>
        <p className='bg-[#06D6A0] text-white rounded-full h-2vh w-[12vh] flex items-center justify-center'>Tech Geek</p>
        <p className='bg-[#06D6A0] text-white rounded-full h-2vh w-[10vh] flex items-center justify-center'>Creative</p>
       </motion.div>

       {/* Apply same pattern below */}
       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.0 }}
         viewport={{ once: true }}
         className='text-0.8xl mt-6'
         style={{ fontFamily:'poppins' }}
       >
         A final year BTech CSE student passionate about coding things that matter. I enjoy creating practical solutions that drive real impact.
       </motion.h2>

       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.2 }}
         viewport={{ once: true }}
         className='text-0.8xl mt-6'
         style={{ fontFamily:'poppins' }}
       >
         I’m an efficient problem solver with a strong interest in full-stack development, passionate about building practical solutions across both frontend and backend technologies.
       </motion.h2>

       <motion.h1 
         initial={{ x: 20, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.4 }}
         viewport={{ once: true }}
         className='flex gap-2 text-2xl mt-10'
         style={{ fontFamily:'poppins' }}
       >
         Things I'm <span className="text-emerald-500" style={{ fontFamily:'Literata' }}>Good</span> at.
         <DiCode size={35} className="text-emerald-500" />
       </motion.h1>

       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.6 }}
         viewport={{ once: true }}
         className='text-md'
       >
         Frontend Development, Backend Development, Data Structures & Algorithms
       </motion.h2>

       <motion.h1 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 1.8 }}
         viewport={{ once: true }}
         className='flex text-2xl mt-10'
         style={{ fontFamily:'poppins' }}
       >
         Programming Languages & Tech Stack I use.
       </motion.h1>

       <motion.h2 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 2.0 }}
         viewport={{ once: true }}
         className='mt-2'
       >
         C++ , HTML , CSS , JAVASCRIPT , NodeJS , ReactJS , MongoDB , Git , Github 
       </motion.h2>

      </motion.div>
    </motion.div>
  )
}

export default About;
