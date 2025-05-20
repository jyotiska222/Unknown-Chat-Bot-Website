import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import IconImage from '../assets/Icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
      
      // Close dropdown when clicking outside
      if (activeDropdown && !e.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen, activeDropdown]);

  // Close menu on window resize (to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation - Enhanced version */}
      <nav 
        className={`
          px-4 py-4 md:py-3 md:px-8 lg:px-16 xl:px-24 
          flex justify-between items-center 
          sticky top-0 z-50 
          transition-all duration-300
          ${scrolled ? 'bg-pink-600 bg-opacity-95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center space-x-2">
            <img src={IconImage} alt="UC" className="w-9 h-8" />
          <span className="text-white font-bold text-lg">Unknown Chat Bot</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Main navigation links */}
          <div className="flex space-x-8">
            <a 
              href="#features" 
              className="text-white hover:text-pink-200 transition text-sm font-medium px-1 py-1 border-b-2 border-transparent hover:border-pink-300"
            >
              Features
            </a>
            
            {/* Dropdown example */}
            <div className="dropdown-container relative">
              <button 
                className="text-white hover:text-pink-200 transition text-sm font-medium flex items-center space-x-1 px-1 py-1 border-b-2 border-transparent hover:border-pink-300"
                onClick={() => toggleDropdown('resources')}
              >
                <span>Resources</span>
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                  <a href="#documentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50">Documentation</a>
                  <a href="#tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50">Tutorials</a>
                  <a href="#api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50">API References</a>
                </div>
              )}
            </div>
            
            <a 
              href="#how-it-works" 
              className="text-white hover:text-pink-200 transition text-sm font-medium px-1 py-1 border-b-2 border-transparent hover:border-pink-300"
            >
              How It Works
            </a>
            
            <a 
              href="#faq" 
              className="text-white hover:text-pink-200 transition text-sm font-medium px-1 py-1 border-b-2 border-transparent hover:border-pink-300"
            >
              FAQ
            </a>
          </div>
          
          {/* Call to action button */}
          <a 
            href="#get-started" 
            className="bg-white text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-md hover:bg-pink-500 hover:bg-opacity-30 transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      
      {/* Enhanced Mobile Menu with smooth transitions */}
      <div 
        className={`
          mobile-menu md:hidden fixed top-[61px] left-0 right-0 bg-pink-600 bg-opacity-95 backdrop-blur-lg shadow-lg z-40
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col p-4 space-y-3">
          <a 
            href="#features" 
            className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-3 rounded-md transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <span className="font-medium">Features</span>
          </a>
          
          {/* Mobile dropdown */}
          <div className="flex flex-col">
            <button 
              className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-3 rounded-md transition-colors flex items-center justify-between"
              onClick={() => toggleDropdown('mobile-resources')}
            >
              <span className="font-medium">Resources</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${activeDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {activeDropdown === 'mobile-resources' && (
              <div className="flex flex-col pl-4 space-y-1 mt-1 animate-fadeIn">
                <a href="#documentation" className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-2 rounded-md transition-colors" onClick={toggleMenu}>
                  Documentation
                </a>
                <a href="#tutorials" className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-2 rounded-md transition-colors" onClick={toggleMenu}>
                  Tutorials
                </a>
                <a href="#api" className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-2 rounded-md transition-colors" onClick={toggleMenu}>
                  API References
                </a>
              </div>
            )}
          </div>
          
          <a 
            href="#how-it-works" 
            className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-3 rounded-md transition-colors flex items-center"
            onClick={toggleMenu}
          >
            <span className="font-medium">How It Works</span>
          </a>
          
          <a 
            href="#faq" 
            className="text-white hover:bg-pink-500 hover:bg-opacity-30 p-3 rounded-md transition-colors flex items-center" 
            onClick={toggleMenu}
          >
            <span className="font-medium">FAQ</span>
          </a>
          
          <div className="pt-2">
            <a 
              href="#get-started" 
              className="bg-white text-pink-600 hover:bg-pink-100 p-3 rounded-md text-center font-medium block transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu (optional) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden animate-fadeIn"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;