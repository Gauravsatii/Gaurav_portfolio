import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi'; 


const Profile_navigator = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-7">
      <a href="https://github.com/Gauravsatii/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200 ease-in-out overflow-hidden">
        <FaGithub size={24} className="text-gray-800 hover:text-black" />
      </a>
      <a href="https://www.linkedin.com/in/gaurav-sati-124a05307/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200 ease-in-out overflow-hidden">
        <FaLinkedin size={24} className="text-gray-800 hover:text-black" />
      </a>
      <a href="https://leetcode.com/u/Gaurav_Sati0512/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200 ease-in-out overflow-hidden">
        <FiCode size={24} className="text-gray-800 hover:text-black" />
      </a>
    </div>
  )
}

export default Profile_navigator
