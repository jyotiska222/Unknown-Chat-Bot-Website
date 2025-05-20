import React from 'react';
import IconImage from '../assets/Icon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-7 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={IconImage} alt="Icon" className="mr-2 w-5 h-5" />
            <span className="font-bold text-lg">Unknown Chat Bot</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-300 transition text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300 transition text-sm">Terms of Service</a>
            <a href="#" className="hover:text-pink-300 transition text-sm">Contact</a>
          </div>
        </div>
        
        <div className="mt-5 mb-3 text-gray-400 text-xs max-w-4xl mx-auto text-center">
          <p>Disclaimer: While we value your privacy and employ end-to-end encryption for all conversations, 
            chats may be monitored by administrators or authorities if suspicious activity is detected. 
            Illegal content or behavior will not be tolerated and may be reported to relevant authorities.</p>
        </div>
        
        <div className="mt-5 text-center md:text-left text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Unknown Chat Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 