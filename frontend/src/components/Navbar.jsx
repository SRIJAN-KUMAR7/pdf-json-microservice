import React, { useState } from 'react';

export default function Navbar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNavigation = (page, e) => {
    e.preventDefault();
    setPage(page);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-whitebg-gradient-to-br from-[#070b14] via-gray-900 to-black shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <a
            href="/"
            onClick={(e) => handleNavigation('home', e)}
            className="flex items-center space-x-2 focus:outline-none"
            aria-label="JsonifyPDF Home"
          >
            <span className="text-3xl font-mono font-bold text-gray-900 dark:text-white select-none drop-shadow-lg">
              <span>{'{'}</span>
              <span className="relative top-1">{'}'}</span>
            </span>
            <span className="self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
              Jsonify<span className='text-green-600'>PDF</span>
            </span>
          </a>
        </div>

        {/* Center: Navigation (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-medium text-gray-600 dark:text-gray-300">
          <a 
            href="/home" 
            onClick={(e) => handleNavigation('home', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Home
          </a>
          <a 
            href="/docs" 
            onClick={(e) => handleNavigation('docs', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Docs
          </a>
          <a 
            href="/contact" 
            onClick={(e) => handleNavigation('contact', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
           Contact
          </a>
        </div>
        
        {/* Right: Get Started + Hamburger */}
        <div className="flex items-center">
          <a
            href="/docs"
            onClick={(e) => handleNavigation('docs', e)}
            className="hidden md:block bg-gradient-to-r from-gray-900 to-green-600 hover:from-gray-800 hover:to-green-500 px-5 py-2 rounded-lg font-semibold text-white shadow focus:outline-none transition"
          >
            Get Started
          </a>
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ml-4"
            aria-label="Open navigation"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 pt-1 text-gray-600 dark:text-gray-200 font-medium backdrop-blur-lg rounded-bl-lg shadow-lg flex flex-col items-start space-y-4 transition-all duration-300 transform origin-top-right">
          <a 
            href="/home" 
            onClick={(e) => handleNavigation('home', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition w-full py-2"
          >
            Home
          </a>
          <a 
            href="/docs" 
            onClick={(e) => handleNavigation('docs', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition w-full py-2"
          >
            Docs
          </a>
          <a 
            href="/contact" 
            onClick={(e) => handleNavigation('contact', e)} 
            className="hover:text-gray-900 dark:hover:text-white transition w-full py-2"
          >
         Contact
          </a>
          <a
            href="/docs"
            onClick={(e) => handleNavigation('docs', e)}  
            className="bg-gradient-to-r from-gray-900 to-green-600 hover:from-gray-800 hover:to-green-500 px-5 py-2 rounded-lg font-semibold text-white shadow focus:outline-none transition w-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
