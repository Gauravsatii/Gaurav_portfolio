import React, { useState } from 'react'

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {props.value === "navbar" ? (
        <div className="text-white sticky top-0 w-full h-[8vh] flex justify-between items-center px-10 py-3 bg-emerald-500 shadow z-10">

          {/* Left Side - Brand */}
          <h3 className="text-lg font-semibold">{props.name}</h3>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center justify-center gap-7'>
            <a href="#home" className="hover:text-gray-200 transition duration-300">Home</a>
            <a href="#about" className="hover:text-gray-200 transition duration-300">About</a>
            <a href="#education" className="hover:text-gray-200 transition duration-300">Education</a>
            <a href="#projects" className="hover:text-gray-200 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-gray-200 transition duration-300">Contact</a>
          </div>

          {/* Hamburger Icon (Visible on Mobile) */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          </div>

          {/* Mobile Menu with Transitions */}
          <div className={`absolute top-[8vh] left-0 w-full bg-emerald-500 flex flex-col items-center py-5 gap-5 md:hidden transform transition-all duration-300 origin-top ${
            menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}>
            <a href="#home" onClick={toggleMenu} className="transition duration-300">Home</a>
            <a href="#about" onClick={toggleMenu} className="transition duration-300">About</a>
            <a href="#education" onClick={toggleMenu} className="transition duration-300">Education</a>
            <a href="#projects" onClick={toggleMenu} className="transition duration-300">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="transition duration-300">Contact</a>
          </div>

        </div>
      ) : (
        <div className="text-white sticky top-0 w-full h-[8vh] flex justify-between items-center px-10 py-3 bg-emerald-500 shadow z-10">
          <h3 className="text-lg font-semibold">{props.name}</h3>
        </div>
      )}
    </>
  )
}

export default Navbar
