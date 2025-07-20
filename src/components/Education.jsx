import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl mt-10 text-center mb-5"
        style={{ color: 'rgba(35, 33, 33, 1)', fontFamily: 'Literata, serif', fontWeight: 500 }}
      >
        Education
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center w-full gap-5"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
      >
        {[ // array of props to simplify animation loop
          { degree: "Undergraduation", institution: "Graphic Era Hill University", year: "2022-2026", cgpa: "8/10", location: "Bhimtal ,Uttarakhand" },
          { degree: "Intermediate", institution: "Universal Senior Secondary School", year: "2021-2022", percentage: "96%", location: "Haldwani , Uttarakhand" },
          { degree: "High School", institution: "Universal Senior Secondary School", year: "2019-2020", percentage: "95.2%", location: "Haldwani , Uttarakhand" },
        ].map((props, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card {...props} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default About;
