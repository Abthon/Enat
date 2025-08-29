"use client";

import Link from "next/link";
import { useState } from "react";

export default function StickyNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50" style={{ width: '237px', height: '50px', borderRadius: '60px' }}>
      <div className="bg-red-500 border-blue-500 p-4 backdrop-blur-md bg-opacity-95 flex items-center justify-between p-2 rounded-full" style={{ padding: '8px' }}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="text-white font-bold text-sm">EB</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-white hover:text-red-100 transition-colors duration-200 font-montserrat font-normal text-xs leading-none"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-red-100 transition-colors duration-200 font-montserrat font-normal text-xs leading-none"
          >
            Goals
          </Link>
        </div>

        {/* Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-opacity-20 rounded-[30px] flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 border w-[34px] h-[34px]"
        >
          <div className="w-3 h-3 flex flex-col justify-center space-y-1">
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            {/*<div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>*/}
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-red-500 bg-opacity-95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-white hover:text-red-100 transition-colors duration-200 font-montserrat font-normal text-xs leading-none py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-red-100 transition-colors duration-200 font-montserrat font-normal text-xs leading-none py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Goals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}