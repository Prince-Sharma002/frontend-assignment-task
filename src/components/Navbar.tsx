'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" mx-10 mx-auto fixed w-full top-0 z-50 ">
      <div className="bg-slate-700 mt-4 border-1  border-slate-500 rounded-2xl max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-white hover:text-violet-400 transition-colors flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="2" className="fill-[#6D28D9]"/>
                <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="white"/>
              </svg>
              SimplerTechnologies
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              href="/about" 
              className="border-1 border-slate-500 px-2 py-1 rounded-lg text-gray-300 hover:text-violet-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/users" 
              className="border-1 border-slate-500 px-2 py-1 rounded-lg text-gray-300 hover:text-violet-400 transition-colors font-medium"
            >
              Team
            </Link>
            <Link 
              href="/contact" 
              className="border-1 border-slate-500 px-2 py-1 rounded-lg text-gray-300 hover:text-violet-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/signup" 
              className="border-1 border-slate-500 px-2 py-1 rounded-lg bg-blue-600 text-white px-5 py-2 rounded hover:bg-violet-700 transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-violet-400 focus:outline-none focus:text-violet-400"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pb-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-300 hover:text-violet-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-violet-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/users"
              className="block text-gray-300 hover:text-violet-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-violet-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className="block bg-violet-600 text-white px-5 py-2 rounded hover:bg-violet-700 transition-colors font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
