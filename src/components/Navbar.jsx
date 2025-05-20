import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import IconImage from '../assets/Icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation - Optimized with transition effects */}
      <nav className={`px-4 py-3 md:px-8 lg:px-16 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-pink-600 bg-opacity-90 backdrop-blur-sm shadow-md' : ''}`}>
        <div className="flex items-center">
          <img src={IconImage} alt="Icon" className="mr-2 w-5 h-5" />
          <span className="text-white font-bold text-lg">Unknown Chat Bot</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-white hover:text-pink-100 transition text-sm">Features</a>
          <a href="#how-it-works" className="text-white hover:text-pink-100 transition text-sm">How It Works</a>
          <a href="#faq" className="text-white hover:text-pink-100 transition text-sm">FAQ</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1 rounded-md hover:bg-pink-600 hover:bg-opacity-50 transition" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      
      {/* Improved Mobile Menu with animation */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden bg-pink-600 bg-opacity-90 backdrop-blur-lg p-3 absolute z-40 w-full shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 text-sm">
            <a 
              href="#features" 
              className="text-white hover:bg-pink-500 hover:bg-opacity-50 p-2 rounded-md transition" 
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white hover:bg-pink-500 hover:bg-opacity-50 p-2 rounded-md transition" 
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-white hover:bg-pink-500 hover:bg-opacity-50 p-2 rounded-md transition" 
              onClick={toggleMenu}
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 