import React, { useState, useEffect } from 'react';
import { Card } from './components/ui/card';
import { MessageCircle, Shield, Globe, Heart, ArrowRight, Menu, X } from 'lucide-react';
import IconImage from './assets/Icon.png';

const LandingPage = () => {
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
    <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 min-h-screen">
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

      {/* Hero Section - 15% smaller components */}
      <section className="px-3 py-5 md:py-12 lg:py-14 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto -mt-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Unknown Chat Bot<br />Connect Freely
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl mb-5 md:mb-6">
            Connect with random people from around the world anonymously and safely. 
            No sign-up, no tracking, just instant conversations with complete privacy.
          </p>
          <div>
            <a
              href="https://t.me/unknwn_chat_bot"
              className="bg-white text-pink-600 px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-xs md:text-sm"
            >
              Start Chatting <ArrowRight className="ml-2" size={14} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Phone Frame - 15% smaller */}
            <div className="bg-white rounded-3xl p-2 shadow-xl w-[204px] md:w-[272px] h-[408px] md:h-[544px] relative overflow-hidden">
              <div className="relative z-10 p-2 md:p-3 h-full overflow-y-auto text-xs md:text-xs text-black bg-white bg-opacity-90 rounded-2xl">
                <div className="bg-gray-100 rounded-t-xl p-1 md:p-1.5 text-center">
                  <p className="font-semibold text-xs">Unknown Chat Bot</p>
                </div>
                <p className="text-gray-500 text-center my-1 md:my-1.5 text-xs">Connected to a stranger. Say hi!</p>
                <div className="space-y-1 md:space-y-1.5">
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">Hi there!</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">Hello! How are you?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">I'm good! Where are you from?</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">I'm from Japan, you?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">That's cool! I'm from Brazil</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">Awesome! What do you do?</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">I'm a student, studying design</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">That's interesting! I work in tech</div>
                  <div className="text-left bg-gray-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit text-xs">Nice! What kind of tech?</div>
                  <div className="text-right bg-purple-100 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-xl w-fit ml-auto text-xs">AI and machine learning!</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-10 h-10 md:w-14 md:h-14 bg-yellow-300 rounded-full opacity-60 blur-md"></div>
            <div className="absolute -bottom-5 -left-5 w-14 h-14 md:w-20 md:h-20 bg-blue-400 rounded-full opacity-60 blur-md"></div>
          </div>
        </div>
      </section>

      {/* Features Section - 15% smaller components */}
      <section id="features" className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Our Chat Bot?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Shield className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">100% Anonymous</h3>
              <p className="text-gray-600 text-sm">Chat without revealing your identity. No personal information is ever stored or shared.</p>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Globe className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Global Connections</h3>
              <p className="text-gray-600 text-sm">Meet people from around the world and learn about different cultures and perspectives.</p>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <Heart className="text-pink-500 mb-3" size={34} />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Safe Environment</h3>
              <p className="text-gray-600 text-sm">Our moderation tools ensure conversations remain respectful and appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 15% smaller components */}
      <section id="how-it-works" className="py-14 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Click "Start Chatting"</h3>
              <p className="text-gray-600 text-sm">Visit our Telegram bot through the link and press start.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Connected</h3>
              <p className="text-gray-600 text-sm">Our system will instantly match you with a random person.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start a Conversation</h3>
              <p className="text-gray-600 text-sm">Begin chatting anonymously and safely with your new connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics - 15% smaller components */}
      <section className="py-14 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-1">1k+</h3>
              <p className="text-lg">Active Users</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-1">10+</h3>
              <p className="text-lg">Countries</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-1">10k+</h3>
              <p className="text-lg">Daily Conversations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 15% smaller components */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"I've made friends from countries I never thought I'd connect with. This app breaks down barriers!"</p>
              <p className="font-semibold text-sm">- Alex, 23</p>
            </Card>
            
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"The anonymity makes it so easy to be myself. I love the random connections and interesting conversations."</p>
              <p className="font-semibold text-sm">- Sarah, 28</p>
            </Card>
            
            <Card className="p-5">
              <p className="text-gray-600 mb-3 text-sm">"As someone who's shy in person, this bot has helped me practice my social skills in a comfortable environment."</p>
              <p className="font-semibold text-sm">- Michael, 19</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - 15% smaller components */}
      <section id="faq" className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Is it really anonymous?</h3>
              <p className="text-gray-600 text-sm">Yes, we don't collect any personal information. Your identity remains completely private.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Can I block someone?</h3>
              <p className="text-gray-600 text-sm">Absolutely. You can end any conversation instantly and never be matched with that person again.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Is there moderation?</h3>
              <p className="text-gray-600 text-sm">Yes, we have automated systems and user reporting to keep the environment safe and respectful.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-1.5 text-gray-800">Do I need to create an account?</h3>
              <p className="text-gray-600 text-sm">No account needed. Just open the bot in Telegram and start chatting immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 15% smaller components */}
      <section className="py-14 px-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Ready to Meet Someone New?</h2>
          <p className="text-lg mb-6">Join thousands of people making meaningful connections every day.</p>
          <a
            href="https://t.me/unknwn_chat_bot"
            className="bg-white text-pink-600 px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-base"
          >
            Start Chatting Now <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* Footer - 15% smaller components */}
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
    </div>
  );
};

export default LandingPage;