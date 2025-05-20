import React, { useState } from 'react';
import { Card } from './components/ui/card';
import { MessageCircle, Shield, Globe, Heart, ArrowRight, Menu, X } from 'lucide-react';
import IconImage from './assets/Icon.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 min-h-screen">
      {/* Navigation */}
      <nav className="px-4 py-4 md:px-8 lg:px-16 flex justify-between items-center">
        <div className="flex items-center">
          <img src={IconImage} alt="Icon" className="mr-2 w-6 h-6" />
          <span className="text-white font-bold text-xl">Unknown Chat Bot</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-white hover:text-pink-100 transition">Features</a>
          <a href="#how-it-works" className="text-white hover:text-pink-100 transition">How It Works</a>
          <a href="#faq" className="text-white hover:text-pink-100 transition">FAQ</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-20 backdrop-blur-lg p-3 absolute z-50 w-full">
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#features" className="text-white hover:text-pink-100 transition" onClick={toggleMenu}>Features</a>
            <a href="#how-it-works" className="text-white hover:text-pink-100 transition" onClick={toggleMenu}>How It Works</a>
            <a href="#faq" className="text-white hover:text-pink-100 transition" onClick={toggleMenu}>FAQ</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-3 py-5 md:py-14 lg:py-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto -mt-10">
        <div 
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4"
          >
            Unknown Chat Bot<br />Connect Freely
          </h1>
          <p 
            className="text-white text-base md:text-lg max-w-xl mb-6 md:mb-8"
          >
            Connect with random people from around the world anonymously and safely. 
            No sign-up, no tracking, just instant conversations with complete privacy.
          </p>
          <div>
            <a
              href="https://t.me/unknwn_chat_bot"
              className="bg-white text-pink-600 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-sm md:text-base"
            >
              Start Chatting <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
        
        <div 
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="bg-white rounded-3xl p-2 shadow-xl w-[240px] md:w-[320px] h-[480px] md:h-[640px] relative overflow-hidden">
              <div className="relative z-10 p-3 md:p-4 h-full overflow-y-auto text-xs md:text-sm text-black bg-white bg-opacity-90 rounded-2xl">
                <div className="bg-gray-100 rounded-t-xl p-1.5 md:p-2 text-center">
                  <p className="font-semibold">Unknown Chat Bot</p>
                </div>
                <p className="text-gray-500 text-center my-1.5 md:my-2 text-xs">Connected to a stranger. Say hi!</p>
                <div className="space-y-1.5 md:space-y-2">
                  <div className="text-left bg-gray-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit">Hi there!</div>
                  <div className="text-right bg-purple-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit ml-auto">Hello! How are you?</div>
                  <div className="text-left bg-gray-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit">I'm good! Where are you from?</div>
                  <div className="text-right bg-purple-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit ml-auto">I'm from Japan, you?</div>
                  <div className="text-left bg-gray-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit">That's cool! I'm from Brazil</div>
                  <div className="text-right bg-purple-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit ml-auto">Awesome! What do you do?</div>
                  <div className="text-left bg-gray-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit">I'm a student, studying design</div>
                  <div className="text-right bg-purple-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit ml-auto">That's interesting! I work in tech</div>
                  <div className="text-left bg-gray-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit">Nice! What kind of tech?</div>
                  <div className="text-right bg-purple-100 px-2 py-1 md:px-3 md:py-1.5 rounded-xl w-fit ml-auto">AI and machine learning!</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-full opacity-60 blur-md"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 md:w-24 md:h-24 bg-blue-400 rounded-full opacity-60 blur-md"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our Chat Bot?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-pink-50 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform"
            >
              <Shield className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">100% Anonymous</h3>
              <p className="text-gray-600">Chat without revealing your identity. No personal information is ever stored or shared.</p>
            </div>
            
            <div 
              className="bg-pink-50 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform"
            >
              <Globe className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Connections</h3>
              <p className="text-gray-600">Meet people from around the world and learn about different cultures and perspectives.</p>
            </div>
            
            <div 
              className="bg-pink-50 p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform"
            >
              <Heart className="text-pink-500 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Safe Environment</h3>
              <p className="text-gray-600">Our moderation tools ensure conversations remain respectful and appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Click "Start Chatting"</h3>
              <p className="text-gray-600">Visit our Telegram bot through the link and press start.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Connected</h3>
              <p className="text-gray-600">Our system will instantly match you with a random person.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
              <p className="text-gray-600">Begin chatting anonymously and safely with your new connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">1k+</h3>
              <p className="text-xl">Active Users</p>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-xl">Countries</p>
            </div>
            
            <div>
              <h3 className="text-4xl font-bold mb-2">10k+</h3>
              <p className="text-xl">Daily Conversations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <p className="text-gray-600 mb-4">"I've made friends from countries I never thought I'd connect with. This app breaks down barriers!"</p>
              <p className="font-semibold">- Alex, 23</p>
            </Card>
            
            <Card className="p-6">
              <p className="text-gray-600 mb-4">"The anonymity makes it so easy to be myself. I love the random connections and interesting conversations."</p>
              <p className="font-semibold">- Sarah, 28</p>
            </Card>
            
            <Card className="p-6">
              <p className="text-gray-600 mb-4">"As someone who's shy in person, this bot has helped me practice my social skills in a comfortable environment."</p>
              <p className="font-semibold">- Michael, 19</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Is it really anonymous?</h3>
              <p className="text-gray-600">Yes, we don't collect any personal information. Your identity remains completely private.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I block someone?</h3>
              <p className="text-gray-600">Absolutely. You can end any conversation instantly and never be matched with that person again.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Is there moderation?</h3>
              <p className="text-gray-600">Yes, we have automated systems and user reporting to keep the environment safe and respectful.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Do I need to create an account?</h3>
              <p className="text-gray-600">No account needed. Just open the bot in Telegram and start chatting immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Someone New?</h2>
          <p className="text-xl mb-8">Join thousands of people making meaningful connections every day.</p>
          <a
            href="https://t.me/unknwn_chat_bot"
            className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-pink-100 transition inline-flex items-center text-lg"
          >
            Start Chatting Now <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={IconImage} alt="Icon" className="mr-2 w-6 h-6" />
              <span className="font-bold text-xl">Unknown Chat Bot</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-pink-300 transition">Terms of Service</a>
              <a href="#" className="hover:text-pink-300 transition">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 mb-4 text-gray-400 text-sm max-w-4xl mx-auto text-center">
            <p>Disclaimer: While we value your privacy and employ end-to-end encryption for all conversations, 
              chats may be monitored by administrators or authorities if suspicious activity is detected. 
              Illegal content or behavior will not be tolerated and may be reported to relevant authorities.</p>
          </div>
          
          <div className="mt-6 text-center md:text-left text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Unknown Chat Bot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;