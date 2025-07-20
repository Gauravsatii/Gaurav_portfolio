import React from 'react';
import Project_card from './Project_card';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl mt-10 text-center mb-5"
        style={{ color: 'rgba(35, 33, 33, 1)', fontFamily: 'Literata, serif', fontWeight: 500 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className='flex flex-col md:flex-row items-center justify-center gap-5 w-full'
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
      >
        {[
          { name: "Expense Tracker", description: "A full stack Expense Tracker that allows users to track expenses", date: "2025-01-10 - 2025-03-01", image: "/expense_tracker.png"},
          { name: "Matra-Shishu app", description: "A medicare platform for rural-pregnant women", date: "2025-03-05 - 08-03-2025", image: "/medicare.png" },
          { name: "Master-Slave Data Structure", description: "Hybrid Master Slave data structure", date: "2020-07-15-ongoing", image: "/dataStructure.png" },
        ].map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Project_card
              name={project.name}
              description={project.description}
              date={project.date}
              image={project.image}
              code_link=""
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
