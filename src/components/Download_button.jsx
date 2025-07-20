import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Download_button = () => {
  return (
    <a
      href="/Resume.pdf"
      download="Resume.pdf"
     className="mt-6 bg-[#06D6A0] text-white px-3 py-2 rounded hover:bg-black transition-transform duration-200 ease-in-out transform hover:scale-105 flex items-center gap-1 shadow-md"

    >
      <FaDownload size={12} />
      <h3 className="text-m">Download resume</h3>
    </a>
  );
}

export default Download_button;
